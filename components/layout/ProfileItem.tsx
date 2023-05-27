import useCurrentUser from "@/hooks/useCurrentUser";
import Image from "next/image";

const ProfileItem = () => {
  const { data: user } = useCurrentUser();
  return (
    <div
      className="
        hidden
        items-center 
        justify-center 
        md:flex
        cursor-pointer  
        gap-3   
        hover:bg-slate-300
        hover:bg-opacity-10
        transition
        duration-300
        ease-in-out 
        rounded-full
        p-2
      "
    >
      <div>
        <Image
          height={40}
          width={40}
          style={{ borderRadius: "100%" }}
          className="w-10 h-10 rounded-full "
          src={user?.profileImage || "/images/placeholder.png"}
          alt="user"
        />
      </div>
      <div className="flex flex-col items-start justify-center gap-[2px]">
        <h2 className="text-white font-semibold text-lg">{user.name}</h2>
        <p className="text-slate-500 text-sm">@{user.username}</p>
      </div>
    </div>
  );
};

export default ProfileItem;
