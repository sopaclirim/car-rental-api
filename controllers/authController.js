const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const User = require("../models/User");

const register = async (req, res) => {
    try {
        const users = global.db.collection("users");

        const { fullName, email, username, password } = req.body;

        const existingUser = await users.findOne({ username });
        if (existingUser) return res.status(400).json({ message: "Username already exists" });

        const hashedPassword = bcrypt.hashSync(password, 10);
        
        const newUser = new User(fullName, email, username, hashedPassword);

        await users.insertOne(newUser);
        res.status(201).json({ message: "User registered successfully" });
    } catch (err) {
        res.status(500).json({ message: "Server error", error: err.message });
    }
};

const login = async (req,res) => {
    try{
        const users = global.db.collection("users");

        const { username, password } = req.body;

        const user = await users.findOne({username});
        if(!user || !bcrypt.compareSync(password, user.password)) {
            return res.status(400).json({ message: "Invalid credentials"});
        }

        const token = jwt.sign({ username: user.username }, process.env.JWT_SECRET, { expiresIn: "7d" });
        res.json({ token });
    }catch(err){
        res.status(500).json({ message: "Server error", error: err.message });
    }
};

const myProfile = async (req,res) => {
    try{
        const users = global.db.collection("users");

        const user = await users.findOne(
            { username: req.user.username},
            { projection: { password: 0 }}
        );
        if(!user) return res.status(404).json({ message: "User not found" });

        res.json(user);
    }catch(err){
        res.status(500).json({ message: "Server error", error: err.message });
    }
};

module.exports = { register, login, myProfile };