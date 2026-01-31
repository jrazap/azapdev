import { motion } from "framer-motion";
import type { FC } from "react";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";

const Home: FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[60%_45%] px-1 md:px-8 items-start justify-center lg:h-[calc(100vh-80px)] min-h-screen md:max-w-5xl md:items-center mx-auto ">
      {/* info */}
      <motion.div
        className="flex flex-col items-start gap-3 bg-black-glass  p-6 md:px-8 shadow-xl rounded-xl max-w-xl"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, duration: 1 }}
      >
        <h2 className="text-white font-bold text-3xl md:text-5xl lg:text-6xl">
          &lt;Ahmed Elazap/&gt;
        </h2>
        <div className="flex items-baseline gap-2 text-white font-bold text-lg md:text-3xl ms-8 uppercase whitespace-nowrap">
          i Am
          <span className="text-main text-xl md:text-4xl">
            <Typewriter
              options={{
                strings: ["web developer", "front end developer"],
                autoStart: true,
                loop: true,
                delay: 75,
                deleteSpeed: 50,
                cursor: "|",
              }}
            />
          </span>
        </div>
        <Link
          to={"/about"}
          className="text-white uppercase bg-main font-bold px-8 py-2 text-2xl rounded-3xl my-4 outline-main tracking-wider "
        >
          {" "}
          Resume
        </Link>
      </motion.div>

      {/* logo */}
      <motion.img
        src="../../../public/img/logo.webp"
        alt=""
        className="mx-auto order-first lg:order-last  object-contain animate-bounce"
        loading="lazy"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, duration: 1 }}
      />
    </div>
  );
};

export default Home;
