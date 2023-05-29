import Header from "@/components/Header";
import useUser from "@/hooks/useUser";
import { useRouter } from "next/router";
import { Ring } from "@uiball/loaders";
import UserHero from "@/components/users/UserHero";
import UserBio from "@/components/users/UserBio";

const UserView = () => {
  const router = useRouter();
  const { userId } = router.query;
  const { data: fetchedUser, isLoading } = useUser(userId as string);

  console.log(fetchedUser);
  if (isLoading || !fetchedUser) {
    return (
      <div
        className="
        flex 
        items-center
        justify-center
        h-full
      "
      >
        <Ring size={60} lineWeight={5} speed={5} color="lightblue" />
      </div>
    );
  }
  return (
    <>
      <Header showBackArrow label={fetchedUser.name} />
      <UserHero userId={userId as string} />
      <UserBio userId={userId as string} />
    </>
  );
};

export default UserView;
