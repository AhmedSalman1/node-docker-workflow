const express = require("express");
const { Pool } = require("pg");

const PORT = process.env.PORT || 4000;
const app = express();

const pool = new Pool({
	connectionString: process.env.DATABASE_URL,
});

pool
	.query("SELECT NOW()")
	.then(() => console.log("PostgreSQL connected"))
	.catch((err) => console.error("PostgreSQL connection error:", err.message));

app.get("/", (req, res) => {
	res.send("Hello World! 👋");
});

app.get("/health/db", async (req, res) => {
	try {
		const { rows } = await pool.query("SELECT NOW() as now");
		res.json({ status: "ok", now: rows[0].now });
	} catch (err) {
		res.status(500).json({ status: "error", message: err.message });
	}
});

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
