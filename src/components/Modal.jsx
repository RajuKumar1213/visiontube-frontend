import React, { useState } from "react";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";
import authService from "../services/auth.service";

const Modal = ({ oldImageUrl, onClose }) => {
  const [newImagePreview, setNewImagePreview] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setNewImagePreview(URL.createObjectURL(file));
      authService.updateCoverImage(file).then((res) => {
        if (res.statusCode === 200) {
          window.location.reload();
        }
      });
    } else {
      setNewImagePreview(null);
    }
  };

  const handleUpload = () => {
    // Logic to upload the new image
    console.log("Image uploaded!");
    onClose(); // Close the modal after upload
  };

  return (
    <div className="fixed  rounded-lg inset-0 bg-black bg-opacity-50 flex">
      {/* Blurred out background */}

      {/* Modal on the right */}
      <div className="ml-auto rounded-lg top-16 right-8 bg-secondary w-1/4 h-3/4 mb-6 shadow-lg p-5 relative overflow-y-auto">
        <div
          className="rounded-full text-red-600 absolute top-2 right-2 cursor-pointer"
          onClick={onClose}
        >
          <CancelRoundedIcon />
        </div>
        <h2 className="text-xl font-semibold mb-4">Update Cover Image</h2>
        <div>
          <p className="mb-2 text-gray-500">Current Image:</p>
          {!oldImageUrl && (
            <h2 className="text-gray-500 mb-4">No Previous Image</h2>
          )}
          {oldImageUrl && (
            <img
              src={oldImageUrl}
              alt="Old Cover"
              className="mb-4 w-full h-40 object-cover rounded-md"
            />
          )}
        </div>
        <div>
          <input
            onChange={handleFileChange}
            type="file"
            accept="image/*"
            className="mb-4 block w-full text-sm text-gray-500
             file:mr-4 file:py-2 file:px-4
             file:rounded-md file:border-0
             file:text-sm file:font-semibold
             file:bg-blue-50 file:text-blue-700
             hover:file:bg-blue-100
             cursor-pointer"
          />

          {newImagePreview && (
            <div className="mb-3">
              <p className="text-gray-500">Preview:</p>
              <img
                src={newImagePreview}
                alt="New Preview"
                className="w-full h-40 object-cover rounded-md"
              />
            </div>
          )}
        </div>
        <div className="flex justify-between">
          <button
            onClick={handleUpload}
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Upload
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
