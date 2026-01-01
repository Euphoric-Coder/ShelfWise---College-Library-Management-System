"use client";

import BookOverview from "@/components/BookOverview";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const page = () => {
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

  if (!book) return <div>Loading...</div>;

  return (
    <div>
      <BookOverview {...book} />

      <div className="book-details">
        <div className="flex-[1.5]">
          <section className="flex flex-col gap-7">
            <h3>Video</h3>

            <video src={book.videoUrl} controls className="w-full" />
          </section>
          <section className="mt-10 flex flex-col gap-7">
            <h3>Summary</h3>

            <div className="space-y-5 text-xl text-light-100">
              {book.summary.split("\n").map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default page;
