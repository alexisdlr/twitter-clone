import useCurrentUser from "@/hooks/useCurrentUser";
import useLoginModal from "@/hooks/useLoginModal";
import usePosts from "@/hooks/usePosts";
import useRegisterModal from "@/hooks/useRegisterModal";
import axios from "axios";
import { useCallback, useState } from "react";
import { toast } from "react-hot-toast";
import Button from "./Button";
import Avatar from "./Avatar";

interface FormProps {
  placeholder: string;
  isComment?: boolean;
  postId?: string;
}
const Form = ({ placeholder, isComment, postId }: FormProps) => {
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  const { mutate: mutatePosts } = usePosts();
  const { data: currentUser } = useCurrentUser();
  const [body, setBody] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = useCallback(async () => {
    try {
      setIsLoading(true);
      await axios.post("/api/posts", { body });
      toast.success("Tweeted!");
      setBody("");
      mutatePosts();
    } catch (error) {
      console.log(error);
      toast.error(error as string);
    } finally {
      setIsLoading(false);
    }
  }, [body, mutatePosts]);
  return (
    <div className="border-b-[1px] border-neutral-800 py-2 px-5">
      {currentUser ? (
        <div className="flex gap-4">
          <Avatar userId={currentUser?.id} />
          <div className="w-full">
            <textarea
              disabled={isLoading}
              onChange={(e) => setBody(e.target.value)}
              value={body}
              className="disabled:opacity-80 peer resize-none mt-3 w-full text-white bg-black ring-0 outline-none placeholder-neutral-500 text-[20px]"
              placeholder={placeholder}
            ></textarea>
            <hr className="opacity-0 peer-focus:opacity-100 transition h-[1px] w-full border-neutral-500" />
            <div className="flex justify-end mt-4">
              <Button
                label="Tweet"
                onClick={onSubmit}
                disabled={isLoading || !body}
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="py-8">
          <h1 className="text-white text-2xl font-bold mb-4 text-center">
            Welcome to Twitter!
          </h1>
          <div className="flex items-center justify-center gap-4">
            <Button label="Login" onClick={loginModal.onOpen} />
            <Button label="Register" onClick={registerModal.onOpen} secondary />
          </div>
        </div>
      )}
    </div>
  );
};

export default Form;
