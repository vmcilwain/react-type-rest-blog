function Post({ post }: { post: { id: number, title: string, content: string } }) {
  const { id, title, content } = post;
  return (
    <div>
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  )
}
export default Post;