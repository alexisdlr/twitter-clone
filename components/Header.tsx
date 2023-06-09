import { useRouter } from "next/router";
import { useCallback } from "react";
import { BiArrowBack } from "react-icons/bi";
interface HeaderProps {
  label: string;
  showBackArrow?: boolean;
}
const Header = ({ label, showBackArrow }: HeaderProps) => {
  const router = useRouter();
  const handleBack = useCallback(() => {
    router.back();
  }, [router]);

  return (
    <div className="border-[1px] border-neutral-800 p-5">
      <div className="flex items-center gap-2">
        {showBackArrow && <BiArrowBack 
          onClick={handleBack} 
          size={20} 
          color={'white'}
          className='
            cursor-pointer
            hover:bg-opacity-70
            transition

          '
          />}
          <h1 className="text-white text-xl font-semibold">
            {label}
          </h1>
      </div>
    </div>
  );
};

export default Header;
