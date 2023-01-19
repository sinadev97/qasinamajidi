import axios from "axios";

const cAxios = axios.create({
  baseURL: "http://localhost:3001",
});

export default cAxios;
