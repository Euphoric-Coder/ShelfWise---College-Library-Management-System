"use client";

import React, { useState } from "react";
import { ArrowLeft, Upload } from "lucide-react";

const CreateBookPage = ({ onGoBack }) => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    genre: "",
    totalBooks: "",
    primaryColor: "#ffffff",
    summary: "",
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

  return (
    <div className="w-full space-y-6">
      <button
        onClick={onGoBack}
        className="flex items-center gap-2 text-gray-600 hover:text-gray-800 mb-8 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Go back
      </button>

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
          <label className="form-label">Total number of books</label>
          <input
            type="number"
            name="totalBooks"
            value={formData.totalBooks}
            onChange={handleInputChange}
            placeholder="Enter the total number of books"
            className="admin-form-input"
          />
        </div>

        <div className="form-group">
          <label className="form-label">Book Image</label>
          <div className="upload-area">
            <Upload className="w-5 h-5 text-gray-400" />
            <span className="text-gray-500">Upload an image</span>
          </div>
        </div>

        <div className="form-group">
          <label className="form-label">Book Primary Color</label>
          <div className="color-picker-container">
            <div
              className="color-preview"
              style={{ backgroundColor: formData.primaryColor }}
            ></div>
            <input
              type="text"
              name="primaryColor"
              value={formData.primaryColor}
              onChange={handleInputChange}
              className="color-input"
              readOnly
            />
          </div>
        </div>

        <div className="form-group">
          <label className="form-label">Book Video</label>
          <div className="upload-area">
            <Upload className="w-5 h-5 text-gray-400" />
            <span className="text-gray-500">Upload a video</span>
          </div>
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
          Update Book
        </button>
      </form>
    </div>
  );
};

export default CreateBookPage;
