import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Logo from "./Logo";
import Navigation from "./Navigation";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.slice(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        const headerOffset = 100;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
      setIsMenuOpen(false);
    }
  };

  return (
    <header>
      <div
        className="header-one opacity-0 rounded-full lp:!max-w-[1290px] xl:max-w-[1140px] lg:max-w-[960px] md:max-w-[720px] sm:max-w-[540px] min-[500px]:max-w-[450px] min-[425px]:max-w-[375px] max-w-[320px] mx-auto w-full fixed left-1/2 -translate-x-1/2 z-50 top-5 flex items-center justify-between px-2.5 xl:py-2 py-2.5 bg-white/60 backdrop-blur-[25px] dark:bg-background-7 dark:border dark:border-stroke-7 max-[400px]:max-w-[340px]"
        data-ns-animate
        data-direction="up"
        data-offset="100"
      >
        <Logo />
        <Navigation onNavClick={handleNavClick} />
        <div className="xl:flex hidden items-center justify-center">
          <a
            href="#"
            className="btn btn-md btn-primary dark:btn-accent dark:hover:btn-white-dark hover:btn-white"
          >
            <span>SIGN IN</span>
          </a>
        </div>
        <div className="xl:hidden block">
          <button
            onClick={toggleMenu}
            className="nav-hamburger flex flex-col gap-1.5 items-center justify-center cursor-pointer"
          >
            <span className="sr-only">Menu</span>
            <span className="block w-6 h-0.5 bg-secondary dark:bg-accent"></span>
            <span className="block w-6 h-0.5 bg-secondary dark:bg-accent"></span>
            <span className="block w-6 h-0.5 bg-secondary dark:bg-accent"></span>
          </button>
        </div>
      </div>
      <MobileMenu 
        isOpen={isMenuOpen} 
        onClose={toggleMenu} 
        onNavClick={handleNavClick} 
      />
    </header>
  );
};

export default Header;
