import React from "react";
import { Home, Users, BookOpen, UserCheck, BookPlus } from "lucide-react";

const Sidebar = ({ currentPage, onPageChange }) => {
  const navItems = [
    { icon: Home, label: "Home", page: "home" },
    { icon: Users, label: "All Users", page: "all-users" },
    { icon: BookOpen, label: "All Books", page: "all-books" },
    { icon: UserCheck, label: "Borrow Requests", page: "borrow-requests" },
    { icon: BookPlus, label: "Account Requests", page: "account-requests" },
  ];

  return (
    <div className="admin-sidebar w-64">
      <div>
        <div className="logo">
          <div className="size-8 bg-primary-admin rounded-lg flex items-center justify-center">
            <BookOpen className="size-5 text-white" />
          </div>
          <h1>BookWise</h1>
        </div>

        <nav className="mt-10 space-y-2">
          {navItems.map((item, index) => (
            <a
              key={index}
              onClick={() => onPageChange(item.page)}
              className={`link ${
                currentPage === item.page
                  ? "bg-primary-admin text-white"
                  : "text-light-500 hover:bg-light-300"
              }`}
            >
              <item.icon className="size-5" />
              <p>{item.label}</p>
            </a>
          ))}
        </nav>
      </div>

      <div className="user">
        <div className="size-10 bg-primary-admin rounded-full flex items-center justify-center text-white font-semibold">
          A
        </div>
        <div className="flex-1 max-md:hidden">
          <p className="font-medium text-dark-400">Adrian Hajdin</p>
          <p className="text-sm text-light-500">adrian@jsmastery.pro</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
