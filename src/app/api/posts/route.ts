import { NextRequest, NextResponse } from 'next/server';
import db from '../../../lib/db';
import '../../../lib/migrations'; // Ensure migrations run

// GET route to fetch all blog posts
export async function GET() {
  try {
    const posts = db.prepare('SELECT * FROM blog_posts ORDER BY createdAt DESC').all();
    return NextResponse.json(posts, { status: 200 });
  } catch (error) {
    console.error('Error fetching posts:', error);
    return NextResponse.json({ error: 'Failed to fetch posts' }, { status: 500 });
  }
}

// POST route to create a new blog post
export async function POST(request: NextRequest) {
  try {
    const { title, content } = await request.json();

    // Basic validation
    if (!title || !content) {
      return NextResponse.json({ error: 'Title and content are required' }, { status: 400 });
    }

    // Insert the new post
    const insertStmt = db.prepare('INSERT INTO blog_posts (title, content) VALUES (?, ?)');
    const result = insertStmt.run(title, content);

    return NextResponse.json({ 
      id: result.lastInsertRowid, 
      title, 
      content 
    }, { status: 201 });
  } catch (error) {
    console.error('Error creating post:', error);
    return NextResponse.json({ error: 'Failed to create post' }, { status: 500 });
  }
}
