import CommentsList from "./CommetsList";
import CreateComment from "./CreateComment";

export default function PostCard({ post }) {
  return (
    <div className="col-lg-4 mb-4">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{post.title}</h5>
          <CommentsList postId={post.id} />
          <CreateComment postId={post.id} />
        </div>
      </div>
    </div>
  );
}
