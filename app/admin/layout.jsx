"use client";

import Sidebar from "@/components/Admin/Sidebar";
import React, { useState } from "react";
import "@/styles/admin.css";
import Header from "@/components/Admin/Header";

const layout = ({ children }) => {
  const [currentPage, setCurrentPage] = useState("home");
  const [searchTerm, setSearchTerm] = React.useState("");
  return (
    <div className="flex min-h-screen">
      <Sidebar currentPage={currentPage} onPageChange={setCurrentPage} />
      <div className="admin-container">
        <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        {searchTerm ? <>Testing it out</> : <>{children}</>}
      </div>
    </div>
  );
};

export default layout;
