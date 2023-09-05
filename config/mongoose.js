const mongoose = require('mongoose');

//connecting mongoose with database
const DB = 'mongodb+srv://yousuf337692qureshi:bH764IQfTC3MYtbK@cluster0.cvff5s1.mongodb.net/placement-cell?retryWrites=true&w=majority';

mongoose.connect(DB, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

// for local use, use the below connection
// mongoose.connect('mongodb://0.0.0.0:27017/placement_cell');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error in connecting to MongoDB'));

db.once('open', function () {
	console.log('Connected to Database :: Mongodb');
});

module.exports = mongoose;