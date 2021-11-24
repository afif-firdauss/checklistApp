/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

const register = (email, password, username) => {
  const URL = 'register'
  return axios.post(`${API_URL}/${URL}`, {
    email,
    password,
    username,
  });
};

const login = (password, username) => {
  const URL = 'login'
  return axios
    .post(`${API_URL}/${URL}`, {
      password,
      username,
    })
    .then((response) => {
      // console.log(response.data.data.token, 'response login')
      if (response.data.data.token) {
        localStorage.setItem("user", JSON.stringify(response.data.data.token));
      }
      return response.data;
    });
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem('user'));
};

const logout = () => {
  localStorage.removeItem("user");
};

export default {
  register,
  login,
  getCurrentUser,
  logout,
};