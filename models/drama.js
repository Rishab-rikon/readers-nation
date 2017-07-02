const mongoose = require('mongoose');


const dramaSchema = mongoose.Schema({
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

const Drama = module.exports = mongoose.model('Drama', dramaSchema);


module.exports.getDramas = (callback, limit) => {
	Drama.find(callback).limit(limit);
}


module.exports.getDramaById = (id, callback) => {
	Drama.findById(id, callback);
}

module.exports.addDrama = (drama, callback) => {
	Drama.create(drama, callback);
}

module.exports.updateDrama = (id, drama, options, callback) => {
	var query = {_id: id};
	var update = {
		title: drama.title,
		description: drama.description,
		author: drama.author,
		publisher: drama.publisher,
		pages: drama.pages,
		image_url: drama.image_url,
		price: drama.price,
		buy_url: drama.buy_url
	}
	Drama.findOneAndUpdate(query, update, options, callback);
}
