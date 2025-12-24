"use client";

import EditBookPage from "@/components/Admin/EditBookPage";
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

    if (!book) return <div>Loading...</div>;
    
  return (
    <div>
      <EditBookPage bookData={book} />
    </div>
  );
};

export default page;
