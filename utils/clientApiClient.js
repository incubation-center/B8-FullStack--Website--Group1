import axios from "axios";

const clientApiClient = axios.create({});

clientApiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response && error.response.status === 403) {
      const refreshToken = localStorage.getItem("refreshToken");

      if (refreshToken) {
        try {
          const response = await clientApiClient.post("api/auth/accessToken", {
            refreshToken,
          });

          const { accessToken } = response.data.data;

          clientApiClient.defaults.headers.common[
            "Authorization"
          ] = `Bearer ${accessToken}`;

          originalRequest.headers["Authorization"] = `Bearer ${accessToken}`;

          return clientApiClient(originalRequest);
        } catch (error) {
          localStorage.removeItem("refreshToken");
          localStorage.removeItem("accessToken");
          window.location.href = "/unauthorized";
        }
      }
    }

    return Promise.reject(error);
  }
);

export default clientApiClient;
