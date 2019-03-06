const express = require("express");
const cookieSession = require("cookie-session");

const { ApolloServer } = require("apollo-server-express");
const mongoose = require("mongoose");
require("dotenv").config();

const typeDefs = require("./data/schema");
const resolvers = require("./data/resolvers");
require("./models/User");
const { findOrCreateUser } = require("./controllers/userController");

// const passport = require("passport");
// const authRoutes = require("./routes/authRoutes");
// require("./services/passport");

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true });

const server = new ApolloServer({
	typeDefs,
	resolvers,
	context: async ({ req }) => {
		let authToken = null;
		let currentUser = null;
		try {
			authToken = req.headers.authorization;
			if (authToken) {
				//find or create the user
				currentUser = await findOrCreateUser(authToken);
			}
		} catch (err) {
			console.log("Unable to authenticate user");
		}
		return { currentUser };
	}
});
const app = express();
server.applyMiddleware({ app });

// setup client-side cookie session
app.use(
	cookieSession({
		maxAge: 30 * 24 * 60 * 60 * 1000,
		keys: [process.env.COOKIE_KEY]
	})
);
// app.use(passport.initialize());
// app.use(passport.session());

// setup routes of authentication
// authRoutes(app);

// app.use(
// 	"/graphql",
// 	expressGraphQL({
// 		schema,
// 		graphiql: true
// 	})
// );

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	console.log(`Listening ${PORT}`);
});
