"use client";

import React from "react";
import {
  ArrowLeft,
  Shield,
  Eye,
  Lock,
  Database,
  Users,
  Globe,
  FileText,
} from "lucide-react";
import { useRouter } from "next/navigation";

const PrivacyPolicyPage = () => {
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
              <div className="size-16 bg-green-500 rounded-2xl flex items-center justify-center shadow-lg">
                <Shield className="size-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-dark-400">
                  Privacy Policy
                </h1>
                <p className="text-light-500 mt-2">
                  Last updated: January 2024
                </p>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-8">
              <div className="flex items-start gap-3">
                <Lock className="size-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-green-800 mb-1">
                    Your Privacy Matters
                  </h3>
                  <p className="text-green-700 text-sm">
                    We are committed to protecting your personal information and
                    your right to privacy.
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
              <div className="size-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <Eye className="size-5 text-blue-600" />
              </div>
              <h2 className="text-xl font-semibold text-dark-400">
                1. Information We Collect
              </h2>
            </div>
            <div className="pl-13 space-y-4 text-gray-600 leading-relaxed">
              <p>
                We collect information you provide directly to us when you
                create an account, use our services, or communicate with us.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-800 mb-3">
                    Personal Information
                  </h4>
                  <ul className="text-sm text-blue-700 space-y-2">
                    <li>• Full name and contact details</li>
                    <li>• University email address</li>
                    <li>• Phone number</li>
                    <li>• University ID information</li>
                    <li>• Profile preferences</li>
                  </ul>
                </div>
                <div className="bg-purple-50 rounded-lg p-4">
                  <h4 className="font-semibold text-purple-800 mb-3">
                    Usage Information
                  </h4>
                  <ul className="text-sm text-purple-700 space-y-2">
                    <li>• Books borrowed and returned</li>
                    <li>• Search queries and preferences</li>
                    <li>• Login times and frequency</li>
                    <li>• Device and browser information</li>
                    <li>• IP address and location data</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="size-10 bg-green-100 rounded-lg flex items-center justify-center">
                <Database className="size-5 text-green-600" />
              </div>
              <h2 className="text-xl font-semibold text-dark-400">
                2. How We Use Your Information
              </h2>
            </div>
            <div className="pl-13 space-y-4 text-gray-600 leading-relaxed">
              <p>
                We use the information we collect to provide, maintain, and
                improve our services.
              </p>
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">
                      Service Operations
                    </h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Process book borrowing requests</li>
                      <li>• Manage your account and preferences</li>
                      <li>• Send service-related notifications</li>
                      <li>• Provide customer support</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">
                      Improvements
                    </h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Analyze usage patterns</li>
                      <li>• Improve our services</li>
                      <li>• Develop new features</li>
                      <li>• Ensure security and prevent fraud</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="size-10 bg-red-100 rounded-lg flex items-center justify-center">
                <Users className="size-5 text-red-600" />
              </div>
              <h2 className="text-xl font-semibold text-dark-400">
                3. Information Sharing
              </h2>
            </div>
            <div className="pl-13 space-y-4 text-gray-600 leading-relaxed">
              <p>
                We do not sell, trade, or otherwise transfer your personal
                information to third parties without your consent, except as
                described in this policy.
              </p>
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <h4 className="font-semibold text-red-800 mb-2">
                  Limited Sharing Scenarios
                </h4>
                <ul className="text-sm text-red-700 space-y-1">
                  <li>
                    • With university administration for academic purposes
                  </li>
                  <li>• When required by law or legal process</li>
                  <li>• To protect our rights and prevent fraud</li>
                  <li>• With service providers who assist our operations</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="size-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                <Lock className="size-5 text-yellow-600" />
              </div>
              <h2 className="text-xl font-semibold text-dark-400">
                4. Data Security
              </h2>
            </div>
            <div className="pl-13 space-y-4 text-gray-600 leading-relaxed">
              <p>
                We implement appropriate security measures to protect your
                personal information against unauthorized access, alteration,
                disclosure, or destruction.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-blue-50 rounded-lg p-4 text-center">
                  <div className="size-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Lock className="size-6 text-blue-600" />
                  </div>
                  <h4 className="font-semibold text-blue-800 mb-2">
                    Encryption
                  </h4>
                  <p className="text-sm text-blue-700">
                    All data is encrypted in transit and at rest
                  </p>
                </div>
                <div className="bg-green-50 rounded-lg p-4 text-center">
                  <div className="size-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Shield className="size-6 text-green-600" />
                  </div>
                  <h4 className="font-semibold text-green-800 mb-2">
                    Access Control
                  </h4>
                  <p className="text-sm text-green-700">
                    Strict access controls and authentication
                  </p>
                </div>
                <div className="bg-purple-50 rounded-lg p-4 text-center">
                  <div className="size-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Eye className="size-6 text-purple-600" />
                  </div>
                  <h4 className="font-semibold text-purple-800 mb-2">
                    Monitoring
                  </h4>
                  <p className="text-sm text-purple-700">
                    Continuous security monitoring
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="size-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                <Globe className="size-5 text-indigo-600" />
              </div>
              <h2 className="text-xl font-semibold text-dark-400">
                5. Your Rights
              </h2>
            </div>
            <div className="pl-13 space-y-4 text-gray-600 leading-relaxed">
              <p>
                You have certain rights regarding your personal information,
                including:
              </p>
              <div className="bg-indigo-50 rounded-lg p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-indigo-800 mb-2">
                      Access & Control
                    </h4>
                    <ul className="text-sm text-indigo-700 space-y-1">
                      <li>• Access your personal data</li>
                      <li>• Update or correct information</li>
                      <li>• Delete your account</li>
                      <li>• Export your data</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-indigo-800 mb-2">
                      Privacy Controls
                    </h4>
                    <ul className="text-sm text-indigo-700 space-y-1">
                      <li>• Opt out of communications</li>
                      <li>• Restrict data processing</li>
                      <li>• Object to data use</li>
                      <li>• File privacy complaints</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 6 */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="size-10 bg-orange-100 rounded-lg flex items-center justify-center">
                <FileText className="size-5 text-orange-600" />
              </div>
              <h2 className="text-xl font-semibold text-dark-400">
                6. Data Retention
              </h2>
            </div>
            <div className="pl-13 space-y-4 text-gray-600 leading-relaxed">
              <p>
                We retain your personal information only for as long as
                necessary to provide our services and fulfill the purposes
                outlined in this policy.
              </p>
              <div className="bg-orange-50 rounded-lg p-4">
                <h4 className="font-semibold text-orange-800 mb-2">
                  Retention Periods
                </h4>
                <ul className="text-sm text-orange-700 space-y-1">
                  <li>
                    • Account information: While account is active + 2 years
                  </li>
                  <li>• Borrowing history: 7 years for academic records</li>
                  <li>• Communication logs: 3 years</li>
                  <li>• Usage analytics: 2 years in anonymized form</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6">
            <h2 className="text-xl font-semibold text-dark-400 mb-4">
              Privacy Questions?
            </h2>
            <p className="text-gray-600 mb-4">
              If you have any questions about this Privacy Policy or our data
              practices, please contact our Data Protection Officer:
            </p>
            <div className="space-y-2 text-sm">
              <p>
                <strong>Email:</strong> privacy@ShelfWise.edu
              </p>
              <p>
                <strong>Address:</strong> ShelfWise Privacy Office, University
                Campus
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

export default PrivacyPolicyPage;
