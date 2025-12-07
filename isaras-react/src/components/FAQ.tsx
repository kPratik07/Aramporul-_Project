import { useState, useEffect, useRef } from 'react'
import type { FAQItem } from '../types/faq.types'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const accordionRef = useRef<HTMLDivElement>(null)

  const faqs: FAQItem[] = [
    {
      question: 'Who am I?',
      answer:
        'I am an AI assistant designed to help aspirants prepare for the UPSC exams. I use the power of AI to provide personalized guidance and support throughout your preparation journey.'
    },
    {
      question: 'What are the study materials I am trained on?',
      answer: 'I draw knowledge from NCERT books, standard reference materials, and newspapers.'
    },
    {
      question: 'Is there a free trial available?',
      answer:
        'Yes, we offer a free trial period to allow you to experience the platform before committing to a subscription.'
    }
  ]

  const toggleAccordion = (index: number, itemElement: HTMLElement) => {
    const content = itemElement.querySelector('.accordion-content') as HTMLElement
    const arrow = itemElement.querySelector('.accordion-arrow svg') as HTMLElement
    
    if (!content) return

    const isOpening = openIndex !== index

    if (isOpening) {
      // Close previously open item
      if (openIndex !== null) {
        const prevItem = accordionRef.current?.querySelectorAll('.accordion-item')[openIndex] as HTMLElement
        if (prevItem) {
          const prevContent = prevItem.querySelector('.accordion-content') as HTMLElement
          const prevArrow = prevItem.querySelector('.accordion-arrow svg') as HTMLElement
          if (prevContent) {
            prevContent.style.height = prevContent.scrollHeight + 'px'
            if (window.gsap) {
              window.gsap.to(prevContent, {
                height: 0,
                opacity: 0,
                duration: 0.3,
                onComplete: () => {
                  prevContent.classList.add('hidden')
                  prevContent.style.height = '0px'
                }
              })
            } else {
              prevContent.classList.add('hidden')
              prevContent.style.height = '0px'
            }
            if (prevArrow) {
              prevArrow.style.transform = 'rotate(0deg)'
            }
          }
        }
      }

      // Open new item
      content.classList.remove('hidden')
      content.style.height = 'auto'
      const contentHeight = content.scrollHeight
      content.style.height = '0px'
      
      if (window.gsap) {
        window.gsap.to(content, {
          height: contentHeight,
          opacity: 1,
          duration: 0.3
        })
      } else {
        content.style.height = contentHeight + 'px'
        content.style.opacity = '1'
      }
      
      if (arrow) {
        arrow.style.transform = 'rotate(180deg)'
      }
      
      setOpenIndex(index)
    } else {
      // Close current item
      content.style.height = content.scrollHeight + 'px'
      
      if (window.gsap) {
        window.gsap.to(content, {
          height: 0,
          opacity: 0,
          duration: 0.3,
          onComplete: () => {
            content.classList.add('hidden')
            content.style.height = '0px'
          }
        })
      } else {
        content.classList.add('hidden')
        content.style.height = '0px'
      }
      
      if (arrow) {
        arrow.style.transform = 'rotate(0deg)'
      }
      
      setOpenIndex(null)
    }
  }

  useEffect(() => {
    // Initialize accordion items - all closed by default
    if (accordionRef.current) {
      const items = accordionRef.current.querySelectorAll('.accordion-item')
      items.forEach((item: Element) => {
        const content = (item as HTMLElement).querySelector('.accordion-content') as HTMLElement
        if (content) {
          content.classList.add('hidden')
          content.style.height = '0px'
          content.style.opacity = '0'
        }
        // Ensure gradient is hidden by default (don't set inline style as it overrides group-hover)
        const gradient = (item as HTMLElement).querySelector('div[class*="absolute"][class*="-top-"]') as HTMLElement
        if (gradient) {
          // Remove any inline opacity that might interfere
          gradient.style.removeProperty('opacity')
          // Ensure opacity-0 class is present
          if (!gradient.classList.contains('opacity-0')) {
            gradient.classList.add('opacity-0')
          }
        }
      })
    }

    // Initialize accordion animation using the same logic as main.js
    const initAccordion = () => {
      if (typeof window.gsap === 'undefined' || !accordionRef.current) {
        return
      }

      const items = accordionRef.current.querySelectorAll('.accordion-item')
      const gsap = window.gsap
      const ScrollTrigger = window.ScrollTrigger

      if (ScrollTrigger) {
        gsap.registerPlugin(ScrollTrigger)
      }

      items.forEach((item: Element, index: number) => {
        const htmlItem = item as HTMLElement
        gsap.set(htmlItem, {
          opacity: 0,
          y: 50,
          filter: 'blur(20px)',
          overflow: 'hidden'
        })
        
        if (ScrollTrigger) {
          gsap.fromTo(
            htmlItem,
            {
              opacity: 0,
              y: 50,
              filter: 'blur(20px)'
            },
            {
              opacity: 1,
              y: 0,
              filter: 'blur(0px)',
              duration: 0.5,
              delay: index * 0.1,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: htmlItem,
                start: 'top 90%',
                end: 'top 50%',
                scrub: false,
                once: true
              }
            }
          )
        } else {
          gsap.to(htmlItem, {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            duration: 0.5,
            delay: index * 0.1,
            ease: 'power2.out'
          })
        }
      })
    }

    // Wait for GSAP and ScrollTrigger to be available
    const timer = setTimeout(() => {
      initAccordion()
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <section
      id="faq"
      className="relative pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[0px] lg:pt-[0px] xl:pb-[0px] xl:pt-[0px] overflow-hidden"
    >
      <figure
        data-ns-animate
        data-delay="0.2"
        data-direction="up"
        data-offset="100"
        className="cta-gradient absolute top-0 left-1/2 -translate-x-1/2 w-[600px] sm:w-[800px] md:w-[1000px] lg:w-[1140px] -translate-y-1/3 md:-translate-y-[60%] lg:-translate-y-[80%] rotate-[10deg] z-0 select-none pointer-events-none overflow-hidden"
      >
        <img src="/images/gradient/gradient-40.png" alt="How it Works background gradient" className="w-full h-auto max-w-full" />
      </figure>
      <div className="main-container">
        <div className="text-center space-y-3 mb-14 md:mb-[70px]">
          <span data-ns-animate data-delay="0.1" className="badge badge-green mb-3.5 md:mb-5">
            Faq
          </span>
          <h2 data-ns-animate data-delay="0.2">
            Frequently <span className="text-primary-500 inline-block">asked</span> Questions
          </h2>
          <p data-ns-animate data-delay="0.3" className="lg:max-w-[620px] mx-auto">
            By offering concise and informative responses, this section helps users find solutions without the need to contact customer support, saving time
          </p>
        </div>
        <div 
          ref={accordionRef}
          data-ns-animate 
          data-delay="0.4" 
          className="accordion max-w-[850px] w-full space-y-4 mx-auto"
        >
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="accordion-item group bg-white dark:bg-background-5 border border-stroke-4 dark:border-stroke-8 rounded-[8px] px-6 overflow-hidden relative z-10"
            >
              <div
                className="faq-gradient -z-10 absolute -top-[150%] sm:-top-[220%] md:-top-[300%] lg:-top-[190%] xl:-top-[290%] -right-[10%] sm:-right-[50%] size-[708px] pointer-events-none select-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <img src="/images/gradient/gradient-23.png" alt="gradient" />
              </div>
              <button
                onClick={(e) => {
                  const itemElement = (e.currentTarget.closest('.accordion-item') as HTMLElement)
                  toggleAccordion(index, itemElement)
                }}
                className="accordion-action flex items-center cursor-pointer justify-between sm:pt-8 pt-5 sm:pb-8 pb-5 w-full"
              >
                <span className="flex-1 text-left sm:text-heading-6 text-tagline-1 font-normal text-secondary dark:text-accent">
                  {faq.question}
                </span>
                <span className="sm:ml-auto ml-2.5 block accordion-arrow">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    width="16"
                    height="16"
                    style={{
                      transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.3s ease'
                    }}
                  >
                    <path
                      strokeOpacity="0.8"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m19.5 8.25-7.5 7.5-7.5-7.5"
                      className="stroke-secondary dark:stroke-accent"
                    />
                  </svg>
                </span>
              </button>
              <div 
                className="accordion-content hidden"
                style={{
                  height: '0px',
                  opacity: 0,
                  overflow: 'hidden'
                }}
              >
                <div className="border-t border-t-stroke-2 dark:border-t-stroke-6 sm:pt-6 pt-5 sm:pb-8 pb-5">
                  <p>{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ

