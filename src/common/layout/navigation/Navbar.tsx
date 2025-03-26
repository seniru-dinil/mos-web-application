import NavButton from "./components/NavButton";
import { AiFillHome } from "react-icons/ai";
import { FaCartShopping } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";

// bg-[#1A1A1D]/70
// 1f1b24
function Navbar() {
  return (
    <>
      <nav className="flex flex-col gap-2 bg-[#1f1b24] py-2 rounded-full px-2 w-fit">
        <NavButton path="/home" onClick={() => console.log("hello world")}>
          <AiFillHome />
        </NavButton>
        <NavButton path="/cart">
          <FaCartShopping />
        </NavButton>
        <NavButton path="/login">
          <FaUser />
        </NavButton>
        <NavButton>
          <MdLightMode />
        </NavButton>
        {/* <NavButton>
          <MdDarkMode />
        </NavButton> */}
      </nav>
    </>
  );
}

export default Navbar;
