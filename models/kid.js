const mongoose = require('mongoose');


const kidSchema = mongoose.Schema({
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

const Kid = module.exports = mongoose.model('Kid', kidSchema);


module.exports.getKids = (callback, limit) => {
	Kid.find(callback).limit(limit);
}


module.exports.getKidById = (id, callback) => {
	Kid.findById(id, callback);
}
Kid
module.exports.addKid = (kid, callback) => {
	Kid.create(kid, callback);
}

module.exports.updateKid = (id, kid, options, callback) => {
	var query = {_id: id};
	var update = {
		title: kid.title,
		description: kid.description,
		author: kid.author,
		publisher: kid.publisher,
		pages: kid.pages,
		image_url: kid.image_url,
		price: kid.price,
		buy_url: kid.buy_url
	}
	Kid.findOneAndUpdate(query, update, options, callback);
}
