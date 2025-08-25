"use client";

import Sidebar from "@/components/Admin/Sidebar";
import React, { useState } from "react";
import "@/app/admin/admin.css";

const layout = ({ children }) => {
  const [currentPage, setCurrentPage] = useState("home");
  return (
    <div>
      <Sidebar currentPage={currentPage} onPageChange={setCurrentPage} />
      <div className="flex w-[calc(100%-264px)] flex-1 flex-col bg-light-300 p-5 xs:p-10">
        {children}
      </div>
    </div>
  );
};

export default layout;
