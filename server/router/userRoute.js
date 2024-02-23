const express = require("express");
const { registerUser, loginUser, getUserInfo } = require("../controllers/userController");
const validateJWT = require("../middleware/validateJWT")
const router = express.Router();

router.post("/register", registerUser)
router.post("/login", loginUser)
router.get("/getUserInfo", validateJWT, getUserInfo)

module.exports = router;