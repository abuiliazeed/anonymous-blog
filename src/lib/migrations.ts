import db from './db';


export function createBlogPostsTable() {
  try {
    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS blog_posts (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        content TEXT NOT NULL,
        createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `;

    const stmt = db.prepare(createTableQuery);
    stmt.run();
    console.log('Blog posts table created or already exists');
  } catch (error) {
    console.error('Error creating blog posts table:', error);
    throw error;
  }
}

// Ensure migrations run on every deployment
createBlogPostsTable();
