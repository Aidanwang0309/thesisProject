const { gql } = require("apollo-server-express");

module.exports = gql`
	type User {
		_id: ID
		name: String
		email: String
		picture: String
	}

	# type Pin {
	# 	_id: ID
	# 	createdAt: String
	# 	title: String
	# 	content: String
	#     author: User
	# }

	type Query {
		me: User
	}
`;
