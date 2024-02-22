const User = require("../models/userSchema")
const bcrypt = require("bcrypt");

//@Desc Register User
//@Route /api/register
//@Access public

const registerUser = async (req, res) => {
    try {
        const { fullName, email, password, age, location } = await req.body;
        if (!fullName, !email, !password, !age, !location) {
            res.send("all fields are mandatory");
        }
        console.log(req.body)
        console.log(User)
        console.log(email)
        try {
            const userExists = await User.findOne({ email });
            console.log("User Exists:", userExists);
            if (userExists) {
                console.log("User already exists");
            }
        } catch (error) {
            console.log(error)
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({ fullName, email, password: hashedPassword, age, location })
        console.log(user);
        res.json({ user });
    } catch (err) {
        console.log("Error occured while registering the user: ", err)
    }

};
const loginUser = (req, res) => {
    const userInfo = req.body;
    res.json({ userInfo })
}
module.exports = { registerUser, loginUser }