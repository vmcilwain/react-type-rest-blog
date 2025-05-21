import Post from "./Post";

function Posts({ posts }: { posts: { id: number; title: string; content: string }[] }) {
  const renderedPosts = posts.map(post => {
    return (<Post key={post.id} post={post} />)
  })

  return (
    <div>
      {renderedPosts}
    </div>
  );
}

export default Posts;
