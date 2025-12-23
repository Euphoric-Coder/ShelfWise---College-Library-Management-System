import React, { useState } from "react";
import { ArrowLeft, CreditCard as Edit, Play, Trash2 } from "lucide-react";

const ViewBook = ({
  onGoBack,
  bookData,
}) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);

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

  return (
    <>
      <div className="space-y-8">
        <button
          onClick={onGoBack}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-800 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Go back
        </button>

        {/* Book Info Section */}
        <div className="flex items-start gap-6">
          <div className="w-48 h-64 bg-pink-100 rounded-lg flex items-center justify-center p-4 flex-shrink-0">
            <img
              src={bookData.coverUrl}
              alt={bookData.title}
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>

          <div className="flex-1 space-y-4">
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <span>Created at:</span>
              <div className="flex items-center gap-1">
                <div className="w-4 h-4 border border-gray-300 rounded flex items-center justify-center">
                  <div className="w-2 h-2 bg-gray-400 rounded-sm"></div>
                </div>
                <span>{bookData.dateCreated}</span>
              </div>
            </div>

            <h1 className="text-2xl font-semibold text-gray-800">
              {bookData.title}
            </h1>

            <p className="text-lg text-gray-600">By {bookData.author}</p>

            <p className="text-gray-500">{bookData.genre}</p>

            <div className="flex gap-3">
              <button className="flex-1 bg-primary-admin text-white py-3 px-4 rounded-lg font-medium hover:bg-primary-admin/90 transition-colors flex items-center justify-center gap-2">
                <Edit className="w-4 h-4" />
                Edit Book
              </button>
              <button
                onClick={handleDelete}
                className="flex-1 bg-red-500 text-white py-3 px-4 rounded-lg font-medium hover:bg-red-600 transition-colors flex items-center justify-center gap-2"
              >
                <Trash2 className="w-4 h-4" />
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
                <button className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center hover:bg-opacity-100 transition-all">
                  <Play className="w-6 h-6 text-gray-700 ml-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button onClick={closeDeleteModal} className="modal-close-btn">
              <div className="size-5">×</div>
            </button>

            <div className="modal-icon-container bg-red-100">
              <div className="modal-icon-inner bg-red-500">
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
                className="flex-1 py-3 px-4 rounded-lg bg-red-500 text-white font-medium hover:bg-red-600 transition-colors duration-200"
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
