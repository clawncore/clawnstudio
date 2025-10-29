// This is a simple server file for Vercel deployment
// The actual server code is in server/index.ts and will be built to dist/

import express from 'express';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Define the path to static files
const staticPath = path.join(__dirname, 'dist/public');

// Log for debugging
console.log('Server starting...');
console.log('__dirname:', __dirname);
console.log('staticPath:', staticPath);
console.log('staticPath exists:', fs.existsSync(staticPath));

// Serve static files
app.use(express.static(staticPath));

// API routes
app.get('/api/*', (req, res) => {
  res.status(404).send('API routes are not available in this deployment');
});

// Serve favicon
app.get('/favicon.ico', (req, res) => {
  const faviconPath = path.join(staticPath, 'favicon.ico');
  if (fs.existsSync(faviconPath)) {
    res.sendFile(faviconPath);
  } else {
    res.status(404).send('Favicon not found');
  }
});

// Catch-all handler for SPA
app.get('*', (req, res) => {
  const indexPath = path.join(staticPath, 'index.html');
  if (fs.existsSync(indexPath)) {
    res.sendFile(indexPath);
  } else {
    res.status(404).send('index.html not found');
  }
});

export default app;
