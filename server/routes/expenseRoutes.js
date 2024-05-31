const express = require("express");
const router = express.Router();
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
const path = "./data/expenses.json";

require("dotenv").config();
const PORT = process.env.PORT || 8080;
const BASE_URL = "http://localhost:" + PORT;

const readData = () => {
    const data = fs.readFileSync(path);
    return JSON.parse(data)
}

router.get("/", (_req, res) => {
    const data = readData();
    res.json(data)
});

router.post("/", (req, res) => {
    const newExpense = {
        id: uuidv4(),
        expense: req.body.expense,
        amount: req.body.amount,
        date: req.body.date
    }

    const expenses = readData();
    expenses.push(newExpense);
    fs.writeFileSync(path, JSON.stringify(expenses));
    res.status(201).json(newExpense);
});

module.exports = router;