import useCurrentUser from "@/hooks/useCurrentUser";
import useLoginModal from "@/hooks/useLoginModal";
import useUser from "@/hooks/useUser";
import { formatDistanceToNowStrict } from "date-fns";
import { useRouter } from "next/router";
import { useCallback, useMemo } from "react";
import Avatar from "../Avatar";

interface PostProps {
  userId?: string;
  data: Record<string, any>;
}

const Post = ({ userId, data }: PostProps) => {
  const router = useRouter();
  const loginModal = useLoginModal();
  const { data: currentUser } = useCurrentUser();

  const goToUser = useCallback(
    (e: any) => {
      e.stopPropagation();
      router.push(`/users/${data.user.id}`);
    },
    [router, data.user.id]
  );

  const goToPost = useCallback(() => {
    router.push(`/posts/${data.id}`);
  }, [router, data.id]);

  const onLike = useCallback(
    (e: any) => {
      e.stopPropagation();
      loginModal.onOpen();
    },
    [loginModal]
  );

  const createdAt = useMemo(() => {
    if (!data?.createdAt) {
      return null;
    }
    return formatDistanceToNowStrict(new Date(data?.createdAt));
  }, [data?.createdAt]);
  return (
    <div
      className="border-b-[1px] border-neutral-800 p-5 cursor-pointer hover:bg-neutral-900 transition"
      onClick={goToPost}
    >
      <div className="flex items-start gap-3">
        <Avatar userId={data.user.id} />
        <div className="flex items-center gap-2">
          <p className="text-white font-semibold cursor-pointer hover:underline">
            {data.user.name}
          </p>
          <span className="text-neutral-500 cursor-pointer hidden md:block">
            @{data.user.username}
          </span>
          <span className="text-neutral-500 text-sm">{createdAt}</span>
        </div>
      </div>
    </div>
  );
};

export default Post;
