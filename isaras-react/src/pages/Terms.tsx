import { useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { initializeScripts } from '../hooks/useScripts'

const Terms = () => {
  useEffect(() => {
    initializeScripts()
  }, [])

  return (
    <div className="bg-background-3 min-h-screen">
      <Header />
      <main className="pt-32 pb-20">
        <div className="main-container">
          <div className="text-center space-y-5 max-w-[800px] mx-auto mb-14">
            <h1 className="text-heading-2 mb-4">Terms & Conditions</h1>
            <p className="text-tagline-1 text-secondary/60 dark:text-accent/60">
              Please read these terms carefully before using I, Saras
            </p>
          </div>
          <div className="max-w-4xl mx-auto space-y-8">
            <section className="space-y-4">
              <h2 className="text-heading-4">1. Acceptance of Terms</h2>
              <p className="text-tagline-1 text-secondary/80 dark:text-accent/80">
                By accessing and using I, Saras, you accept and agree to be bound by the terms and provision of this
                agreement. If you do not agree to these terms, please do not use our service.
              </p>
            </section>
            <section className="space-y-4">
              <h2 className="text-heading-4">2. Use License</h2>
              <p className="text-tagline-1 text-secondary/80 dark:text-accent/80">
                Permission is granted to temporarily use I, Saras for personal, non-commercial transitory viewing only.
                This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="space-y-2 list-disc list-inside text-tagline-1 text-secondary/80 dark:text-accent/80 ml-4">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to reverse engineer any software contained on the platform</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
              </ul>
            </section>
            <section className="space-y-4">
              <h2 className="text-heading-4">3. Subscription and Payment</h2>
              <p className="text-tagline-1 text-secondary/80 dark:text-accent/80">
                Subscriptions are billed in advance on a monthly or annual basis. All fees are non-refundable except as
                required by law. You may cancel your subscription at any time, and cancellation will take effect at the
                end of the current billing period.
              </p>
            </section>
            <section className="space-y-4">
              <h2 className="text-heading-4">4. User Account</h2>
              <p className="text-tagline-1 text-secondary/80 dark:text-accent/80">
                You are responsible for maintaining the confidentiality of your account and password. You agree to
                accept responsibility for all activities that occur under your account.
              </p>
            </section>
            <section className="space-y-4">
              <h2 className="text-heading-4">5. Disclaimer</h2>
              <p className="text-tagline-1 text-secondary/80 dark:text-accent/80">
                The materials on I, Saras are provided on an 'as is' basis. I, Saras makes no warranties, expressed or
                implied, and hereby disclaims and negates all other warranties including, without limitation, implied
                warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of
                intellectual property or other violation of rights.
              </p>
            </section>
            <section className="space-y-4">
              <h2 className="text-heading-4">6. Limitations</h2>
              <p className="text-tagline-1 text-secondary/80 dark:text-accent/80">
                In no event shall I, Saras or its suppliers be liable for any damages (including, without limitation,
                damages for loss of data or profit, or due to business interruption) arising out of the use or inability to
                use the materials on I, Saras, even if I, Saras or an authorized representative has been notified orally
                or in writing of the possibility of such damage.
              </p>
            </section>
            <section className="space-y-4">
              <h2 className="text-heading-4">7. Contact Information</h2>
              <p className="text-tagline-1 text-secondary/80 dark:text-accent/80">
                If you have any questions about these Terms & Conditions, please contact us at contact@isaras.ai
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Terms

