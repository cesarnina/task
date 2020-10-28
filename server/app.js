const path = require('path');
const express = require('express');
const morgan = require('morgan');

const app = express();

// logging middleware
app.use(morgan('dev'));

// Body parsing middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Static file-serving middleware
app.use(express.static(path.join(__dirname, '../public')));

// Routes that will be accessed via AJAX should be prepended with
// /api so they are isolated from our GET /* wildcard.
app.use('/api', require('./api'));

// Send client to index.html for any other requests
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'))
});

// error handling middleware

// app.use((req, res, next) => {
//   console.error("This is an Error 404!");
//   res.status(404).send("Error 404");
// });

// app.use((err, req, res, next) => {
//   console.error('This is an Error 500! \n' + err.message);
//   res.status(err.status || 500).send(err.message || "Internal server errorrr");
// });

module.exports = app;