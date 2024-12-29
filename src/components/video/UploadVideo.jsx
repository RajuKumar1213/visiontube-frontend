import React, { useState } from "react";
import Container from "../Container";

const UploadVideo = () => {
  const [videoFile, setVideoFile] = useState(null);
  const [thumbnail, setThumbnail] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("video/")) {
      setVideoFile(file);
    } else {
      alert("Please upload a valid video file.");
    }
  };

  const handleThumbnailChange = (e) => {
    const file = e.target.files[0];
    setThumbnail(file);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleSubmit = () => {
    if (!videoFile || !title) {
      alert("Video file and title are required!");
      return;
    }

    // Perform upload logic here
    alert("Video uploaded successfully!");
    console.log({ videoFile, thumbnail, title, description });
  };

  return (
    <Container>
      <div className="min-h-screen text-white p-4">
        <h1 className="text-3xl font-bold mb-6">Upload Video</h1>

        {/* Drag and Drop Section */}
        <div
          className="border-dashed border-2 border-gray-600 rounded-lg p-8 flex flex-col items-center justify-center hover:bg-gray-800 transition"
          onDrop={handleDrop}
          onDragOver={handleDragOver}
        >
          {videoFile ? (
            <div className="text-center">
              <p className="text-lg font-semibold">{videoFile.name}</p>
              <p className="text-gray-400 text-sm">
                {(videoFile.size / 1024 / 1024).toFixed(2)} MB
              </p>
            </div>
          ) : (
            <>
              <p className="text-gray-400 mb-2">
                Drag & Drop your video file here
              </p>
              <p className="text-gray-500 text-sm">or</p>
              <label
                className="cursor-pointer text-blue-400 mt-2 hover:underline"
                htmlFor="videoFileInput"
              >
                Browse Files
              </label>
              <input
                id="videoFileInput"
                type="file"
                className="hidden"
                accept="video/*"
                onChange={(e) => setVideoFile(e.target.files[0])}
              />
            </>
          )}
        </div>

        {/* Form Fields */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block mb-2 text-gray-300">Video Title</label>
            <input
              type="text"
              className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-600"
              placeholder="Enter video title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <label className="block mb-2 text-gray-300">Thumbnail</label>
            <input
              type="file"
              className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-600"
              accept="image/*"
              onChange={handleThumbnailChange}
            />
          </div>
        </div>

        <div className="mt-6">
          <label className="block mb-2 text-gray-300">Description</label>
          <textarea
            className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-600"
            rows="4"
            placeholder="Enter video description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        {/* Submit Button */}
        <button
          className="mt-6 w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-6 rounded-lg transition"
          onClick={handleSubmit}
        >
          Upload Video
        </button>
      </div>
    </Container>
  );
};

export default UploadVideo;
