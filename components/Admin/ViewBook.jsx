import React, { useState } from "react";
import {
  ArrowLeft,
  PenBox,
  Play,
  Trash2,
  X,
} from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

const ViewBook = ({ onGoBack, bookData }) => {
  const router = useRouter();
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showVideoModal, setShowVideoModal] = useState(false);

  const handleDelete = () => {
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    // Handle book deletion logic here
    console.log("Deleting book:", bookData.id);
    setShowDeleteModal(false);
    onGoBack(); // Return to previous page after deletion
  };

  const closeDeleteModal = () => {
    setShowDeleteModal(false);
  };

  const closeVideoModal = () => {
    setShowVideoModal(false);
  };

  return (
    <>
      <div className="space-y-8">
        <Button
          variant="secondary"
          onClick={onGoBack}
          className="flex items-center gap-2 mb-8 transition-colors border-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Go back
        </Button>

        {/* Book Info Section */}
        <div className="flex items-start gap-6">
          <div className="w-48 h-64 bg-pink-100 rounded-lg flex items-center justify-center p-4 flex-shrink-0">
            <img
              src={bookData.coverUrl}
              alt={bookData.title}
              draggable="false"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>

          <div className="flex-1 space-y-4">
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <span>Created at:</span>
              <div className="flex items-center gap-1">
                <Image
                  src="/icons/admin/calendar.svg"
                  alt="calendar"
                  width={20}
                  height={20}
                />
                <span>{bookData.createdAt}</span>
              </div>
            </div>

            <h1 className="text-2xl font-semibold text-gray-800">
              {bookData.title}
            </h1>

            <p className="text-lg text-gray-600">By {bookData.author}</p>

            <p className="text-gray-500">{bookData.genre}</p>

            <div className="flex gap-3">
              <button onClick={() => router.push(`/admin/all-books/edit-book/${bookData.id}`)}
              className="flex-1 bg-primary-admin text-white py-3 px-4 rounded-lg font-medium hover:bg-primary-admin/90 transition-colors flex items-center justify-center gap-2">
                <PenBox className="w-5 h-5" />
                Edit Book
              </button>
              <button
                onClick={handleDelete}
                className="flex-1 bg-[#F46F70] text-white py-3 px-4 rounded-lg font-medium hover:bg-red-600 transition-colors flex items-center justify-center gap-2"
              >
                <Trash2 className="w-5 h-5" />
                Delete Book
              </button>
            </div>
          </div>
        </div>

        {/* Video and Summary Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Summary Section */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Summary
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              {bookData.summary.split("\n\n").map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>

          {/* Video Section */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Video</h2>
            <div className="relative w-full h-64 bg-gradient-to-r from-pink-200 via-purple-200 to-blue-200 rounded-lg overflow-hidden">
              <img
                src={bookData.coverUrl}
                alt="Book video thumbnail"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                <button
                  onClick={() => setShowVideoModal(true)}
                  className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center hover:bg-opacity-100 transition-all"
                >
                  <Play className="w-6 h-6 text-gray-700 ml-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Player Modal */}
      {showVideoModal && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="relative w-full max-w-4xl bg-black rounded-xl overflow-hidden shadow-2xl">
            {/* Close Button */}
            <button
              onClick={closeVideoModal}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-black bg-opacity-50 hover:bg-opacity-75 rounded-full flex items-center justify-center text-white transition-all duration-200"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Video Container */}
            <div
              className="relative w-full"
              style={{ paddingBottom: "56.25%" }}
            >
              {/* For demo purposes, showing a placeholder. In real app, this would be a video element */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-24 h-24 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                    <Play className="w-12 h-12 text-white ml-1" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{bookData.title}</h3>
                  <p className="text-lg opacity-80">Book Trailer</p>
                  <p className="text-sm opacity-60 mt-4">
                    Video content would play here
                  </p>
                </div>
              </div>

              <video
                className="absolute inset-0 w-full h-full object-cover"
                controls
                autoPlay
                src={bookData.videoUrl}
              >
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Video Info Bar */}
            <div className="bg-gray-900 px-6 py-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-white font-semibold text-lg">
                    {bookData.title}
                  </h4>
                  <p className="text-gray-300 text-sm">By {bookData.author}</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="bg-primary-admin text-white px-3 py-1 rounded-full text-sm font-medium">
                    Book Trailer
                  </span>
                  <span className="text-gray-400 text-sm">
                    {bookData.genre}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button onClick={closeDeleteModal} className="modal-close-btn">
              <div className="size-5">×</div>
            </button>

            <div className="modal-icon-container bg-red-100">
              <div className="modal-icon-inner bg-[#F46F70]">
                <div className="size-8 text-white flex items-center justify-center">
                  <Trash2 className="size-6" />
                </div>
              </div>
            </div>

            <h2 className="modal-title">Delete Book</h2>
            <p className="modal-description">
              Are you sure you want to delete "{bookData.title}"? This action
              cannot be undone and will permanently remove the book from the
              system.
            </p>

            <div className="flex gap-3 w-full">
              <button
                onClick={closeDeleteModal}
                className="flex-1 py-3 px-4 rounded-lg border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition-colors duration-200"
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                className="flex-1 py-3 px-4 rounded-lg bg-[#F46F70] text-white font-medium hover:bg-red-600 transition-colors duration-200"
              >
                Delete Book
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ViewBook;
