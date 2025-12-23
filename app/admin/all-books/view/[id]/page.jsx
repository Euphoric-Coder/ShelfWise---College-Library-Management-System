"use client";

import ViewBook from "@/components/Admin/ViewBook";
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

  if (!book) return <p>Loading...</p>;

  return (
    <div>
      <ViewBook bookData={book} onGoBack={() => window.history.back()} />
    </div>
  );
};

export default page;
