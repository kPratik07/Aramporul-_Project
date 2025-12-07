import { useEffect } from "react";
import type { Testimonial } from "../types/testimonial.types";

const Testimonials = () => {
  const testimonials: Testimonial[] = [
    {
      text: "I cleared both Prelims and Mains with ease. The AI mentor made my preparation structured and stress-free. A big thanks to I, Saras for being my constant guide!",
      name: "Saranya Nair",
      role: "UPSC Aspirant",
      image: "/img-isaras/test-saranya.png"
    },
    {
      text: "The cascading filters in Ask Saras are incredibly useful — it's like having a personalized mentor who understands what I need instantly. Truly unique!",
      name: "Muthukumaran S",
      role: "UPSC Aspirant",
      image: "/img-isaras/test-muthu.png"
    },
    {
      text: "The application's clean UI and smart navigation made learning seamless. I could focus on studying without distractions - a flawless experience.",
      name: "Vinoth Kumar",
      role: "UPSC Aspirant",
      image: "/img-isaras/test-vinoth.png"
    },
    {
      text: "The Current Affairs Analysis is a total game changer! I no longer waste hours collecting news. I, Saras summarizes everything with UPSC relevance — it's like reading The Hindu and a topper's notes combined.",
      name: "Priya Sharma",
      role: "UPSC Aspirant",
      image: "/img-isaras/test-priya.png"
    },
    {
      text: "The Mains Evaluation feature blew my mind. Getting AI-based feedback instantly helped me improve my answer writing every single day — it feels like having a personal evaluator 24×7.",
      name: "Arjun Mehta",
      role: "UPSC Mains Candidate",
      image: "/img-isaras/test-arjun.png"
    }
  ]

  useEffect(() => {
    // Initialize marquee animation for testimonial cards
    const initMarquee = () => {
      // Check if InfiniteMarquee is available (from vanilla-infinite-marquee.min.js)
      if (typeof window.InfiniteMarquee !== 'undefined') {
        const container = document.querySelector('.cards-marquee-container') as HTMLElement & { marqueeInitialized?: boolean };
        if (container && !container.marqueeInitialized) {
          try {
            new window.InfiniteMarquee({
              element: '.cards-marquee-container',
              speed: 140000, // 14e4
              smoothEdges: true,
              direction: 'left',
              gap: '32px',
              pauseOnHover: true,
              on: {
                beforeInit: () => console.log('Marquee: Not Yet Initialized'),
                afterInit: () => {
                  console.log('Marquee: Initialized');
                  container.marqueeInitialized = true;
                },
                pauseAnimation: () => console.log('Marquee: Paused'),
                resumeAnimation: () => console.log('Marquee: Resumed')
              }
            });
          } catch (error) {
            console.error('Error initializing marquee:', error);
          }
        }
      } else {
        // Retry if library hasn't loaded yet
        setTimeout(initMarquee, 100);
      }
    };

    // Initialize after a short delay to ensure DOM is ready
    const timer = setTimeout(initMarquee, 200);
    
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <section className="xl:py-[100px] md:py-20 py-14 space-y-[70px] relative overflow-hidden">
      <figure
        data-ns-animate
        data-delay="0.4"
        data-offset="100"
        data-direction="left"
        className="absolute w-[400px] lg:w-[500px] xl:w-[584px] top-[-214px] left-[-100px] lg:top-[-250px] xl:top-[-295px] lg:left-[-52px] xl:left-[-52px] select-none pointer-events-none"
        aria-hidden="true"
      >
        <img src="/images/gradient/gradient-32.png" alt="Decorative gradient background" className="size-full object-cover" />
      </figure>
      <div className="main-container">
        <div className="space-y-5 max-w-[804px] mx-auto text-center">
          <span data-ns-animate data-delay="0.1" className="badge badge-cyan">
            Success Stories
          </span>
          <div className="space-y-3">
            <h2 data-ns-animate data-delay="0.2">
              Hear from Aspirants <br /> Who Trust <span className="text-primary-500 font-semibold">I, Saras</span>
            </h2>
            <p data-ns-animate data-delay="0.3">
              See how I, Saras has helped UPSC aspirants simplify their preparation, <br /> boost confidence, and achieve their goals with the power of AI mentoring.
            </p>
          </div>
        </div>
      </div>
      <div>
        <div data-ns-animate data-delay="0.4" className="cards-marquee-container">
          <div className="flex items-center gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`bg-background-1/90 hover:bg-white dark:bg-background-5 dark:hover:bg-background-8 hover:shadow-1 transition-colors duration-300 ease-linear rounded-[20px] p-8 min-w-[358px] max-w-[358px] shrink-0 w-full ${index === 0 ? 'ml-8' : ''}`}
              >
                <p className="text-wrap">{testimonial.text}</p>
                <div className="my-8 h-px w-full bg-stroke-4 dark:bg-stroke-8"></div>
                <div>
                  <div className="flex items-center gap-3">
                    <figure className="size-12 rounded-full overflow-hidden">
                      <img
                        src={testimonial.image}
                        alt="avatar"
                        className="h-full w-full bg-linear-[156deg,#83E7EE_2.92%,#C6F56F_91%]"
                      />
                    </figure>
                    <div>
                      <h3 className="text-tagline-1 font-medium text-secondary dark:text-accent">
                        {testimonial.name}
                      </h3>
                      <p className="text-tagline-2 text-secondary/60 font-normal dark:text-accent/60">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials

