import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="flex items-center">
      <span className="sr-only">Home</span>
      <figure className="lg:max-w-[198px] lg:block hidden">
        <img src="/img-isaras/t-2.svg" alt="I, Saras Logo" className="w-full h-auto" />
      </figure>
      <figure className="max-w-[44px] lg:hidden block">
        <img
          src="/img-isaras/isaras-bm.svg"
          alt="I, Saras Logo"
          className="w-full h-auto"
        />
      </figure>
    </Link>
  );
};

export default Logo;

