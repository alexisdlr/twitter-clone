import { useCallback } from "react";
import { IconType } from "react-icons";
import { useRouter } from "next/router";

import useCurrentUser from "@/hooks/useCurrentUser";
import useLoginModal from "@/hooks/useLoginModal";

interface SidebarItemProps {
  label: string;
  href?: string;
  icon: IconType;
  onClick?: () => void;
  auth?: boolean;
}
const SidebarItem = ({
  label,
  href,
  icon: Icon,
  onClick,
  auth,
}: SidebarItemProps) => {
  const { data: currentUser } = useCurrentUser();
  const loginModal = useLoginModal();
  const router = useRouter();
  const handleClick = useCallback(() => {
    if (onClick) return onClick();

    if (auth && !currentUser) {
      console.log("hello");
      loginModal.onOpen();
    } else if (href) {
      router.push(href);
    }
  }, [router, href, onClick, loginModal, auth, currentUser]);
  return (
    <div onClick={handleClick} className="flex items-center">
      <div
        className="
        relative 
        rounded-full 
        h-14 
        w-14 
        flex 
        items-center 
        justify-center 
        p-4
        hover:bg-slate-300
        hover:bg-opacity-10
        transition
        duration-300
        ease-in-out
        cursor-pointer
        lg:hidden
        "
      >
        <Icon size={20} color="white" />
      </div>
      <div
        className="
          relative
          hidden
          lg:flex
          items-center
          gap-4
          p-4
          rounded-full
          hover:bg-slate-300
          hover:bg-opacity-10
          cursor-pointer
          transition
          duration-300
          ease-in-out
        "
      >
        <Icon size={24} color={"white"} />
        <p className="hidden lg:block text-xl text-white">{label}</p>
      </div>
    </div>
  );
};

export default SidebarItem;
