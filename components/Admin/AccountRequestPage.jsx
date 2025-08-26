"use client";

import React, { useState } from "react";
import { ChevronDown, X, Check, AlertCircle, ExternalLink } from "lucide-react";

const AccountRequestsPage = () => {
  const [requests] = useState([
    {
      id: "1",
      name: "Darrell Steward",
      email: "darrellsteward@gmail.com",
      dateJoined: "Dec 19 2023",
      universityId: "90324423789",
      initials: "DS",
      bgColor: "bg-gray-600",
    },
    {
      id: "2",
      name: "Marc Atenson",
      email: "marcinee@mial.com",
      dateJoined: "Dec 19 2023",
      universityId: "45641243423",
      initials: "MA",
      bgColor: "bg-green-500",
    },
    {
      id: "3",
      name: "Susan Drake",
      email: "contact@susandrake.io",
      dateJoined: "Dec 19 2023",
      universityId: "78318342289",
      initials: "SD",
      bgColor: "bg-blue-400",
    },
  ]);

  const [showApproveModal, setShowApproveModal] = useState(false);
  const [showDenyModal, setShowDenyModal] = useState(false);
  const [selectedRequest, setSelectedRequest] = useState(null);

  const handleApprove = (request) => {
    setSelectedRequest(request);
    setShowApproveModal(true);
  };

  const handleDeny = (request) => {
    setSelectedRequest(request);
    setShowDenyModal(true);
  };

  const closeModals = () => {
    setShowApproveModal(false);
    setShowDenyModal(false);
    setSelectedRequest(null);
  };

  const confirmApprove = () => {
    // Handle approval logic here
    closeModals();
  };

  const confirmDeny = () => {
    // Handle denial logic here
    closeModals();
  };

  return (
    <>
      <div className="account-requests-container">
        <div className="account-requests-header">
          <h1 className="text-2xl font-semibold text-dark-400">
            Account Registration Requests
          </h1>
          <div className="flex items-center gap-2 text-sm text-light-500">
            <span>Oldest to Recent</span>
            <ChevronDown className="size-4" />
          </div>
        </div>

        <div className="account-requests-table">
          <div className="account-requests-table-header">
            <div className="account-requests-table-row">
              <div className="account-requests-table-cell font-medium text-light-500">
                Name
              </div>
              <div className="account-requests-table-cell font-medium text-light-500">
                Date Joined
              </div>
              <div className="account-requests-table-cell font-medium text-light-500">
                University ID No
              </div>
              <div className="account-requests-table-cell font-medium text-light-500">
                University ID Card
              </div>
              <div className="account-requests-table-cell font-medium text-light-500">
                Actions
              </div>
            </div>
          </div>

          <div className="account-requests-table-body">
            {requests.map((request) => (
              <div key={request.id} className="account-requests-table-row">
                <div className="account-requests-table-cell">
                  <div className="flex items-center gap-3">
                    <div
                      className={`size-12 rounded-full flex items-center justify-center text-white font-semibold text-sm ${request.bgColor}`}
                    >
                      {request.initials}
                    </div>
                    <div>
                      <p className="font-medium text-dark-400 text-base">
                        {request.name}
                      </p>
                      <p className="text-sm text-light-500">{request.email}</p>
                    </div>
                  </div>
                </div>

                <div className="account-requests-table-cell">
                  <span className="text-dark-400 text-base">
                    {request.dateJoined}
                  </span>
                </div>

                <div className="account-requests-table-cell">
                  <span className="text-dark-400 text-base">
                    {request.universityId}
                  </span>
                </div>

                <div className="account-requests-table-cell">
                  <button className="account-requests-view-id-btn">
                    <span>
                      View ID Card
                      <ExternalLink className="size-4 ml-1" />
                    </span>
                  </button>
                </div>

                <div className="account-requests-table-cell">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleApprove(request)}
                      className="account-requests-approve-btn"
                    >
                      Approve Account
                    </button>
                    <button
                      onClick={() => handleDeny(request)}
                      className="account-requests-deny-btn"
                    >
                      <X className="size-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Approve Modal */}
      {showApproveModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button onClick={closeModals} className="modal-close-btn">
              <X className="size-5" />
            </button>

            <div className="modal-icon-container bg-green-100">
              <div className="modal-icon-inner bg-approve-400">
                <Check className="size-8 text-white" />
              </div>
            </div>

            <h2 className="modal-title">Approve Book Request</h2>
            <p className="modal-description">
              Approve the student's account request and grant access. A
              confirmation email will be sent upon approval.
            </p>

            <button
              onClick={confirmApprove}
              className="modal-confirm-btn bg-[#4C7B62] hover:bg-green-800"
            >
              Approve & Send Confirmation
            </button>
          </div>
        </div>
      )}

      {/* Deny Modal */}
      {showDenyModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button onClick={closeModals} className="modal-close-btn">
              <X className="size-5" />
            </button>

            <div className="modal-icon-container bg-red-100">
              <div className="modal-icon-inner bg-[#F46F70]">
                <AlertCircle className="size-8 text-white" />
              </div>
            </div>

            <h2 className="modal-title">Deny Account Request</h2>
            <p className="modal-description">
              Denying this request will notify the student they're not eligible
              due to unsuccessful ID card verification.
            </p>

            <button
              onClick={confirmDeny}
              className="modal-confirm-btn bg-[#F46F70] hover:bg-red-600"
            >
              Deny & Notify Student
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default AccountRequestsPage;
