import Database from 'better-sqlite3';
import path from 'path';
import fs from 'fs';

// Vercel-specific database path handling
const dbPath = process.env.VERCEL 
  ? '/tmp/blog.db'  // Writable location in Vercel's serverless environment
  : path.resolve(process.cwd(), 'blog.db');

// Ensure the directory exists
const dbDir = path.dirname(dbPath);
if (!fs.existsSync(dbDir)) {
  fs.mkdirSync(dbDir, { recursive: true });
}

const db = new Database(dbPath, { 
  verbose: process.env.NODE_ENV !== 'production' ? console.log : undefined 
});

export default db;
