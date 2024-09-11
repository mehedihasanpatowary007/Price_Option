import { GiHamburgerMenu } from "react-icons/gi";
import Hamburger from "./Hamburger";
import { navItems } from "./NavItems";


const Navbar = () => {
  return (
    <nav className="bg-red-600 h-[60px] flex items-center">
      <ul className="md:flex items-center hidden gap-5 text-xl font-semibold text-white uppercase px-10">
        {navItems.map((navItem) => {
          return (
            <li key={navItem.id}>
              <a
                href=""
                className="hover:text-orange-300 duration-300"
                to={navItem.path}
              >
                {navItem.name}
              </a>
            </li>
          );
        })}
      </ul>
      <div className="md:hidden w-full flex justify-between px-4">
          <h1 className="text-2xl uppercase text-slate-600 font-bold">
            MEHEDI
          </h1>
          <label htmlFor="hamburger">
            <span className="cursor-pointer text-3xl">
              <GiHamburgerMenu />
            </span>
          </label>
      </div>
      <Hamburger />
    </nav>
  );
};

export default Navbar;
