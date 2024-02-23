const express = require("express");
const { addBloodRequest, updateBloodRequest, deleteBloodRequest } = require("../controllers/bloodRequestController");
const router = express.Router();
const validateJWT = require("../middleware/validateJWT")
router.use(validateJWT)
router.post("/user/addRequest", addBloodRequest);
router.put("/user/updateRequest/:bloodRequest_id", updateBloodRequest)
router.delete("/user/deleteRequest/:bloodRequest_id", deleteBloodRequest)
module.exports = router;