const express = require('express');
const { getRentalCars, addCar } = require("../controllers/carController");
const authenticateToken = require("../middlewares/authMiddleware");

const router = express.Router();

router.get("/rental-cars", getRentalCars);
router.post("/add-car", authenticateToken, addCar);

module.exports = router;