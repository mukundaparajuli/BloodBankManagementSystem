const express = require("express");
const { addBloodRequest, updateBloodRequest, deleteBloodRequest, getBloodRequests, getAllBloodRequests } = require("../controllers/bloodRequestController");
const router = express.Router();
const validateJWT = require("../middleware/validateJWT")

router.post("/user/addRequest", validateJWT, addBloodRequest);
router.put("/user/updateRequest/:bloodRequest_id", validateJWT, updateBloodRequest)
router.delete("/user/deleteRequest/:bloodRequest_id", validateJWT, deleteBloodRequest)
router.get("/user/getRequests",validateJWT, getBloodRequests);
router.get("/user/", getAllBloodRequests);

module.exports = router;