import { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Ecosystem from "../components/Ecosystem";
import Features from "../components/Features";
import HowItWorks from "../components/HowItWorks";
import Testimonials from "../components/Testimonials";
import Pricing from "../components/Pricing";
import FAQ from "../components/FAQ";
import Partners from "../components/Partners";
import Contact from "../components/Contact";
import { initializeScripts } from "../hooks/useScripts";

const Home = () => {
  useEffect(() => {
    // Make opacity-0 elements visible immediately
    const makeVisible = () => {
      const elements = document.querySelectorAll('.opacity-0')
      elements.forEach((elem: Element) => {
        const htmlElem = elem as HTMLElement

        // Skip elements that rely on hover-based opacity (e.g. FAQ gradient)
        if (htmlElem.classList.contains('faq-gradient')) {
          return
        }

        htmlElem.classList.remove('opacity-0')
        htmlElem.style.opacity = '1'
      })
    }

    // Run immediately and after delays
    makeVisible()
    setTimeout(makeVisible, 100)
    setTimeout(makeVisible, 500)
    setTimeout(makeVisible, 1000)

    // Delay script initialization to ensure DOM is ready
    const timer = setTimeout(() => {
      try {
        initializeScripts();
        // Make visible again after scripts initialize
        setTimeout(makeVisible, 200)
      } catch (error) {
        console.error("Error initializing scripts:", error);
        makeVisible() // Make visible even if scripts fail
      }
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-background-2 shadow-7 min-h-screen" style={{ minHeight: '100vh' }}>
      <Header />
      <main>
        <Hero />
        <Ecosystem />
        <Features />
        <HowItWorks />
        <Testimonials />
        <Pricing />
        <FAQ />
        <Partners />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
