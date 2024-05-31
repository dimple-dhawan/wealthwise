const express = require('express');
const app = express();
const cors = require("cors");
const categoryRoute = require("./routes/categoryRoute.js");
const budgetRoute = require("./routes/budgetRoute.js");
const expenseRoutes = require("./routes/expenseRoutes.js");
require("dotenv").config();


const PORT = process.env.PORT;
app.use(cors());
app.use(express.json());
app.use ("/weathwise/categories", categoryRoute);
app.use ("/weathwise/budget", budgetRoute);
app.use ("/weathwise/expenses", expenseRoutes);



app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});





