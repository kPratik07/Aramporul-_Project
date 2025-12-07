/**
 * Navigation component types
 */

export interface NavItem {
  label: string;
  href: string;
  isAnchor?: boolean;
}

export interface NavigationProps {
  items?: NavItem[];
  onNavClick?: (href: string) => void;
}

