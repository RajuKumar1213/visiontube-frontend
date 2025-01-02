import React, { useState } from "react";
import spinner from "/spinner.svg";
import { Button, Input } from "../../components";

import videoService from "../../services/video.service";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const UploadVideo = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [videoFile, setVideoFile] = useState(null);
  const [progress, setProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("video/")) {
      setVideoFile(file);
    } else {
      alert("Please upload a valid video file.");
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleUpload = (data) => {
    console.log(data);

    setLoading(true);
    setError("");
    if (!data) {
      console.log("No data found");
    }
    videoService
      .uploadVideo(data, setProgress)
      .then((response) => {
        setError("");
        navigate("/");
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        setError(error.message);
        console.log("Error uploading video:", error);
      });
  };

  return (
    <div className="min-h-screen text-white p-4">
      <h1 className="text-3xl font-bold mb-6">Upload Video</h1>

      <form onSubmit={handleSubmit(handleUpload)}>
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
                Drag and drop your video here{" "}
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
                // className="hidden"
                onChange={(e) => setVideoFile(e.target.files[0])}
                accept="video/*"
                {...register("videoFile", { required: "Video is required" })}
              />
            </>
          )}
        </div>
        {/* Form Fields */}

        <div className="flex justify-between gap-4 flex-wrap md:flex-nowrap">
          <div className="w-full">
            <Input
              type="text"
              label="Title"
              placeholder="Enter video title"
              className="mb-4 "
              {...register("title", { required: "Title is required" })}
            />
            {errors.title && (
              <p className="text-red-500 mt-2">{errors.title.message}</p>
            )}
          </div>
          <div className="w-full">
            <Input
              type="file"
              label="Thumbnail"
              placeholder="Enter video title"
              className="mb-4"
              {...register("thumbnail", { required: "Title is required" })}
            />
            {errors.title && (
              <p className="text-red-500 mt-2">{errors.thumbnail.message}</p>
            )}
          </div>
        </div>
        <div className="mt-6">
          <label className="block mb-2 text-gray-300">Description</label>
          <textarea
            className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-600"
            rows="4"
            placeholder="Enter video description"
            {...register("description", {
              required: "Description is required",
            })}
          />
          {errors.description && (
            <p className="text-red-500 mt-2">{errors.description.message}</p>
          )}
        </div>

        {isUploading && (
          <div className="w-full bg-gray-600 rounded h-4 mb-4">
            <div
              className="h-4 bg-blue-500 rounded"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        )}

        {/* Submit Button */}
        <Button
          type="submit"
          className="flex justify-center items-center my-4 min-w-60 rounded-lg "
        >
          {loading && <img src={spinner} alt="" className="w-6 mr-3" />}
          {/* {isUploading ? `Uploading... ${progress}%` : "Upload"} */}
          Upload
        </Button>
      </form>
    </div>
  );
};

export default UploadVideo;
