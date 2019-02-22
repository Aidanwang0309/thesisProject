if (process.env.NODE_ENV === "production") {
	// in production mode
	module.exports = require("./prod");
} else {
	// in development mode
	module.exports = require("./dev");
}
