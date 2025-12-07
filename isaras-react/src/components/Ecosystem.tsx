import { useState, useEffect } from "react";
import type { TabIndex, TabContent } from "../types/ecosystem.types";
import EcosystemTabs from "./EcosystemTabs";
import EcosystemTabPanel from "./EcosystemTabPanel";

const Ecosystem = () => {
  const [activeTab, setActiveTab] = useState<TabIndex>(0);

  // Tab content data
  const tabContents: TabContent[] = [
    {
      title: "Ask Saras",
      titleHighlight: "Your AI-powered UPSC Mentor.",
      description: "Have a doubt? Ask Saras right away! From intricate polity concepts to challenging economy topics - get accurate, easy-to-grasp explanations powered by AI, fine-tuned for UPSC aspirants",
      features: [
        {
          icon: "/img-isaras/ic-1.png",
          title: "Instant Doubt Resolution",
          description: "Get answers in seconds, not hours."
        },
        {
          icon: "/img-isaras/ic-2.png",
          title: "Context-Aware Guidance",
          description: "Understand not just the \"what,\" but also the \"why.\""
        },
        {
          icon: "/img-isaras/ic-3.png",
          title: "Topic-based Clarity",
          description: "Deep insights and explanations tailored to UPSC standards."
        }
      ],
      image: "/img-isaras/ask-saras.png",
      imageAlt: "Ask Saras"
    },
    {
      title: "Practice Smarter with",
      titleHighlight: "AI-curated Question Sets.",
      description: "Master every subject with intelligently structured Previous Year Questions (PYQs) tailored for UPSC preparation. Saras analyzes trends, identifies key topics, and helps you focus where it truly matters.",
      features: [
        {
          icon: "/img-isaras/ic-4.png",
          title: "Smart Question Categorization",
          description: "Questions organized by year, subject, and difficulty level."
        },
        {
          icon: "/img-isaras/ic-5.png",
          title: "AI Insights & Explanations",
          description: "Get detailed, UPSC-aligned reasoning for every answer."
        },
        {
          icon: "/img-isaras/ic-6.png",
          title: "Adaptive Practice Mode",
          description: "Practice based on your strengths, weaknesses, and progress."
        },
        {
          icon: "/img-isaras/ic-7.png",
          title: "Trend-based Analysis",
          description: "Spot recurring topics and evolving patterns across years."
        }
      ],
      image: "/img-isaras/PYQS.png",
      imageAlt: "PYQ Practice"
    },
    {
      title: "Your Daily",
      titleHighlight: "UPSC-ready News Companion.",
      description: "Stay updated with AI-curated current affairs tailored for UPSC. From government policies to global developments - Saras summarizes, analyzes, and connects every event to the syllabus you're preparing for.",
      features: [
        {
          icon: "/img-isaras/ic-8.png",
          title: "Daily Curated Headlines",
          description: "Focused, exam-relevant updates."
        },
        {
          icon: "/img-isaras/ic-9.png",
          title: "Syllabus-linked Insights",
          description: "Understand where each topic fits."
        },
        {
          icon: "/img-isaras/ic-10.png",
          title: "AI-powered Analysis",
          description: "Get clarity on causes, impacts, and implications."
        }
      ],
      image: "/img-isaras/current-affairs.png",
      imageAlt: "Current Affairs"
    }
  ];

  useEffect(() => {
    // Make ecosystem section visible
    const makeEcosystemVisible = () => {
      const ecosystemElements = document.querySelectorAll('[data-ns-animate]');
      ecosystemElements.forEach((elem: Element) => {
        const htmlElem = elem as HTMLElement;
        htmlElem.classList.remove('opacity-0');
        htmlElem.style.opacity = '1';
      });
    };

    makeEcosystemVisible();
    setTimeout(makeEcosystemVisible, 100);
    setTimeout(makeEcosystemVisible, 500);
  }, [activeTab]);

  return (
    <section
      data-ns-animate
      data-delay="0.3"
      className="bg-white dark:bg-background-6 pt-20 lg:pt-[88px] xl:pt-[100px] sm:pb-36 pb-14 xl:pb-[94px] overflow-hidden"
    >
      <figure
        data-ns-animate
        data-delay="0.7"
        data-offset="200"
        className="absolute size-[700px] sm:size-[900px] lg:size-[1100px] rotate-[-597deg] top-[520px] left-1/2 -translate-x-1/2 select-none pointer-events-none"
      >
        <img
          src="/images/gradient/gradient-3.png"
          alt="download-bg"
          className="size-full object-cover"
        />
      </figure>
      <div className="main-container">
        <div className="text-center">
          <h2 data-ns-animate data-delay="0.2" className="mb-3" style={{ opacity: 1 }}>
            AI-powered{" "}
            <span className="text-primary-500 inline-block font-semibold">
              I, Saras
            </span>{" "}
            Ecosystem
          </h2>
          <p
            data-ns-animate
            data-delay="0.3"
            className="mb-8 lg:max-w-[696px] mx-auto"
            style={{ opacity: 1 }}
          >
            With I, Saras, you can chat, learn, and practice in one unified
            AI-powered environment - from doubt solving to personalized test
            prep and real-time current affairs analysis.
          </p>
        </div>
        
        {/* Mobile Tabs */}
        <EcosystemTabs 
          activeTab={activeTab} 
          onTabChange={setActiveTab} 
          isMobile={true}
        />
        
        {/* Desktop Tabs */}
        <EcosystemTabs 
          activeTab={activeTab} 
          onTabChange={setActiveTab} 
          isMobile={false}
        />
        
        {/* Tab Panels */}
        {tabContents.map((content, index) => (
          <EcosystemTabPanel
            key={index}
            content={content}
            isActive={activeTab === index}
          />
        ))}
      </div>
    </section>
  );
};

export default Ecosystem;
