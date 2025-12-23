"use client";

import { useParams } from "next/navigation";
import React from "react";

const page = () => {
  const { id } = useParams();
  
  console.log("Book ID:", id);

  return <div>View Book</div>;
};

export default page;
