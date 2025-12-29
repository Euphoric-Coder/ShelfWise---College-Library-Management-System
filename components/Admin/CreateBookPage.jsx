"use client";

import React, { useEffect, useState } from "react";
import { ArrowLeft, CirclePlus, Upload } from "lucide-react";
import { Button } from "../ui/button";
import AdminUpload from "./AdminUpload";
import { desc } from "drizzle-orm";

const CreateBookPage = () => {
  // Local Storage Key
  const STORAGE_KEY = "createBookForm";

  const [formData, setFormData] = useState({
    title: "",
    author: "",
    genre: "",
    rating: "",
    coverUrl: "",
    coverUrlId: "",
    coverColor: "#ffffff",
    description: "",
    totalCopies: "",
    availableCopies: "",
    videoUrl: "",
    videoUrlId: "",
    summary: "",
  });

  const [image, setImage] = useState(null);
  const [video, setVideo] = useState(null);

  // Fetch saved data from local storage on component mount
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const data = JSON.parse(saved);

      setFormData(data);

      // Restore image preview
      if (data.coverUrl && data.coverUrlId) {
        setImage({
          url: data.coverUrl,
          fileId: data.coverUrlId,
          filePath: data.coverUrl.split("/").slice(-1)[0], // fileName.ext
          resourceType: "image",
        });
      }

      // Restore video preview
      if (data.videoUrl && data.videoUrlId) {
        setVideo({
          url: data.videoUrl,
          fileId: data.videoUrlId,
          filePath: data.videoUrl.split("/").slice(-1)[0],
          resourceType: "video",
        });
      }
    }
  }, []);

  // Save form data to local storage on change
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  }, [formData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);

    // Clear LocalStorage after success
    localStorage.removeItem(STORAGE_KEY);
  };

  return (
    <div className="w-full space-y-6">
      <Button
        variant="secondary"
        onClick={() => {
          window.history.back();
        }}
        className="flex items-center gap-2 mb-8 border-2 transition-colors rounded-3xl"
      >
        <ArrowLeft className="w-4 h-4" />
        Go back
      </Button>

      <form onSubmit={handleSubmit} className="w-full space-y-6">
        <div className="form-group">
          <label className="form-label">Book Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            placeholder="Enter the book title"
            className="admin-form-input"
          />
        </div>

        <div className="form-group">
          <label className="form-label">Author</label>
          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleInputChange}
            placeholder="Enter the author name"
            className="admin-form-input"
          />
        </div>

        <div className="form-group">
          <label className="form-label">Genre</label>
          <input
            type="text"
            name="genre"
            value={formData.genre}
            onChange={handleInputChange}
            placeholder="Enter the genre of the book"
            className="admin-form-input"
          />
        </div>

        <div className="form-group">
          <label className="form-label">Rating (1-5)</label>
          <input
            type="number"
            name="rating"
            value={formData.rating}
            onChange={handleInputChange}
            min={1}
            max={5}
            placeholder="Enter the rating of the book"
            className="admin-form-input"
          />
        </div>

        <div className="form-group">
          <label className="form-label">Total number of books</label>
          <input
            type="number"
            name="totalCopies"
            value={formData.totalCopies}
            onChange={handleInputChange}
            placeholder="Enter the total number of books"
            className="admin-form-input"
          />
        </div>

        <div className="form-group">
          <label className="form-label">Total number of books available</label>
          <input
            type="number"
            name="availableCopies"
            value={formData.totalCopies}
            onChange={handleInputChange}
            placeholder="Enter the total number of books"
            disabled
            className="admin-form-input"
          />
        </div>

        <div className="form-group">
          <label className="form-label">Book Image</label>
          <div className="upload-area">
            <AdminUpload
              type="image"
              accept="image/*"
              placeholder="Upload your ID"
              folder="ids"
              variant="light"
              setFileId={(id) =>
                setFormData((prev) => ({ ...prev, coverUrlId: id }))
              }
              onFileChange={(url) =>
                setFormData((prev) => ({ ...prev, coverUrl: url }))
              }
              defaultFile={image}
            />
          </div>
        </div>

        <div className="form-group">
          <label className="form-label">Book Primary Color</label>
          <div className="color-picker-container">
            <div
              className="color-preview"
              style={{ backgroundColor: formData.coverColor }}
            ></div>
            <input
              type="text"
              name="coverColor"
              value={formData.coverColor}
              onChange={handleInputChange}
              className="color-input"
            />
          </div>
        </div>

        {/* Video Upload */}
        <div className="form-group">
          <label className="form-label">Book Trailer Video</label>

          <AdminUpload
            type="video"
            accept="video/*"
            placeholder="Upload Trailer"
            folder="books/videos"
            variant="light"
            setFileId={(id) =>
              setFormData((prev) => ({ ...prev, videoUrlId: id }))
            }
            onFileChange={(url) =>
              setFormData((prev) => ({ ...prev, videoUrl: url }))
            }
            defaultFile={video}
          />
        </div>

        <div className="form-group">
          <label className="form-label">Book Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            placeholder="Write a short description of the book"
            className="form-textarea"
            rows={4}
          />
        </div>

        <div className="form-group">
          <label className="form-label">Book Summary</label>
          <textarea
            name="summary"
            value={formData.summary}
            onChange={handleInputChange}
            placeholder="Write a brief summary of the book"
            className="form-textarea"
            rows={8}
          />
        </div>

        <button type="submit" className="submit-button">
          <CirclePlus />
          Add Book
        </button>
      </form>
    </div>
  );
};

export default CreateBookPage;
