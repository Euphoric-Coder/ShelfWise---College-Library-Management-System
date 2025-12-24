"use client";

import ViewBook from "@/components/Admin/ViewBook";
import { ArrowLeft, BookOpen, Loader2 } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const page = () => {
  const router = useRouter();
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    async function fetchBook() {
      console.log("Fetching book with ID:", id);
      const res = await fetch(`/api/admin/books/${id}`);
      const data = await res.json();
      setBook(data);
    }

    fetchBook();
  }, [id]);

  console.log("Book data:", book);

  if (!book)
    return (
      <div className="min-h-screen flex items-center justify-center bg-light-300">
        <div className="text-center">
          {/* Simple Book Icon */}
          <div className="mb-8">
            <div className="size-16 bg-white rounded-xl shadow-sm flex items-center justify-center mx-auto border border-gray-200">
              <BookOpen className="size-8 text-primary-admin" />
            </div>
          </div>

          {/* Loading Text */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-dark-400 mb-2">
              Loading Book Details
            </h2>
            <p className="text-light-500 text-sm">Please wait...</p>
          </div>

          {/* Simple Loading Spinner */}
          <div className="flex items-center justify-center gap-2 mb-6">
            <Loader2 className="size-6 text-primary-admin animate-spin" />
            <span className="text-primary-admin text-sm">Loading...</span>
          </div>

          {/* Back Button */}
          <button
            onClick={() => router.push("/admin/all-books")}
            className="mt-6 inline-flex items-center gap-2 text-primary-admin hover:text-primary-admin/80 text-sm transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Go back
          </button>
        </div>
      </div>
    );

  return (
    <div>
      <ViewBook
        bookData={book}
        onGoBack={() => router.push("/admin/all-books")}
      />
    </div>
  );
};

export default page;
