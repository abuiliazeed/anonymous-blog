import Database from 'better-sqlite3';
import path from 'path';

const dbPath = path.resolve(process.cwd(), 'blog.db');
console.log('Database path:', dbPath);

const db = new Database(dbPath, { verbose: console.log });

export default db;
