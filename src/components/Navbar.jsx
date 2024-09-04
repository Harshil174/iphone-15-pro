import { appleImg, bagImg, searchImg } from "../utils";
import { navLists } from "../constants";

const Navbar = () => {
  return (
    <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center">
      <nav className="w-full flex screen-max-width">
        <a href="/">
          <img src={appleImg} alt="Apple" width={18} height={18} />
        </a>
        <div
          id="nav-items"
          className="flex flex-1 justify-center items-center gap-7 max-sm:hidden"
        >
          {navLists.map((nav, i) => (
            <div
              key={i}
              className="text-sm cursor-pointer text-gray hover:text-white transition-all"
            >
              {nav}
            </div>
          ))}
        </div>
        <div className=" flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1">
          <img src={searchImg} alt="Search" width={18} height={18} />
          <img src={bagImg} alt="Cart" width={18} height={18} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
