import styles from '../styles/Navbar.module.css'
import $ from 'jquery'
import Link from 'next/link'
import { UserContext } from '@/contexts/user.context';
import {useContext, useEffect} from 'react';
import axios from 'axios';

const Navbar = () => {
  const {currentUser} = useContext(UserContext);
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
          <div className="nav-header">
            <div className="nav-title">Hackfest | IIT Dhanbad</div>
          </div>
          <div className="nav-btn">
            <label htmlFor="nav-check">
              <span></span>
              <span></span>
              <span></span>
            </label>
          </div>

          <div className="nav-links">
          <Link href="/" passHref={true} legacyBehavior={true}>
              <a>Home</a>
            </Link>
            <Link href="#about" passHref={true} legacyBehavior={true}>
              <a>About</a>
            </Link>
            <Link href="/team" passHref={true} legacyBehavior={true}>
              <a>Team</a>
            </Link>
            <Link href="#sponsors" passHref={true} legacyBehavior={true}>
              <a>Sponsors</a>
            </Link>
            <Link href="#contact"passHref={true} legacyBehavior={true}>
              <a>Contact</a>
            </Link>
            <Link href="https://www.linkedin.com/in/hackfest-iit-ism-dhanbad-574021159" passHref={true} legacyBehavior={true}>
              <a target="_blank">LinkedIn</a>
            </Link>
            {currentUser?(
              <Link
              href="/profile"
              passHref={true}
              legacyBehavior={true}
            >
              <a ><img
                style={{ filter: "invert(100%)", marginTop:'-10px'}}
                src="https://img.icons8.com/material-outlined/24/000000/contract-job.png"
              /></a>
            </Link>
            ):<div></div>}
          </div>
        </div>
      </section>
    </>
  )
}

export default Navbar
