"use client";

import React, { useState } from "react";
import AllUsersPage from "@/components/Admin/AllUsersPage";
import Header from "@/components/Admin/Header";
import { Search } from "lucide-react";

const Page = () => {
  const [users, setUsers] = useState([
    {
      id: "1",
      name: "Darrell Steward",
      email: "darrellsteward@gmail.com",
      dateJoined: "Dec 19 2023",
      role: "User",
      booksBorrowed: 10,
      universityId: "90324423789",
      initials: "DS",
      bgColor: "bg-gray-600",
    },
    {
      id: "2",
      name: "Marc Atenson",
      email: "marcinee@mial.com",
      dateJoined: "Dec 19 2023",
      role: "Admin",
      booksBorrowed: 32,
      universityId: "90324423789",
      initials: "MA",
      bgColor: "bg-green-500",
    },
    {
      id: "3",
      name: "Susan Drake",
      email: "contact@susandrake.io",
      dateJoined: "Dec 19 2023",
      role: "User",
      booksBorrowed: 13,
      universityId: "90324423789",
      initials: "SD",
      bgColor: "bg-blue-400",
    },
  ]);

  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (query, results) => {
    setSearchQuery(query);
    setSearchResults(results);
  };

  const handleClearSearch = () => {
    setSearchQuery("");
    setSearchResults([]);
  };

  // If searching, show only matched users
  const displayedUsers =
    searchQuery && searchResults.length > 0 ? searchResults : users;

  const noResults = searchQuery && searchResults.length === 0; // true if search active but nothing found

  return (
    <div>
      {/* Header with search bar */}
      <Header onSearch={handleSearch} searchQuery={searchQuery} />

      {searchQuery !== "" && (
        <div className="search-results-header">
          <div className="flex items-center gap-3">
            <div className="search-results-icon">
              <Search className="size-5 text-primary-admin" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-dark-400">
                Search Results for "{searchQuery}"
              </h2>
              <p className="text-sm text-light-500 mt-1">
                Found {searchResults.length} result
                {searchResults.length !== 1 ? "s" : ""} across users and books
              </p>
            </div>
          </div>
          <button
            onClick={() => handleClearSearch()}
            className="search-clear-btn"
          >
            Clear Search
          </button>
        </div>
      )}

      {/* If no results found */}
      {noResults ? (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <div className="bg-gray-100 p-6 rounded-full mb-4">
            <Search className="w-8 h-8 text-gray-400" />
          </div>
          <h2 className="text-lg font-semibold text-gray-700">
            No results found
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Try adjusting your search. We couldn’t find any users matching "
            <span className="font-medium">{searchQuery}</span>".
          </p>
          <button
            onClick={handleClearSearch}
            className="mt-4 px-4 py-2 bg-primary-admin text-white rounded-md hover:bg-primary-admin/90 transition-colors"
          >
            Clear Search
          </button>
        </div>
      ) : (
        // Otherwise show users normally
        <AllUsersPage users={displayedUsers} setUsers={setUsers} />
      )}
    </div>
  );
};

export default Page;
