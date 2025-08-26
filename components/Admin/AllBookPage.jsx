"use client";

import React, { useState } from "react";
import { Edit, Trash2, Plus, AlertTriangle, X } from "lucide-react";
import { useRouter } from "next/navigation";

const AllBooksPage = () => {
  const [showDeleteModal, setShowDeleteModal] = useState(null);
  const [bookToDelete, setBookToDelete] = useState(null);

  const router = useRouter();

  const books = [
    {
      id: "1",
      title: "The Great Reclamation: A Novel by",
      author: "Rachel Hxeng",
      genre: "Strategic, Fantasy",
      dateCreated: "Dec 19 2023",
      coverUrl:
        "https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: "2",
      title: "Inside Evil: Inside Evil Series, Book 1",
      author: "Rachel Heng",
      genre: "Strategic, Fantasy",
      dateCreated: "Dec 19 2023",
      coverUrl:
        "https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: "3",
      title: "Jayne Castle - People in Glass Houses",
      author: "Rachel Heng",
      genre: "Strategic, Fantasy",
      dateCreated: "Dec 19 2023",
      coverUrl:
        "https://images.pexels.com/photos/1130980/pexels-photo-1130980.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: "4",
      title: "The Great Reclamation: A Novel by",
      author: "Rachel Heng",
      genre: "Strategic, Fantasy",
      dateCreated: "Dec 19 2023",
      coverUrl:
        "https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: "5",
      title: "Inside Evil: Inside Evil Series, Book 1",
      author: "Rachel Heng",
      genre: "Strategic, Fantasy",
      dateCreated: "Dec 19 2023",
      coverUrl:
        "https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: "6",
      title: "Jayne Castle - People in Glass Houses",
      author: "Rachel Heng",
      genre: "Strategic, Fantasy",
      dateCreated: "Dec 19 2023",
      coverUrl:
        "https://images.pexels.com/photos/1130980/pexels-photo-1130980.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: "7",
      title: "The Great Reclamation: A Novel by",
      author: "Rachel Heng",
      genre: "Strategic, Fantasy",
      dateCreated: "Dec 19 2023",
      coverUrl:
        "https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
  ];

  const handleDeleteBook = (book) => {
    setBookToDelete(book);
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    // Handle book deletion logic here
    console.log("Deleting book:", bookToDelete);
    setShowDeleteModal(false);
    setBookToDelete(null);
  };

  const closeDeleteModal = () => {
    setShowDeleteModal(false);
    setBookToDelete(null);
  };

  return (
    <>
      <div className="all-books-container">
        <div className="all-books-card">
          <div className="all-books-header">
            <h1 className="text-2xl font-semibold text-dark-400">All Books</h1>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-sm text-light-500">
                <span>A-Z</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
              <button
                onClick={() => router.push("/admin/all-books/add-book")}
                className="all-books-create-btn"
              >
                <Plus className="w-4 h-4" />
                Create a New Book
              </button>
            </div>
          </div>

          <div className="all-books-table">
            <div className="all-books-table-header">
              <div className="all-books-table-row">
                <div className="all-books-table-cell font-medium text-light-500">
                  Book Title
                </div>
                <div className="all-books-table-cell font-medium text-light-500">
                  Author
                </div>
                <div className="all-books-table-cell font-medium text-light-500">
                  Genre
                </div>
                <div className="all-books-table-cell font-medium text-light-500">
                  Date Created
                </div>
                <div className="all-books-table-cell font-medium text-light-500">
                  Action
                </div>
              </div>
            </div>

            <div className="all-books-table-body">
              {books.map((book) => (
                <div key={book.id} className="all-books-table-row">
                  <div className="all-books-table-cell">
                    <div className="flex items-center gap-3">
                      <img
                        src={book.coverUrl}
                        alt={book.title}
                        className="w-12 h-16 rounded-md object-cover shadow-sm"
                      />
                      <span className="font-medium text-dark-400 text-base">
                        {book.title}
                      </span>
                    </div>
                  </div>

                  <div className="all-books-table-cell">
                    <span className="text-dark-400 text-base">
                      {book.author}
                    </span>
                  </div>

                  <div className="all-books-table-cell">
                    <span className="text-dark-400 text-base">
                      {book.genre}
                    </span>
                  </div>

                  <div className="all-books-table-cell">
                    <span className="text-dark-400 text-base">
                      {book.dateCreated}
                    </span>
                  </div>

                  <div className="all-books-table-cell">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() =>
                          router.push(`/admin/all-books/edit-book/${book.id}`)
                        }
                        className="all-books-edit-btn"
                      >
                        <Edit className="w-4 h-4 text-blue-500" />
                      </button>
                      <button
                        onClick={() => handleDeleteBook(book)}
                        className="all-books-delete-btn"
                      >
                        <Trash2 className="w-4 h-4 text-red-500" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      {showDeleteModal && bookToDelete && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button onClick={closeDeleteModal} className="modal-close-btn">
              <X className="size-5" />
            </button>

            <div className="modal-icon-container bg-red-100">
              <div className="modal-icon-inner bg-[#F46F70]">
                <AlertTriangle className="size-8 text-white" />
              </div>
            </div>

            <h2 className="modal-title">Delete Book</h2>
            <p className="modal-description">
              Are you sure you want to delete "{bookToDelete.title}"? This
              action cannot be undone and will permanently remove the book from
              the system.
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

export default AllBooksPage;
