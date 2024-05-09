import styles from '../styles/Navbar.module.css'
import $ from 'jquery'
import Link from 'next/link'
import { UserContext } from '@/contexts/user.context'
import { useContext, useEffect } from 'react'
import axios from 'axios'
// import { useNavigate } from 'react-router-dom'
import { useRouter } from "next/router";
const Navbar = (prop) => {
  const { currentUser } = useContext(UserContext)
  let x = prop.team_nav
  let y = prop.team_about
  let z = prop.team_contact
  const router = useRouter();
  // useEffect(()=>{
  //   const fun = async()=>{
  //     const data =await axios.get('')
  //   }
  //   fun()

  // },[])
  const handleClick = ()=>{
    console.log("hi");
  }
  return (
    <>
      <section className={styles.navbar}>
        <div className="nav">
          <input type="checkbox" id="nav-check" />
          {/* <img src="../favicon.ico" alt="Logo" className={styles.navbarLogo}  /> */}
          <Link href="/" passHref={true} legacyBehavior={true}>
            <div className="nav-header" style={{cursor: "pointer"}}>
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
            {/* <Link href="/announcement" passHref={true} legacyBehavior={true}>
              Announcement
            </Link> */}
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
            <div style={{color:"white", cursor: "pointer"}}className='mydiv' onClick={()=>{
              if(localStorage['Dammta']){
                localStorage.setItem('Dammta',"");
                setTimeout(() => {
                  router.push("/");
                }, 1000);
              }
              else{
                router.push("/login");
              }
            }}>
              {localStorage['Dammta']?`Logout`:`Login`}
            </div>
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
