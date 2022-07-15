const express = require('express');
const cors = require('cors');

const app = express();

// Config JSON Response
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Config CORS
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));

// Public folder for images
app.use(express.static('public'));

// Route for API

app.listen(5000)
