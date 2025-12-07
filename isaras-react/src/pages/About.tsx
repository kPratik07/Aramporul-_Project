import { useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { initializeScripts } from '../hooks/useScripts'

const About = () => {
  useEffect(() => {
    initializeScripts()
  }, [])

  return (
    <div className="bg-background-3 min-h-screen">
      <Header />
      <main className="pt-32 pb-20">
        <div className="main-container">
          <div className="text-center space-y-5 max-w-[800px] mx-auto mb-14">
            <h1 className="text-heading-2 mb-4">About I, Saras</h1>
            <p className="text-tagline-1 text-secondary/60 dark:text-accent/60">
              Your AI-powered UPSC preparation companion
            </p>
          </div>
          <div className="max-w-4xl mx-auto space-y-8">
            <section className="space-y-4">
              <h2 className="text-heading-4">Our Mission</h2>
              <p className="text-tagline-1 text-secondary/80 dark:text-accent/80">
                I, Saras is designed to revolutionize UPSC preparation by providing intelligent, personalized guidance
                to every aspirant. We believe that with the right AI-powered tools, every student can achieve their
                dream of serving the nation through the civil services.
              </p>
            </section>
            <section className="space-y-4">
              <h2 className="text-heading-4">What We Offer</h2>
              <ul className="space-y-3 list-disc list-inside text-tagline-1 text-secondary/80 dark:text-accent/80">
                <li>AI-powered doubt resolution and instant answers</li>
                <li>Comprehensive PYQ practice with detailed explanations</li>
                <li>Daily current affairs analysis tailored for UPSC</li>
                <li>Adaptive learning paths based on your progress</li>
                <li>24/7 availability for uninterrupted learning</li>
              </ul>
            </section>
            <section className="space-y-4">
              <h2 className="text-heading-4">Why Choose I, Saras</h2>
              <p className="text-tagline-1 text-secondary/80 dark:text-accent/80">
                Our platform combines cutting-edge AI technology with deep understanding of UPSC exam patterns,
                syllabus requirements, and aspirant needs. We're committed to making quality UPSC preparation
                accessible, affordable, and effective for everyone.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default About

