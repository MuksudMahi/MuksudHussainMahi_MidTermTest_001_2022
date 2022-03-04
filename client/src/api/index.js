import axios from "axios";

//const api = axios.create({
const baseUrl = "http://localhost:3500/appointment";
//});

export const addAppointment = (payload) =>
  axios.post(baseUrl + "/add", payload);
export const getAppointments = () => axios.get(baseUrl + "/list");
export const deleteAppointment = (id) => axios.post(baseUrl + `/delete/${id}`);

const apis = {
  addAppointment,
  getAppointments,
  deleteAppointment,
};

export default apis;
