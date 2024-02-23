const asyncHandler = require("express-async-handler");
const Blood = require("../models/bloodRequestSchema")
//@Desc AddRequest
//@Route /api/user/bloodRequest
//@Access private

const addBloodRequest = asyncHandler(async (req, res) => {
    const { bloodGroup, location, preferredAge } = await req.body;
    if (!bloodGroup || !location || !preferredAge) {
        res.send(400).json({ message: "All fields are mandatory to be filled!" });
    }
    console.log(req)
    try {
        const bloodRequest = await Blood.create({ bloodGroup, location, preferredAge });
        res.json(bloodRequest)
    } catch (err) {
        console.log(err)
    }
});

module.exports = { addBloodRequest }