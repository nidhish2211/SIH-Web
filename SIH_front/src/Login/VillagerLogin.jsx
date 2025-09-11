import React, { useState } from "react";
import {
  Droplets,
  Globe,
  Phone,
  Key,
  Check,
  Info,
  Eye,
} from "lucide-react";

export default function VillagerLogin() {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [showOtp, setShowOtp] = useState(false);

  const handleGetOtp = () => {
    if (!phone) {
      alert("📱 Please enter your mobile number.");
      return;
    }
    setShowOtp(true);
  };

  const handleLogin = () => {
    if (!otp) {
      alert("🔑 Please enter the OTP.");
      return;
    }
    alert("✅ Logged in successfully (mock flow). Connect OTP API here.");
  };

  return (
    <div className="bg-green-50 flex items-center justify-center min-h-screen">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
        {/* Logo */}
        <div className="flex flex-col items-center mb-6">
          <div className="w-16 h-16 rounded-full bg-green-200 flex items-center justify-center">
            <Droplets className="text-green-700 w-8 h-8" />
          </div>
          <h1 className="text-xl font-semibold mt-2 text-gray-700">
            SafeWater Portal
          </h1>
        </div>

        {/* Language Selector */}
        <div className="flex justify-end mb-4">
          <button className="flex items-center gap-1 text-sm text-gray-600 hover:text-green-600">
            <Globe className="w-4 h-4" /> English
          </button>
        </div>

        {/* Phone Input */}
        <div className="mb-4">
          <label className="block text-gray-600 text-sm mb-1">
            Mobile Number
          </label>
          <div className="relative">
            <Phone className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter Mobile Number"
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none"
            />
          </div>
        </div>

        {/* OTP Section */}
        {showOtp && (
          <div className="mb-4">
            <label className="block text-gray-600 text-sm mb-1">Enter OTP</label>
            <div className="relative">
              <Key className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
              <input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="Enter OTP"
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none"
              />
            </div>
          </div>
        )}

        {/* Buttons */}
        <div className="flex flex-col gap-3">
          {!showOtp && (
            <button
              onClick={handleGetOtp}
              className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 rounded-lg flex items-center justify-center gap-2"
            >
              <Key className="w-5 h-5" /> Get OTP
            </button>
          )}
          {showOtp && (
            <button
              onClick={handleLogin}
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg flex items-center justify-center gap-2"
            >
              <Check className="w-5 h-5" /> Login
            </button>
          )}
        </div>

        {/* Help / Accessibility */}
        <div className="flex justify-between items-center mt-6 text-sm text-gray-500">
          <button className="flex items-center gap-1 hover:text-green-600">
            <Info className="w-4 h-4" /> Need Help?
          </button>
          <button className="flex items-center gap-1 hover:text-green-600">
            <Eye className="w-4 h-4" /> Voice Mode
          </button>
        </div>
      </div>
    </div>
  );
}
