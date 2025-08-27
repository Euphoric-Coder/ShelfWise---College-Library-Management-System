"use client";

import Sidebar from "@/components/Admin/Sidebar";
import React, { useState } from "react";
import "@/styles/admin.css";
import Header from "@/components/Admin/Header";
import SearchResults from "@/components/Admin/Search";

const layout = ({ children }) => {
  const [currentPage, setCurrentPage] = useState("home");
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

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
    <div className="flex min-h-screen">
      <Sidebar currentPage={currentPage} onPageChange={setCurrentPage} />
      <div className="admin-container">
        <Header onSearch={handleSearch} searchQuery={searchQuery} />
        {isSearching ? (
          <SearchResults
            query={searchQuery}
            results={searchResults}
            onClearSearch={handleClearSearch}
          />
        ) : (
          <>{children}</>
        )}
      </div>
    </div>
  );
};

export default layout;
