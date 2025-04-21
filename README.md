# KubeAce - Website

A modern, performant multi-page website for KubeAce showcasing cloud-native and AI-powered technology solutions with enhanced user experience and interactive design.

## Tech Stack

- **Frontend**: React.js with TypeScript, Tailwind CSS
- **Backend**: Express.js server
- **Styling**: Tailwind CSS with Shadcn UI components
- **Routing**: Wouter for client-side routing
- **Querying**: TanStack React Query for data fetching

## Features

- Responsive and accessible design
- SEO-optimized architecture
- Advanced performance optimizations
- Modular component-based structure
- Dynamic solution detail pages
- Blog with markdown support
- Case studies showcase
- Downloadable white papers

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- Node.js (version 16 or higher)
- npm (comes with Node.js)

## Getting Started

### Running Locally

1. Clone the repository:

```bash
git clone https://github.com/your-username/kubeace-website.git
cd kubeace-website
```

2. Run the local development server using the provided script:

```bash
./run-local.sh
```

Or manually:

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```

3. Open your browser and navigate to `http://localhost:5000` to see the application running.

### Project Structure

```
├── client/             # Frontend code
│   ├── public/         # Static files
│   └── src/
│       ├── assets/     # Images, fonts, etc.
│       ├── components/ # React components
│       ├── data/       # Mock data for development
│       ├── hooks/      # Custom React hooks
│       ├── lib/        # Utility functions
│       └── pages/      # Page components
├── server/             # Backend code
│   ├── data/           # Server-side data
│   ├── services/       # Business logic
│   └── index.ts        # Main server file
└── shared/             # Shared types and utilities
```

## Development

### Adding New Pages

Add new page components in the `client/src/pages` directory and register them in `client/src/App.tsx`.

### Styling

This project uses Tailwind CSS for styling. The theme configuration is in `tailwind.config.ts` and `theme.json`.

### API Endpoints

The backend provides the following API endpoints:

- `/api/services` - Get all services
- `/api/services/:slug` - Get service by slug
- `/api/solutions` - Get all solutions
- `/api/solutions/:slug` - Get solution by slug
- `/api/case-studies` - Get all case studies
- `/api/case-studies/:slug` - Get case study by slug
- `/api/blog-posts` - Get all blog posts
- `/api/blog-posts/:slug` - Get blog post by slug
- `/api/testimonials` - Get all testimonials
- `/api/contact` - Submit contact form

## Deployment

The application can be deployed to any hosting service that supports Node.js applications. 

## License

[Proprietary] - This project is the property of KubeAce.

## Contact

For any inquiries, please reach out to info@kubeace.com.