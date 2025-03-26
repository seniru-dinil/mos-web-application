import { ComponentPropsWithoutRef, useState } from "react";
import { useNavigate } from "react-router-dom";

interface NavButtonProps extends ComponentPropsWithoutRef<"button"> {
  path?: string;
  children: React.ReactNode;
}

const NavButton: React.FC<NavButtonProps> = ({ path, children, ...props }) => {
  const [isActive, setIsActive] = useState<Boolean>(false);
  const navigate = useNavigate();

  function handleOnClick() {
    if (!path) return;
    setIsActive(true);
    navigate(path);
    setTimeout(() => setIsActive(false), 300);
  }
  return (
    <>
      <button
        {...props}
        onClick={handleOnClick}
        className={`rounded-full aspect-square w-[2.6rem] grid place-items-center cursor-pointer transition-colors duration-500  ${
          isActive ? "bg-zinc-900" : "bg-white/6"
        }`}
      >
        <span className="text-[1.15rem] opacity-65 hover:opacity-100 transition-all">
          {children}
        </span>
      </button>
    </>
  );
};

export default NavButton;
