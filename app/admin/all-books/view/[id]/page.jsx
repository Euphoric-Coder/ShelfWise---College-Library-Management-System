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
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-admin/5 via-light-300 to-primary-admin/10">
        <div className="text-center">
          {/* Animated Book Icon */}
          <div className="relative mb-8">
            <div className="size-24 bg-white rounded-2xl shadow-2xl flex items-center justify-center mx-auto border border-gray-100">
              <BookOpen className="size-12 text-primary-admin animate-pulse" />
            </div>
            {/* Floating dots animation */}
            <div className="absolute -top-2 -right-2 size-4 bg-pink-500 rounded-full animate-bounce"></div>
            <div className="absolute -bottom-2 -left-2 size-3 bg-blue-400 rounded-full animate-bounce delay-300"></div>
            <div className="absolute top-1/2 -right-4 size-2 bg-green-400 rounded-full animate-bounce delay-500"></div>
          </div>

          {/* Loading Text */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-dark-400 mb-2">
              Loading Book Details
            </h2>
            <p className="text-light-500">
              Please wait while we fetch the book information...
            </p>
          </div>

          {/* Animated Loading Spinner */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <Loader2 className="size-6 text-primary-admin animate-spin" />
            <span className="text-primary-admin font-medium">Loading...</span>
          </div>

          {/* Loading Progress Bars */}
          <div className="max-w-md mx-auto space-y-3">
            <div className="bg-gray-200 rounded-full h-2 overflow-hidden">
              <div
                className="bg-gradient-to-r from-primary-admin to-blue-500 h-full rounded-full animate-pulse"
                style={{ width: "75%" }}
              ></div>
            </div>
            <div className="bg-gray-200 rounded-full h-2 overflow-hidden">
              <div
                className="bg-gradient-to-r from-pink-500 to-purple-500 h-full rounded-full animate-pulse delay-200"
                style={{ width: "60%" }}
              ></div>
            </div>
            <div className="bg-gray-200 rounded-full h-2 overflow-hidden">
              <div
                className="bg-gradient-to-r from-green-500 to-teal-500 h-full rounded-full animate-pulse delay-500"
                style={{ width: "45%" }}
              ></div>
            </div>
          </div>

          {/* Loading Steps */}
          <div className="mt-8 max-w-sm mx-auto">
            <div className="space-y-2 text-sm text-light-500">
              <div className="flex items-center gap-2">
                <div className="size-2 bg-green-500 rounded-full"></div>
                <span>Fetching book information</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="size-2 bg-yellow-500 rounded-full animate-pulse"></div>
                <span>Loading media content</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="size-2 bg-gray-300 rounded-full"></div>
                <span>Preparing display</span>
              </div>
            </div>
          </div>

          {/* Back Button */}
          <button
            onClick={() => router.push("/admin/all-books")}
            className="mt-8 inline-flex items-center gap-2 text-primary-admin hover:text-primary-admin/80 font-medium transition-colors"
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
