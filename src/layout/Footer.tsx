import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="h-35 flex flex-col items-center bg-footer-bg  bottom-0 w-full order-last  ">
      <Link to={"/"}>
        {" "}
        <img
          src="../../public/img/logo.webp"
          alt=""
          className="size-24 object-contain brightness-50 hover:brightness-100 transition duration-300 cursor-pointer"
          loading="lazy"
        />
      </Link>
      {/* LINKES */}
      <div className="flex justify-center gap-3">
        {/* <!-- instagram --> */}
        <a href="https://www.instagram.com/azapdev/" target="_blank">
          <span className="flex justify-center items-center w-10 h-10 hover:brightness-100 hover:text-danger hover:bg-black transition duration-150 text-xl text-white brightness-50 bg-icon-bg rounded-full">
            <i className="fa-brands fa-instagram  "></i>
          </span>
        </a>

        {/* <!-- facebook --> */}
        <a href="https://www.facebook.com/azapdev" target="_blank">
          <span className="text-xl text-white brightness-50 bg-icon-bg rounded-2xl w-10 h-10 flex justify-center items-center hover:brightness-100 hover:text-danger hover:bg-black transition duration-150">
            <i className="fa-brands fa-facebook "></i>
          </span>
        </a>

        {/* <!-- linkedin --> */}
        <a
          href="https://www.linkedin.com/in/ahmed-elazap-5a85b2377/"
          target="_blank"
        >
          <span className="text-xl text-white brightness-50 bg-icon-bg rounded-2xl w-10 h-10 flex justify-center items-center hover:brightness-100 hover:text-danger hover:bg-black transition duration-150">
            <i className="fa-brands fa-linkedin"></i>
          </span>{" "}
        </a>

        {/* <!-- whatsapp --> */}

        <a href="https://wa.me/201092672558" target="_blank">
          <span className="text-xl text-white brightness-50 bg-icon-bg rounded-2xl w-10 h-10 flex justify-center items-center hover:brightness-100 hover:text-danger hover:bg-black transition duration-150">
            <i className="fa-brands fa-whatsapp "></i>
          </span>
        </a>

        {/* <!-- google --> */}
        <a href="mailto:your-a7mad3zap@gmail.com" target="_blank">
          <span className="text-xl text-white brightness-50 bg-icon-bg rounded-2xl w-10 h-10 flex justify-center items-center hover:brightness-100 hover:text-danger hover:bg-black transition duration-150">
            <i className="fa-brands fa-google "></i>
          </span>
        </a>
      </div>
    </div>
  );
};

export default Footer;
