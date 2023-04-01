import styles from '../styles/Navbar.module.css'
import $ from 'jquery'
import Link from 'next/link'
import { UserContext } from '@/contexts/user.context'
import { useContext, useEffect } from 'react'
import axios from 'axios'

const Navbar = (prop) => {
  const { currentUser } = useContext(UserContext)
  let x = prop.team_nav
  let y = prop.team_about
  let z = prop.team_contact
  // useEffect(()=>{
  //   const fun = async()=>{
  //     const data =await axios.get('')
  //   }
  //   fun()

  // },[])
  return (
    <>
      <section className={styles.navbar}>
        <div className="nav">
          <input type="checkbox" id="nav-check" />
          <Link href="/" passHref={true} legacyBehavior={true}>
            <div className="nav-header">
              <div className="nav-title">Hackfest | IIT Dhanbad</div>
            </div>
          </Link>
          <div className="nav-btn">
            <label htmlFor="nav-check">
              <span></span>
              <span></span>
              <span></span>
            </label>
          </div>

          <div className="nav-links">
            <Link href="/" passHref={true} legacyBehavior={true}>
              Home
            </Link>
            <Link href={y} passHref={true} legacyBehavior={true}>
              About
            </Link>
            <Link href="/team" passHref={true} legacyBehavior={true}>
              Team
            </Link>
            <Link href={x} passHref={true} legacyBehavior={true}>
              Sponsors
            </Link>
            <Link href={z} passHref={true} legacyBehavior={true}>
              Contact
            </Link>
            <Link
              href="https://www.linkedin.com/in/hackfest-iit-ism-dhanbad-574021159"
              passHref={true}
              legacyBehavior={true}
            >
              <a target="_blank">LinkedIn</a>
            </Link>
            {/* {currentUser ? (
              <Link href="/profile" passHref={true} legacyBehavior={true}>
                <a>
                  <img
                    style={{ filter: 'invert(100%)', marginTop: '-10px' }}
                    src="https://img.icons8.com/material-outlined/24/000000/contract-job.png"
                  />
                </a>
              </Link>
            ) : (
              <div></div>
            )} */}
          </div>
        </div>
      </section>
    </>
  )
}

export default Navbar
