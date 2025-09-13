import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Droplets, Globe, Phone, Key, Check, Info, Eye } from "lucide-react";

export default function VillagerLogin() {
  const navigate = useNavigate();
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [showOtp, setShowOtp] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [user, setUser] = useState(null);

  // Backend URL (adjust if needed)
  const API_BASE = "http://localhost:3000";

  const handleGetOtp = async () => {
    setError("");
    if (!phone) {
      setError("📱 Please enter your mobile number.");
      return;
    }
    setLoading(true);
    // Prepend +91 if not present
    let formattedPhone = phone.trim();
    if (!formattedPhone.startsWith("+91")) {
      formattedPhone = "+91" + formattedPhone.replace(/^0+/, "");
    }
    try {
      const res = await fetch(`${API_BASE}/send-otp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone: formattedPhone }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Failed to send OTP");
      setShowOtp(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async () => {
    setError("");
    if (!otp) {
      setError("🔑 Please enter the OTP.");
      return;
    }
    setLoading(true);
    // Prepend +91 if not present
    let formattedPhone = phone.trim();
    if (!formattedPhone.startsWith("+91")) {
      formattedPhone = "+91" + formattedPhone.replace(/^0+/, "");
    }
    try {
      const res = await fetch(`${API_BASE}/verify-otp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone: formattedPhone, otp }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "OTP verification failed");
      // No need to store JWT, it's now in HttpOnly cookie
      setUser(data.user);
      alert("Logged in!");
      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
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

        {/* Error Message */}
        {error && (
          <div className="mb-2 text-red-600 text-sm text-center">{error}</div>
        )}

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
              disabled={loading}
            />
          </div>
        </div>

        {/* OTP Section */}
        {showOtp && (
          <div className="mb-4">
            <label className="block text-gray-600 text-sm mb-1">
              Enter OTP
            </label>
            <div className="relative">
              <Key className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
              <input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="Enter OTP"
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none"
                disabled={loading}
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
              disabled={loading}
            >
              <Key className="w-5 h-5" /> {loading ? "Sending..." : "Get OTP"}
            </button>
          )}
          {showOtp && (
            <button
              onClick={handleLogin}
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg flex items-center justify-center gap-2"
              disabled={loading}
            >
              <Check className="w-5 h-5" /> {loading ? "Verifying..." : "Login"}
            </button>
          )}
        </div>

        {/* Show user info after login */}
        {user && (
          <div className="mt-6 p-4 bg-green-100 rounded-lg text-green-800 text-sm">
            <div>Welcome, {user.phone}!</div>
            <div>User ID: {user._id}</div>
            <div>Verified: {user.verified ? "Yes" : "No"}</div>
          </div>
        )}

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
