const exp = require("constants");
const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = "./data/categories.json";

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
})

module.exports = router;