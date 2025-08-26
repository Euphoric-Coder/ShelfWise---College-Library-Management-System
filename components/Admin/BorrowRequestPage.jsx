"use client";

import React, { useState } from "react";
import { ArrowLeft, Edit, Play, ChevronDown, Check } from "lucide-react";

const BorrowRequestsPage = () => {
  const [selectedBook, setSelectedBook] = useState(null);
  const [statusDropdown, setStatusDropdown] = useState(null);

  const borrowRequests = [
    {
      id: "1",
      bookTitle: "The Great Reclamation...",
      bookCover:
        "https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=400",
      userRequested: {
        name: "Darrell Steward",
        email: "steward@gmail.com",
        avatar: "",
        initials: "DS",
        bgColor: "bg-gray-600",
      },
      status: "Borrowed",
      borrowedDate: "Dec 19 2023",
      returnDate: "Dec 29 2023",
      dueDate: "Dec 31 2023",
      author: "Rachel Heng",
      genre: "Strategic, Fantasy",
      createdAt: "12/01/24",
      summary:
        "People in Glass Houses by Jayne Castle (a pseudonym for Jayne Ann Krentz) is a science fiction romance set in a future world where people with psychic abilities live in harmony with advanced technology. The story follows the main characters, Harriet and Sam, who are drawn together under unusual circumstances.",
    },
    {
      id: "2",
      bookTitle: "Inside Evil: Inside Evil...",
      bookCover:
        "https://images.pexels.com/photos/1553575/pexels-photo-1553575.jpeg?auto=compress&cs=tinysrgb&w=400",
      userRequested: {
        name: "Marc Atenson",
        email: "marcinee@mial.com",
        avatar: "",
        initials: "MA",
        bgColor: "bg-green-500",
      },
      status: "Late Return",
      borrowedDate: "Dec 21 2024",
      returnDate: "Jan 17 2024",
      dueDate: "Jan 12 2024",
      author: "Rachel Heng",
      genre: "Strategic, Fantasy",
      createdAt: "12/01/24",
      summary:
        "People in Glass Houses by Jayne Castle (a pseudonym for Jayne Ann Krentz) is a science fiction romance set in a future world where people with psychic abilities live in harmony with advanced technology.",
    },
    {
      id: "3",
      bookTitle: "Jayne Castle - People i...",
      bookCover:
        "https://images.pexels.com/photos/1130980/pexels-photo-1130980.jpeg?auto=compress&cs=tinysrgb&w=400",
      userRequested: {
        name: "Susan Drake",
        email: "contact@susandrake.io",
        avatar: "",
        initials: "SD",
        bgColor: "bg-blue-400",
      },
      status: "Returned",
      borrowedDate: "Dec 31 2023",
      returnDate: "Jan 15 2023",
      dueDate: "Jan 25 2023",
      author: "Jayne Ann Krentz",
      genre: "Strategic, Fantasy",
      createdAt: "12/01/24",
      summary:
        "People in Glass Houses by Jayne Castle (a pseudonym for Jayne Ann Krentz) is a science fiction romance set in a future world where people with psychic abilities live in harmony with advanced technology. The story follows the main characters, Harriet and Sam, who are drawn together under unusual circumstances.",
    },
    {
      id: "4",
      bookTitle: "The Great Reclamation...",
      bookCover:
        "https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=400",
      userRequested: {
        name: "David Smith",
        email: "davide@yahoo.com",
        avatar: "",
        initials: "DS",
        bgColor: "bg-orange-500",
      },
      status: "Borrowed",
      borrowedDate: "Dec 19 2023",
      returnDate: "Dec 29 2023",
      dueDate: "Dec 31 2023",
      author: "Rachel Heng",
      genre: "Strategic, Fantasy",
      createdAt: "12/01/24",
      summary:
        "People in Glass Houses by Jayne Castle (a pseudonym for Jayne Ann Krentz) is a science fiction romance set in a future world where people with psychic abilities live in harmony with advanced technology.",
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Borrowed":
        return "text-blue-600";
      case "Late Return":
        return "text-red-600";
      case "Returned":
        return "text-green-600";
      default:
        return "text-gray-600";
    }
  };

  const handleBookClick = (book) => {
    setSelectedBook(book);
  };

  const handleStatusChange = (requestId, newStatus) => {
    // Handle status change logic here
    setStatusDropdown(null);
  };

  if (selectedBook) {
    return (
      <div className="borrow-requests-detail">
        <button
          onClick={() => setSelectedBook(null)}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-800 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Go back
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Book Info */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-48 h-64 bg-pink-100 rounded-lg flex items-center justify-center p-4">
                <img
                  src={selectedBook.bookCover}
                  alt={selectedBook.bookTitle}
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
                    <span>{selectedBook.createdAt}</span>
                  </div>
                </div>

                <h1 className="text-2xl font-semibold text-gray-800">
                  Jayne Castle - People in Glass Houses
                </h1>

                <p className="text-lg text-gray-600">
                  By {selectedBook.author}
                </p>

                <p className="text-gray-500">{selectedBook.genre}</p>

                <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                  <Edit className="w-4 h-4" />
                  Edit Book
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - Video */}
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-800">Video</h2>
            <div className="relative w-full h-64 bg-gradient-to-r from-pink-200 via-purple-200 to-blue-200 rounded-lg overflow-hidden">
              <img
                src="https://images.pexels.com/photos/1130980/pexels-photo-1130980.jpeg?auto=compress&cs=tinysrgb&w=800"
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

        {/* Summary Section */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Summary</h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              People in Glass Houses by Jayne Castle (a pseudonym for Jayne Ann
              Krentz) is a science fiction romance set in a future world where
              people with psychic abilities live in harmony with advanced
              technology. The story follows the main characters, Harriet and
              Sam, who are drawn together under unusual circumstances.
            </p>
            <p>
              Harriet, a talented psychic, works for a company that offers
              psychic services in a futuristic society. When she finds herself
              tangled in a dangerous situation involving a mysterious
              conspiracy, she enlists the help of Sam, a former investigator
              with a dark past. As they uncover the secrets surrounding a glass
              house—a mysterious structure tied to their investigation—they must
              navigate their growing attraction while facing hidden dangers.
            </p>
            <p>
              The novel combines elements of mystery, suspense, and romance,
              with a focus on psychic abilities, futuristic technology, and the
              complexities of relationships. The title, "People in Glass
              Houses," symbolizes the fragile nature of the world the characters
              inhabit and the vulnerabilities they face in their personal and
              professional lives.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">
          Borrow Book Requests
        </h1>
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <span>Oldest to Recent</span>
          <ChevronDown className="w-4 h-4" />
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="bg-gray-50 px-6 py-4">
          <div className="grid grid-cols-7 gap-4 items-center">
            <div className="text-sm font-medium text-gray-500">Book</div>
            <div className="text-sm font-medium text-gray-500">
              User Requested
            </div>
            <div className="text-sm font-medium text-gray-500">Status</div>
            <div className="text-sm font-medium text-gray-500">
              Borrowed date
            </div>
            <div className="text-sm font-medium text-gray-500">Return date</div>
            <div className="text-sm font-medium text-gray-500">Due Date</div>
            <div className="text-sm font-medium text-gray-500">Receipt</div>
          </div>
        </div>

        <div className="divide-y divide-gray-100">
          {borrowRequests.map((request) => (
            <div
              key={request.id}
              className="grid grid-cols-7 gap-4 items-center px-6 py-4 hover:bg-gray-50/50 transition-colors duration-200"
            >
              <div className="text-sm">
                <div
                  className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity"
                  onClick={() => handleBookClick(request)}
                >
                  <img
                    src={request.bookCover}
                    alt={request.bookTitle}
                    className="w-12 h-16 rounded-md object-cover shadow-sm"
                  />
                  <span className="font-medium text-gray-800 text-base">
                    {request.bookTitle}
                  </span>
                </div>
              </div>

              <div className="text-sm">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold text-sm ${request.userRequested.bgColor}`}
                  >
                    {request.userRequested.initials}
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">
                      {request.userRequested.name}
                    </p>
                    <p className="text-sm text-gray-500">
                      {request.userRequested.email}
                    </p>
                  </div>
                </div>
              </div>

              <div className="text-sm">
                <div className="relative">
                  <button
                    onClick={() =>
                      setStatusDropdown(
                        statusDropdown === request.id ? null : request.id
                      )
                    }
                    className={`font-medium ${getStatusColor(
                      request.status
                    )} hover:opacity-80 transition-opacity text-base`}
                  >
                    {request.status}
                  </button>

                  {statusDropdown === request.id && (
                    <div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10 min-w-[120px] py-1">
                      <button
                        onClick={() =>
                          handleStatusChange(request.id, "Borrowed")
                        }
                        className="w-full px-3 py-2 text-left text-sm hover:bg-gray-50 flex items-center justify-between transition-colors text-blue-600"
                      >
                        <span>Borrowed</span>
                        {request.status === "Borrowed" && (
                          <Check className="w-4 h-4" />
                        )}
                      </button>
                      <button
                        onClick={() =>
                          handleStatusChange(request.id, "Returned")
                        }
                        className="w-full px-3 py-2 text-left text-sm hover:bg-gray-50 flex items-center justify-between transition-colors text-green-600"
                      >
                        <span>Returned</span>
                        {request.status === "Returned" && (
                          <Check className="w-4 h-4" />
                        )}
                      </button>
                      <button
                        onClick={() =>
                          handleStatusChange(request.id, "Late Return")
                        }
                        className="w-full px-3 py-2 text-left text-sm hover:bg-gray-50 flex items-center justify-between transition-colors text-red-600"
                      >
                        <span>Late Return</span>
                        {request.status === "Late Return" && (
                          <Check className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                  )}
                </div>
              </div>

              <div className="text-sm">
                <span className="text-gray-800 text-base">
                  {request.borrowedDate}
                </span>
              </div>

              <div className="text-sm">
                <span className="text-gray-800 text-base">
                  {request.returnDate}
                </span>
              </div>

              <div className="text-sm">
                <span className="text-gray-800 text-base">
                  {request.dueDate}
                </span>
              </div>

              <div className="text-sm">
                <button className="text-blue-600 hover:text-blue-700 font-medium transition-colors text-base flex items-center gap-2">
                  <div className="w-4 h-4 border border-blue-600 rounded flex items-center justify-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-sm"></div>
                  </div>
                  Generate
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BorrowRequestsPage;
