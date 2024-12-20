// Import the Express module
const express = require('express');

// Create an Express application
const app = express();

// Define a route for the root URL "/"
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start the server and listen on port 3000
app.listen(3000, '0.0.0.0', () => {
  console.log('Server running on http://0.0.0.0:3000');
});