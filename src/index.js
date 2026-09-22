const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 4000;
const app = express();

const MONGO_URI = `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@mongo:27017`;

mongoose
	.connect(MONGO_URI)
	.then(() => console.log("MongoDB connected"))
	.catch((err) => console.error("MongoDB connection error:", err.message));

app.get("/", (req, res) => {
	res.send("Hello World! 👋");
});

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
