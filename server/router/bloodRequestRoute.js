const express = require("express");
const { addBloodRequest } = require("../controllers/bloodRequestController");
const router = express.Router();

router.post("/user/addRequest", addBloodRequest);

module.exports = router;