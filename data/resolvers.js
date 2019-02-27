const user = {
	_id: "1",
	name: "Reed",
	email: "test@test.com"
};

module.exports = {
	Query: {
		me: () => user
	}
};
