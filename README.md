# Clawn Media Studio

A creative digital gift and motion design service website.

## Deployment to Vercel

This project is configured for deployment to Vercel. Follow these steps:

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Sign up/log in to [Vercel](https://vercel.com)
3. Create a new project and import your repository
4. Vercel will automatically detect the project settings:
   - Build Command: `npm run build`
   - Output Directory: `dist/public`
   - Install Command: `npm install`

## Project Structure

```
.
├── client/              # React frontend
│   ├── src/             # Source files
│   ├── index.html       # HTML entry point
│   └── vite.config.ts   # Vite configuration
├── server/              # Backend server code
├── shared/              # Shared code between client and server
├── dist/                # Build output directory
├── vercel.json          # Vercel configuration
└── package.json         # Project dependencies and scripts
```

## Development

To run the project locally:

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

## Building

To build the project for production:

```bash
npm run build
```

## Environment Variables

For deployment, you may need to set environment variables in the Vercel dashboard:

- `DATABASE_URL` - Database connection string
- `API_KEY` - API keys for external services
- Any other environment variables your application requires

## Custom Domain

To use a custom domain:
1. Add a domain in your Vercel project settings
2. Follow the DNS configuration instructions provided by Vercel
3. Vercel will automatically provision an SSL certificate

## Support

For issues with deployment, contact the development team.