import { BsHouseFill, BsBellFill } from "react-icons/bs";
import {BiLogOut} from 'react-icons/bi'
import { FaUser } from "react-icons/fa";
import SidebarItem from "./SidebarItem";
import SidebarLogo from "./SidebarLogo";
import SidebarTweetButton from "./SidebarTweetButton";

interface SidebarProps {}
const Sidebar = () => {
  const items = [
    {
      label: "Home",
      href: "/",
      icon: BsHouseFill,
    },
    {
      label: "Notifications",
      href: "/notifications",
      icon: BsBellFill,
    },
    {
      label: "Profile",
      href: "/users/profile",
      icon: FaUser,
    },
  ];
  return (
    <div className="col-span-1 h-full pr-4 md:pr-6">
      <div className="flex flex-col items-end">
        <div className="space-y-2 lg:w-[230px] ">
          <SidebarLogo />
          {items.map((item) => (
            <SidebarItem
              key={item.href}
              href={item.href}
              icon={item.icon}
              label={item.label}
              onClick={() => {}}
            />
          ))}
          <SidebarItem label="Logout" icon={BiLogOut} onClick={() => {}} />
          <SidebarTweetButton />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
