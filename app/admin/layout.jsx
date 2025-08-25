"use client";

import Sidebar from "@/components/Admin/Sidebar";
import React, { useState } from "react";
import "@/styles/admin.css"

const layout = ({ children }) => {
  const [currentPage, setCurrentPage] = useState("home");
  return (
    <div className="flex min-h-screen">
      <Sidebar currentPage={currentPage} onPageChange={setCurrentPage} />
      <div className="admin-container">
        {children}
      </div>
    </div>
  );
};

export default layout;
