"use client";

import React from "react";
import {
  ArrowLeft,
  BookOpen,
  Shield,
  Users,
  FileText,
  AlertCircle,
  CheckCircle,
} from "lucide-react";
import { useRouter } from "next/navigation";

const TermsOfServicePage = () => {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-admin/5 via-light-300 to-primary-admin/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={() => router.push("/admin-signup")}
            className="flex items-center gap-2 text-primary-admin hover:text-primary-admin/80 mb-6 transition-colors font-medium"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Sign Up
          </button>

          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="size-16 bg-primary-admin rounded-2xl flex items-center justify-center shadow-lg">
                <FileText className="size-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-dark-400">
                  Terms of Service
                </h1>
                <p className="text-light-500 mt-2">
                  Last updated: January 2024
                </p>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-8">
              <div className="flex items-start gap-3">
                <AlertCircle className="size-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-blue-800 mb-1">
                    Important Notice
                  </h3>
                  <p className="text-blue-700 text-sm">
                    By using Shelf Wise, you agree to these terms. Please read
                    them carefully before creating your account.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 space-y-8">
          {/* Section 1 */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="size-10 bg-primary-admin/10 rounded-lg flex items-center justify-center">
                <BookOpen className="size-5 text-primary-admin" />
              </div>
              <h2 className="text-xl font-semibold text-dark-400">
                1. Acceptance of Terms
              </h2>
            </div>
            <div className="pl-13 space-y-4 text-gray-600 leading-relaxed">
              <p>
                By accessing and using Shelf Wise ("the Service"), you accept
                and agree to be bound by the terms and provision of this
                agreement. If you do not agree to abide by the above, please do
                not use this service.
              </p>
              <p>
                These Terms of Service constitute a legally binding agreement
                between you and Shelf Wise regarding your use of the Service.
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="size-10 bg-green-100 rounded-lg flex items-center justify-center">
                <Users className="size-5 text-green-600" />
              </div>
              <h2 className="text-xl font-semibold text-dark-400">
                2. User Accounts
              </h2>
            </div>
            <div className="pl-13 space-y-4 text-gray-600 leading-relaxed">
              <p>
                To access certain features of the Service, you must register for
                an account. When you register for an account, you may be
                required to provide us with some information about yourself.
              </p>
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-800 mb-2">
                  Account Requirements:
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="size-4 text-green-500" />
                    <span className="text-sm">
                      Valid university email address
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="size-4 text-green-500" />
                    <span className="text-sm">
                      University ID card verification
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="size-4 text-green-500" />
                    <span className="text-sm">
                      Accurate personal information
                    </span>
                  </li>
                </ul>
              </div>
              <p>
                You are responsible for safeguarding the password and for
                maintaining the confidentiality of your account.
              </p>
            </div>
          </section>

          {/* Section 3 */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="size-10 bg-purple-100 rounded-lg flex items-center justify-center">
                <Shield className="size-5 text-purple-600" />
              </div>
              <h2 className="text-xl font-semibold text-dark-400">
                3. Library Services
              </h2>
            </div>
            <div className="pl-13 space-y-4 text-gray-600 leading-relaxed">
              <p>
                Shelf Wise provides digital library management services
                including book borrowing, returns, and catalog browsing.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-800 mb-2">
                    Borrowing Rules
                  </h4>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• Maximum 5 books at a time</li>
                    <li>• 14-day borrowing period</li>
                    <li>• Renewal available if no holds</li>
                    <li>• Late fees may apply</li>
                  </ul>
                </div>
                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-semibold text-green-800 mb-2">
                    User Responsibilities
                  </h4>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• Return books on time</li>
                    <li>• Report damaged items</li>
                    <li>• Respect other users</li>
                    <li>• Follow library policies</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="size-10 bg-red-100 rounded-lg flex items-center justify-center">
                <AlertCircle className="size-5 text-red-600" />
              </div>
              <h2 className="text-xl font-semibold text-dark-400">
                4. Prohibited Uses
              </h2>
            </div>
            <div className="pl-13 space-y-4 text-gray-600 leading-relaxed">
              <p>You may not use our Service:</p>
              <ul className="space-y-2 ml-4">
                <li>
                  • For any unlawful purpose or to solicit others to perform
                  unlawful acts
                </li>
                <li>
                  • To violate any international, federal, provincial, or state
                  regulations, rules, laws, or local ordinances
                </li>
                <li>
                  • To infringe upon or violate our intellectual property rights
                  or the intellectual property rights of others
                </li>
                <li>
                  • To harass, abuse, insult, harm, defame, slander, disparage,
                  intimidate, or discriminate
                </li>
                <li>• To submit false or misleading information</li>
              </ul>
            </div>
          </section>

          {/* Section 5 */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="size-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                <FileText className="size-5 text-yellow-600" />
              </div>
              <h2 className="text-xl font-semibold text-dark-400">
                5. Termination
              </h2>
            </div>
            <div className="pl-13 space-y-4 text-gray-600 leading-relaxed">
              <p>
                We may terminate or suspend your account and bar access to the
                Service immediately, without prior notice or liability, under
                our sole discretion, for any reason whatsoever and without
                limitation.
              </p>
              <p>
                If you wish to terminate your account, you may simply
                discontinue using the Service and contact our support team.
              </p>
            </div>
          </section>

          {/* Contact Section */}
          <section className="bg-gradient-to-r from-primary-admin/5 to-blue-50 rounded-xl p-6">
            <h2 className="text-xl font-semibold text-dark-400 mb-4">
              Contact Information
            </h2>
            <p className="text-gray-600 mb-4">
              If you have any questions about these Terms of Service, please
              contact us:
            </p>
            <div className="space-y-2 text-sm">
              <p>
                <strong>Email:</strong> legal@Shelf Wise.edu
              </p>
              <p>
                <strong>Address:</strong> Shelf Wise Legal Department,
                University Campus
              </p>
              <p>
                <strong>Phone:</strong> +1 (555) 123-4567
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfServicePage;
