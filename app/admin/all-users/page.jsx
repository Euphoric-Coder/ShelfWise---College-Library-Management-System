"use client";

import React, { useState } from "react";
import AllUsersPage from "@/components/Admin/AllUsersPage";
import Header from "@/components/Admin/Header";
import SearchResults from "@/components/Admin/Search";

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

  return (
    <div>
      {/* Header with search bar */}
      <Header onSearch={handleSearch} searchQuery={searchQuery} />

      {/* Always use AllUsersPage */}
      <AllUsersPage users={displayedUsers} setUsers={setUsers} />
    </div>
  );
};

export default Page;
