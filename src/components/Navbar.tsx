import styles from '../styles/Navbar.module.css'
import $ from 'jquery'
import Link from 'next/link'

const Navbar = () => {
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
          </div>
        </div>
      </section>
    </>
  )
}

export default Navbar
