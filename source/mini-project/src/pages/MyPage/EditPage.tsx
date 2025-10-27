import { useNavigate } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import BottomBar from "../../components/BottomBar/BottomBar";
import "./EditPage.css";

export default function EditPage() {
  const nav = useNavigate();
  const [profileImg, setProfileImg] = useState("/Mypage/default-profile.svg");
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // 🔹 localStorage에서 사용자 정보 불러오기
  const [userInfo, setUserInfo] = useState({
    name: "",
    birthDate: "",
    foreignerId: "",
    phone: "",
    email: "",
  });

  useEffect(() => {
    const storedInfo = {
      name: localStorage.getItem("name") || "",
      birthDate: localStorage.getItem("birthDate") || "",
      foreignerId: localStorage.getItem("foreignerId") || "",
      phone: localStorage.getItem("phone") || "",
      email: localStorage.getItem("email") || "",
    };
    setUserInfo(storedInfo);
  }, []);

  // 🔹 로그아웃 → 로그인 페이지로 이동
  const onLogout = () => {
    localStorage.clear();
    nav("/");
  };

  // 🔹 프로필 사진 변경
  const handlePhotoEditClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === "string") {
        setProfileImg(reader.result);
      }
    };
    reader.readAsDataURL(file);
  };

  const noop = () => {};

  return (
    <div className="edit-page">
      <Header title="내 정보 수정" />

      {/* 프로필 영역 */}
      <section className="edit-hero">
        <div className="avatar-wrap">
          <img className="avatar" src={profileImg} alt="프로필" />
          <img
            className="avatar-edit"
            src="/Mypage/photo-edit.svg"
            alt="사진 변경"
            onClick={handlePhotoEditClick}
          />
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
        </div>
      </section>

      {/* 정보 리스트 */}
      <div className="info-list">
        <button className="info-row" onClick={noop}>
          <div className="info-label">이름(생년월일)</div>
          <div className="info-value">
            {userInfo.name || "이름 없음"}{" "}
            {userInfo.birthDate && `(${userInfo.birthDate})`}
          </div>
          <img className="row-arrow" src="/arrow-gray.svg" alt="" />
        </button>
        <div className="divider" />

        <button className="info-row" onClick={noop}>
          <div className="info-label">외국인등록번호</div>
          <div className="info-value">
            {userInfo.foreignerId || "등록번호 없음"}
          </div>
          <img className="row-arrow" src="/arrow-gray.svg" alt="" />
        </button>
        <div className="divider" />

        <button className="info-row" onClick={noop}>
          <div className="info-label">휴대폰 번호</div>
          <div className="info-value">{userInfo.phone || "번호 없음"}</div>
          <img className="row-arrow" src="/arrow-gray.svg" alt="" />
        </button>
        <div className="divider" />

        <button className="info-row" onClick={noop}>
          <div className="info-label">이메일</div>
          <div className="info-value">{userInfo.email || "이메일 없음"}</div>
          <img className="row-arrow" src="/arrow-gray.svg" alt="" />
        </button>
        <div className="divider" />

        <button className="info-row" onClick={noop}>
          <div className="info-label">비밀번호 변경</div>
          <img className="row-arrow" src="/arrow-gray.svg" alt="" />
        </button>
        <div className="divider" />
      </div>

      {/* 로그아웃 */}
      <div className="logout-wrap">
        <button className="logout-btn" onClick={onLogout}>
          로그아웃
        </button>
      </div>

      <BottomBar />
    </div>
  );
}
