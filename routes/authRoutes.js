const express = require("express");
const { register, login, myProfile } = require("../controllers/authController");
const authenticateToken = require("../middlewares/authMiddleware"); // Middleware për autentifikim

const router = express.Router();

router.post("/register", register); // Regjistrimi
router.post("/login", login); // Hyrja
router.get("/my-profile", authenticateToken, myProfile); // Endpoint i mbrojtur me JWT

module.exports = router;