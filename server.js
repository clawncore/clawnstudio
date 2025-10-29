// This is a simple server file for Vercel deployment
// The actual server code is in server/index.ts and will be built to dist/

const express = require('express');
const path = require('path');

const app = express();

// Serve static files from the React app build directory
app.use(express.static(path.join(__dirname, 'dist/public')));

// API routes would go here if needed
// For now, we'll just serve the React app for all routes
app.get('/api/*', (req, res) => {
    res.status(404).send('API routes are not available in this deployment');
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/public/index.html'));
});

module.exports = app;