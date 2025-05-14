import { useParams } from 'react-router-dom';
import Post from '../components/Post';
import Comments from "../components/Comments";

function PostPage() {
  const posts = [
    { id: 1, title: "Post 1", content: "Content of post 1" },
    { id: 2, title: "Post 2", content: "Content of post 2" },
    { id: 3, title: "Post 3", content: "Content of post 3" }
  ]

  const comments = [
    { id: 1, text: "This is the first comment." },
    { id: 2, text: "This is the second comment." },
    { id: 3, text: "This is the third comment." }
  ]

  const { id } = useParams<{ id: string }>();
  
  const post = posts.find(post => post.id === Number(id));
  
  return (
    <div>
      { post ? <Post post={post} /> : <p>Post not found</p> }
      <Comments comments={comments} />
      <a href="/">Back to Listing</a>
    </div>
  );
}

export default PostPage;