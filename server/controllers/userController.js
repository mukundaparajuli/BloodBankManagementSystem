const User = require("../models/userSchema")
const bcrypt = require("bcrypt");
const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken")

//@Desc Register User
//@Route /api/register
//@Access public

const registerUser = asyncHandler(async (req, res) => {
    try {
        const { fullName, email, password, age, location } = req.body;
        if (!fullName || !email || !password || !age || !location) {
            return res.status(400).json({ message: "All fields are mandatory to be filled!" });
        }

        const userExists = await User.findOne({ email: email });
        if (userExists) {
            return res.status(400).json({ message: "User already exists!" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({ fullName, email, password: hashedPassword, age, location });

        res.status(201).json({ user });
    } catch (err) {
        console.log("Error occurred while registering the user: ", err);
        res.status(500).json({ message: "Internal server error" });
    }
});


//@Desc Login User
//@Route /api/login
//@Access public

const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = await req.body;
    if (!email || !password) {
        res.status(400).json({ message: "All fields are mandatory1" });
    }
    const user = await User.findOne({ email });
    if (user && await bcrypt.compare(password, user.password)) {
        const accessToken = jwt.sign({
            user: {
                fullName: user.fullName,
                email: user.email,
                id: user.id,
                location: user.location,
                age: user.age,
            }
        }, process.env.SECRET_ACCESS_KEY, { expiresIn: "1h" }
        )
        res.status(200).json({ accessToken });
    } else {
        res.status(400)
        throw new Error("Invalid Input");
    }
});

// @Desc GET userInfo
// @Route /userInfo/
// @Access private
const getUserInfo = asyncHandler(async (req, res) => {
    res.json(req.user)
})
module.exports = { registerUser, loginUser, getUserInfo }