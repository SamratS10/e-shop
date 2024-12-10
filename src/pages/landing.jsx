import { LandingHeader } from '@/components/landingComp/landingHeader'
import Hero from '@/components/landingComp/landingSections/hero'
import Features from '@/components/landingComp/landingSections/features'
import Testimonials from '@/components/landingComp/landingSections/testimonials'
import { Footer } from '@/components/landingComp/footer'

import React from 'react'

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <LandingHeader />
      <main>
        <Hero />
        <Features />
        <Testimonials />
      </main>
      <Footer />
    </div>
  )
}

export default LandingPage
