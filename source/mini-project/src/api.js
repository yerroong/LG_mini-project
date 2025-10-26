import axios from "axios";

const API_BASE_URL = "http://localhost:8080/api";

// 회원가입
export const signup = async (userData) => {
  const res = await axios.post(`${API_BASE_URL}/signup`, userData, {
    withCredentials: true,
  });
  return res.data;
};

// 로그인
export const login = async (userData) => {
  const res = await axios.post(`${API_BASE_URL}/login`, userData, {
    withCredentials: true,
  });
  return res.data;
};

// 즐겨찾기 추가
export const addFavorite = async (favoriteData) => {
  const res = await axios.post(`${API_BASE_URL}/favorites`, favoriteData, {
    withCredentials: true,
  });
  return res.data;
};

// 즐겨찾기 조회
export const getFavorites = async (userId) => {
  const res = await axios.get(`${API_BASE_URL}/favorites/${userId}`, {
    withCredentials: true,
  });
  return res.data;
};
