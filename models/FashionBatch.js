const mongoose = require("mongoose");
const { Schema } = mongoose;

const batchSchema = new Schema({
	batchID: String,
	batchName: String,
	batchDate: String,
	batchQuantity: Number
});

module.exports = mongoose.model("fashionBatch", batchSchema);
