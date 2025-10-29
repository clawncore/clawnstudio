// Environment variables for Vercel deployment
// This file helps manage environment variables across different environments

export const VERCEL_ENV = {
    // Vercel provides these automatically
    VERCEL_URL: process.env.VERCEL_URL || 'localhost:3000',
    VERCEL_ENV: process.env.VERCEL_ENV || 'development',

    // Your custom environment variables would go here
    // For example:
    // DATABASE_URL: process.env.DATABASE_URL,
    // API_KEY: process.env.API_KEY,
};

// Helper function to get the full URL
export function getBaseUrl(): string {
    if (process.env.VERCEL_URL) {
        return `https://${process.env.VERCEL_URL}`;
    }

    if (process.env.NODE_ENV === 'production') {
        return 'https://your-production-url.com'; // Replace with your actual production URL
    }

    return 'http://localhost:3000';
}