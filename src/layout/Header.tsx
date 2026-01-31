import { useState } from "react";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../routes/Routes";
const Header = () => {
  const [isShow, setIsShow] = useState(false);
  const handleToggle = () => {
    setIsShow(!isShow);
  };

  const NavRoutes: { path: string; label: string }[] = [
    {
      path: ROUTES.HOME,
      label: "home",
    },
    {
      path: ROUTES.ABOUT,
      label: "about",
    },
    {
      path: ROUTES.WORKS,
      label: "works",
    },
  ];

  return (
    <header className="sticky bg-black/60 backdrop-blur-md py-4 px-5 flex flex-row items-center justify-between   top-0  max-w-6xl mx-auto z-40 md:px-8 md:py-0">
      {/* logo */}
      <div className="cursor-pointer md:block">
        <img
          src="./img/logo.webp"
          alt=""
          className="size-20 brightness-200 object-contain transition duration-500 hover:brightness-50"
          loading="lazy"
        />
      </div>

      {/* toggel */}
      <div
        onClick={handleToggle}
        className="flex flex-col gap-1 md:hidden cursor-pointer z-50 "
      >
        <span className="text-white w-9 rounded-2xl h-1 bg-[#be2600] "></span>
        <span className="text-white w-9 rounded-2xl h-1 bg-[#be2600] "></span>
        <span className="text-white w-9 rounded-2xl h-1 bg-[#be2600] "></span>
      </div>

      {/* start nav */}
      <nav
        className={`${isShow ? "block text-white absolute right-0 top-0 h-screen w-40 bg-black/70 " : "hidden"} md:block md:static md:h-auto md:w-auto md:bg-transparent`}
      >
        {/* pages */}
        <ul className="gap-8 h-full flex flex-col items-center justify-center md:flex-row">
          {NavRoutes.map(({ path, label }) => {
            return (
              <NavLink
                to={path}
                className={({ isActive }) =>
                  ` transition duration-150 uppercase hover:text-main ${
                    isActive ? "text-main font-bold" : " text-white"
                  }`
                }
                onClick={() => setIsShow(false)}
              >
                {label}
              </NavLink>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
