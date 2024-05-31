const exp = require("constants");
const express = require("express");
const router = express.Router();
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
const path = "./data/budget.json";

require("dotenv").config();
const PORT = process.env.PORT || 8080;
const BASE_URL = "http://localhost:" + PORT;

const readData = () => {
    const data = fs.readFileSync(path);
    return JSON.parse(data)
}

router.get("/", (_req, res) => {
    const data = readData();
    res.send(data)
});


router.post("/", (req, res) => {
    const newBudget = {
        id: uuidv4(),
        budget: req.body.budget,
        date: req.body.date
    }

    const budget = readData();
    budget.push(newBudget);
    fs.writeFileSync(path, JSON.stringify(budget));
    res.status(201).json(newBudget);
});

module.exports = router;