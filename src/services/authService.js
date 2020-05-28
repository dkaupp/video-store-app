import http from "./httpService";
import { apiUrl } from "../config.json";
import jwtDecode from "jwt-decode";

const apiEndPoint = `${apiUrl}/auth`;
const tokenKey = "token";

http.setJWT(getJWT());

export const login = async (email, password) => {
  const { data: jwt } = await http.post(apiEndPoint, {
    email,
    password,
  });
  localStorage.setItem(tokenKey, jwt);
};

export const loginWithJwt = (jwt) => {
  localStorage.setItem(tokenKey, jwt);
};

export const logout = () => {
  localStorage.removeItem(tokenKey);
};

export const getCurrentUser = () => {
  const jwt = localStorage.getItem(tokenKey);
  if (!jwt) return null;
  return jwtDecode(jwt);
};

export function getJWT() {
  return localStorage.getItem("token");
}

export default {
  getCurrentUser,
  login,
  loginWithJwt,
  logout,
  getJWT,
};
