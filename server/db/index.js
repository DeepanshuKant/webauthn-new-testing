'use strict';
const mongoose = require('mongoose');
// const dbConnection = process.env.DB_CONNECTION;
mongoose.set('useCreateIndex', true);

mongoose.connect("mongodb+srv://CheeseMaster_69:<password>@cluster0.5crnt.mongodb.net/?retryWrites=true&w=majority", {
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
