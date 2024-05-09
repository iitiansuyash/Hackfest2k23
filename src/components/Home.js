import React, { useState, useEffect,useRef } from 'react'
import WAVES from "vanta/dist/vanta.waves.min"
import * as THREE from "three"
import styles from '../styles/Home.module.css'
import Typewriter from "typewriter-effect"
import { Link } from 'next/link'

const Home = () => {
  const [loading, setLoading] = useState(false)
  const [vantaEffect, setVantaEffect] = useState(0)
  const vantaRef = useRef(null)
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        WAVES({
          el: vantaRef.current,
          THREE,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x3,
        }),
      )
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])
  return (
    <>
      <main
        className={styles.main}
        ref={vantaRef}
        style={{ overflowY: 'hidden', overflow: 'hidden' }}
      >
        <div className={styles.container}>
          <h1 className={styles.ttl}>Hackfest 2k24444</h1>
          <h2 className={styles.subttl}>
            <Typewriter
              options={{
                strings: ['Ideate;', 'Innovate;', 'Iterate;'],
                autoStart: true,
                loop: true,
              }}
            />
          </h2>
          <h2 className={styles.subttl}>19th to 21th APRIL</h2>
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
    </>
  )
}

export default Home
