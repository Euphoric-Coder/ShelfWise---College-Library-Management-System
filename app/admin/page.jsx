"use client";

import BookCard from "@/components/Admin/BookCard";
import SectionHeader from "@/components/Admin/SectionHeader";
import StatsCards from "@/components/Admin/StatsCard";
import UserCard from "@/components/Admin/UserCard";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

const page = () => {
  const borrowRequests = [
    {
      title: "Inside Evil: Inside Evil Series, Book 1",
      author: "Rachel Heng",
      genre: "Strategic, Fantasy",
      coverUrl:
        "https://images.pexels.com/photos/1553575/pexels-photo-1553575.jpeg?auto=compress&cs=tinysrgb&w=400",
      borrowedBy: "Daniel Stewart",
      borrowDate: "13/01/24",
    },
    {
      title: "Jayne Castle - People in Glass Houses",
      author: "Rachel Heng",
      genre: "Strategic, Fantasy",
      coverUrl:
        "https://images.pexels.com/photos/1130980/pexels-photo-1130980.jpeg?auto=compress&cs=tinysrgb&w=400",
      borrowedBy: "Daniel Stewart",
      borrowDate: "12/01/24",
    },
    {
      title: "The Great Reclamation: A Novel",
      author: "Rachel Heng",
      genre: "Strategic, Fantasy",
      coverUrl:
        "https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=400",
      borrowedBy: "Daniel Stewart",
      borrowDate: "11/01/24",
    },
  ];
  const accountRequests = [
    {
      name: "Marc Atenson",
      email: "marcatenson@gmail.com",
      initials: "MA",
      bgColor: "bg-gray-400",
    },
    {
      name: "Susan Drake",
      email: "susan@susamdrake.com",
      initials: "SD",
      bgColor: "bg-blue-400",
    },
    {
      name: "Ronald Richards",
      email: "ronald.richards@gmail.com",
      initials: "RR",
      bgColor: "bg-yellow-400",
    },
    {
      name: "Jane Cooper",
      email: "jane.cooper@gmail.com",
      initials: "JC",
      bgColor: "bg-gray-400",
    },
    {
      name: "Ian Warren",
      email: "ian.warren@gmail.com",
      initials: "IW",
      bgColor: "bg-green-400",
    },
    {
      name: "Darrell Steward",
      email: "darrell.steward@gmail.com",
      initials: "DS",
      bgColor: "bg-gray-600",
    },
  ];

  const recentlyAddedBooks = [
    {
      title: "The Great Reclamation: A Novel by Rachel Heng",
      author: "Rachel Heng",
      genre: "Strategic, Fantasy",
      coverUrl:
        "https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=400",
      date: "12/01/24",
    },
    {
      title: "Inside Evil: Inside Evil Series, Book 1",
      author: "Rachel Heng",
      genre: "Strategic, Fantasy",
      coverUrl:
        "https://images.pexels.com/photos/1553575/pexels-photo-1553575.jpeg?auto=compress&cs=tinysrgb&w=400",
      date: "12/01/24",
    },
    {
      title: "Jayne Castle - People in Glass Houses",
      author: "Rachel Heng",
      genre: "Strategic, Fantasy",
      coverUrl:
        "https://images.pexels.com/photos/1130980/pexels-photo-1130980.jpeg?auto=compress&cs=tinysrgb&w=400",
      date: "12/01/24",
    },
    {
      title: "The Great Reclamation: A Novel by Rachel Heng",
      author: "Rachel Heng",
      genre: "Strategic, Fantasy",
      coverUrl:
        "https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=400",
      date: "11/01/24",
    },
    {
      title: "Inside Evil: Inside Evil Series, Book 1",
      author: "Rachel Heng",
      genre: "Strategic, Fantasy",
      coverUrl:
        "https://images.pexels.com/photos/1553575/pexels-photo-1553575.jpeg?auto=compress&cs=tinysrgb&w=400",
      date: "12/01/24",
    },
    {
      title: "Jayne Castle - People in Glass Houses",
      author: "Rachel Heng",
      genre: "Strategic, Fantasy",
      coverUrl:
        "https://images.pexels.com/photos/1130980/pexels-photo-1130980.jpeg?auto=compress&cs=tinysrgb&w=400",
      date: "12/01/24",
    },
  ];

  const router = useRouter();
  return (
    <div>
      <>
        <StatsCards />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-10">
          {/* Left Column - Borrow Requests and Account Requests */}
          <div className="space-y-10">
            {/* Borrow Requests */}
            <div className="borrow-requests-container">
              <SectionHeader
                title="Borrow Requests"
                viewAllLink={true}
                redirectTo="/admin/borrow-requests"
              />
              <div className="borrow-requests-list">
                {borrowRequests.map((book, index) => (
                  <BookCard
                    key={index}
                    title={book.title}
                    author={book.author}
                    genre={book.genre}
                    coverUrl={book.coverUrl}
                    borrowedBy={book.borrowedBy}
                    borrowDate={book.borrowDate}
                    showActions={true}
                  />
                ))}
              </div>
            </div>

            {/* Account Requests */}
            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
              <SectionHeader
                title="Account Requests"
                viewAllLink={true}
                redirectTo="/admin/account-requests"
              />
              <div className="grid grid-cols-3 gap-4">
                {accountRequests.map((user, index) => (
                  <UserCard
                    key={index}
                    name={user.name}
                    email={user.email}
                    initials={user.initials}
                    bgColor={user.bgColor}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Recently Added Books */}
          <div className="borrow-requests-container">
            <SectionHeader
              title="Recently Added Books"
              viewAllLink={true}
              redirectTo="/admin/all-books"
            />
            <div className="add-new-book_btn cursor-pointer hover:bg-light-400 transition-colors border border-gray-100 shadow-sm hover:shadow-md" onClick={() => router.push("/admin/all-books/add-book")}>
              <div>
                <Plus className="size-6 text-primary-admin" />
              </div>
              <p>Add New Book</p>
            </div>
            <div className="space-y-2">
              {recentlyAddedBooks.map((book, index) => (
                <div key={index} className="book-item">
                  <img
                    src={book.coverUrl}
                    alt={book.title}
                    className="w-12 h-16 rounded-md object-cover shadow-sm"
                  />
                  <div className="flex-1">
                    <h4 className="font-medium text-dark-400 text-sm line-clamp-1">
                      {book.title}
                    </h4>
                    <p className="text-light-500 text-xs">
                      By {book.author} • {book.genre}
                    </p>
                    <p className="text-light-500 text-xs">{book.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default page;
