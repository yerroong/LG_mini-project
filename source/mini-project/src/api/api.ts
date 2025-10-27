import axios from "axios";

const API_BASE = "http://localhost:8080/api/users";

// 회원가입
export const signup = async (data: {
  username: string;
  foreignerId?: string;
  name: string;
  password: string;
  phone: string;
  email: string;
  birthDate?: string;
}) => {
  const res = await axios.post(`${API_BASE}/signup`, data);
  return res.data;
};

// 아이디 중복 체크
export const checkUsername = async (username: string) => {
  const res = await axios.get(`${API_BASE}/check-username`, {
    params: { username },
  });
  return res.data; // boolean
};

// 로그인
export const login = async (username: string, password: string) => {
  const res = await axios.post(
    `${API_BASE}/login`,
    null,
    { params: { username, password } } // @RequestParam 맞춤
  );
  return res.data; // 로그인 성공 시 사용자 이름 반환
};
