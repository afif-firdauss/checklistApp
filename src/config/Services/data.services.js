/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";
import authHeader from "./auth-header";

const API_URL = process.env.REACT_APP_API_URL;
// console.log(authHeader(), 'header')

const getChecklist = () => {
  const URL = 'checklist';
  return axios.get(`${API_URL}/${URL}`, { headers: authHeader() });
}

const addChecklist = (name) => {
  const URL = 'checklist';
  return axios.post(`${API_URL}/${URL}`, {name}, { headers: authHeader() });
}

const removeChecklist = (id) => {
  const URL = 'checklist';
  return axios.delete(`${API_URL}/${URL}/${id}`, { headers: authHeader() });
}


export default {
  getChecklist,
  addChecklist,
  removeChecklist
};