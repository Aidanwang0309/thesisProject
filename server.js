const express = require("express");
const cookieSession = require("cookie-session");
const passport = require("passport");
const keys = require("./config/keys");
const mongoose = require("mongoose");
const expressGraphQL = require("express-graphql");
const schema = require("./schema/schema");
const authRoutes = require("./routes/authRoutes");
require("./models/User");
require("./services/passport");

mongoose.connect(keys.mongoURI, { useNewUrlParser: true });
const app = express();

// setup client-side cookie session
app.use(
	cookieSession({
		maxAge: 30 * 24 * 60 * 60 * 1000,
		keys: [keys.cookieKey]
	})
);
app.use(passport.initialize());
app.use(passport.session());

// setup routes of authentication
authRoutes(app);

app.use(
	"/graphql",
	expressGraphQL({
		schema,
		graphiql: true
	})
);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	console.log(`Listening ${PORT}`);
});
