const mongoose = require('mongoose');
// Allow Promises
mongoose.Promise = global.Promise;
// Connection
const dburl='mongodb+srv://mansi:mansi@cluster0.3isgj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(dburl, { useNewUrlParser: true,useFindAndModify:false});
// Validation
mongoose.connection
  .once('open', () => console.log('Connected to the database!'))
  .on('error', err => console.log('Error with the database!', err));
