import { motion } from "framer-motion";
import type { FC } from "react";

const About: FC = () => {
  return (
    <>
      <div className=" max-w-6xl grid grid-cols-1 lg:grid-cols-[70%_30%] gap-5 items-start justify-center  p-4 m-auto mt-30 bg-black-glass lg:h-[calc(100vh-150px)] content-center  min-h-96">
        {/* info */}
        <div className="flex items-start flex-col ms-8 gap-6 p-5">
          {/* ABOUT ME */}
          <motion.div
            className=""
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100, duration: 1 }}
          >
            <h1 className="text-main font-bold text-4xl md:text-6xl flex gap-3 items-baseline ">
              <span className=" text-white bg-white h-7 w-2 md:h-10 md:text-5xl rounded-3xl"></span>
              About Me
            </h1>
            <p className="text-sec-title px-5 sm:px-9 py-4">
              I'm a software engineer with 1 year of experience in Front-End
              development
            </p>
          </motion.div>

          {/* SKILLS */}
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 150, duration: 3 }}
          >
            <h2 className="text-white font-bold text-2xl flex gap-2 items-baseline ">
              <span className=" text-white bg-white h-5 w-1 md:w-1 md:h-7  rounded-3xl"></span>
              <span className="text-main text-2xl md:text-3xl font-bold">
                Skills
              </span>
              & Technologies
            </h2>
            {/* tec */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-8">
              {/* HTML */}
              <a href="" className="flex items-center w-fit group gap-2">
                <i className="fa-brands fa-html5 text-white size-4 brightness-50 group-hover:brightness-125 transition duration-150"></i>
                <span className="text-white text-sm brightness-50 tracking-[1.5px] group-hover:text-main group-hover:brightness-125 transition duration-200">
                  HTML
                </span>
              </a>

              {/* CSS */}
              <a href="" className="flex items-center w-fit group gap-2">
                <i className="fa-brands fa-css3 text-white size-4 brightness-50 group-hover:brightness-125 transition duration-150"></i>
                <span className="text-white text-sm brightness-50 tracking-[1.5px] group-hover:text-main group-hover:brightness-125 transition duration-200">
                  CSS
                </span>
              </a>

              {/* <!-- SCSS --> */}
              <a href="" className="flex items-center w-fit group gap-2">
                <i className="fa-brands fa-sass text-white size-4 brightness-50 group-hover:brightness-125 transition duration-150"></i>
                <span className="text-white text-sm brightness-50 tracking-[1.5px] group-hover:text-main group-hover:brightness-125 transition duration-200">
                  SCSS
                </span>
              </a>

              {/* JAVASCRIPT */}
              <a href="" className="flex items-center w-fit group gap-2">
                <i className="fa-brands fa-js text-white size-4 brightness-50 group-hover:brightness-125 transition duration-150"></i>
                <span className="text-white text-sm brightness-50 tracking-[1.5px] group-hover:text-main group-hover:brightness-125 transition duration-200">
                  Javascript
                </span>
              </a>

              {/* <!-- BOOTSTRAP --> */}
              <a href="" className="flex items-center w-fit group gap-2">
                <i className="fa-brands fa-bootstrap text-white size-4 brightness-50 group-hover:brightness-125 transition duration-150"></i>

                <span className="text-white text-sm brightness-50 tracking-[1.5px] group-hover:text-main group-hover:brightness-125 transition duration-200">
                  Bootstrap
                </span>
              </a>

              {/* <!-- TAILWIND --> */}
              <a href="" className="flex items-center w-fit group gap-2">
                <img
                  src="/img/icons/icons8-tailwindcss-48.svg"
                  className="size-4 grayscale p-0 brightness-50 group-hover:brightness-125 transition duration-200"
                  alt=""
                />
                <span className="text-white text-sm brightness-50 tracking-[1.5px] group-hover:text-main group-hover:brightness-125 transition duration-200">
                  TailwindCSS
                </span>
              </a>

              {/* <!-- GITHUB --> */}
              <a href="" className="flex items-center w-fit group gap-2">
                <i className="fa-brands fa-github text-white size-4 brightness-50 group-hover:brightness-125 transition duration-200"></i>
                <span className="text-white text-sm brightness-50 tracking-[1.5px] group-hover:text-main group-hover:brightness-125 transition duration-200"></span>
              </a>

              {/* <!-- TypeScript --> */}
              <a href="" className="flex items-center w-fit group gap-2">
                <img
                  src="/img/icons/icons8-typescript-48.svg"
                  className="size-4 grayscale p-0 brightness-50 group-hover:brightness-125 transition duration-200"
                  alt=""
                />
                <span className="text-white text-sm brightness-50 tracking-[1.5px] group-hover:text-main group-hover:brightness-125 transition duration-200">
                  Typescript
                </span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* img */}
        <motion.div
          className=" order-first lg:order-1 flex justify-center items-center object-contain "
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 150, duration: 2 }}
        >
          <img
            src="/img/me.webp"
            alt=""
            className=" w-50 flex justify-center rounded-2xl"
            loading="lazy"
          />
        </motion.div>
      </div>
    </>
  );
};

export default About;
