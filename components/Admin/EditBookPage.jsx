"use client";

import React, { useState } from "react";
import { ArrowLeft, Folder, X } from "lucide-react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

const EditBookPage = ({ bookData }) => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: bookData.title,
    author: bookData.author,
    genre: bookData.genre,
    rating: bookData.rating,
    totalCopies: bookData.totalCopies,
    availableCopies: bookData.availableCopies,
    coverColor: bookData.coverColor,
    summary: bookData.summary,
    coverUrl: bookData.coverUrl,
    videoFile: bookData.videoUrl,
  });

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
  };

  const removeFile = (fileType) => {
    setFormData((prev) => ({
      ...prev,
      [fileType === "image" ? "coverUrl" : "videoFile"]: "",
    }));
  };

  return (
    <div className="w-full space-y-6">
      <Button
        variant="secondary"
        onClick={() => {
          router.push("/admin/all-books");
        }}
        className="flex items-center gap-2 mb-8 border-2 transition-colors"
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
            className="admin-form-input"
          />
        </div>

        <div className="form-group">
          <label className="form-label">Book Image</label>
          <div className="upload-area-with-file">
            {formData.coverUrl ? (
              <div className="uploaded-file">
                <div className="file-info">
                  <div className="file-icon"><Folder /></div>
                  <span className="file-name">{formData.coverUrl}</span>
                </div>
                <button
                  type="button"
                  onClick={() => removeFile("image")}
                  className="remove-file-btn"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <div className="upload-area">
                <span className="text-gray-500">Upload an image</span>
              </div>
            )}
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

        <div className="form-group">
          <label className="form-label">Book Video</label>
          <div className="upload-area-with-file">
            {formData.videoFile ? (
              <div className="uploaded-file">
                <div className="file-info">
                  <div className="file-icon">🎥</div>
                  <span className="file-name">{formData.videoFile}</span>
                </div>
                <button
                  type="button"
                  onClick={() => removeFile("video")}
                  className="remove-file-btn"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <div className="upload-area">
                <span className="text-gray-500">Upload a video</span>
              </div>
            )}
          </div>
        </div>

        <div className="form-group">
          <label className="form-label">Book Summary</label>
          <textarea
            name="summary"
            value={formData.summary}
            onChange={handleInputChange}
            className="form-textarea"
            rows={8}
          />
        </div>

        <button type="submit" className="submit-button">
          Update Book
        </button>
      </form>
    </div>
  );
};

export default EditBookPage;
