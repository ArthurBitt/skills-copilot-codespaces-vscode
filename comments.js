// Create web server

// Import modules
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

// Create web server
const app = express();
app.use(bodyParser.json());

// Define path to comments file
const commentsPath = path.join(__dirname, 'comments.json');
