import { motion } from "framer-motion";
import type { FC } from "react";

const Works: FC = () => {
  return (
    <motion.div
      className="lg:h-[calc(100vh-80px)] min-h-screen  bg-black-glass flex flex-col items-center justify-center p-8 animate-pulse"
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100, delay: 0 }}
    >
      {" "}
      <img
        src="../../../public/img/logo.webp"
        alt=""
        className="size-80 object-contain"
      />
      <h1 className=" text-white text-4xl ">Wating.....</h1>
    </motion.div>
  );
};

export default Works;
