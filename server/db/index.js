'use strict';
const mongoose = require('mongoose');
// const dbConnection = process.env.DB_CONNECTION;
mongoose.set('useCreateIndex', true);

mongoose.connect("mongodb://localhost:27017/", {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});
const db = mongoose.connection;

db.on('error', () => {
	console.log('> error occurred from the database');
});
db.once('open', () => {
	console.log('> successfully opened the database');
});
module.exports = mongoose;
