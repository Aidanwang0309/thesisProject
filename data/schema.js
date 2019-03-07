const { gql } = require("apollo-server-express");

module.exports = gql`
	type User {
		_id: ID!
		name: String!
		email: String
		picture: String
	}

	type Product {
		_id: ID!
		productName: String!
		productPrice: Float!
		productImage: String!
		productPostDate: String!
		productSku: String
		productWeight: Float
	}

	type Query {
		me: User
		products: [Product!]!
	}

	input ProductInput {
		_id: ID!
		productSku: String
		productName: String!
		productPrice: Float!
		productWeight: Float
		productImage: String
		productPostDate: String!
	}

	type Mutation {
		createProduct(productInput: ProductInput): Product
	}
`;
