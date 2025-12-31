"use client";

import React, { useEffect, useState } from "react";
import {
  AlertCircle,
  ArrowLeft,
  CheckCircle,
  CirclePlus,
  Upload,
  XCircle,
} from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "../ui/button";
import AdminUpload from "./AdminUpload";

const defaultFormData = {
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
};

const CreateBookPage = () => {
  // Local Storage Key
  const STORAGE_KEY = "createBookForm";

  const [formData, setFormData] = useState(defaultFormData);

  const [unfinishedData, setUnfinishedData] = useState(false);

  const [image, setImage] = useState(null);
  const [video, setVideo] = useState(null);

  // Fetch saved data from local storage on component mount
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);

    if (saved && saved !== JSON.stringify(defaultFormData)) {
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
          filePath: `/books/videos/${data.videoUrl.split("/").slice(-1)[0]}`,
          resourceType: "video",
        });
      }
      setUnfinishedData(true);
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
    // localStorage.removeItem(STORAGE_KEY);
  };

  const deleteFile = async (fileId) => {
    if (!fileId) return;
    console.log("Deleting file with ID:", fileId);
    try {
      await fetch("/api/delete-image", {
        method: "POST",
        body: JSON.stringify({ fileId }),
      });
      console.log("Deleted previous file:", fileId);
    } catch (err) {
      console.error("Delete failed", err);
    }
  };

  const clearData = (e) => {
    e.preventDefault();
    localStorage.removeItem(STORAGE_KEY);

    if (formData.coverUrlId) {
      deleteFile(formData.coverUrlId);
    }

    if (formData.videoUrlId) {
      deleteFile(formData.videoUrlId);
    }

    // Reset state
    setUnfinishedData(false);

    // Reset form data
    setFormData(defaultFormData);

    // Clear LocalStorage after clearing data
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

      {/* Pending Expense Alert */}
      {unfinishedData && (
        <div className="container mx-auto justify-center">
          <Alert
            variant="warning"
            className="mt-10 mb-5 bg-gradient-to-br from-sky-100 to-blue-50 dark:from-gray-800 dark:to-gray-700 border border-sky-400 dark:border-gray-600 shadow-lg p-4 rounded-3xl flex items-center hover:shadow-xl"
          >
            {/* Content that grows to fill space */}
            <div className="flex flex-col gap-2 flex-grow">
              <div className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-400" />
                <AlertTitle className="text-sky-700 text-sm md:text-lg dark:text-sky-300 font-bold">
                  Pending Book Data
                </AlertTitle>
              </div>
              <div className="flex items-center gap-2">
                <AlertDescription className="w-full">
                  <div
                    className="rounded-xl border border-sky-300 dark:border-sky-700 bg-sky-50 dark:bg-sky-900/10 
                       px-4 py-3 text-sm sm:text-base text-justify leading-relaxed text-sky-800 dark:text-sky-200 
                       shadow-sm transition-all"
                  >
                    <p className="text-wrap break-words">
                      You have an unfinished Book: &quot;
                      <b className="font-semibold">
                        {formData.title === ""
                          ? "Untitled"
                          : `${formData.title.slice(0, 50)}${
                              formData.title.length > 50 ? " ..." : ""
                            }`}
                      </b>
                      &quot;. Would you like to continue?
                    </p>
                  </div>
                </AlertDescription>
                {/* Button on the right */}
                <div className="flex flex-col md:flex-row items-center gap-2">
                  <Button
                    variant="outline"
                    size="lg"
                    className="accept hover:bg-green-300 hover:text-green-700 dark:hover:text-green-400 [&_svg]:size-6"
                    onClick={() => setUnfinishedData(false)}
                  >
                    <CheckCircle className="h-4 w-4 mr-1" />
                    Continue
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="del3 hover:bg-red-300 hover:text-red-700 [&_svg]:size-6"
                    onClick={clearData}
                  >
                    <XCircle className="h-4 w-4 mr-1" />
                    Dismiss
                  </Button>
                </div>
              </div>
            </div>
          </Alert>
        </div>
      )}

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
              folder="books/cover"
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
