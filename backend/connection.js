const mongoose = require('mongoose');

const url = "mongodb+srv://mariyamkha603:favnumber3@cluster0.yjgwd.mongodb.net/bicopro?retryWrites=true&w=majority&appName=Cluster0"

// asynchronous functions - return Promise object
mongoose.connect(url)
.then((result) => {
    console.log('database connected successfully');
})
.catch((err) => {
    console.log(err);
});

module.exports = mongoose;