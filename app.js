const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

app.use(express.static(__dirname+'/client'));
app.use(bodyParser.json());

Book = require('./models/book');
Suspense = require('./models/suspense');;
Drama = require('./models/drama');
Nonfiction = require('./models/nonfiction');
Kid = require('./models/kid');
// Connect to Mongoose
mongoose.connect('mongodb://localhost/bookstore');
var db = mongoose.connection;


app.get('/api/books', (req, res) => {
	Book.getBooks((err, books) => {
		if(err){
			throw err;
		}
		res.json(books);
	});
});

app.get('/api/books/:_id', (req, res) => {
	Book.getBookById(req.params._id, (err, book) => {
		if(err){
			throw err;
		}
		res.json(book);
	});
});

app.post('/api/books', (req, res) => {
	var book = req.body;
	Book.addBook(book, (err, book) => {
		if(err){
			throw err;
		}
		res.json(book);
	});
});

app.put('/api/books/:_id', (req, res) => {
	var id = req.params._id;
	var book = req.body;
	Book.updateBook(id, book, {}, (err, book) => {
		if(err){
			throw err;
		}
		res.json(book);
	});
});

/*app.delete('/api/books/:_id', (req, res) => {
	var id = req.params._id;
	Book.removeBook(id, (err, book) => {
		if(err){
			throw err;
		}
		res.json(book);
	});
});*/

app.get('/api/suspenses', (req, res) => {
	Suspense.getSuspenses((err, suspenses) => {
		if(err){
			throw err;
		}
		res.json(suspenses);
	});
});

app.get('/api/suspenses/:_id', (req, res) => {
	var id = req.params._id;
	Suspense.getSuspenseById(id, (err, suspense) => {
		if(err){
			throw err;
		}
		res.json(suspense);
	});
});

app.post('/api/suspenses', (req, res) => {
	var suspense = req.body;
	Suspense.addSuspense(suspense, (err, suspense) => {
		if(err){
			throw err;
		}
		res.json(suspense);
	});
});

app.put('/api/suspenses/:_id', (req, res) => {
	var id = req.params._id;
	var suspense = req.body;
	Suspense.updateSuspense(id, suspense, {}, (err, suspense) => {
		if(err){
			throw err;
		}
		res.json(suspense);
	});
});

app.get('/api/dramas', (req, res) => {
	Drama.getDramas((err, dramas) => {
		if(err){
			throw err;
		}
		res.json(dramas);
	});
});

app.get('/api/dramas/:_id', (req, res) => {
	var id = req.params._id;
	Drama.getDramaById(id, (err, drama) => {
		if(err){
			throw err;
		}
		res.json(drama);
	});
});

app.post('/api/dramas', (req, res) => {
	var drama = req.body;
	Drama.addDrama(drama, (err, drama) => {
		if(err){
			throw err;
		}
		res.json(drama);
	});
});

app.put('/api/dramas/:_id', (req, res) => {
	var id = req.params._id;
	var drama = req.body;
	Drama.updateDrama(id, drama, {}, (err, drama) => {
		if(err){
			throw err;
		}
		res.json(drama);
	});
});

app.get('/api/nonfictions', (req, res) => {
	Nonfiction.getNonfictions((err, nonfictions) => {
		if(err){
			throw err;
		}
		res.json(nonfictions);
	});
});

app.get('/api/nonfictions/:_id', (req, res) => {
	var id = req.params._id;
	Nonfiction.getNonfictionById(id, (err, nonfiction) => {
		if(err){
			throw err;
		}
		res.json(nonfiction);
	});
});

app.post('/api/nonfictions', (req, res) => {
	var nonfiction = req.body;
	Nonfiction.addNonfiction(nonfiction, (err, nonfiction) => {
		if(err){
			throw err;
		}
		res.json(nonfiction);
	});
});

app.put('/api/nonfictions/:_id', (req, res) => {
	var id = req.params._id;
	var nonfiction = req.body;
	Nonfiction.updateNonfiction(id, nonfiction, {}, (err, nonfiction) => {
		if(err){
			throw err;
		}
		res.json(nonfiction);
	});
});

app.get('/api/kids', (req,res) => {
	Kid.getKids((err, kids) => {
		if(err){
			throw err;
		}
		res.json(kids);
	});
});

app.get('/api/kids/:_id', (req, res) => {
	var id = req.params._id;
	Kid.getKidById(id, (err, kid) => {
		if(err){
			throw err;
		}
		res.json(kid);
	});
});

app.post('/api/kids', (req, res) => {
	var kid = req.body;
	Kid.addKid(kid, (err, kid) => {
		if(err){
			throw err;
		}
		res.json(kid);
	});
});

app.put('/api/kids/:_id', (req, res) => {
	var id = req.params._id;
	var kid = req.body;
	Kid.updateKid(id, kid, {}, (err, kid) => {
		if(err){
			throw err;
		}
		res.json(kid);
	});
});



app.listen(process.env.PORT || 3000);
