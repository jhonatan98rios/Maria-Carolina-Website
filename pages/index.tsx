import React from 'react'
import Navbar from '../components/navbar'
import Header from '../components/header'
import About from '../components/about'
import Services from '../components/services'
import Contact from '../components/contact'
import Footer from '../components/footer'
import Floating from '../components/floating'
import SEO from '../components/seo'

export default function Home() {
  return (
    <div>
      <SEO />

      <main className={''}>
        <Navbar />
        <Header />
        <About />
        <Services />
        <Contact />

        <Floating />
      </main>

      <Footer />
    </div>
  )
}
