const Partners = () => {
  return (
    <section
      className="my-14 md:my-20 lg:my-[100px] w-[80%] 2xl:max-w-[1440px] rounded-4xl mx-auto py-[70px] px-10 md:px-[75px] bg-white dark:bg-background-6 relative z-10 md:min-h-[226px] overflow-hidden"
    >
      <div
        data-ns-animate
        data-delay="0.7"
        data-offset="120"
        className="absolute select-none pointer-events-none bottom-[-206px] sm:-bottom-[150px] max-md:w-[400px] max-md:h-[500px] left-[-17%] sm:left-[40%] -translate-x-1/2 md:-bottom-[-20%] w-full h-full -rotate-[96deg] sm:-rotate-[30deg] -z-10"
      >
        <img src="/images/gradient/gradient-16.png" alt="bg" className="w-[115%] h-[224%]" />
      </div>
      <div className="text-center relative z-10 w-fit mx-auto">
        <h2 data-ns-animate data-delay="0.3" className="mb-3" style={{ opacity: 1 }}>
          Partners & Supporters
        </h2>
        <p data-ns-animate data-delay="0.4" className="lg:max-w-[620px] mx-auto mb-14" style={{ opacity: 1 }}>
          Building a smarter tomorrow, hand in hand with our partners.
        </p>
      </div>
      <aside className="main-container relative mt-[64px] lg:mt-[66px] z-10" aria-label="Our Clients">
        <div
          data-ns-animate
          data-delay="0.2"
          className="flex items-center flex-wrap md:flex-nowrap justify-center gap-4 md:gap-x-4 lg:gap-x-8"
          role="list"
        >
          <figure role="listitem" className="lg:min-w-36 lg:ml-8">
            <img
              src="/img-isaras/sisfs-logo.png"
              alt="Startup India Seed Fund Scheme logo"
              className="lg:w-auto inline-block dark:hidden"
            />
          </figure>
          <figure role="listitem" className="lg:min-w-36">
            <img
              src="/img-isaras/IIML-EIC-logo.png"
              alt="IIM Lucknow EIC logo"
              className="lg:w-auto inline-block dark:hidden"
            />
          </figure>
          <figure role="listitem" className="lg:min-w-36">
            <img
              src="/img-isaras/aws-logo.png"
              alt="AWS logo"
              className="lg:w-auto inline-block dark:hidden"
            />
          </figure>
        </div>
      </aside>
    </section>
  );
};

export default Partners;

