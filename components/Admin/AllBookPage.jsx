"use client";

import React, { useEffect, useState } from "react";
import {
  Edit,
  Trash2,
  Plus,
  AlertTriangle,
  X,
  Eye,
  ExternalLink,
  CheckCircle,
} from "lucide-react";
import { useRouter } from "next/navigation";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { format } from "date-fns";

const AllBooksPage = () => {
  const [books, setBooks] = useState([]);
  const [showDeleteModal, setShowDeleteModal] = useState(null);
  const [bookToDelete, setBookToDelete] = useState(null);

  useEffect(() => {
    async function loadBooks() {
      try {
        const res = await fetch("/api/admin/books");
        const data = await res.json();
        setBooks(data); // ← update state
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    }

    loadBooks();
  }, []);

  const router = useRouter();

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
                className="all-books-create-btn rounded-3xl"
              >
                <Plus className="w-4 h-4" />
                Create a New Book
              </button>
            </div>
          </div>

          <div className="p-5">
            <div className="all-books-table mb-10 hidden 2xl:block">
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
                    Available Copies
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
                        {format(book.createdAt, "PPP")}
                      </span>
                    </div>

                    <div>
                      {book.availableCopies ?? 0} out of {book.totalCopies}
                    </div>

                    <div className="all-books-table-cell">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() =>
                            router.push(`/admin/all-books/view/${book.id}`)
                          }
                          className="all-books-edit-btn"
                        >
                          <Eye className="w-4 h-4 text-blue-500" />
                        </button>
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

            {/* Mobile & Tablet Card */}
            <div className="space-y-5 2xl:hidden">
              {books.map((book) => (
                <Card
                  key={book.id}
                  className="rounded-2xl overflow-hidden shadow-md border border-gray-200"
                >
                  {/* Header */}
                  <CardHeader className="relative bg-gradient-to-r from-light-300 via-white to-light-200 p-4">
                    <button
                      onClick={() =>
                        router.push(`/admin/all-books/view/${book.id}`)
                      }
                      className="absolute top-3 right-3 px-3 py-1.5 
                     text-xs font-semibold rounded-full
                     bg-blue-600 text-white shadow-sm
                     hover:bg-blue-700 transition"
                    >
                      View
                    </button>

                    <div className="flex items-center gap-4">
                      <img
                        src={book.coverUrl}
                        alt={book.title}
                        className="w-14 h-20 rounded-lg object-cover shadow"
                      />

                      <div>
                        <CardTitle className="text-base font-bold text-dark-400 line-clamp-2">
                          {book.title}
                        </CardTitle>
                        <p className="text-sm text-light-500">{book.author}</p>
                      </div>
                    </div>
                  </CardHeader>

                  {/* Details */}
                  <CardContent className="bg-white p-4 space-y-3 text-sm">
                    <p>
                      <span className="font-semibold text-dark-400">
                        Genre:
                      </span>{" "}
                      {book.genre}
                    </p>

                    <p>
                      <span className="font-semibold text-dark-400">
                        Date Added:
                      </span>{" "}
                      {format(book.createdAt, "PPP")}
                    </p>

                    <p>
                      <span className="font-semibold text-dark-400">
                        Available Copies:
                      </span>{" "}
                      {book.availableCopies ?? 0} out of {book.totalCopies}
                    </p>
                  </CardContent>

                  {/* Action Buttons */}
                  <CardFooter className="flex justify-end gap-2 bg-gray-50 px-4 py-3 border-t">
                    <div className="flex w-full items-center gap-2 justify-center">
                      {/* Edit Book */}
                      <button
                        onClick={() =>
                          router.push(`/admin/all-books/edit-book/${book.id}`)
                        }
                        className="px-3 w-full py-2 text-sm rounded-3xl font-semibold text-blue-700 bg-blue-200 hover:bg-blue-300 transition-colors"
                      >
                        <Edit className="w-4 h-4 inline-block mr-1" />
                        Edit Book
                      </button>

                      {/* Delete Book */}
                      <button
                        onClick={() => handleDeleteBook(book)}
                        className="px-3 w-full py-2 text-sm rounded-3xl font-semibold text-red-700 bg-red-200 hover:bg-red-300 transition-colors"
                      >
                        <Trash2 className="w-4 h-4 inline-block mr-1" />
                        Delete
                      </button>
                    </div>
                  </CardFooter>
                </Card>
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
