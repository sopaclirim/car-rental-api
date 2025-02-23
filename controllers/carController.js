const Car = require("../models/Car");

const getRentalCars = async (req, res) => {
    try {
        const cars = global.db.collection("cars");

        const filter = {};

        if (req.query.year) filter.year = parseInt(req.query.year) || 0; 
        if (req.query.color) filter.color = req.query.color;
        if (req.query.steering_type) filter.steering_type = req.query.steering_type;
        if (req.query.number_of_seats) filter.number_of_seats = parseInt(req.query.number_of_seats) || 0;

        Object.keys(filter).forEach(key => {
            if (!filter[key]) delete filter[key];
        });

        const allCars = await cars.find(filter).sort({ price_per_day: 1 }).toArray();

        res.json(allCars);
    } catch (err) {
        res.status(500).json({ message: "Server error", error: err.message });
    }
};

const addCar = async (req, res) => {
    try {
        const { name, price_per_day, year, color, steering_type, number_of_seats } = req.body;
        const cars = global.db.collection("cars");

        const newCar = new Car(name, price_per_day, year, color, steering_type, number_of_seats);
        await cars.insertOne(newCar);

        res.status(201).json({ message: "Car added successfully" });
    } catch (err) {
        res.status(500).json({ message: "Server error", error: err.message });
    }
};

module.exports = { getRentalCars, addCar };