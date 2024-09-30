const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const port = 2828;
const app = express();
const authRouter =require("./routes/authRoutes")
app.use(express.json());
app.use(cors());
app.use("/api/auth",authRouter)

app.listen(port, () => {
    console.log(`server running in ${port}`);
});

mongoose
    .connect("mongodb://localhost:27017/blog")
    .then(() => {
        console.log("mongodb connected");
    })
    .catch((error) => {
        console.log("database not connected properly", error);
    });
