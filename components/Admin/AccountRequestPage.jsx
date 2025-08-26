"use client";

import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { ChevronDown, X, Check, AlertCircle, ExternalLink, XCircle, CheckCircle } from "lucide-react";

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
      <div className="account-requests-header mb-4">
        <h1 className="text-2xl font-semibold text-dark-400">
          Account Registration Requests
        </h1>
        <div className="flex items-center gap-2 text-sm text-light-500">
          <span>Oldest to Recent</span>
          <ChevronDown className="size-4" />
        </div>
      </div>

      {/* Styled Table Container */}
      <div className="overflow-hidden hidden xl:flex rounded-3xl border border-gray-200 shadow-sm">
        <Table>
          <TableHeader>
            <TableRow className="bg-[#f7f8ff] hover:bg-[#f7f8ff]">
              <TableHead className="text-left font-semibold text-gray-700 py-4">
                Name
              </TableHead>
              <TableHead className="text-center font-semibold text-gray-700 py-4">
                Date Joined
              </TableHead>
              <TableHead className="text-center font-semibold text-gray-700 py-4">
                University ID No
              </TableHead>
              <TableHead className="text-center font-semibold text-gray-700 py-4">
                University ID Card
              </TableHead>
              <TableHead className="text-center font-semibold text-gray-700 py-4">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {requests.map((request) => (
              <TableRow
                key={request.id}
                className="bg-white hover:bg-gray-50 transition-colors"
              >
                {/* Name + Avatar (Left aligned) */}
                <TableCell className="text-left py-4">
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold text-sm ${request.bgColor}`}
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
                </TableCell>

                {/* Date Joined (Center aligned) */}
                <TableCell className="text-center py-4">
                  <span className="text-dark-400 text-base">
                    {request.dateJoined}
                  </span>
                </TableCell>

                {/* University ID (Center aligned) */}
                <TableCell className="text-center py-4">
                  <span className="text-dark-400 text-base">
                    {request.universityId}
                  </span>
                </TableCell>

                {/* University ID Card (Center aligned) */}
                <TableCell className="text-center py-4">
                  <button className="text-blue-600 hover:underline inline-flex items-center text-sm">
                    View ID Card
                    <ExternalLink className="w-4 h-4 ml-1" />
                  </button>
                </TableCell>

                {/* Actions (Center aligned) */}
                <TableCell className="text-center py-4">
                  <div className="flex items-center gap-2 justify-center">
                    <button
                      onClick={() => handleApprove(request)}
                      className="px-3 py-2 text-sm rounded-3xl font-semibold text-green-700 bg-green-200 hover:bg-green-300 transition-colors"
                    >
                      <CheckCircle className="w-5 h-5 inline-block mr-1" />
                      Approve Account
                    </button>
                    <button
                      onClick={() => handleDeny(request)}
                      className="flex items-center p-2 rounded-3xl font-semibold text-sm text-red-600 bg-red-200 hover:bg-red-300 transition-colors"
                    >
                      <XCircle className="w-5 h-5 inline-block mr-1" />
                      Deny Request
                    </button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Mobile Cards */}
      <div className="space-y-5 xl:hidden">
        {requests.map((request) => (
          <Card
            key={request.id}
            className="rounded-2xl overflow-hidden shadow-md border border-gray-200"
          >
            {/* Light Gradient Header */}
            <CardHeader className="bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 p-4">
              <div className="flex items-center gap-4">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold text-sm bg-blue-400`}
                >
                  {request.initials}
                </div>
                <div>
                  <CardTitle className="text-lg font-bold text-gray-800">
                    {request.name}
                  </CardTitle>
                  <p className="text-sm text-gray-600">{request.email}</p>
                </div>
              </div>
            </CardHeader>

            {/* Details */}
            <CardContent className="bg-white p-4 space-y-3 text-sm">
              <p>
                <span className="font-semibold text-gray-700">
                  Date Joined:
                </span>{" "}
                {request.dateJoined}
              </p>
              <p>
                <span className="font-semibold text-gray-700">
                  University ID:
                </span>{" "}
                {request.universityId}
              </p>
              <p>
                <span className="font-semibold text-gray-700">ID Card:</span>{" "}
                <button className="text-blue-600 hover:underline inline-flex items-center">
                  View ID Card
                  <ExternalLink className="w-4 h-4 ml-1" />
                </button>
              </p>
            </CardContent>

            {/* Footer Buttons */}
            <CardFooter className="flex justify-end gap-2 bg-gray-50 px-4 py-3 border-t">
              <div className="flex w-full items-center gap-2 justify-center">
                <button
                  onClick={() => handleApprove(request)}
                  className="px-3 w-full py-2 text-sm rounded-3xl font-semibold text-green-700 bg-green-200 hover:bg-green-300 transition-colors"
                >
                  <CheckCircle className="w-5 h-5 inline-block mr-1" />
                  Approve Account
                </button>
                <button
                  onClick={() => handleDeny(request)}
                  className="px-3 w-full py-2 text-sm rounded-3xl font-semibold text-red-700 bg-red-200 hover:bg-red-300 transition-colors"
                >
                  <CheckCircle className="w-5 h-5 inline-block mr-1" />
                  Approve Account
                </button>
                {/* <button
                  onClick={() => handleDeny(request)}
                  className="flex w-full items-center p-2 rounded-3xl font-semibold text-sm text-red-600 bg-red-200 hover:bg-red-300 transition-colors"
                >
                  <XCircle className="w-5 h-5 inline-block mr-1" />
                  Deny Request
                </button> */}
              </div>
            </CardFooter>
          </Card>
        ))}
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
                <CheckCircle className="size-8 text-white" />
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
