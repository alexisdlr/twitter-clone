import useCurrentUser from "@/hooks/useCurrentUser";

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
        <img
          className="w-10 h-10 rounded-full "
          src="https://pbs.twimg.com/profile_images/1339638610165821440/TSadIsCG_400x400.jpg"
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
