// src/pages/LoginPage/LoginPage.tsx
import "./LoginPage.css";
import ContinueButton from "../../components/Login/Button/ContinueButton";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const clearUsername = () => setUsername("");
  const clearPassword = () => setPassword("");

  const handleLogin = async () => {
    try {
      setErrorMsg("");

      // 로그인 요청
      const response = await axios.post("/api/users/login", null, {
        params: { username, password },
      });

      const user = response.data; 
      // 서버에서 반환 예시:
      // { username, name, birthDate, foreignerId, phone, email, accessToken, refreshToken }

      // localStorage에 로그인 정보 저장
      localStorage.setItem("username", user.username);
      localStorage.setItem("name", user.name);
      localStorage.setItem("birthDate", user.birthDate || "");
      localStorage.setItem("foreignerId", user.foreignerId || "");
      localStorage.setItem("phone", user.phone || "");
      localStorage.setItem("email", user.email || "");
      localStorage.setItem("accessToken", user.accessToken || "");
      localStorage.setItem("refreshToken", user.refreshToken || "");

      console.log("로그인 성공:", user);

      navigate("/home");
    } catch (error: any) {
      if (error.response) {
        setErrorMsg(error.response.data); // 서버 메시지 표시
      } else {
        setErrorMsg("로그인 중 오류가 발생했습니다.");
      }
    }
  };

  return (
    <div className="login-page">
      <div className="login-intro-section">
        <div className="logo-section">
          <img src="/Logo-splash.svg" alt="Logo" className="logo-image" />
        </div>
        <div className="login-title">
          <h1>WithIN을 시작해 보세요</h1>
        </div>
      </div>

      <div className="login-section">
        <div className="input-container">
          <input
            type="text"
            placeholder="아이디"
            className="login-input"
            value={username}
            onChange={handleUsernameChange}
          />
          {username && (
            <button
              className="login-close"
              onClick={clearUsername}
              type="button"
              aria-label="아이디 입력 삭제"
            >
              <img src="/login-close.svg" alt="삭제" />
            </button>
          )}
        </div>

        <div className="input-container">
          <input
            type="password"
            placeholder="비밀번호"
            className="login-input"
            value={password}
            onChange={handlePasswordChange}
          />
          {password && (
            <button
              className="login-close"
              onClick={clearPassword}
              type="button"
              aria-label="비밀번호 입력 삭제"
            >
              <img src="/login-close.svg" alt="삭제" />
            </button>
          )}
        </div>

        {errorMsg && <div className="error-msg">{errorMsg}</div>}

        <ContinueButton text="계속" onClick={handleLogin} />

        <div className="login-signup-section">
          <a href="#" className="login-link">아이디 찾기</a>
          <span className="separator">|</span>
          <a href="#" className="login-link">비밀번호 찾기</a>
          <span className="separator">|</span>
          <a href="/signup" className="login-link signup-link">회원가입</a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
