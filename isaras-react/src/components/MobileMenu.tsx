import { Link } from "react-router-dom";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onNavClick: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
}

const MobileMenu = ({ isOpen, onClose, onNavClick }: MobileMenuProps) => {
  const navItems = [
    { label: "Home", href: "/", isAnchor: false },
    { label: "Features", href: "#features", isAnchor: true },
    { label: "How it works", href: "#hiw", isAnchor: true },
    { label: "Pricing", href: "#pricing", isAnchor: true },
    { label: "FAQ", href: "#faq", isAnchor: true },
    { label: "Contact", href: "#contact", isAnchor: true },
  ];

  return (
    <aside
      className={`sidebar fixed top-0 right-0 w-full sm:w-1/2 transition-all duration-300 h-screen bg-white dark:bg-background-7 xl:hidden z-[999] scroll-bar ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="lg:p-9 sm:p-8 p-5 space-y-4">
        <div className="flex items-center justify-between">
          <Link to="/" onClick={onClose}>
            <span className="sr-only">Home</span>
            <figure className="max-w-[44px]">
              <img
                src="/img-isaras/isaras-bm.svg"
                alt="I, Saras Logo"
                className="w-full dark:hidden block"
              />
            </figure>
          </Link>
          <button
            onClick={onClose}
            className="nav-hamburger-close flex flex-col gap-1.5 size-10 bg-background-4 dark:bg-background-9 rounded-full items-center justify-center cursor-pointer relative"
          >
            <span className="sr-only">Close Menu</span>
            <span className="block w-4 h-0.5 bg-stroke-9/60 dark:bg-stroke-1 rotate-45 absolute"></span>
            <span className="block w-4 h-0.5 bg-stroke-9/60 dark:bg-stroke-1 -rotate-45 absolute"></span>
          </button>
        </div>
        <div className="h-[85vh] w-full overflow-y-auto overflow-x-hidden pb-10 scroll-bar">
          <ul>
            {navItems.map((item) => (
              <li key={item.href} className="relative space-y-0">
                {item.isAnchor ? (
                  <a
                    href={item.href}
                    onClick={(e) => {
                      onNavClick(e, item.href);
                      onClose();
                    }}
                    className="text-tagline-1 font-normal text-secondary/60 dark:text-accent/60 transition-all duration-200 py-3 border-b border-stroke-4 dark:border-stroke-6 w-full text-left flex items-center justify-between cursor-pointer"
                  >
                    <span>{item.label}</span>
                  </a>
                ) : (
                  <Link
                    to={item.href}
                    onClick={onClose}
                    className="text-tagline-1 font-normal text-secondary/60 dark:text-accent/60 transition-all duration-200 py-3 border-b border-stroke-4 dark:border-stroke-6 w-full text-left flex items-center justify-between cursor-pointer"
                  >
                    <span>{item.label}</span>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default MobileMenu;

