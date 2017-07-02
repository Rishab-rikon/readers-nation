const mongoose = require('mongoose');


const nonfictionSchema = mongoose.Schema({
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

const Nonfiction = module.exports = mongoose.model('Nonfiction', nonfictionSchema);


module.exports.getNonfictions = (callback, limit) => {
	Nonfiction.find(callback).limit(limit);
}


module.exports.getNonfictionById = (id, callback) => {
	Nonfiction.findById(id, callback);
}

module.exports.addNonfiction = (nonfiction, callback) => {
	Nonfiction.create(nonfiction, callback);
}

module.exports.updateNonfiction = (id, nonfiction, options, callback) => {
	var query = {_id: id};
	var update = {
		title: nonfiction.title,
		description: nonfiction.description,
		author: nonfiction.author,
		publisher: nonfiction.publisher,
		pages: nonfiction.pages,
		image_url: nonfiction.image_url,
		price: nonfiction.price,
		buy_url: nonfiction.buy_url
	}
	Nonfiction.findOneAndUpdate(query, update, options, callback);
}
