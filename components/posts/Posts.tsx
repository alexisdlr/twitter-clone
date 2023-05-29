import usePosts from "@/hooks/usePosts";
import Post from "./Post";

interface PostsProps {
  userId?: string;
}
const Posts = ({ userId }: PostsProps) => {
  const { data: posts } = usePosts();

  if (!posts) {
    return <div> No posts</div>;
  }
  return (
    <div>
      {posts.map((post: Record<string, any>) => (
        <Post key={post.id} data={post} userId={userId as string} />
      ))}
    </div>
  );
};

export default Posts;
