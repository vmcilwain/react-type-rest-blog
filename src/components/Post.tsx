function Post({ post }: { post: { id: number, title: string, content: string } }) {
  const { id, title, content } = post;

  return (
    <div className="card">
      <header className="card-header">
        <h2 className="card-header-title">
          <a href={`/posts/${id}`}>{title}</a>
        </h2>
      </header>

      <div className="card-content">
        <p className="content">{content}</p>
        <a href={`/posts/${id}/edit`}>Edit</a>
      </div>
    </div>
  )
}

export default Post;