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

// More robust path resolution for Vercel environment
const resolveDistPath = () => {
    // Try multiple possible paths for the dist/public directory
    const possiblePaths = [
        path.join(__dirname, 'dist/public'),           // Standard path
        path.join(__dirname, '../dist/public'),        // If server.js is in a subdirectory
        path.join(__dirname, '../../dist/public'),     // If server.js is in a deeper subdirectory
        path.join(process.cwd(), 'dist/public'),       // Current working directory
        path.join(process.cwd(), '../dist/public'),    // One level up from cwd
    ];

    for (const distPath of possiblePaths) {
        console.log(`Checking path: ${distPath}`);
        if (fs.existsSync(distPath)) {
            console.log(`Found dist/public at: ${distPath}`);
            return distPath;
        }
    }

    console.error('ERROR: Could not find dist/public directory in any expected location');
    console.log('Current __dirname:', __dirname);
    console.log('Current process.cwd():', process.cwd());

    // List contents of current directory and parent directories
    try {
        console.log('Contents of __dirname:', fs.readdirSync(__dirname));
    } catch (err) {
        console.error('Error reading __dirname:', err.message);
    }

    try {
        console.log('Contents of parent directory:', fs.readdirSync(path.join(__dirname, '..')));
    } catch (err) {
        console.error('Error reading parent directory:', err.message);
    }

    return null;
};

// Resolve the dist path
const distPath = resolveDistPath();

if (distPath) {
    // Serve static files from the React app build directory
    app.use(express.static(distPath));

    // API routes would go here if needed
    // For now, we'll just serve the React app for all routes
    app.get('/api/*', (req, res) => {
        res.status(404).send('API routes are not available in this deployment');
    });

    // Serve static assets
    app.get('/assets/*', (req, res) => {
        const filePath = path.join(distPath, req.path);
        if (fs.existsSync(filePath)) {
            res.sendFile(filePath);
        } else {
            res.status(404).send('Not found');
        }
    });

    // Serve favicon
    app.get('/favicon.ico', (req, res) => {
        const filePath = path.join(distPath, 'favicon.ico');
        if (fs.existsSync(filePath)) {
            res.sendFile(filePath);
        } else {
            res.status(404).send('Not found');
        }
    });

    // The "catchall" handler: for any request that doesn't
    // match one above, send back React's index.html file.
    app.get('*', (req, res) => {
        const indexPath = path.join(distPath, 'index.html');
        if (fs.existsSync(indexPath)) {
            res.sendFile(indexPath);
        } else {
            res.status(404).send('Not found');
        }
    });
} else {
    // Fallback if dist/public is not found
    app.get('*', (req, res) => {
        res.status(500).send('Server configuration error: Could not find static files');
    });
}

// Vercel expects a default export for serverless functions
export default app;
export { app };