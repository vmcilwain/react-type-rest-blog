function Comment({ comment }: { comment: {id: number, text: string }}) {
  const { id, text } = comment;
  
  return (
    <div className="comment">
      <p>{id}: {text}</p>
    </div>
  );
}

export default Comment;