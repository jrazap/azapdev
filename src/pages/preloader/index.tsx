const Preloader = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center bg-black ">
      <img
        src="../../../public/img/logo.webp"
        alt=""
        className="size-90 animate-pulse"
        loading="lazy"
      />
    </div>
  );
};

export default Preloader;
