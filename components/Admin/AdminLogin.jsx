import React, { useState } from "react";
import { BookOpen, Eye, EyeOff, Mail, Lock } from "lucide-react";
import { useRouter } from "next/navigation";

const AdminLogin = ({ onLogin }) => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      onLogin();
    }, 1500);
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Form */}
      <div className="flex-1 flex items-center justify-center p-4 sm:p-8 bg-gradient-to-br from-primary-admin/5 via-light-300 to-primary-admin/10">
        <div className="w-full max-w-md">
          {/* Logo and Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="size-12 bg-primary-admin rounded-xl flex items-center justify-center shadow-lg">
                <BookOpen className="size-7 text-white" />
              </div>
              <h1 className="text-3xl font-bold text-primary-admin">
                ShelfWise
              </h1>
            </div>
            <h2 className="text-2xl font-semibold text-dark-400 mb-2">
              Welcome Back
            </h2>
            <p className="text-light-500">Sign in to your admin account</p>
          </div>

          {/* Login Form */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email Field */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-dark-400">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Mail className="size-5 text-light-500" />
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email"
                    className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-3xl text-dark-400 placeholder-light-500 focus:outline-none focus:ring-[3px] focus:ring-primary-admin focus:border-transparent transition-all duration-200"
                    required
                  />
                </div>
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-dark-400">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Lock className="size-5 text-light-500" />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="Enter your password"
                    className="w-full pl-12 pr-12 py-3 border border-gray-200 rounded-3xl text-dark-400 placeholder-light-500 focus:outline-none focus:ring-[3px] focus:ring-primary-admin focus:border-transparent transition-all duration-200"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-light-500 hover:text-dark-400 transition-colors"
                  >
                    {showPassword ? (
                      <EyeOff className="size-5" />
                    ) : (
                      <Eye className="size-5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-primary-admin bg-gray-100 border-gray-300 rounded focus:ring-primary-admin focus:ring-2"
                  />
                  <span className="ml-2 text-sm text-dark-400">
                    Remember me
                  </span>
                </label>
                <button
                  type="button"
                  className="text-sm text-primary-admin hover:text-primary-admin/80 font-medium transition-colors"
                >
                  Forgot password?
                </button>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-primary-admin text-white py-3 px-4 rounded-3xl font-semibold hover:bg-primary-admin/90 focus:outline-none focus:ring-2 focus:ring-primary-admin focus:ring-offset-2 transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    Signing in...
                  </div>
                ) : (
                  "Sign In"
                )}
              </button>
            </form>

            {/* Sign Up Link */}
            <div className="mt-6 text-center">
              <p className="text-light-500">
                Don't have an account?{" "}
                <button
                  onClick={() => router.push("/admin-signup")}
                  className="text-primary-admin hover:text-primary-admin/80 font-semibold transition-colors"
                >
                  Sign up
                </button>
              </p>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center mt-8">
            <p className="text-sm text-light-500">
              © 2024 ShelfWise. All rights reserved.
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Library Image */}
      <div className="hidden lg:flex flex-1 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-admin/95 via-primary-admin/80 to-blue-900/90"></div>
        <img
          src="https://images.pexels.com/photos/1319854/pexels-photo-1319854.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt="Library"
          className="w-full h-full object-cover"
        />

        {/* Floating Elements */}
        <div className="absolute top-10 right-10 w-20 h-20 bg-white/10 rounded-full backdrop-blur-sm animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-16 h-16 bg-white/5 rounded-full backdrop-blur-sm animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-white/15 rounded-full backdrop-blur-sm animate-pulse delay-500"></div>

        <div className="absolute inset-0 flex items-center justify-center p-12">
          <div className="text-center text-white">
            <div className="mb-12">
              <div className="size-24 bg-white/20 rounded-3xl flex items-center justify-center mx-auto mb-8 backdrop-blur-sm border border-white/20 shadow-2xl">
                <BookOpen className="size-10 text-white" />
              </div>
              <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                ShelfWise Admin
              </h2>
              <p className="text-xl text-white/90 leading-relaxed max-w-lg mx-auto">
                Manage your digital library with powerful administrative tools
                and comprehensive analytics.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 max-w-md mx-auto">
              <div className="bg-white/15 backdrop-blur-md rounded-xl p-6 text-left border border-white/20 shadow-xl hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                    <span className="text-xl">👥</span>
                  </div>
                  <h3 className="font-bold text-lg">User Management</h3>
                </div>
                <p className="text-white/80 leading-relaxed">
                  Manage users, roles, and permissions with advanced controls
                </p>
              </div>

              <div className="bg-white/15 backdrop-blur-md rounded-xl p-6 text-left border border-white/20 shadow-xl hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                    <span className="text-xl">📊</span>
                  </div>
                  <h3 className="font-bold text-lg">Analytics</h3>
                </div>
                <p className="text-white/80 leading-relaxed">
                  Track borrowing patterns and comprehensive statistics
                </p>
              </div>

              <div className="bg-white/15 backdrop-blur-md rounded-xl p-6 text-left border border-white/20 shadow-xl hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                    <span className="text-xl">⚙️</span>
                  </div>
                  <h3 className="font-bold text-lg">System Control</h3>
                </div>
                <p className="text-white/80 leading-relaxed">
                  Configure and monitor your library system efficiently
                </p>
              </div>
            </div>

            {/* Bottom Stats */}
            <div className="mt-12 flex justify-center gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">10K+</div>
                <div className="text-white/70 text-sm">Books</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">5K+</div>
                <div className="text-white/70 text-sm">Users</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">99%</div>
                <div className="text-white/70 text-sm">Uptime</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
