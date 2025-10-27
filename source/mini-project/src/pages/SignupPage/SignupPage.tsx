import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ContinueButton from "../../components/Login/Button/ContinueButton";
import { signup, checkUsername } from "../../api/api";
import "./SignupPage.css";

const stepConfig = [
  { title: "이름을 입력해 주세요", placeholder: "이름", field: "name" },
  { title: "아이디를 입력해 주세요", placeholder: "아이디", field: "username" }, // username으로 수정
  { title: "비밀번호를 입력해 주세요", placeholder: "비밀번호", field: "password", type: "password" },
  { title: "외국인등록번호를 입력해 주세요", placeholder: "외국인등록번호", field: "foreignerId" },
  { title: "생년월일을 입력해 주세요", placeholder: "YYYY-MM-DD", field: "birthDate" },
  { title: "휴대번호를 입력해 주세요", placeholder: "휴대번호", field: "phone" },
  { title: "이메일을 입력해 주세요", placeholder: "이메일", field: "email", type: "email" },
];

const SignupPage = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const [formData, setFormData] = useState({
    name: "",
    username: "", // userId → username
    password: "",
    foreignerId: "",
    birthDate: "",
    phone: "",
    email: "",
  });
  const [isUsernameVerified, setIsUsernameVerified] = useState(false);

  const currentConfig = stepConfig[currentStep];
  const isUsernameStep = currentStep === 1;

  // 입력 변경 처리
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [currentConfig.field]: e.target.value }));
    if (currentConfig.field === "username") setIsUsernameVerified(false);
  };

  // 아이디 중복확인
  const handleDuplicateCheck = async () => {
    const username = formData.username.trim();
    if (!username) return alert("아이디를 입력하세요.");

    try {
      const exists = await checkUsername(username); // true면 이미 있음
      console.log("✅ 아이디 중복확인 응답:", exists);

      if (!exists) {
        alert("사용 가능한 아이디입니다.");
        setIsUsernameVerified(true);
      } else {
        alert("이미 사용 중인 아이디입니다.");
        setIsUsernameVerified(false);
      }
    } catch (err) {
      console.error("❌ 아이디 중복확인 에러:", err);
      alert("서버 오류로 중복 확인 실패");
    }
  };

  // 계속 버튼 처리
  const handleContinue = async () => {
    if (isUsernameStep && !isUsernameVerified) {
      alert("아이디 중복 확인이 필요합니다.");
      return;
    }

    if (currentStep < stepConfig.length - 1) {
      setDirection("next");
      setCurrentStep((prev) => prev + 1);
    } else {
      try {
        const res = await signup(formData);
        console.log("회원가입 성공:", res);
        localStorage.setItem("username", formData.username);

        navigate("/home");
      } catch (err) {
        console.error("회원가입 실패:", err);
        alert("회원가입 실패: 서버 에러");
      }
    }
  };

  // 뒤로가기
  const handleBack = () => {
    if (currentStep > 0) {
      setDirection("prev");
      setCurrentStep((prev) => prev - 1);
    } else {
      navigate(-1);
    }
  };

  // 버튼 비활성화 조건
  const isContinueDisabled = () => {
    const value = formData[currentConfig.field as keyof typeof formData];
    if (isUsernameStep) return !value.trim() || !isUsernameVerified;
    return !value.trim();
  };

  return (
    <div className="signup-page">
      <div className="signup-page-header">
        <img src="/arrow-back.svg" alt="뒤로가기" className="arrow-back" onClick={handleBack} />
      </div>
      <div className="signup-page-content">
        <div key={currentStep} className={`signup-page-title-container ${direction}`}>
          <div className="signup-page-title">
            <h2>{currentConfig.title}</h2>
          </div>
          <div className="signup-input-container">
            {isUsernameStep ? (
              <div className="username-input-wrapper">
                <input
                  type="text"
                  placeholder="아이디"
                  className="signup-input username-input"
                  value={formData.username}
                  onChange={handleInputChange}
                />
                <button
                  className={`duplicate-check-btn ${isUsernameVerified ? "verified" : ""}`}
                  onClick={handleDuplicateCheck}
                  type="button"
                >
                  {isUsernameVerified ? "확인완료" : "중복 확인"}
                </button>
              </div>
            ) : (
              <input
                type={currentConfig.type || "text"}
                placeholder={currentConfig.placeholder}
                className="signup-input"
                value={formData[currentConfig.field as keyof typeof formData]}
                onChange={handleInputChange}
              />
            )}
          </div>
        </div>
        <div className="button-section">
          <ContinueButton
            text={currentStep === stepConfig.length - 1 ? "가입완료" : "계속"}
            onClick={handleContinue}
            disabled={isContinueDisabled()}
          />
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
