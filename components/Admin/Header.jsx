import React from "react";
import { Search } from "lucide-react";

const Header = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="admin-header">
      <div>
        <h1 className="text-2xl font-semibold text-dark-400 mb-2">
          Welcome, Adrian
        </h1>
        <p className="text-light-500">
          Monitor all of your projects and tasks here
        </p>
      </div>

      <div className="admin-search">
        <Search className="size-5 text-light-500" />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search users, books by title, author, or genre..."
          className="admin-search_input"
        />
      </div>
    </div>
  );
};

export default Header;
