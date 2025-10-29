// This is a simple server file for Vercel deployment
// The actual server code is in server/index.ts and will be built to dist/

const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

// Serve static files from the React app build directory
app.use(express.static(path.join(__dirname, 'dist/public')));

// API routes would go here if needed
// For now, we'll just serve the React app for all routes
app.get('/api/*', (req, res) => {
    res.status(404).send('API routes are not available in this deployment');
});

// Serve static assets
app.get('/assets/*', (req, res) => {
    const filePath = path.join(__dirname, 'dist/public', req.path);
    if (fs.existsSync(filePath)) {
        res.sendFile(filePath);
    } else {
        res.status(404).send('Not found');
    }
});

// Serve favicon
app.get('/favicon.ico', (req, res) => {
    const filePath = path.join(__dirname, 'dist/public', 'favicon.ico');
    if (fs.existsSync(filePath)) {
        res.sendFile(filePath);
    } else {
        res.status(404).send('Not found');
    }
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/public/index.html'));
});

// Vercel expects a default export for serverless functions
module.exports = app;
module.exports.default = app;