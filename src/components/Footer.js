import React from 'react'
import Link from 'next/link'
// import ScrollableAnchor from 'react-scrollable-anchor';
import styles from '../styles/Footer.module.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

const Footer = () => {
  return (
    <>
      {/* <ScrollableAnchor id="contact"> */}
      <div className="container-color" id="contact">
        <footer className="main-footer">
          <div className="container">
            <div className="footer-content">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12 footer-column">
                  <div className="logo-widget footer-widget mx-auto">
                    <figure className="logo-box mx-auto">
                      <a href="#">
                        <img
                          src="../logo.webp"
                          alt=""
                        />
                      </a>
                    </figure>
                    <div className="textFooter">
                      <p>HACKFEST 2K24 | IIT (ISM) DHANBAD</p>
                    </div>
                    <ul className="footer-social ulist ">
                      <li>
                        <a
                          href="https://www.facebook.com/hackfestiitism/"
                          target="_blank"
                        >
                          <i className="fab fa-facebook-f link"></i>
                        </a>
                      </li>
                      {/* <li><a href="https://twitter.com/hackfestiitism" target="_blank"><i className="fab fa-twitter link"></i></a></li> */}
                      <li>
                        <a
                          href="https://www.instagram.com/hackfestiitism/?hl=en"
                          target="_blank"
                        >
                          <i className="fab fa-instagram link"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.linkedin.com/company/hackfest-iit-ism-dhanbad/?originalSubdomain=in"
                          target="_blank"
                        >
                          <i className="fab fa-linkedin link"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6 col-sm-12 footer-widget">
                  <div className="contact-widget footer-widget">
                    <div className="footer-title">Contact Us</div>
                    <div className="textFooter">
                      <p>Central Library, IIT (ISM) Dhanbad, Dhanbad, Jharkhand, 826004</p>
                      <p onclick="window.open('tel:9871842597);">
                        +91 88249 17959
                      </p>
                      <p
                        onClick={(e) => {
                          window.location.href = 'mailto:hackfest@iitism.ac.in'
                        }}
                      >
                        hackfest@iitism.ac.in
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
      {/* </ScrollableAnchor> */}
    </>
  )
}

export default Footer
