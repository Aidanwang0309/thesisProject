const { AuthenticationError } = require("apollo-server");

// const user = {
// 	_id: "1",
// 	name: "Reed",
// 	email: "test@test.com"
// };

// const product = ;

const products = [
	{
		_id: "1",
		productSku: "test",
		productName: "Apple！",
		productPrice: 12.3,
		productWeight: 10.0,
		productImage: "test",
		productPostDate: "01/19"
	}
];

const authenticated = next => (root, args, ctx, info) => {
	if (!ctx.currentUser) {
		console.log(ctx.currentUser);
		throw new AuthenticationError("you must be loggggggged in");
	}
	return next(root, args, ctx, info);
};

// const createProduct = args => {

// }

module.exports = {
	Query: {
		me: authenticated((root, args, ctx) => ctx.currentUser),

		products: () => {
			return products;
		}
	},
	Mutation: {
		createProduct: (root, args, ctx) => {
			const product = {
				_id: args.productInput._id,
				productSku: args.productInput.productSku,
				productName: args.productInput.productName,
				productPrice: +args.productInput.productPrice,
				productWeight: args.productInput.productWeight,
				productImage: args.productInput.productImage,
				productPostDate: args.productInput.productPostDate
			};
			products.push(product);
			return product;
		}
	}
};
