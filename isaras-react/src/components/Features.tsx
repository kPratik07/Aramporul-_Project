const Features = () => {
  return (
    <section
      id="features"
      className="pt-14 md:pt-16 lg:pt-[88px] xl:pt-[120px] pb-14 md:pb-16 lg:pb-[88px] xl:pb-[150px] bg-background-1 dark:bg-background-7 relative overflow-hidden"
    >
      <figure
        data-ns-animate
        data-delay="0.2"
        data-direction="up"
        data-offset="100"
        className="cta-gradient absolute top-0 left-1/2 w-[600px] sm:w-[800px] md:w-[1000px] lg:w-[1140px] z-0 select-none pointer-events-none overflow-hidden"
        style={{ transform: 'translate(-50%, 10%) rotate(170deg)' }}
      >
        <img
          src="/images/gradient/gradient-23.png"
          alt="How it Works background gradient"
          className="w-full h-auto max-w-full"
        />
      </figure>
      <div className="main-container">
        <div className="text-center space-y-5 max-w-[650px] mx-auto mb-14">
          <div>
            <h2 data-ns-animate data-delay="0.3" className="mb-3">
              Why <span className="text-primary-500 font-semibold">I, Saras</span>
            </h2>
            <p data-ns-animate data-delay="0.3" className="mb-8 lg:max-w-[696px] mx-auto">
              A smarter, faster, calmer way to prepare for UPSC
            </p>
          </div>
        </div>
        {/* feature Items */}
        <div className="grid grid-cols-12 space-y-8 md:space-y-0 md:gap-8 mb-0 justify-center">
          <div
            data-ns-animate
            data-delay="0.4"
            className="col-span-12 md:col-span-6 lg:col-span-6 p-6 rounded-[20px] border-8 border-white dark:border-background-9 dark:bg-background-7 bg-background-1 space-y-6"
          >
            <div className="space-y-1">
              <h5 className="">Smarter than search</h5>
              <p className="">
                No more information overload. Saras filters out unnecessary web clutter and delivers only what's relevant for your exam - precise, syllabus-focused, and time-saving.
              </p>
            </div>
            <figure className="w-full">
              <img
                src="/img-isaras/smarter-than-search.png"
                alt="feature image"
                className="w-full object-cover rounded-2xl block dark:hidden"
              />
            </figure>
          </div>
          <div
            data-ns-animate
            data-delay="0.5"
            className="col-span-12 md:col-span-6 lg:col-span-6 p-6 rounded-[20px] border-8 border-white bg-background-1 dark:border-background-9 dark:bg-background-7 space-y-6 relative after:h-1/2 after:w-[calc(100%+16px)] after:absolute after:-left-2 after:right-0 after:bottom-0 after:bg-gradient-to-t after:from-black/0 to-white rounded-br-[20px] rounded-bl-[20px] overflow-hidden"
          >
            <div className="space-y-1">
              <h5 className="">Smarter than ChatGPT</h5>
              <p className="">
                No more generic responses. Saras understands UPSC patterns and provides accurate, syllabus-aligned answers tailored to your query — fact-checked, reliable, and exam-focused.
              </p>
            </div>
            <figure className="w-full rounded-2xl overflow-hidden">
              <img
                src="/img-isaras/smarter-than-chatgpt.png"
                alt="feature image"
                className="w-full object-cover block dark:hidden"
              />
            </figure>
          </div>
          <div
            data-ns-animate
            data-delay="0.6"
            className="col-span-12 md:col-span-6 lg:col-span-4 p-6 rounded-[20px] border-8 border-white bg-background-1 dark:border-background-9 dark:bg-background-7 space-y-6"
          >
            <div className="space-y-1">
              <h5 className="">Study efficiently</h5>
              <p className="">
                Stay focused with AI-driven study plans that adapt to your progress and help you concentrate on high-priority topics.
              </p>
            </div>
            <figure className="w-full">
              <img
                src="/img-isaras/study-efficient.png"
                alt="feature image"
                className="w-full rounded-xl block dark:hidden"
              />
            </figure>
          </div>
          <div
            data-ns-animate
            data-delay="0.6"
            className="col-span-12 md:col-span-6 lg:col-span-4 p-6 rounded-[20px] border-8 border-white bg-background-1 dark:border-background-9 dark:bg-background-7 space-y-6"
          >
            <div className="space-y-1">
              <h5 className="">Perform better</h5>
              <p className="">
                Take AI-powered mock tests and get personalized feedback highlighting where to improve - so every study hour counts.
              </p>
            </div>
            <figure className="w-full">
              <img
                src="/img-isaras/perform-better.png"
                alt="feature image"
                className="w-full rounded-xl block dark:hidden"
              />
            </figure>
          </div>
          <div
            data-ns-animate
            data-delay="0.6"
            className="col-span-12 md:col-span-6 md:col-start-4 lg:col-span-4 lg:col-start-auto p-6 rounded-[20px] border-8 border-white bg-background-1 dark:border-background-9 dark:bg-background-7 space-y-6"
          >
            <div className="space-y-1">
              <h5 className="">Stress Less</h5>
              <p className="">
                Get 24×7 doubt resolution and continuous support. Your AI mentor is always available to clear concepts, boost confidence, and keep you exam-ready.
              </p>
            </div>
            <figure className="w-full">
              <img
                src="/img-isaras/stress-less.png"
                alt="feature image"
                className="w-full rounded-xl block dark:hidden"
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features

