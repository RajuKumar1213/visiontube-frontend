import axios from "axios";

export class AuthService {
  /**
   * Service to create a user using Axios.
   * @param {Object} userData - User details (e.g., name, email, password).
   * @returns {Promise} - Resolves with the API response.
   */
  async createUser(userData) {
    try {
      const response = await axios.post("/users/create", userData);
      return response.data;
    } catch (error) {
      console.error(
        "ERROR :: creating user::",
        error.response?.data || error.message
      );
      throw error.response?.data || error.message;
    }
  }

  // login user
  /**
   * Service to create a user using Axios.
   * @param {Object} credentials - User details (e.g., name, email, password).
   * @returns {Promise} - Resolves with the API response.
   */
  async loginUser(credentials) {
    try {
      const response = await axios.post("/users/login", credentials);
      return response.data;
    } catch (error) {
      console.error(
        "ERROR :: logging in user::",
        error.response?.data || error.message
      );
      throw error.response?.data || error.message;
    }
  }

  //logout user

  /**
   * Service to log out the user using Axios.
   * @returns {Promise} - Resolves with the API response.
   */
  async logoutUser() {
    try {
      const response = await axios.post("/users/logout");
      return response.data;
    } catch (error) {
      console.error(
        "ERROR :: logging out user::",
        error.response?.data || error.message
      );
      throw error.response?.data || error.message;
    }
  }

  // generating refresh token

  /**
   * Service to generate a refresh token using Axios.
   * @returns {Promise} - Resolves with the API response.
   */
  async generateRefreshToken() {
    try {
      const response = await axios.post("/users/refresh-token");
      return response.data;
    } catch (error) {
      console.error(
        "ERROR :: generating refresh token::",
        error.response?.data || error.message
      );
      throw error.response?.data || error.message;
    }
  }

  // change password

  /**
   * Service to change the user's password using Axios.
   * @param {Object} credentials - The user's credentials (e.g., current password, new password).
   * @returns {Promise} - Resolves with the API response.
   */

  async changePassword(credentials) {
    try {
      const response = await axios.post("/users/change-password", credentials);
      return response.data;
    } catch (error) {
      console.error(
        "ERROR :: changing password::",
        error.response?.data || error.message
      );
      throw error.response?.data || error.message;
    }
  }

  // GET CURRENT USER

  /**
   * Service to get the current user using Axios.
   * @returns {Promise} - Resolves with the API response.
   */
  async getCurrentUser() {
    try {
      const response = await axios.get("/users/current-user");
      return response.data;
    } catch (error) {
      console.error(
        "ERROR :: getting current user::",
        error.response?.data || error.message
      );
      throw error.response?.data || error.message;
    }
  }

  // UPDATE ACCOUNT DETAILS

  /**
   * Service to update the user's account details using Axios.
   * @param {Object} accountDetails - The updated account details.
   * @returns {Promise} - Resolves with the API response.
   */
  async updateAccountDetails(accountDetails) {
    try {
      const response = await axios.patch(
        "/users/update-account",
        accountDetails
      ); // Use relative path
      return response.data;
    } catch (error) {
      console.error(
        "ERROR :: updating account details::",
        error.response?.data || error.message
      );
      throw error.response?.data || error.message;
    }
  }

  // UPDATE AVATAR

  /**
   * Service to update the user's avatar using Axios.
   * @param {Object} avatar - The updated avatar details.
   * @returns {Promise} - Resolves with the API response.
   */
  async updateAvatar(avatar) {
    try {
      const response = await axios.patch("/users/update-avatar", avatar);
      return response.data;
    } catch (error) {
      console.error(
        "ERROR :: updating avatar::",
        error.response?.data || error.message
      );
      throw error.response?.data || error.message;
    }
  }

  // UPDATE COVER IMAGE

  /**
   * Service to update the user's cover image using Axios.
   * @param {Object} coverImage - The updated cover image details.
   * @returns {Promise} - Resolves with the API response.
   */
  async updateCoverImage(coverImage) {
    try {
      const response = await axios.patch(
        "/users/update-coverimage",
        coverImage
      ); // Use relative path
      return response.data;
    } catch (error) {
      console.error(
        "ERROR :: updating cover image::",
        error.response?.data || error.message
      );
      throw error.response?.data || error.message;
    }
  }

  // GET CHANNEL PROFILE BY USERNAME OR ID

  /**
   * Service to get a channel profile by username or ID using Axios.
   * @param {string} usernameOrId - The username or ID of the channel profile.
   * @returns {Promise} - Resolves with the API response.
   */
  async getChannelProfile(usernameOrId) {
    try {
      const response = await axios.get(`v1/users/channel/${usernameOrId}`);

      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error(
        "ERROR :: getting channel profile::",
        error.response?.data || error.message
      );
      throw error.response?.data || error.message;
    }
  }

  // GET WATCH HISTORY

  /**
   * Service to get the user's watch history using Axios.
   * @returns {Promise} - Resolves with the API response.
   */
  async getWatchHistory() {
    try {
      const response = await axios.get("/users/watch-history");
      return response.data;
    } catch (error) {
      console.error(
        "ERROR :: getting watch history::",
        error.response?.data || error.message
      );
      throw error.response?.data || error.message;
    }
  }
}

const authService = new AuthService();

export default authService;
