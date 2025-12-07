import { Link } from "react-router-dom";

interface NavigationProps {
  onNavClick: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
}

const Navigation = ({ onNavClick }: NavigationProps) => {
  const navItems = [
    { label: "Home", href: "/", isAnchor: false },
    { label: "Features", href: "#features", isAnchor: true },
    { label: "How it Works", href: "#hiw", isAnchor: true },
    { label: "Pricing", href: "#pricing", isAnchor: true },
    { label: "FAQ", href: "#faq", isAnchor: true },
    { label: "Contact", href: "#contact", isAnchor: true },
  ];

  return (
    <nav className="hidden xl:flex items-center absolute left-1/2 -translate-x-1/2">
      <ul className="flex items-center">
        {navItems.map((item) => (
          <li key={item.href} className="py-2.5">
            {item.isAnchor ? (
              <a
                href={item.href}
                onClick={(e) => onNavClick(e, item.href)}
                className="flex items-center gap-1 px-5 py-2 border border-transparent hover:border-stroke-2 dark:hover:border-stroke-7 rounded-full text-tagline-1 font-normal text-secondary/0 hover:text-secondary transition-all duration-200 dark:text-accent/60 dark:hover:text-accent"
              >
                {item.label}
              </a>
            ) : (
              <Link
                to={item.href}
                className="flex items-center gap-1 px-5 py-2 border border-transparent hover:border-stroke-2 dark:hover:border-stroke-7 rounded-full text-tagline-1 font-normal text-secondary/0 hover:text-secondary transition-all duration-200 dark:text-accent/60 dark:hover:text-accent"
              >
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;

