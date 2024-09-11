import { FaWindowClose } from "react-icons/fa";
import { navItems } from "./NavItems";


const Hamburger = () => {
    return (
      <div>
        <input id="hamburger" type="checkbox" className="peer hidden" />
        <label
          htmlFor="hamburger"
          className="fixed top-0 left-0 h-full w-full bg-black opacity-30 hidden peer-checked:block"
        ></label>
        <div className=" fixed top-0 left-0 h-full w-1/3 bg-white peer-checked:block duration-150 translate-x-[-100%] peer-checked:translate-x-0">
          <div className="flex justify-between px-1">
            <div className="text-2xl uppercase text-slate-500 font-bold">
              MEHEDI
            </div>
            <label
              htmlFor="hamburger"
              className="text-2xl m-2 cursor-pointer"
            >
              <FaWindowClose />
            </label>
          </div>
          <div>
            <ul className="ms-1 text-xl font-semibold text-black uppercase">
              {navItems.map((navItem) => {
                return (
                  <li key={navItem.name}>
                    <a
                      className="hover:text-orange-300 duration-300"
                      href={navItem.path}
                    >
                      {navItem.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    );
};

export default Hamburger;