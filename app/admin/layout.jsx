"use client";

import Sidebar from "@/components/Admin/Sidebar";
import React, { useState } from "react";
import "@/styles/admin.css";
import Header from "@/components/Admin/Header";
import SearchResults from "@/components/Admin/Search";
import { usePathname } from "next/navigation";
import MobileNavbar from "@/components/Admin/MobileNavbar";

const layout = ({ children }) => {
  const [currentPage, setCurrentPage] = useState("home");
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  const pathname = usePathname();

  const handleSearch = (query, results) => {
    setSearchQuery(query);
    setSearchResults(results);
    setIsSearching(!!query);
  };

  const handleClearSearch = () => {
    setSearchQuery("");
    setSearchResults([]);
    setIsSearching(false);
  };
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      {/* Desktop Sidebar */}
      <div className="hidden lg:flex">
        <Sidebar currentPage={currentPage} onPageChange={setCurrentPage} />
      </div>

      {/* Mobile Navbar */}
      <div className="flex lg:hidden">
        <MobileNavbar />
      </div>

      {/* Main Content */}
      <div className="admin-container">
        {pathname === "/admin" ? (
          <>
            <Header onSearch={handleSearch} searchQuery={searchQuery} />
            {isSearching ? (
              <SearchResults
                query={searchQuery}
                results={searchResults}
                onClearSearch={handleClearSearch}
              />
            ) : (
              children
            )}
          </>
        ) : (
          children
        )}
      </div>
    </div>
  );
};

export default layout;
