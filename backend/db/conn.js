const mongoose = require('mongoose');

async function main() {
    await mongoose.connect('mongodb://localhost:27017/get-a-pet')
    console.log('Connected to Mongoose!');
}

main().catch((err) => console.log(err));

module.exports = mongoose;