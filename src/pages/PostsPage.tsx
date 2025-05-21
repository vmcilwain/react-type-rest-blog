import { useEffect, useState } from 'react';
import Posts from '../components/Posts';

function PostsPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("http://localhost:3000/posts");
        // if (!response.ok) {
        //   throw new Error("Network response was not ok");
        // }
        const data = await response.json();
        setPosts(data); 
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    }

    fetchPosts();
  }, []);

  return (
    <div>
      <h1 className="title">Posts</h1>
      <a href="#">New Post</a>
      <Posts posts={posts} />
    </div>
  );
}

export default PostsPage;