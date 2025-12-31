"use client";

import BookList from "@/components/BookList";
import BookOverview from "@/components/BookOverview";
import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    async function loadBooks() {
      try {
        const res = await fetch("/api/user/books");
        const data = await res.json();
        setBooks(data); // ← update state
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    }

    loadBooks();
  }, []);

  if (books.length < 1)
    return (
      <div className="w-full h-screen flex flex-col items-center justify-center">
        {/* Glow Ring */}
        <div className="relative">
          <div className="absolute inset-0 w-32 h-32 rounded-full bg-blue-500/20 blur-3xl animate-pulse"></div>

          {/* Book Loader */}
          <div className="relative w-20 h-20 animate-bounce">
            <img
              src="/icons/logo.svg"
              alt="Shelf Wise Loader"
              className="w-full h-full object-contain drop-shadow-[0_0_12px_rgba(255,255,255,0.25)]"
              draggable="false"
            />
          </div>
        </div>

        {/* Loading Text */}
        <p className="mt-6 text-lg font-medium text-gray-300 animate-pulse tracking-wide">
          Loading your library…
        </p>
      </div>
    );

  return (
    <>
      <BookOverview {...books[0]} />
      <BookList title="Latest Books" books={books} containerClassName="mt-28" />
    </>
  );
};

export default Home;
