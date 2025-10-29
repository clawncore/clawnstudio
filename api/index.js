// Vercel serverless function entry point
// This file is used by Vercel to handle serverless functions

export default function handler(request, response) {
    response.status(200).json({
        message: 'Clawn Media Studio API endpoint',
        timestamp: new Date().toISOString(),
        environment: process.env.VERCEL_ENV || 'development'
    });
}