import Comment from "./Comment";

function Comments({ comments }: { comments: { id: number, text: string}[] }) {

  const renderedComments = comments.map(comment => {
    return (
      <Comment comment={comment} key={comment.id} />
    )
  })
  return (
    <div className="comments">
      {renderedComments}
    </div>
  );
}
export default Comments;