import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-secondary dark:bg-background-8 relative overflow-hidden">
      <figure
        data-ns-animate
        data-delay="0.4"
        data-duration="0.8"
        data-direction="right"
        data-offset="400"
        className="pointer-events-none select-none absolute size-[550px] top-[-17%] md:top-[-25%] xl:top-[-32%] max-[376px]:right-[-83%] right-[-64%] md:right-[-30%] lg:right-[-19%] xl:right-[-9%] bg-top-right rotate-[-30deg]"
      >
        <img
          className="size-full object-cover object-top"
          src="/images/gradient/gradient-31.png"
          alt="Decorative gradient background"
        />
      </figure>
      <figure
        data-ns-animate
        data-delay="0.4"
        data-duration="0.8"
        data-direction="left"
        data-offset="400"
        className="pointer-events-none select-none absolute size-[728px] md:size-[870px] bottom-[-33%] md:bottom-[-60%] xl:bottom-[-77%] left-[-83%] md:left-[-52%] lg:left-[-38%] xl:left-[-30%] 2xl:left-[-22%] min-[2559px]:!left-[-16%]"
      >
        <img
          className="size-full object-bottom"
          src="/images/gradient/gradient-2.png"
          alt="Decorative gradient background"
        />
      </figure>
      <div className="main-container px-5">
        <div className="grid grid-cols-12 xl:pt-[90px] gap-x-0 gap-y-16 pt-16 pb-12 justify-between">
          <div className="col-span-12 xl:col-span-6">
            <div data-ns-animate data-delay="0.3" className="max-w-[500px]">
              <figure>
                <img src="/img-isaras/t-2-white.svg" alt="I, Saras Logo" />
              </figure>
              <p className="text-accent/60 font-normal text-tagline-1 mt-4 mb-2">Your AI Mentor for UPSC Success.</p>
              <p className="text-accent/60 font-normal text-tagline-1 mt-4 mb-7">
                Learn, practice, and grow smarter with our AI-driven UPSC preparation ecosystem — powered by intelligent learning and continuous feedback.
              </p>
              <div className="flex items-center gap-3">
                <a href="https://www.facebook.com/people/I-Saras/61554945903034/" target="_blank" rel="noopener noreferrer" className="footer-social-link">
                  <span className="sr-only">Facebook</span>
                  <img className="size-6" src="/images/icons/facebook.svg" alt="Facebook" />
                </a>
                <div className="h-6 w-px bg-stroke-1/20"></div>
                <a href="https://www.instagram.com/i_saras_ai/" target="_blank" rel="noopener noreferrer" className="footer-social-link">
                  <span className="sr-only">Instagram</span>
                  <img className="size-6" src="/images/icons/instagram.svg" alt="Instagram" />
                </a>
                <div className="h-6 w-px bg-stroke-1/20"></div>
                <a href="https://x.com/I_Saras_AI" target="_blank" rel="noopener noreferrer" className="footer-social-link">
                  <span className="sr-only">X</span>
                  <img className="" src="/img-isaras/x.svg" alt="X" />
                </a>
                <div className="h-6 w-px bg-stroke-1/20"></div>
                <a href="https://www.linkedin.com/company/89921620/admin/feed/posts/" target="_blank" rel="noopener noreferrer" className="footer-social-link">
                  <span className="sr-only">LinkedIn</span>
                  <img className="size-6" src="/images/icons/linkedin.svg" alt="LinkedIn" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-span-12 xl:col-span-6 grid grid-cols-12 gap-x-0 gap-y-8">
            <div className="col-span-12 md:col-span-4">
              <div data-ns-animate data-delay="0.4" className="space-y-8">
                <p className="sm:text-heading-6 text-tagline-1 font-normal text-primary-50">Company</p>
                <ul className="sm:space-y-5 space-y-3">
                  <li>
                    <Link to="/about" className="footer-link">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <a href="#contact" className="footer-link">
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a href="#faq" className="footer-link">
                      FAQ
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-span-12 md:col-span-4">
              <div data-ns-animate data-delay="0.6" className="space-y-8">
                <p className="sm:text-heading-6 text-tagline-1 font-normal text-primary-50">Legal Policies</p>
                <ul className="sm:space-y-5 space-y-3">
                  <li>
                    <Link to="/terms" className="footer-link">
                      Terms & Conditions
                    </Link>
                  </li>
                  <li>
                    <a href="#" className="footer-link">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="footer-link">
                      Refund Policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-[26px] pb-[100px] text-center relative">
          <div className="footer-divider absolute top-0 left-0 right-0 w-0 origin-center mx-auto h-px bg-accent/10 dark:bg-stroke-4/10"></div>
          <p
            data-ns-animate
            data-delay="0.7"
            data-offset="10"
            data-start="top 105%"
            className="text-tagline-1 font-normal text-primary-50"
          >
            © 2025 Aramporul Info Tech Pvt.Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

