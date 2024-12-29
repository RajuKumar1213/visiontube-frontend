import axios from "axios";

export class CommentService {
  // CREATING COMMENT ON VIDEO

  /**
   * Service to create a comment on a video using Axios.
   * @param {Object} commentData - The comment details to be created.
   * @returns {Promise} - Resolves with the API response.
   * @throws Will throw an error if the creating comment by video ID fails.
   */
  async createComment({ videoId, commentData }) {
    try {
      const response = await axios.post(
        `/comments/add-comment/${videoId}`,
        commentData
      );
      return response.data;
    } catch (error) {
      console.error(
        "ERROR :: creating comment::",
        error.response?.data || error.message
      );
      throw error.response?.data || error.message;
    }
  }

  // GET ALL COMMENT OF A VIDEO

  /**
   * Service to get all comments of a video using Axios.
   * @param {string} videoId - The ID of the video to get comments for.
   * @returns {Promise} - Resolves with the API response.
   * @throws Will throw an error if the getting comments by video ID fails.
   */
  async getCommentsOfVidoe(videoId) {
    try {
      const response = await axios.get(`/comments/all-comments/${videoId}`);
      return response.data;
    } catch (error) {
      console.error(
        "ERROR :: getting comments::",
        error.response?.data || error.message
      );
      throw error.response?.data || error.message;
    }
  }

  // UPDATE COMMENT BY ID

  /**
   * Service to update a comment by its ID using Axios.
   * @param {string} commentId - The ID of the comment to update.
   * @returns {Promise} - Resolves with the API response.
   * @throws Will throw an error if the updating comment by ID fails.
   */
  async updateComment(commentId) {
    try {
      const response = await axios.patch(
        `/comments/update-comment/${commentId}`
      );
      return response.data;
    } catch (error) {
      console.error(
        "ERROR :: updating comment by id::",
        error.response?.data || error.message
      );
      throw error.response?.data || error.message;
    }
  }

  // DELETE COMMENT BY ID

  /**
   * Service to delete a comment by its ID using Axios.
   * @param {string} commentId - The ID of the comment to delete.
   * @returns {Promise} - Resolves with the API response.
   * @throws Will throw an error if the deleting comment by ID fails.
   */
  async deleteComment(commentId) {
    try {
      const response = await axios.delete(
        `/comments/delete-comment/${commentId}`
      );
      return response.data;
    } catch (error) {
      console.error(
        "ERROR :: deleting comment by id::",
        error.response?.data || error.message
      );
      throw error.response?.data || error.message;
    }
  }
}

const commentService = new CommentService();
export default commentService;
