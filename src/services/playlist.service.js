import axios from "axios";

export class PlaylistService {
  // CEATE PLAYLIST
  /**
   * Service to create a playlist using Axios.
   * @param {Object} playlistData - The details of the playlist to be created.
   * @returns {Promise} - Resolves with the API response.
   * @throws Will throw an error if the playlist creation fails.
   * */

  async createPlaylist(playlistData) {
    try {
      const response = await axios.post(
        "/playlists/create-playlist",
        playlistData
      );
      return response.data;
    } catch (error) {
      console.error(
        "ERROR :: creating playlist::",
        error.response?.data || error.message
      );
      throw error.response?.data || error.message;
    }
  }

  // GET PLAYLISTS BY ID
  /**
   * Service to get a playlist by ID using Axios.
   * @param {string} playlistId - The ID of the playlist to get.
   * @returns {Promise} - Resolves with the API response.
   * @throws Will throw an error if the getting playlist by ID fails.
   * */
  async getPlaylistBy(playlistId) {
    try {
      const response = await axios.get(`/playlists/playlist/${playlistId}`);
      return response.data;
    } catch (error) {
      console.error(
        "ERROR :: getting playlist by id::",
        error.response?.data || error.message
      );
      throw error.response?.data || error.message;
    }
  }

  // ADD VIDEO TO PLAYLIST
  /**
   * Service to add a video to a playlist using Axios.
   * @param {string} playlistId - The ID of the playlist to add the video to.
   * @param {string} videoId - The ID of the video to add to the playlist.
   * @returns {Promise} - Resolves with the API response.
   * @throws Will throw an error if the adding video to playlist fails.
   * */
  async addVideoToPlaylist({ playlistId, videoId }) {
    try {
      const response = await axios.post(
        `/playlists/${playlistId}/add-video/${videoId}`
      );
      return response.data;
    } catch (error) {
      console.error(
        "ERROR :: adding video to playlist::",
        error.response?.data || error.message
      );
      throw error.response?.data || error.message;
    }
  }

  //DELETE VIDEO FROM THE PLAYLIST
  /**
   * Service to delete a video from a playlist using Axios.
   * @param {string} playlistId - The ID of the playlist to delete the video from.
   * @param {string} videoId - The ID of the video to delete from the playlist.
   * @returns {Promise} - Resolves with the API response.
   * @throws Will throw an error if the deleting video from playlist fails.
   * */
  async deleteVideoFromPlaylist({ playlistId, videoId }) {
    try {
      const response = await axios.delete(
        `/playlists/${playlistId}/remove-video/${videoId}`
      );
      return response.data;
    } catch (error) {
      console.error(
        "ERROR :: deleting video from playlist::",
        error.response?.data || error.message
      );
      throw error.response?.data || error.message;
    }
  }

  // DELETE PLAYLIST
  /**
   * Service to delete a playlist using Axios.
   * @param {string} playlistId - The ID of the playlist to delete.
   * @returns {Promise} - Resolves with the API response.
   * @throws Will throw an error if the deleting playlist fails.
   * */
  async deletePlaylist(playlistId) {
    try {
      const response = await axios.delete(`/playlists/delete/${playlistId}`);
      return response.data;
    } catch (error) {
      console.error(
        "ERROR :: deleting playlist::",
        error.response?.data || error.message
      );
      throw error.response?.data || error.message;
    }
  }

  // UDPATE PLAYLIST
  /**
   * Service to update a playlist using Axios.
   * @param {string} playlistId - The ID of the playlist to update.
   * @param {Object} playlistData - The updated details of the playlist.
   * @returns {Promise} - Resolves with the API response.
   * @throws Will throw an error if the updating playlist fails.
   * */
  async updatePlaylist(playlistId, playlistData) {
    try {
      const response = await axios.patch(
        `/playlists/update/${playlistId}`,
        playlistData
      );
      return response.data;
    } catch (error) {
      console.error(
        "ERROR :: updating playlist::",
        error.response?.data || error.message
      );
      throw error.response?.data || error.message;
    }
  }

  // GET USER PLAYLIST

  /**
   * Service to get the user's playlist using Axios.
   * @param {string} channelId - The ID of the user's channel.
   * @returns {Promise} - Resolves with the API response.
   * @throws Will throw an error if the getting playlist fails.
   * */
  async getUserPlaylists(channelId) {
    try {
      const response = await axios.get(`/playlists/${channelId}`);
      return response.data;
    } catch (error) {
      console.error(
        "ERROR :: getting playlists:: ",
        error.response?.data || error.message
      );
      throw error.response?.data || error.message;
    }
  }
}

const playlistService = new PlaylistService();
export default playlistService;
