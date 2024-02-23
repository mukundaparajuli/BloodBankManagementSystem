const asyncHandler = require("express-async-handler");
const Blood = require("../models/bloodRequestSchema");

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

// @Desc PUT bloodRequest
// @Route /user/updateBloodRequest/:bloodRequest_id
// @Access private

const updateBloodRequest = asyncHandler(async (req, res) => {
    const bloodRequestId = req.params.bloodRequest_id;
    const bloodRequest = await Blood.findById(bloodRequestId);
    if (!bloodRequest) {
        res.status(404).json({ message: "Blood Request not found!" });
    }
    const { bloodGroup, location, preferredAge } = req.body;
    console.log(req.body)
    try {
        bloodRequest.bloodGroup = bloodGroup;
        bloodRequest.location = location;
        bloodRequest.preferredAge = preferredAge;

        const updatedBloodRequest = await bloodRequest.save();
        res.json(updatedBloodRequest)
    } catch (error) {
        res.status(400).json({ message: "Blood request could not be updated!", error })
    }
});

// @Desc DELETE bloodRequest
// @Route /user/deleteBloodRequest/:bloodRequest_id
// @Access private

const deleteBloodRequest = asyncHandler(async (req, res) => {
    const bloodRequestId = req.params.bloodRequest_id;
    try {
        const bloodRequest = await Blood.findByIdAndDelete(bloodRequestId);
        res.send("Blood Request was deleted sucessfully")
    } catch (error) {
        res.status(400).json({ message: "Blood Request was not deleted!" })
    }
})

// @Desc GET bloodRequests
// @Route /user/getBloodRequests
// @Access private

// const getBloodRequests=asyncHandler(async(req, res)=>{
//     const bloodRequests=
// })

module.exports = { addBloodRequest, updateBloodRequest, deleteBloodRequest }