import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.css'
import styles from '@/styles/Home.module.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import About from '@/components/About'
import Events from '@/components/Events'
import Faq from '@/components/Faq'
import Schedule from '@/components/Schedule/Schedule';
import Timeline from '@/components/Timeline'
import Sponsors from '@/components/Sponsors'
import Glimpse from '@/components/Carousel'
import Prizes from '@/components/Prizes'
import Coordinators from '@/components/Coordinators'
import PrevWinners from '@/components/PrevWinners'
import Testimonials from '@/components/Testimonials'
import { useEffect, useRef, useState } from 'react'
import GLOBE from 'vanta/dist/vanta.globe.min'
import * as THREE from 'three'
import Typewriter from 'typewriter-effect'
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [vantaEffect, setVantaEffect] = useState(0)
  const vantaRef = useRef(null)
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        GLOBE({
          el: vantaRef.current,
          THREE,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x9d2b9c,
          backgroundColor: 0x0,
        }),
      )
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])
  return (
    <>
      <Head>
        <title>Hackfest | IIT Dhanbad</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar
        team_nav="/#sponsors"
        team_about="/#about"
        team_contact="/#contact"
      />
      <main
        className={styles.main}
        ref={vantaRef}
        style={{ overflowY: 'hidden', overflow: 'hidden' }}
      >
        <div className={styles.container}>
          <h1 className={styles.ttl}>Hackfest 2k23</h1>
          <h2 className={styles.subttl}>
            <Typewriter
              options={{
                strings: ['Ideate;', 'Innovate;', 'Iterate;'],
                autoStart: true,
                loop: true,
              }}
            />
          </h2>
          <h2 className={styles.subttl}>7th to 9th APRIL</h2>
          <h2 className={styles.subttl}>IIT ISM Dhanbad</h2>
          <Link
            href="https://unstop.com/hackathons/hackfest-2023-indian-institute-of-technology-iit-ism-dhanbad-650496"
            passHref={true}
            legacyBehavior={true}
          >
            <button className="btnHero btnHeroHero">Register</button>
          </Link>
        </div>
      </main>
      <About />
      <Glimpse />
      <Coordinators />
      {/* <Events /> */}
      <Schedule />
      <PrevWinners />
      <Prizes />
      {/* <Timeline/> */}
      {/* <Testimonials/> */}
      <Faq />
      <Sponsors />
      <Footer />
    </>
  )
}
