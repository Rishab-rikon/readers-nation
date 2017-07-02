const mongoose = require('mongoose');

// Book Schema
const suspenseSchema = mongoose.Schema({
	title:{
		type: String,
		required: true
	},
	description:{
		type: String
	},
	author:{
		type: String,
		required: true
	},
	publisher:{
		type: String
	},
	pages:{
		type: Number
	},
	image_url:{
		type: String
	},
	price:{
		type: Number
	},
	buy_url:{
		type: String
	},
	create_date:{
		type: Date,
		default: Date.now
	}
});

const Suspense = module.exports = mongoose.model('Suspense', suspenseSchema);

// Get Books
module.exports.getSuspenses = (callback, limit) => {
	Suspense.find(callback).limit(limit);
}

// Get Book
module.exports.getSuspenseById = (id, callback) => {
	Suspense.findById(id, callback);
}

module.exports.addSuspense = (suspense, callback) => {
	Suspense.create(suspense, callback);
}

// Update Book
module.exports.updateSuspense = (id, suspense, options, callback) => {
	var query = {_id: id};
	var update = {
		title: suspense.title,
		description: suspense.description,
		author: suspense.author,
		publisher: suspense.publisher,
		pages: suspense.pages,
		image_url: suspense.image_url,
		price: suspense.price,
		buy_url: suspense.buy_url
	}
	Suspense.findOneAndUpdate(query, update, options, callback);
}
