function Posts({ posts }: { posts: { id: number; title: string; content: string }[] }) {
  return (
    <div>
      {posts.map(post => (
        <div key={post.id}>
          <h2><a href={`posts/${post.id}`}>{post.title}</a></h2>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );

}

export default Posts;
