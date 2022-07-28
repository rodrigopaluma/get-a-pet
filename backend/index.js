
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const connectDB = require('./db/conn');
const app = express();

// connect MongoDb

connectDB();


// Config JSON Response
//app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Config CORS
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));

// Public folder for images
app.use(express.static('public'));

// Route for API
const PetRoutes = require('./routes/PetRoutes')
const UserRoutes = require('./routes/UserRoutes')

app.use('/pets', PetRoutes)
app.use('/users', UserRoutes)

mongoose.connection.once('open', () => {
    console.log("Connect to MongoDB")
})

app.listen(5000)