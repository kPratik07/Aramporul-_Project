import { useRef, useEffect } from "react";
import type { TabIndex } from "../types/ecosystem.types";

interface EcosystemTabsProps {
  activeTab: TabIndex;
  onTabChange: (index: TabIndex) => void;
  isMobile?: boolean;
}

const EcosystemTabs = ({ activeTab, onTabChange, isMobile = false }: EcosystemTabsProps) => {
  const tabBarRef = useRef<HTMLDivElement>(null);
  const activeTabBarRef = useRef<HTMLDivElement>(null);
  const tabButtonsRef = useRef<(HTMLButtonElement | null)[]>([]);

  // Update active tab bar position
  const updateActiveTabBar = (index: number) => {
    if (!activeTabBarRef.current || !tabButtonsRef.current[index] || !tabBarRef.current) {
      return;
    }

    const activeButton = tabButtonsRef.current[index];
    const tabBar = tabBarRef.current;
    const activeTabBar = activeTabBarRef.current;

    // Use requestAnimationFrame for smooth updates
    requestAnimationFrame(() => {
      // Get bounding rectangles for accurate positioning
      const buttonRect = activeButton.getBoundingClientRect();
      const tabBarRect = tabBar.getBoundingClientRect();
      
      // Calculate the exact position: button's left edge relative to tabBar's left edge
      const left = buttonRect.left - tabBarRect.left;
      const width = buttonRect.width;

      // Set position directly using transform
      activeTabBar.style.transform = `translateX(${left}px)`;
      activeTabBar.style.width = `${width}px`;
    });
  };

  useEffect(() => {
    if (isMobile) return; // Only update for desktop tabs
    
    // Small delay to ensure DOM has updated before calculating position
    const timer = setTimeout(() => {
      updateActiveTabBar(activeTab);
    }, 10);

    // Also update on window resize
    const handleResize = () => {
      updateActiveTabBar(activeTab);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", handleResize);
    };
  }, [activeTab, isMobile]);

  const tabs = [
    { label: "Ask Saras", index: 0 as TabIndex },
    { label: "PYQ", index: 1 as TabIndex },
    { label: "Current Affairs", index: 2 as TabIndex },
  ];

  if (isMobile) {
    return (
      <div className="tab-mobile flex items-center justify-start flex-wrap lg:hidden gap-4 mb-14 lg:mb-[72px] sm:max-w-[500px] sm:mx-auto">
        {tabs.map((tab) => (
          <button
            key={tab.index}
            onClick={() => onTabChange(tab.index)}
            className={`px-3.5 py-2 min-w-16 cursor-pointer text-tagline-2 font-medium border rounded-full dark:bg-background-7 ${
              activeTab === tab.index
                ? "text-secondary dark:text-accent border-primary-500"
                : "text-secondary/60 dark:text-accent/60 border-stroke-2 dark:border-stroke-7"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    );
  }

  return (
    <div
      ref={tabBarRef}
      role="tablist"
      className="tab-bar hidden lg:flex justify-center items-center border-b border-stroke-2 dark:border-stroke-6 mb-14 lg:mb-14 relative"
    >
      <div 
        ref={activeTabBarRef}
        className="active-tab-bar"
        style={{ 
          left: 0,
          transform: 'translateX(0px)',
          transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1), width 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      ></div>
      {tabs.map((tab) => (
        <button
          key={tab.index}
          ref={(el) => { tabButtonsRef.current[tab.index] = el; }}
          onClick={() => onTabChange(tab.index)}
          data-state={activeTab === tab.index ? "selected" : undefined}
          aria-selected={activeTab === tab.index}
          className={`py-3 cursor-pointer focus-visible:outline-0 px-10 -mb-px ${
            activeTab === tab.index
              ? "text-secondary dark:text-accent"
              : "text-secondary/60 dark:text-accent/60"
          }`}
        >
          <span className="text-tagline-1 font-medium">{tab.label}</span>
        </button>
      ))}
    </div>
  );
};

export default EcosystemTabs;

