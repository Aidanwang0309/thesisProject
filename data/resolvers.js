const { AuthenticationError } = require("apollo-server");

const user = {
	_id: "1",
	name: "Reed",
	email: "test@test.com"
};

const authenticated = next => (root, args, ctx, info) => {
	if (!ctx.currentUser) {
		throw new AuthenticationError("you must be loggggggged in");
	}
	return next(root, args, ctx, info);
};

module.exports = {
	Query: {
		me: authenticated((root, args, ctx) => ctx.currentUser)
	}
};
