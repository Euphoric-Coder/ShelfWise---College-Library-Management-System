"use client";

import React from "react";
import { Home, Users, BookOpen, UserCheck, BookPlus } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();

  const navItems = [
    { icon: Home, label: "Home", path: "/admin" },
    { icon: Users, label: "All Users", path: "/admin/all-users" },
    { icon: BookOpen, label: "All Books", path: "/admin/all-books" },
    {
      icon: UserCheck,
      label: "Borrow Requests",
      path: "/admin/borrow-requests",
    },
    {
      icon: BookPlus,
      label: "Account Requests",
      path: "/admin/account-requests",
    },
  ];

  return (
    <div className="admin-sidebar w-64 flex flex-col justify-between">
      {/* Top section */}
      <div>
        <div className="logo flex items-center gap-3 p-4">
          <div className="size-8 bg-primary-admin rounded-lg flex items-center justify-center">
            <BookOpen className="size-5 text-white" />
          </div>
          <h1 className="text-xl font-bold text-dark-400">BookWise</h1>
        </div>

        {/* Navigation */}
        <nav className="mt-10 space-y-2">
          {navItems.map((item, index) => {
            const isActive =
              pathname === item.path ||
              (item.path !== "/admin" && pathname.startsWith(item.path));

            return (
              <Link
                key={index}
                href={item.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors cursor-pointer ${
                  isActive
                    ? "bg-primary-admin text-white"
                    : "text-light-500 hover:bg-light-300"
                }`}
              >
                <item.icon className="size-5" />
                <p>{item.label}</p>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* User Section */}
      <div className="user flex items-center gap-3 p-4">
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
