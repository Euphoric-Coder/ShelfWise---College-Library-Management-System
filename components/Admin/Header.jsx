import React from "react";
import { Search } from "lucide-react";

const Header = () => {
  return (
    <div className="admin-header">
      <div className="lg:ml-0 ml-16">
        <h1 className="text-2xl font-semibold text-dark-400 mb-2">
          Welcome, Adrian
        </h1>
        <p className="text-light-500 hidden sm:block">
          Monitor all of your projects and tasks here
        </p>
      </div>

      <div className="admin-search">
        <Search className="size-5 text-light-500" />
        <input
          type="text"
          placeholder="Search..."
          className="admin-search_input"
        />
      </div>
    </div>
  );
};

export default Header;
