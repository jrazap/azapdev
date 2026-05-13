import { Icon } from '@iconify/react';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import '../i18n';
import { ROUTES } from '../routes/routes';
const Header = () => {
  const { t, i18n } = useTranslation();
  const lng = i18n.language;

  const [isShow, setIsShow] = useState(false);
  const handleToggle = () => {
    setIsShow(!isShow);
  };

  const NavRoutes: { path: string; label: string }[] = [
    {
      path: ROUTES.HOME,
      label: t('common:HEADER.HOME'),
    },

    {
      path: ROUTES.WORKS,
      label: t('common:HEADER.WORKS'),
    },
  ];

  return (
    <>
      <header className="sticky top-5 z-40 mx-auto my-4 flex w-full max-w-6xl flex-row items-center justify-between rounded-full bg-black/60 px-5 py-4 backdrop-blur-md md:px-8 md:py-0">
        {/* logo */}
        <div className="flex flex-row items-center justify-center gap-3">
          <img
            src="/img/logo.webp"
            alt=""
            className="size-20 cursor-pointer object-contain brightness-200 transition duration-500 hover:brightness-50"
            loading="lazy"
          />
          <button
            onClick={() => i18n.changeLanguage(lng === 'en' ? 'ar' : 'en')}
          >
            <i className="fa-solid fa-earth-africa cursor-pointer text-2xl text-white duration-200 hover:brightness-50"></i>
          </button>
        </div>

        {/* toggel */}
        <div
          onClick={handleToggle}
          className="z-50 flex cursor-pointer flex-col gap-1 md:hidden"
        >
          <span className="bg-main h-1 w-9 rounded-2xl text-white"></span>
          <span className="bg-main h-1 w-9 rounded-2xl text-white"></span>
          <span className="bg-main h-1 w-9 rounded-2xl text-white"></span>
        </div>

        {/* DEsktop nav */}
        <nav
          className={`hidden bg-black/70 md:static md:block md:h-auto md:w-auto md:bg-transparent`}
        >
          {/* pages */}
          <ul className="flex h-full items-center justify-center gap-8 md:flex-row">
            {NavRoutes.map(({ path, label }, index) => {
              return (
                <NavLink
                  key={index}
                  to={path}
                  className={({ isActive }) =>
                    `hover:text-main uppercase transition duration-150 ${
                      isActive ? 'text-main font-bold' : 'text-white'
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
      {/* Mobile nav  */}
      {/* OVERLAY */}
      <AnimatePresence>
        {isShow && (
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-start bg-black px-20 text-2xl"
          >
            {/* LINKS */}
            <motion.div
              initial={{ x: -60, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -60, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col items-start gap-8 bg-black"
            >
              {NavRoutes.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={handleToggle}
                  className={({ isActive }) =>
                    `group flex items-center text-2xl font-bold transition-all duration-300 md:text-4xl ${
                      isActive ? 'text-main' : 'text-white'
                    }`
                  }
                >
                  <span className="me-4 h-0 w-0 rounded-full bg-white transition-all duration-300 group-hover:h-4 group-hover:w-4"></span>
                  {link.label}
                </NavLink>
              ))}
            </motion.div>

            {/* CLOSE */}
            <button
              onClick={handleToggle}
              className="absolute top-7 right-4 cursor-pointer text-white md:right-12"
              aria-label="Close menu"
            >
              <Icon
                icon="line-md:menu-to-close-transition"
                width="45"
                height="45"
              />
            </button>
          </motion.nav>
        )}
      </AnimatePresence>
      {/* BlurPAge */}
      <div
        className={`fixed inset-0 top-0 z-20 h-screen w-full backdrop-blur-2xl ${isShow ? 'block' : 'hidden'}`}
        onClick={() => setIsShow((prev) => !prev)}
      ></div>
    </>
  );
};

export default Header;
