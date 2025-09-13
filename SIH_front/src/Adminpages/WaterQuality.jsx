import React, { useState } from "react";
import {
  Droplet,
  ShieldCheck,
  Activity,
  House,
  Droplets,
  TriangleAlert,
  ChartColumnIncreasing,
  Settings,
} from "lucide-react";
import RiverDetail from "../utils/RiverDetail";
import { NavLink } from "react-router-dom";

const WaterQuality = () => {
  return (
    <div className="h-screen w-full flex">
      {/* Sidebar */}
      <div className="navbar w-[15%] h-full border-r-2 border-gray-200 absolute">
        <div className="flex items-center gap-2 mt-5 mb-10 px-4 border-b-2 border-gray-200 py-3">
          <Activity size={30} className="bg-green-200 rounded-lg" />
          <h1 className="font-bold">DHARA</h1>
        </div>

        <NavLink
          to="/Dashboard"
          className={({ isActive }) =>
            `flex rounded-lg transition ${
              isActive ? "bg-cyan-700 text-white" : "hover:bg-cyan-700 hover:text-white"
            }`
          }
        >
          <div className="flex items-center gap-2 p-3 px-5 rounded-lg mx-5">
            <House />
            <h1>Dashboard</h1>
          </div>
        </NavLink>

        <NavLink
          to="/WaterQuality"
          end
          className={({ isActive }) =>
            `flex rounded-lg transition ${
              isActive ? "bg-cyan-700 text-white" : "hover:bg-cyan-700 hover:text-white"
            }`
          }
        >
          <div className="flex items-center gap-2 p-3 px-5 rounded-lg mx-5">
            <Droplets />
            <h1>Water Quality</h1>
          </div>
        </NavLink>

        <NavLink
          to="/Alerts"
          end
          className={({ isActive }) =>
            `flex rounded-lg transition ${
              isActive ? "bg-cyan-700 text-white" : "hover:bg-cyan-700 hover:text-white"
            }`
          }
        >
          <div className="flex items-center gap-2 p-3 px-5 rounded-lg mx-5">
            <TriangleAlert />
            <h1>Alerts</h1>
          </div>
        </NavLink>

        <NavLink
          to="/Analytics"
          end
          className={({ isActive }) =>
            `flex rounded-lg transition ${
              isActive ? "bg-cyan-700 text-white" : "hover:bg-cyan-700 hover:text-white"
            }`
          }
        >
          <div className="flex items-center gap-2 p-3 px-5 rounded-lg mx-5">
            <ChartColumnIncreasing />
            <h1>Analytics</h1>
          </div>
        </NavLink>

        <NavLink
          to="/Community"
          end
          className={({ isActive }) =>
            `flex rounded-lg transition ${
              isActive ? "bg-cyan-700 text-white" : "hover:bg-cyan-700 hover:text-white"
            }`
          }
        >
          <div className="flex items-center gap-2 p-3 px-5 rounded-lg mx-5">
            <House />
            <h1>Community</h1>
          </div>
        </NavLink>

        <NavLink
          to="/Settings"
          end
          className={({ isActive }) =>
            `flex rounded-lg transition ${
              isActive ? "bg-cyan-700 text-white" : "hover:bg-cyan-700 hover:text-white"
            }`
          }
        >
          <div className="flex items-center gap-2 p-3 px-5 rounded-lg mx-5">
            <Settings />
            <h1>Settings</h1>
          </div>
        </NavLink>
      </div>

      {/* Spacer for sidebar */}
      <div className="w-[15%] h-full"></div>

      {/* Main content */}
      <div className="w-[85%] h-full p-5 bg-gray-50 overflow-y-auto">
        <h1 className="mb-10 text-3xl font-bold">Water Quality Monitoring</h1>

        {/* River Cards */}
        <RiverDetail />

        {/* Water Quality Prediction Form */}
        <div className="mt-10 p-6 bg-white rounded-xl shadow-md max-w-xl">
          <h2 className="text-xl font-bold mb-4">AI Water Potability Prediction</h2>
          <WaterQualityForm />
        </div>
      </div>
    </div>
  );
};

// Water Quality Prediction Form Component
function WaterQualityForm() {
  const [form, setForm] = useState({
    ph: "",
    Hardness: "",
    Solids: "",
    Chloramines: "",
    Sulfate: "",
    Conductivity: "",
    Organic_carbon: "",
    Trihalomethanes: "",
    Turbidity: "",
  });
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setResult(null);

    try {
      const res = await fetch("http://localhost:3000/predict-water", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(
          Object.fromEntries(
            Object.entries(form).map(([k, v]) => [k, parseFloat(v)])
          )
        ),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Prediction failed");
      setResult(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      {Object.keys(form).map((key) => (
        <div key={key} className="flex flex-col">
          <label className="font-medium mb-1">{key.replace(/_/g, " ")}</label>
          <input
            type="number"
            name={key}
            value={form[key]}
            onChange={handleChange}
            className="border rounded px-3 py-2"
            step="any"
            required
          />
        </div>
      ))}
      <button
        type="submit"
        className="bg-blue-600 text-white py-2 rounded font-semibold mt-2"
        disabled={loading}
      >
        {loading ? "Predicting..." : "Predict Potability"}
      </button>

      {error && <div className="text-red-600 mt-2">{error}</div>}

      {result && (
        <div
          className="mt-4 p-3 rounded text-gray-900"
          style={{
            background:
              result.probability >= 0.8
                ? "#bbf7d0" // green-100
                : result.probability >= 0.6
                ? "#fef9c3" // yellow-100
                : result.probability >= 0.4
                ? "#fed7aa" // orange-100
                : "#fecaca", // red-100
          }}
        >
          <div>
            <b>Category:</b>{" "}
            {result.probability >= 0.8
              ? "Safe"
              : result.probability >= 0.6
              ? "Moderate"
              : result.probability >= 0.4
              ? "Risk"
              : "HIGH RISK"}
          </div>
          <div>
            <b>Probability:</b> {(result.probability * 100).toFixed(2)}%
          </div>
        </div>
      )}
    </form>
  );
}

export default WaterQuality;
