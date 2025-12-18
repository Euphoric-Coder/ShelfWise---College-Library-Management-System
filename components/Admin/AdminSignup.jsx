import React, { useState } from "react";
import {
  BookOpen,
  Eye,
  EyeOff,
  Mail,
  Lock,
  User,
  Phone,
  Upload,
  X,
  Check,
  Library,
  Search,
  Smartphone,
  Zap,
  Star,
  Lightbulb,
} from "lucide-react";
import { useRouter } from "next/navigation";

const AdminSignup = ({ onSignup }) => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [idCardFile, setIdCardFile] = useState(null);
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setIdCardFile(file);
    }
  };

  const removeFile = () => {
    setIdCardFile(null);
    const fileInput = document.getElementById("idCard");
    if (fileInput) fileInput.value = "";
  };

  // Password requirements checker
  const passwordRequirements = [
    { text: "At least 8 characters", met: formData.password.length >= 8 },
    { text: "Contains uppercase letter", met: /[A-Z]/.test(formData.password) },
    { text: "Contains lowercase letter", met: /[a-z]/.test(formData.password) },
    { text: "Contains number", met: /\d/.test(formData.password) },
    {
      text: "Contains special character",
      met: /[!@#$%^&*(),.?":{}|<>]/.test(formData.password),
    },
  ];

  const allRequirementsMet = passwordRequirements.every((req) => req.met);
  const passwordsMatch =
    formData.password === formData.confirmPassword &&
    formData.confirmPassword !== "";
  const canSubmit =
    allRequirementsMet &&
    passwordsMatch &&
    idCardFile &&
    agreeToTerms &&
    formData.fullName &&
    formData.email &&
    formData.phone;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!canSubmit) return;

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      onSignup();
    }, 1500);
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Form */}
      <div className="flex-1 flex items-center justify-center p-4 sm:p-8 bg-gradient-to-br from-primary-admin/5 via-light-300 to-primary-admin/10">
        <div className="w-full max-w-md">
          {/* Logo and Header */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="size-10 bg-primary-admin rounded-xl flex items-center justify-center shadow-lg">
                <BookOpen className="size-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-primary-admin">
                Shelf Wise
              </h1>
            </div>
            <h2 className="text-xl font-semibold text-dark-400 mb-1">
              Create Account
            </h2>
            <p className="text-light-500 text-sm">
              Sign up for your admin account
            </p>
          </div>

          {/* Signup Form */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Full Name Field */}
              <div className="space-y-1">
                <label className="block text-sm font-medium text-dark-400">
                  Full Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="size-4 text-light-500" />
                  </div>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    className="w-full pl-10 pr-3 py-2.5 border border-gray-200 rounded-3xl text-sm text-dark-400 placeholder-light-500 focus:outline-none focus:ring-[3px] focus:ring-primary-admin focus:border-transparent transition-all duration-200"
                    required
                  />
                </div>
              </div>

              {/* Email Field */}
              <div className="space-y-1">
                <label className="block text-sm font-medium text-dark-400">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="size-4 text-light-500" />
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email"
                    className="w-full pl-10 pr-3 py-2.5 border border-gray-200 rounded-3xl text-sm text-dark-400 placeholder-light-500 focus:outline-none focus:ring-[3px] focus:ring-primary-admin focus:border-transparent transition-all duration-200"
                    required
                  />
                </div>
              </div>

              {/* Phone Field */}
              <div className="space-y-1">
                <label className="block text-sm font-medium text-dark-400">
                  Phone Number
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Phone className="size-4 text-light-500" />
                  </div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Enter your phone number"
                    className="w-full pl-10 pr-3 py-2.5 border border-gray-200 rounded-3xl text-sm text-dark-400 placeholder-light-500 focus:outline-none focus:ring-[3px] focus:ring-primary-admin focus:border-transparent transition-all duration-200"
                    required
                  />
                </div>
              </div>

              {/* ID Card Upload */}
              <div className="space-y-1">
                <label className="block text-sm font-medium text-dark-400">
                  University ID Card
                </label>
                {idCardFile ? (
                  <div className="flex items-center justify-between p-3 border border-gray-200 rounded-3xl bg-blue-50">
                    <div className="flex items-center gap-2">
                      <div className="text-blue-600">📄</div>
                      <span className="text-blue-600 font-medium text-sm truncate">
                        {idCardFile.name}
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={removeFile}
                      className="p-1 text-gray-400 hover:text-gray-600 transition-colors duration-200"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ) : (
                  <label className="w-full p-4 border-2 border-dashed border-gray-200 rounded-3xl flex flex-col items-center justify-center gap-2 hover:border-gray-300 transition-colors duration-200 cursor-pointer">
                    <Upload className="w-5 h-5 text-gray-400" />
                    <span className="text-gray-500 text-sm">
                      Upload your ID card
                    </span>
                    <input
                      type="file"
                      id="idCard"
                      accept="image/*,.pdf"
                      onChange={handleFileUpload}
                      className="hidden"
                      required
                    />
                  </label>
                )}
              </div>

              {/* Password Field */}
              <div className="space-y-1">
                <label className="block text-sm font-medium text-dark-400">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="size-4 text-light-500" />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="Create a password"
                    className="w-full pl-10 pr-10 py-2.5 border border-gray-200 rounded-3xl text-sm text-dark-400 placeholder-light-500 focus:outline-none focus:ring-[3px] focus:ring-primary-admin focus:border-transparent transition-all duration-200"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-light-500 hover:text-dark-400 transition-colors"
                  >
                    {showPassword ? (
                      <EyeOff className="size-4" />
                    ) : (
                      <Eye className="size-4" />
                    )}
                  </button>
                </div>

                {/* Password Requirements */}
                {formData.password && (
                  <div className="mt-2 space-y-1">
                    {passwordRequirements.map((req, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div
                          className={`w-4 h-4 rounded-full flex items-center justify-center ${
                            req.met ? "bg-green-100" : "bg-gray-100"
                          }`}
                        >
                          {req.met ? (
                            <Check className="w-2.5 h-2.5 text-green-600" />
                          ) : (
                            <div className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
                          )}
                        </div>
                        <span
                          className={`text-xs ${
                            req.met ? "text-green-600" : "text-gray-500"
                          }`}
                        >
                          {req.text}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Confirm Password Field */}
              <div className="space-y-1">
                <label className="block text-sm font-medium text-dark-400">
                  Confirm Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="size-4 text-light-500" />
                  </div>
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    placeholder="Confirm your password"
                    className={`w-full pl-10 pr-10 py-2.5 border rounded-3xl text-sm text-dark-400 placeholder-light-500 focus:outline-none focus:ring-[3px] focus:ring-primary-admin focus:border-transparent transition-all duration-200 ${
                      formData.confirmPassword && !passwordsMatch
                        ? "border-red-300"
                        : "border-gray-200"
                    }`}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-light-500 hover:text-dark-400 transition-colors"
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="size-4" />
                    ) : (
                      <Eye className="size-4" />
                    )}
                  </button>
                </div>
                {formData.confirmPassword && !passwordsMatch && (
                  <p className="text-red-500 text-xs mt-1">
                    Passwords do not match
                  </p>
                )}
                {formData.confirmPassword && passwordsMatch && (
                  <p className="text-green-500 text-xs mt-1">Passwords match</p>
                )}
              </div>

              {/* Terms and Conditions */}
              <div className="flex items-start">
                <input
                  id="tc"
                  type="checkbox"
                  checked={agreeToTerms}
                  onChange={(e) => setAgreeToTerms(e.target.checked)}
                  className="w-4 h-4 accent-primary-admin text-primary-admin bg-gray-100 border-gray-300 rounded focus:ring-primary-admin focus:ring-2 mt-0.5"
                  required
                />
                <span
                  onClick={() => setAgreeToTerms(!agreeToTerms)}
                  className="ml-2 text-xs text-dark-400 cursor-pointer select-none"
                >
                  I agree to the{" "}
                  <button
                    type="button"
                    className="text-primary-admin hover:text-primary-admin/80 font-medium"
                  >
                    Terms of Service
                  </button>{" "}
                  and{" "}
                  <button
                    type="button"
                    className="text-primary-admin hover:text-primary-admin/80 font-medium"
                  >
                    Privacy Policy
                  </button>
                </span>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={!canSubmit || isLoading}
                className="w-full bg-primary-admin text-white py-2.5 px-4 rounded-3xl font-semibold hover:bg-primary-admin/90 focus:outline-none focus:ring-2 focus:ring-primary-admin focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                    Creating account...
                  </div>
                ) : (
                  "Create Account"
                )}
              </button>
            </form>

            {/* Login Link */}
            <div className="mt-4 text-center">
              <p className="text-light-500 text-sm">
                Already have an account?{" "}
                <button
                  onClick={() => router.push("/admin-login")}
                  className="text-primary-admin hover:text-primary-admin/80 font-semibold transition-colors"
                >
                  Sign in
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Library Image */}
      <div className="hidden lg:flex flex-1 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-admin/90 via-blue-600/85 to-purple-900/90"></div>
        <img
          src="https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt="Library"
          className="w-full h-full object-cover"
        />

        {/* Floating Elements */}
        <div className="absolute top-20 right-20 w-16 h-16 bg-white/10 rounded-2xl backdrop-blur-sm animate-pulse rotate-12"></div>
        <div className="absolute bottom-40 left-16 w-12 h-12 bg-white/15 rounded-full backdrop-blur-sm animate-bounce delay-500"></div>
        <div className="absolute top-1/3 left-1/3 w-8 h-8 bg-white/20 rounded-lg backdrop-blur-sm animate-pulse delay-1000 rotate-45"></div>
        <div className="absolute bottom-1/4 right-1/4 w-10 h-10 bg-white/12 rounded-full backdrop-blur-sm animate-pulse delay-700"></div>

        <div className="absolute inset-0 flex items-center justify-center p-12">
          <div className="text-center text-white">
            <div className="mb-10">
              <div className="size-20 bg-gradient-to-br from-white/30 to-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6 backdrop-blur-md border border-white/25 shadow-2xl">
                <BookOpen className="size-8 text-white" />
              </div>
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-white/95 bg-clip-text text-transparent">
                Join Shelf Wise
              </h2>
              <p className="text-lg text-white/90 leading-relaxed max-w-md mx-auto">
                Create your account and unlock access to thousands of books and
                advanced library features.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 max-w-sm mx-auto">
              <div className="bg-white/15 backdrop-blur-md rounded-xl p-5 text-left border border-white/20 shadow-xl hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-gradient-to-br from-white/30 to-white/20 rounded-lg flex items-center justify-center shadow-lg">
                    <Library className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-bold">Vast Collection</h3>
                </div>
                <p className="text-white/80 text-sm leading-relaxed">
                  Access thousands of books across all genres
                </p>
              </div>

              <div className="bg-white/15 backdrop-blur-md rounded-xl p-5 text-left border border-white/20 shadow-xl hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-gradient-to-br from-white/30 to-white/20 rounded-lg flex items-center justify-center shadow-lg">
                    <Search className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-bold">Smart Search</h3>
                </div>
                <p className="text-white/80 text-sm leading-relaxed">
                  Find books instantly with intelligent search
                </p>
              </div>

              <div className="bg-white/15 backdrop-blur-md rounded-xl p-5 text-left border border-white/20 shadow-xl hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-gradient-to-br from-white/30 to-white/20 rounded-lg flex items-center justify-center shadow-lg">
                    <Smartphone className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-bold">Digital Access</h3>
                </div>
                <p className="text-white/80 text-sm leading-relaxed">
                  Manage your reading with digital tools
                </p>
              </div>
            </div>

            {/* Bottom Features */}
            <div className="mt-8 flex justify-center gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-2 backdrop-blur-sm">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div className="text-white/90 text-sm font-medium">
                  Fast & Secure
                </div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-2 backdrop-blur-sm">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <div className="text-white/90 text-sm font-medium">
                  Premium Quality
                </div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-2 backdrop-blur-sm">
                  <Lightbulb className="w-6 h-6 text-white" />
                </div>
                <div className="text-white/90 text-sm font-medium">
                  Smart Features
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSignup;
