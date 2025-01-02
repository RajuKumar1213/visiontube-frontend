import axios from "axios";

// Create an Axios instance
const api = axios.create({
  baseURL: "http://localhost:8000/api/v1",
  withCredentials: true, // Ensure cookies are sent with requests
});

// Add a request interceptor to automatically include the Authorization header
api.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    // Handle errors in setting up the request
    return Promise.reject(error);
  }
);

// Add a response interceptor for handling token refreshing
api.interceptors.response.use(
  (response) => response, // Return the response as is if no error
  async (error) => {
    // If the error status is 401, meaning the token is expired
    if (error.response && error.response.status === 401) {
      const refreshToken = document.cookie
        .split("; ")
        .find((row) => row.startsWith("refreshToken="))
        ?.split("=")[1];

      if (refreshToken) {
        try {
          // Request to refresh the token
          const refreshResponse = await axios.post(
            "http://localhost:8000/api/v1/users/refresh-token",
            { refreshToken },
            { withCredentials: true } // Ensure cookies are sent with the request
          );

          const newAccessToken = refreshResponse.data.accessToken;

          // Store the new access token in cookies and localStorage
          document.cookie = `accessToken=${newAccessToken}; path=/; secure;`;
          localStorage.setItem("accessToken", newAccessToken);

          // Update the failed request with the new access token
          error.config.headers["Authorization"] = `Bearer ${newAccessToken}`;

          // Retry the original request with the new access token
          return axios.request(error.config);
        } catch (err) {
          console.error("Failed to refresh token:", err);
        }
      }
    }

    // Reject the error if token refresh fails or if it's not a 401 error
    return Promise.reject(error);
  }
);

export default api;
