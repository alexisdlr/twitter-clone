import useUsers from "@/hooks/useUsers";
import Avatar from "../Avatar";
import useCurrentUser from "@/hooks/useCurrentUser";

const FollowBar = () => {
  const { data: users = [] } = useUsers();
  const { data: currentUser } = useCurrentUser();

  if (users.length === 0) return null;

  const filteredUsers = users.filter((u: any) => u.id !== currentUser?.id);

  return (
    <div className="px-6 py-4 hidden lg:block">
      <div className="bg-neutral-800 p-4 rounded-xl">
        <h2 className="text-white text-xl font-semibold">Who to follow</h2>
        <div className="flex flex-col gap-4 mt-4">
          {filteredUsers.map((user: Record<string, any>) => (
            <div key={user.id} className="flex gap-4">
              <Avatar userId={user.id} />
              <div className="flex flex-col items-start ">
                <p className="text-white font-semibold text-sm">{user.name}</p>
                <p className="text-neutral-500 font-semibold text-sm">
                  @{user.username}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FollowBar;
