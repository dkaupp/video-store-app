import http from "./httpService";

export const getGenres = () => {
  return http.get("http://localhost:8000/api/genres");
};
