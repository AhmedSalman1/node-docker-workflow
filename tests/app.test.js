const request = require("supertest");
const app = require("../src/app");

describe("GET /", () => {
	it("should respond with 200 and 'Hello World! 👋'", async () => {
		const response = await request(app).get("/");

		expect(response.status).toBe(200);
		expect(response.text).toBe("Hello World! 👋");
	});

	it("should respond with html content type", async () => {
		const response = await request(app).get("/");

		expect(response.headers["content-type"]).toMatch(/text\/html/);
	});

	it("should return 404 for unknown routes", async () => {
		const response = await request(app).get("/non-existent-route");

		expect(response.status).toBe(404);
	});
});
