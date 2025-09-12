require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const twilio = require("twilio");
const User = require("./models/User");
const Otp = require("./models/Otp");
const jwt = require("jsonwebtoken");
const auth = require("./middleware/auth");
const cors = require("cors");

const client = twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH_TOKEN);
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {})
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("OTP World!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.post("/send-otp", async (req, res) => {
  const { phone } = req.body;

  if (!phone)
    return res.status(400).json({ message: "Phone number is required" });

  try {
    // Generate 6-digit OTP
    const otpCode = Math.floor(100000 + Math.random() * 900000).toString();

    // Save OTP to DB (expires automatically in 5 min)
    const otpEntry = new Otp({ phone, otp: otpCode });
    await otpEntry.save();

    // Send OTP via Twilio
    await client.messages.create({
      body: `Your OTP code is ${otpCode}`,
      from: process.env.TWILIO_PHONE,
      to: phone,
    });

    res.json({ message: "OTP sent successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

app.post("/verify-otp", async (req, res) => {
  const { phone, otp } = req.body;

  if (!phone || !otp)
    return res.status(400).json({ message: "Phone and OTP are required" });

  try {
    const otpEntry = await Otp.findOne({ phone, otp });

    if (!otpEntry) {
      return res.status(400).json({ message: "Invalid or expired OTP" });
    }

    // Delete OTP after verification
    await Otp.deleteMany({ phone });

    // Check if user exists
    let user = await User.findOne({ phone });

    if (!user) {
      user = new User({ phone, verified: true });
      await user.save();
    } else {
      user.verified = true;
      await user.save();
    }

    // Generate JWT token
    const token = jwt.sign(
      { id: user._id, phone: user.phone },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES_IN }
    );

    res.json({ message: "OTP verified successfully", token, user });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

app.get("/profile", auth, (req, res) => {
  res.json({ message: "Profile data", user: req.user });
});
