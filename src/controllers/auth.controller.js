const User = require("../models/user.model");
const Otp = require("../models/Otp.model");
const jwt = require("jsonwebtoken");
const { sendOTP } = require("../utils/twilio.helper");
const { JWT_SECRET, JWT_EXPIRES_IN } = process.env;

function generateOTP() {
    return Math.floor(100000 + Math.random() * 900000).toString(); // 6-digit OTP
}

exports.register = async (req, res) => {
    try {
        const { first_name, last_name, phone } = req.body;

        if (!first_name || !last_name || !phone) {
            return res.status(400).json({ message: "Missing required fields" });
        }

        const user = await User.create({ first_name, last_name, phone, role_id: 1 }); // Assuming role_id 1 is default

        const otpCode = generateOTP();

        await Otp.create({ user_id: user.id, otp: otpCode });

        await sendOTP(phone, otpCode);

        return res.status(201).json({ message: "OTP sent successfully" });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Server error" });
    }
};

exports.verifyOtp = async (req, res) => {
    try {
        const { phone, otp } = req.body;

        const user = await User.findOne({ where: { phone } });

        if (!user) return res.status(404).json({ message: "User not found" });

        const otpEntry = await Otp.findOne({
            where: { user_id: user.id },
            order: [['createdAt', 'DESC']]
        });

        if (!otpEntry || otpEntry.otp !== otp) {
            return res.status(400).json({ message: "Invalid OTP" });
        }

        const token = jwt.sign({ id: user.id, phone: user.phone }, JWT_SECRET, {
            expiresIn: JWT_EXPIRES_IN
        });

        return res.status(200).json({ message: "OTP verified", token });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Server error" });
    }
};
