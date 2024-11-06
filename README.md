# Anonymous Blog

An anonymous blogging web application built with Next.js, TypeScript, and SQLite.

## Features

- Create anonymous blog posts
- View all blog posts
- No authentication required
- Simple and clean UI using shadcn/ui components

## Prerequisites

- Node.js (v18 or later)
- npm

## Installation

1. Clone the repository
2. Navigate to the project directory
3. Install dependencies:

```bash
npm install
```

## Running the Application

### Development Mode

```bash
npm run dev
```

The application will be available at `http://localhost:3000`

### Building for Production

```bash
npm run build
npm run start
```

## Project Structure

- `src/app/`: Next.js application routes and pages
- `src/lib/`: Database and utility functions
- `src/components/`: Reusable UI components
- `src/app/api/posts/`: API routes for blog posts

## Database

The application uses SQLite for storing blog posts. The database file (`blog.db`) will be automatically created in the project root.

## Technologies Used

- Next.js 15
- TypeScript
- SQLite (better-sqlite3)
- Tailwind CSS
- shadcn/ui components

## Limitations

- No user authentication
- Posts are permanently stored
- Basic styling and functionality

## License

MIT License
