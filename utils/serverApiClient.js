import axios from "axios";

const serverApiClient = axios.create({
  baseURL: process.env.API_URL,
});

serverApiClient.defaults.headers.common["Api-Token"] = process.env.API_TOKEN;

export default serverApiClient;
