import { useEffect, useRef } from "react";

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Ensure video plays when component mounts
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        // Autoplay was prevented, which is fine
        console.log("Video autoplay prevented:", error);
      });
    }

    // Make hero text visible immediately
    const makeHeroTextVisible = () => {
      const heroElements = document.querySelectorAll('#scene .opacity-0, #scene [data-ns-animate]');
      heroElements.forEach((elem: Element) => {
        const htmlElem = elem as HTMLElement;
        htmlElem.classList.remove('opacity-0');
        htmlElem.style.opacity = '1';
      });
      
      // Also make buttons and dashboard visible
      const buttons = document.querySelectorAll('#scene .btn, #scene ul li');
      buttons.forEach((elem: Element) => {
        const htmlElem = elem as HTMLElement;
        htmlElem.style.opacity = '1';
      });
      
      const dashboard = document.querySelector('#scene img[alt="hero video cover"]');
      if (dashboard) {
        (dashboard as HTMLElement).style.opacity = '1';
      }
      
      // Make feature list items visible
      const featureItems = document.querySelectorAll('#scene ul.flex.flex-wrap li, #scene ul.flex.flex-wrap p');
      featureItems.forEach((elem: Element) => {
        const htmlElem = elem as HTMLElement;
        htmlElem.style.opacity = '1';
      });
    };

    // Run immediately and after a short delay
    makeHeroTextVisible();
    setTimeout(makeHeroTextVisible, 100);
    setTimeout(makeHeroTextVisible, 500);
    setTimeout(makeHeroTextVisible, 1000);
  }, []);

  return (
    <section
      className="relative bg-white dark:bg-background-8 z-0 sm:pb-0 pb-14 lg:-mb-12 md:-mb-10 overflow-hidden"
      id="scene"
    >
      <figure
        data-ns-animate
        data-delay="0.7"
        data-offset="200"
        className="absolute size-[700px] sm:size-[900px] lg:size-[1100px] rotate-[-597deg] top-[250px] left-1/2 -translate-x-1/2 select-none pointer-events-none z-1"
      >
        <img
          src="/images/gradient/gradient-37.png"
          alt="download-bg"
          className="size-full object-cover animate-rotate-slow"
        />
      </figure>

      <style>{`
          @keyframes rotate-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          .animate-rotate-slow {
            animation: rotate-slow 60s linear infinite;
            transform-origin: center center;
          }
        `}</style>

      <figure className="absolute h-full w-full hero-bg-overlay-light dark:hero-bg-overlay-dark"></figure>
      <video
        ref={videoRef}
        className="w-full h-full absolute -top-[220px] left-0 scale-100 object-cover object-center z-[-1] min-h-[100vh] dark:hidden block"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src="/video/tube-4.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="relative sm:pt-[230px] pt-[160px] pb-[140px] max-[641px]:pb-16 max-[426px]:pb-10 z-10" style={{ zIndex: 10 }}>
        <div className="main-container text-center relative" style={{ zIndex: 30 }}>
          <span
            data-ns-animate
            data-delay="0.1"
            className="badge badge-purple-v2 mb-5"
            style={{ opacity: 1 }}
          >
            Where Aspiration meets Intelligence
          </span>
          <h1
            data-ns-animate
            data-delay="0.2"
            className="font-semibold mb-4"
            style={{ opacity: 1 }}
          >
            Your{" "}
            <span className="hero-text-gradient hero-text-color-2 block">
              AI Mentor
            </span>{" "}
            for
            <br className="hidden md:block" />
            <span className="hero-text-gradient hero-text-color-2 block">
              UPSC Success
            </span>
          </h1>
          <p
            data-ns-animate
            data-delay="0.3"
            className="max-w-[588px] mx-auto mb-10 md:mb-14"
            style={{ opacity: 1 }}
          >
            Chat, Learn & Practice with india's largest first-stage AI Mentor
          </p>
          <ul className="flex flex-col md:flex-row gap-4 mb-9 md:mb-11 lg:mb-14 max-md:w-full md:w-auto mx-auto md:mx-0 justify-center" style={{ opacity: 1 }}>
            <li
              data-ns-animate
              data-delay="0.3"
              data-direction="left"
              data-offset="50"
              style={{ opacity: 1 }}
            >
              <a
                href="#"
                className="btn btn-primary hover:btn-white-dark dark:hover:btn-white btn-lg md:btn-xl w-full md:w-auto mx-auto md:mx-0"
                style={{ opacity: 1 }}
              >
                <span>Ask Saras</span>
              </a>
            </li>
            <li
              data-ns-animate
              data-delay="0.5"
              data-direction="left"
              data-offset="50"
              style={{ opacity: 1 }}
            >
              <a
                href="#"
                className="btn btn-white hover:btn-primary dark:btn-white-dark btn-lg md:btn-xl w-full md:w-auto mx-auto md:mx-0"
                style={{ opacity: 1 }}
              >
                <span>Try Free Now</span>
              </a>
            </li>
          </ul>
          <div
            data-ns-animate
            data-delay="0.7"
            data-instant="true"
            className="relative max-w-[1290px] mx-auto lp:mx-auto max-lp:mx-5 max-sm:rounded-2xl rounded-4xl overflow-hidden max-sm:p-2 p-2.5 bg-background-3 dark:bg-background-7 max-sm:max-w-[450px] max-sm:mx-auto max-[500px]:!mx-5"
            style={{
              backgroundImage: "url('/images/gradient/gradient-44.png')",
              backgroundSize: "auto",
              opacity: 1,
            } as React.CSSProperties & { backgroundImage: string; backgroundSize: string }}
          >
            <img
              src="/img-isaras/dashboard-ai-isaras.png"
              alt="hero video cover"
              className="w-full h-ful object-cover max-sm:rounded-xl rounded-[25px]"
              style={{ opacity: 1 }}
            />
          </div>
          <ul className="flex flex-wrap max-lg:gap-5 items-center justify-center gap-[42px] max-lg:mt-4 mt-20" style={{ opacity: 1 }}>
            <li
              data-ns-animate
              data-delay="0.4"
              className="flex gap-3 items-center"
              style={{ opacity: 1 }}
            >
              <span className="bg-green dark:bg-accent/10 rounded-full size-[18px] flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="8"
                  viewBox="0 0 10 8"
                  fill="none"
                >
                  <path
                    d="M4.31661 7.25605L9.74905 1.92144C10.0836 1.5959 10.0836 1.0697 9.74905 0.744158C9.41446 0.418614 8.87363 0.418614 8.53904 0.744158L3.7116 5.49012L1.46096 3.28807C1.12636 2.96253 0.585538 2.96253 0.250945 3.28807C-0.0836483 3.61362 -0.0836483 4.13982 0.250945 4.46536L3.1066 7.25605C3.27347 7.41841 3.49253 7.5 3.7116 7.5C3.93067 7.5 4.14974 7.41841 4.31661 7.25605Z"
                    fill="white"
                  />
                </svg>
              </span>
              <p style={{ opacity: 1 }}>Ask, Chat, and Learn</p>
            </li>
            <li
              data-ns-animate
              data-delay="0.5"
              className="flex gap-3 items-center"
              style={{ opacity: 1 }}
            >
              <span className="bg-green dark:bg-accent/10 rounded-full size-[18px] flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="8"
                  viewBox="0 0 10 8"
                  fill="none"
                >
                  <path
                    d="M4.31661 7.25605L9.74905 1.92144C10.0836 1.5959 10.0836 1.0697 9.74905 0.744158C9.41446 0.418614 8.87363 0.418614 8.53904 0.744158L3.7116 5.49012L1.46096 3.28807C1.12636 2.96253 0.585538 2.96253 0.250945 3.28807C-0.0836483 3.61362 -0.0836483 4.13982 0.250945 4.46536L3.1066 7.25605C3.27347 7.41841 3.49253 7.5 3.7116 7.5C3.93067 7.5 4.14974 7.41841 4.31661 7.25605Z"
                    fill="white"
                  />
                </svg>
              </span>
              <p style={{ opacity: 1 }}>Current Affairs</p>
            </li>
            <li
              data-ns-animate
              data-delay="0.6"
              className="flex gap-3 items-center"
              style={{ opacity: 1 }}
            >
              <span className="bg-green dark:bg-accent/10 rounded-full size-[18px] flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="8"
                  viewBox="0 0 10 8"
                  fill="none"
                >
                  <path
                    d="M4.31661 7.25605L9.74905 1.92144C10.0836 1.5959 10.0836 1.0697 9.74905 0.744158C9.41446 0.418614 8.87363 0.418614 8.53904 0.744158L3.7116 5.49012L1.46096 3.28807C1.12636 2.96253 0.585538 2.96253 0.250945 3.28807C-0.0836483 3.61362 -0.0836483 4.13982 0.250945 4.46536L3.1066 7.25605C3.27347 7.41841 3.49253 7.5 3.7116 7.5C3.93067 7.5 4.14974 7.41841 4.31661 7.25605Z"
                    fill="white"
                  />
                </svg>
              </span>
              <p style={{ opacity: 1 }}>Prelims & Mains PYQ Practice</p>
            </li>
            <li
              data-ns-animate
              data-delay="0.6"
              className="flex gap-3 items-center"
              style={{ opacity: 1 }}
            >
              <span className="bg-green dark:bg-accent/10 rounded-full size-[18px] flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="8"
                  viewBox="0 0 10 8"
                  fill="none"
                >
                  <path
                    d="M4.31661 7.25605L9.74905 1.92144C10.0836 1.5959 10.0836 1.0697 9.74905 0.744158C9.41446 0.418614 8.87363 0.418614 8.53904 0.744158L3.7116 5.49012L1.46096 3.28807C1.12636 2.96253 0.585538 2.96253 0.250945 3.28807C-0.0836483 3.61362 -0.0836483 4.13982 0.250945 4.46536L3.1066 7.25605C3.27347 7.41841 3.49253 7.5 3.7116 7.5C3.93067 7.5 4.14974 7.41841 4.31661 7.25605Z"
                    fill="white"
                  />
                </svg>
              </span>
              <p style={{ opacity: 1 }}>Mock Tests</p>
            </li>
            <li
              data-ns-animate
              data-delay="0.6"
              className="flex gap-3 items-center"
              style={{ opacity: 1 }}
            >
              <span className="bg-green dark:bg-accent/10 rounded-full size-[18px] flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="8"
                  viewBox="0 0 10 8"
                  fill="none"
                >
                  <path
                    d="M4.31661 7.25605L9.74905 1.92144C10.0836 1.5959 10.0836 1.0697 9.74905 0.744158C9.41446 0.418614 8.87363 0.418614 8.53904 0.744158L3.7116 5.49012L1.46096 3.28807C1.12636 2.96253 0.585538 2.96253 0.250945 3.28807C-0.0836483 3.61362 -0.0836483 4.13982 0.250945 4.46536L3.1066 7.25605C3.27347 7.41841 3.49253 7.5 3.7116 7.5C3.93067 7.5 4.14974 7.41841 4.31661 7.25605Z"
                    fill="white"
                  />
                </svg>
              </span>
              <p style={{ opacity: 1 }}>Prepare at Your Own Pace</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Hero;
