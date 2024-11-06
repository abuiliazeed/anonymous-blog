'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface BlogPost {
  id: number;
  title: string;
  content: string;
  createdAt: string;
}

export default function Home() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch('/api/posts');
        if (!response.ok) {
          throw new Error('Failed to fetch posts');
        }
        const data = await response.json();
        setPosts(data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching posts:', error);
        setIsLoading(false);
      }
    }

    fetchPosts();
  }, []);

  if (isLoading) {
    return <div className="container mx-auto p-4 text-center">Loading posts...</div>;
  }

  return (
    <main className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Anonymous Blog</h1>
        <Link href="/new">
          <Button>Create New Post</Button>
        </Link>
      </div>

      {posts.length === 0 ? (
        <p className="text-center text-gray-500">No blog posts yet. Create the first one!</p>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Card key={post.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>{post.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  {post.content.length > 100 
                    ? `${post.content.slice(0, 100)}...` 
                    : post.content}
                </p>
                <div className="text-xs text-gray-500 mt-2">
                  Posted on: {new Date(post.createdAt).toLocaleDateString()}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </main>
  );
}
