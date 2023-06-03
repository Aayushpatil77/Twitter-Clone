import { IconType } from "react-icons";

interface SidebarItemProps {
  label: String;
  href?: String;
  icon: IconType;
  onClick?: () => void;
}

const Sidebaritem: React.FC<SidebarItemProps> = ({
  icon: Icon,
  label,
  href,
  onClick,
}) => {
  return (
    <div className="flex flex-row items-center">
      <div className="relative rounded-full h-14 w-14 flex items-center justify-center p-4 hover:bg-slate-300 cursor-pointer lg:hidden">
        <Icon size={28} color="white" />
      </div>
      <div className="relative hidden lg:flex items-row gap-4 p-4 rounded-full hover:bg-slate-300 hover:bg-opacity-10 cursor-pointer items-center ">
        <Icon size={24} color="white" />
        <p className="text-white hidden lg:block text-xl">{label}</p>
      </div>
    </div>
  );
};

export default Sidebaritem;
