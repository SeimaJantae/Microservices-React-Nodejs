import CreatePost from "./_component/CreatePost";
import PostsList from "./_component/PostsList";

export default function Home() {
  return (
    <div className="container-lg p-4">
      <h3>Create Post</h3>
      <CreatePost />
      <hr />
      <h3>Posts List</h3>
      <PostsList />
    </div>
  );
}
