const express = require("express");
const { addBloodRequest, updateBloodRequest } = require("../controllers/bloodRequestController");
const router = express.Router();

router.post("/user/addRequest", addBloodRequest);
router.put("/user/updateRequest/:bloodRequest_id", updateBloodRequest)

module.exports = router;