import type { TabContent } from "../types/ecosystem.types";

interface EcosystemTabPanelProps {
  content: TabContent;
  isActive: boolean;
}

const EcosystemTabPanel = ({ content, isActive }: EcosystemTabPanelProps) => {
  if (!isActive) return null;

  // First tab has different layout structure
  const isFirstTab = content.title === "Ask Saras";

  return (
    <div className={`tab-content ${isActive ? "block" : "hidden"}`} style={{ display: isActive ? 'flex' : 'none', opacity: 1 }}>
      <div className={`flex ${isFirstTab ? 'flex-col justify-between' : 'flex-col'} lg:flex-row items-start ${isFirstTab ? 'gap-y-14' : ''} gap-x-24 ${isFirstTab ? '' : 'gap-y-16'} w-full`}>
        <div className="flex-1 lg:max-w-full sm:max-w-[500px] sm:mx-auto">
          <h2 className="mb-3 lg:text-heading-2 text-heading-4" style={{ opacity: 1 }}>
            {content.title}
            {content.titleHighlight && (
              <>
                {isFirstTab && <br className="hidden lg:block" />}
                <span className={isFirstTab ? "text-primary-500" : "text-primary-500 inline-block"}> {content.titleHighlight}</span>
              </>
            )}
          </h2>
          <p className={isFirstTab ? "mb-6 xl:mb-8 lg:max-w-[478px]" : "mb-8 lg:max-w-[478px]"}>
            {content.description}
          </p>
          <ul className={isFirstTab ? "space-y-1.5 mb-7 xl:mb-14" : "space-y-1.5 mb-7 md:mb-14"}>
            {content.features.map((feature, index) => (
              <li key={index} className="flex items-center gap-4 list-none py-2">
                <span>
                  <figure className="size-10 overflow-hidden mx-auto">
                    <img
                      src={feature.icon}
                      alt={feature.title}
                      className="size-full object-cover"
                    />
                  </figure>
                </span>
                <div>
                  <strong className="text-tagline-1 font-medium text-secondary dark:text-accent">
                    {feature.title}
                  </strong>
                  <p className="text-secondary/60 text-tagline-2 font-normal dark:text-accent/60">
                    {feature.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-1 lg:max-w-full sm:max-w-[500px] sm:mx-auto">
          <div className="flex items-center justify-center">
            <figure className={isFirstTab ? "lg:inline-block" : "tab-item-image"}>
              <img
                src={content.image}
                alt={content.imageAlt}
                className={isFirstTab ? "w-fit object-cover" : ""}
              />
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EcosystemTabPanel;

