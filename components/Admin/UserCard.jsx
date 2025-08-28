"use client";

import React, { useState } from "react";
import { X, CheckCircle, AlertCircle } from "lucide-react";
import { toast } from "sonner";

const UserCard = ({ name, email, initials, bgColor }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleApprove = () => {
    console.log({ name, email, status: "approved" });
    toast.success(`User "${name}" approved!`);
    setIsOpen(false);
  };

  const handleDeny = () => {
    console.log({ name, email, status: "denied" });
    toast.error(`User "${name}" denied!`);
    setIsOpen(false);
  };

  return (
    <>
      {/* Card */}
      <div
        className="user-card hover:shadow-md transition-shadow cursor-pointer duration-200 w-full p-4 rounded-lg border relative group"
        onClick={() => setIsOpen(true)}
      >
        <div
          className={`size-16 rounded-full flex items-center justify-center text-white font-semibold text-lg shadow-sm ${bgColor}`}
        >
          {initials}
        </div>
        <p className="name font-medium text-gray-800">{name}</p>
        <p className="email text-sm text-gray-600">{email}</p>

        {/* Hover hint */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/40 text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity rounded-lg">
          Click to approve or deny
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="modal-overlay fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="modal-content bg-white rounded-xl shadow-xl w-full max-w-md p-6 relative animate-fadeIn">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <X className="w-5 h-5" />
            </button>

            {/* User Info */}
            <div className="flex flex-col items-center text-center space-y-3">
              <div
                className={`w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-lg ${bgColor}`}
              >
                {initials}
              </div>
              <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
              <p className="text-sm text-gray-600">{email}</p>
            </div>

            {/* Approval Message */}
            <div className="mt-6 text-center space-y-2">
              <h3 className="text-lg font-semibold text-gray-800">
                Account Approval Request
              </h3>
              <p className="text-sm text-gray-600">
                Do you want to{" "}
                <span className="font-medium text-green-600">approve</span> or{" "}
                <span className="font-medium text-red-600">deny</span> this
                account registration request?
              </p>
            </div>

            {/* Actions */}
            <div className="mt-6 flex gap-3">
              <button
                onClick={handleApprove}
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-white bg-approve-400 hover:bg-green-800 transition-colors"
              >
                <CheckCircle className="w-5 h-5" />
                Approve
              </button>
              <button
                onClick={handleDeny}
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-white bg-[#F46F70] hover:bg-red-600 transition-colors"
              >
                <AlertCircle className="w-5 h-5" />
                Deny
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default UserCard;
