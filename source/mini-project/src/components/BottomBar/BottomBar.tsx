/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./BottomBar.css";

type Tab = "home" | "heart" | "favorite" | "mypage" | "profile";

export default function BottomBar() {
  const navigate = useNavigate();
  const location = useLocation();

  const getActiveTab = (): Tab => {
    if (location.pathname.startsWith("/home")) return "home";
    if (location.pathname.startsWith("/favorite")) return "favorite";
    if (location.pathname.startsWith("/mypage")) return "mypage";
    return "home"; // 기본값
  };

  const [activeTab, setActiveTab] = useState<Tab>(getActiveTab());

  useEffect(() => {
    setActiveTab(getActiveTab());
  }, [location]);

  const handleClick = (tab: Tab, path: string) => {
    setActiveTab(tab);
    navigate(path);
  };

  return (
    <nav className="bottom-bar" aria-label="primary">
      <img
        className="icon-home"
        src={activeTab === "home" ? "/Home/Home_On.svg" : "/Home/Home_Off.svg"}
        alt="home"
        onClick={() => handleClick("home", "/home")}
      />
      <img
        className="icon-heart"
        src={activeTab === "favorite" ? "/Home/Heart_On.svg" : "/Home/Heart_Off.svg"}
        alt="favorite"
        onClick={() => handleClick("favorite", "/favorite")}
      />
      <img
        className="icon-profile"
        src={activeTab === "mypage" ? "/Home/Profile_On.svg" : "/Home/Profile_Off.svg"}
        alt="mypage"
        onClick={() => handleClick("mypage", "/mypage")}
      />
    </nav>
  );
}
