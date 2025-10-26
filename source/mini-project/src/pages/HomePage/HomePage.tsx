// 베타기간 동안 메일건의하기로 변경
import { useNavigate } from "react-router-dom";
import "./HomePage.css";
import BottomBar from "../../components/BottomBar/BottomBar";

export default function App() {
  const navigate = useNavigate();

  return (
    <div className="app">
      <div className="hero">

        <img className="bg-icon" src="/Home/BgIcon.png" alt="bg" />
        <div className="headline">
          <div className="subtitle">옆에서 차근차근 도와주는</div>
          <div className="title">산재 가이드, WithIN</div>
        </div>

         <a
          className="quick-link"
          href="https://www.iscfr.or.kr/"
          target="_blank"
          rel="noreferer"
        > 
          인천외국인종합지원센터 바로 가기
          <img className="vector2" src="/Home/Vector2.svg" alt="go" />
        </a>

        <div className="hero-spacing" />
      </div>

      <div className="content">
        💡 당신을 위한 산재 TIP
        <div className="tip-pill">산재 신청은 사고 발생 3일 이내가 좋아요!</div>

        <div className="photo-group">
          <img
            className="shadow-img"
            src="/Home/Home_Guide.svg"
            alt="산재 신청 가이드"
            onClick={() => navigate("/guide")}
          />
          <img
            className="shadow-img"
            src="/Home/Home_ExSearch.svg"
            alt="사례 검색"
            onClick={() => navigate("/cases")}
          />
          <img
            className="shadow-img"
            src="/Home/Home_HosSearch.svg"
            alt="의료기관 검색"
            onClick={() => navigate("/list")}
          />
        </div>
      </div>

      <BottomBar />
      <img
        className="global"
        src="/Home/language.svg"
        alt="언어번역"
        onClick={() => navigate("/lang")}
      />
    </div>
  );
}
