import { IconType } from "react-icons";

interface SidebarItemProps {
  label: string;
  href?: string;
  icon: IconType;
  onClick: () => void;
}
const SidebarItem = ({ label, href, icon: Icon, onClick }: SidebarItemProps) => {
  return (
    <div className="flex items-center">
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
        <Icon size={20} color='white' />
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
        <Icon size={24} color={'white'} />
        <p className="hidden lg:block text-xl text-white">{label}</p>
      </div>
    </div>
  );
};

export default SidebarItem;
