const Pricing = () => {
  const CheckIcon = () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
      <rect width="20" height="20" rx="10" fill="" className="fill-secondary dark:fill-accent/80" />
      <path
        d="M9.31661 13.7561L14.7491 8.42144C15.0836 8.0959 15.0836 7.5697 14.7491 7.24416C14.4145 6.91861 13.8736 6.91861 13.539 7.24416L8.7116 11.9901L6.46096 9.78807C6.12636 9.46253 5.58554 9.46253 5.25095 9.78807C4.91635 10.1136 4.91635 10.6398 5.25095 10.9654L8.1066 13.7561C8.27347 13.9184 8.49253 14 8.7116 14C8.93067 14 9.14974 13.9184 9.31661 13.7561Z"
        fill=""
        className="fill-white dark:fill-background-8"
      />
    </svg>
  )

  const freeTrialFeatures = [
    'Doubt clearance – up to 20 queries',
    '20 Prelims practice tests',
    'Current Affairs Analysis (daily updates)',
    'AI chat for instant UPSC help',
    'Topic recommendations'
  ]

  const annualFeatures = [
    'Unlimited doubt clearance',
    'Unlimited Prelims test sets',
    'Current Affairs analysis (full access)',
    'Detailed AI feedback on performance',
    'Topic recommendations and personalized tips'
  ]

  const monthlyFeatures = [
    'Doubt clearance – up to 50 queries',
    '50 Prelims practice tests',
    'Current Affairs Analysis (daily updates)',
    'AI chat for instant UPSC help',
    'Topic recommendations'
  ]

  return (
    <section
      id="pricing"
      className="pt-14 md:pt-16 lg:pt-[88px] xl:pt-[100px] pb-14 md:pb-16 lg:pb-[88px] xl:pb-[100px] max-2xl:px-4"
    >
      <div className="relative overflow-hidden max-w-[1440px] bg-black rounded-2xl md:rounded-4xl mx-auto py-16 md:py-[100px] sm:px-5 md:px-10 lg:px-5 xl:px-[67px] flex flex-col gap-[70px]">
        <figure
          data-ns-animate
          data-delay="0.1"
          data-direction="up"
          data-offset="200"
          className="select-none pointer-events-none absolute hidden md:block md:-top-[1070px] lg:-top-[570px] xl:-top-[690px] left-1/2 -translate-x-1/2 rotate-[28deg] max-w-[1440px] max-h-[1170px] w-full h-full"
        >
          <img src="/images/gradient/gradient-14.png" alt="Pricing Gradient" className="w-full h-full object-cover" />
        </figure>
        <div className="flex relative flex-col items-center text-center">
          <span data-ns-animate data-delay="0.2" className="badge badge-blur text-ns-green mb-5">
            Pricing
          </span>
          <h2 data-ns-animate data-delay="0.3" className="max-w-[650px] mx-auto mb-8 text-white max-md:px-4">
            Choose the Plan that Fits <span className="text-primary">Your UPSC Journey.</span>
          </h2>
          <p data-ns-animate data-delay="0.3" className="xl:max-w-[544px] text-white">
            Start free, learn smart, and scale your preparation with I, Saras your AI mentor for UPSC success.
          </p>
        </div>
        <div className="relative px-5 sm:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-8">
            {/* Free Trial Card */}
            <div
              data-ns-animate
              data-delay="0.6"
              className="bg-background-3 dark:bg-background-7 p-8 rounded-[20px] max-w-[408px] w-full mx-auto"
            >
              <h3 className="mb-2 font-normal text-heading-5">Free Trial</h3>
              <p className="mb-6 max-w-[250px]">Best for First-Time Explorers</p>
              <div className="price-month mb-7">
                <h4 className="text-heading-4 font-normal">
                  ₹<span>0.00</span>
                </h4>
                <p className="text-secondary dark:text-accent">First Month Only</p>
              </div>
              <a
                href="#"
                className="btn btn-md btn-white w-full block dark:btn-white-dark hover:btn-secondary dark:hover:btn-white mb-2 before:content-none first-letter:uppercase"
              >
                Start 1-Month Free Trial
              </a>
              <p className="mb-8" style={{ fontSize: '14px', fontStyle: 'italic' }}>
                Free for the first month. Auto-renews at ₹500/month unless cancelled
              </p>
              <h4 className="mb-5 mt-2 font-normal text-heading-5">Try all premium features for 30 days. No payment required.</h4>
              <ul className="relative list-none space-y-2.5">
                {freeTrialFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2.5">
                    <CheckIcon />
                    <span className="text-secondary dark:text-accent/80 font-normal text-tagline-1">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Annual Subscription Card */}
            <div
              data-ns-animate
              data-delay="0.7"
              className="p-2.5 rounded-[20px] bg-no-repeat bg-center bg-cover max-w-[408px] w-full mx-auto"
              style={{
                backgroundImage: "url('images/gradient/gradient-11.png')",
                backgroundSize: 'auto !important'
              }}
            >
              <div className="bg-white dark:bg-black p-5 sm:p-8 rounded-[12px]">
                <div className="flex justify-end -mt-3 mb-2.5">
                  <span className="-mr-4 bg-ns-green text-background-8 py-1.5 px-3 rounded-full font-normal capitalize">
                    Save 16%
                  </span>
                </div>
                <h3 className="mb-2 font-normal text-heading-5">Annual Subscription</h3>
                <p className="mb-6 max-w-[250px]">Perfect for Serious Aspirants</p>
                <div className="price-month mb-7">
                  <h4 className="text-heading-4 font-normal">
                    ₹<span>5000.00</span>
                  </h4>
                  <p className="text-secondary dark:text-accent">₹5000 / Year (Save ₹1000)</p>
                </div>
                <a
                  href="#"
                  className="btn btn-md btn-primary w-full block dark:btn-accent hover:btn-white-v2 dark:hover:btn-white-dark mb-8 before:content-none first-letter:uppercase"
                >
                  Join for a Year & Save ₹1000
                </a>
                <p className="mb-8" style={{ fontSize: '14px', fontStyle: 'italic' }}>
                  Cancel anytime — no hidden fees.
                </p>
                <h4 className="mb-5 mt-2 font-normal text-heading-5">One-time payment for uninterrupted UPSC preparation.</h4>
                <ul className="relative list-none space-y-2.5">
                  {annualFeatures.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2.5">
                      <CheckIcon />
                      <span className="text-secondary dark:text-accent/80 font-normal text-tagline-1">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Monthly Subscription Card */}
            <div
              data-ns-animate
              data-delay="0.6"
              className="bg-background-3 dark:bg-background-7 p-8 rounded-[20px] max-w-[408px] w-full mx-auto"
            >
              <h3 className="mb-2 font-normal text-heading-5">Monthly Subscription</h3>
              <p className="mb-6 max-w-[250px]">Ideal for Consistent Learners</p>
              <div className="price-month mb-7">
                <h4 className="text-heading-4 font-normal">
                  ₹<span>500.00</span>
                </h4>
                <p className="text-secondary dark:text-accent">Month</p>
              </div>
              <a
                href="#"
                className="btn btn-md btn-white w-full block dark:btn-white-dark hover:btn-secondary dark:hover:btn-white mb-2 before:content-none first-letter:uppercase"
              >
                Continue Learning for ₹500/month
              </a>
              <p className="mb-8" style={{ fontSize: '14px', fontStyle: 'italic' }}>
                Cancel anytime — no hidden fees.
              </p>
              <h4 className="mb-5 mt-2 font-normal text-heading-5">After your free trial, continue with full access.</h4>
              <ul className="relative list-none space-y-2.5">
                {monthlyFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2.5">
                    <CheckIcon />
                    <span className="text-secondary dark:text-accent/80 font-normal text-tagline-1">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing

