import { useState } from 'react'

const Contact = () => {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Email submitted:', email)
  }

  return (
    <section id="contact" className="py-[50px] md:py-20 lg:py-28 dark:bg-background-6 bg-white" aria-label="Use Case Overview">
      <div className="main-container">
        <div className="flex items-center flex-col lg:flex-row justify-between">
          <div className="xl:max-w-[650px] lg:max-w-[476px] max-[400px]:max-w-[300px] w-full space-y-5 text-center lg:text-left">
            <div className="space-y-3">
              <h2
                data-ns-animate
                data-delay="0.4"
                className="text-secondary dark:text-accent text-heading-5 sm:text-heading-4 lg:text-heading-3"
              >
                Build your future with <span className="text-primary-500">I, Saras</span>
              </h2>
              <p data-ns-animate data-delay="0.5" className="mb-3">
                Join thousands of aspirants learning smarter with their personal UPSC mentor
              </p>
              <p data-ns-animate data-delay="0.5" className="mb-3">
                Start your free trial today — clarify doubts, practice PYQs, and master every subject with intelligent guidance.
              </p>
              <h2
                data-ns-animate
                data-delay="0.4"
                className="text-secondary dark:text-accent text-heading-3 sm:text-heading-4 lg:text-heading-4 mb-2"
              >
                Contact Us at
              </h2>
              <p data-ns-animate data-delay="0.5" className="mb-5">
                For any queries or support, feel free to connect with us — we're just a message away.
              </p>
              <ul className="flex flex-col md:flex-row items-center justify-center gap-y-4 sm:gap-x-6 sm:gap-y-0 lg:justify-start">
                <li data-ns-animate data-delay="0.7" className="flex items-center justify-center gap-2">
                  <figure className="size-10 overflow-hidden mx-auto">
                    <img src="/img-isaras/phone.svg" alt="Phone icon" className="size-full object-cover" />
                  </figure>
                  <p className="text-heading-5 text-black md:text-heading-6">+91 78455 50250</p>
                </li>
                <li data-ns-animate data-delay="0.8" className="flex items-center justify-center gap-2">
                  <figure className="size-10 overflow-hidden mx-auto">
                    <img src="/img-isaras/mail.svg" alt="Email icon" className="size-full object-cover" />
                  </figure>
                  <a href="mailto:contact@isaras.ai">
                    <p className="text-heading-5 text-black md:text-heading-6">contact@isaras.ai</p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="lg:basis-[466px] space-y-6 md:ml-0 xl:ml-[100px] pt-[40px] lg:pt-[67px] w-full sm:w-[80%] md:w-[60%]">
            <form
              data-ns-animate
              data-delay="0.6"
              onSubmit={handleSubmit}
              className="flex items-center flex-col gap-5 sm:flex-row justify-start lg:gap-3"
            >
              <input
                type="email"
                name="email"
                id="userEmail-cta-v1"
                placeholder="Enter your email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-[18px] shadow-1 h-12 py-3 placeholder:text-secondary/50 rounded-full border border-stroke-1 lg:max-w-[340px] md:w-[71%] w-full max-[376px]:w-full dark:border-stroke-7 dark:placeholder:text-accent/60 focus:outline-none focus:border-primary-600 dark:focus:border-primary-400 dark:text-accent placeholder:font-normal font-normal"
              />
              <button
                type="submit"
                className="btn btn-md btn-primary h-12 w-full sm:w-[28%] lg:w-auto hover:btn-secondary dark:hover:btn-white"
              >
                <span>Get started</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

