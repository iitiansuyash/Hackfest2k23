import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import Members from './Members'

import styles from '../styles/Coordinators.module.css'
import Link from 'next/link'

export default class Coordinators extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      windowHeight: 720,
    }
  }

  componentDidMount() {
    this.updateDimensions()
    window.addEventListener('resize', this.updateDimensions)
  }

  updateDimensions = () => {
    this.setState({ windowHeight: window.innerHeight })
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions)
  }

  render() {
    return (
      <section
        className="coordinators"
        style={{ minHeight: this.state.windowHeight + 'px' }}
      >
        <Container>
          <h2 className="section-header">Student Advisors</h2>
          <Row>
            <Col md={6}>
              <Members
                image="./assets/images/coordinators/adityasir.png"
                name="Aditya Garg"
                post="Coordinator"
                fb="https://www.instagram.com/aditya__kr__garg/"
                linkedin="https://www.linkedin.com/in/garg-adi"
              />
            </Col>
            <Col md={6}>
              <Members
                image="./assets/images/coordinators/anshumansir.png"
                name="Anshuman Tejaswi"
                post="Co-coordinator"
                fb="https://www.instagram.com/swaggytejaswi/"
                linkedin="https://www.linkedin.com/in/anshuman-tejaswi-790572199"
              />
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Members
                image="./assets/images/coordinators/akshatSinghSir.png"
                name="Akshat Singh"
                post="Sponsorship Advisor"
                fb="https://www.instagram.com/akshatic/"
                linkedin="https://www.linkedin.com/in/akshatic"
              />
            </Col>
            <Col md={6}>
              <Members
                image="./assets/images/coordinators/akashMahapatraSir.png"
                name="Akash Mahapatra"
                post="Operations Advisor"
                fb="https://www.instagram.com/mahapatra_2002/"
                linkedin="https://www.linkedin.com/in/mahapatraakash"
              />
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Members
                image="./assets/images/coordinators/shirinMaam.png"
                name="Shirin Kaul"
                post="Content Advisor"
                fb="https://www.instagram.com/s.h.i.r.i.n.k/"
                linkedin="https://www.linkedin.com/in/shirin-kaul-b09282190"
              />
            </Col>
            <Col md={6}>
              <Members
                image="./assets/images/coordinators/bhavyaJainSir.png"
                name="Bhavya Jain"
                post="Promotion and Marketing Advisor"
                fb="https://www.instagram.com/bhavya_jain_2201/"
                linkedin="https://www.linkedin.com/in/bhavya-jain-23200b157"
              />
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Members
                image="./assets/images/coordinators/mishraSir.png"
                name="Aditya Mishra"
                post="Technical Advisor"
                fb="https://www.instagram.com/spy.adi/"
                linkedin="https://www.linkedin.com/in/aditya-mishra-a433a11b1"
              />
            </Col>
            <Col md={6}>
              <Members
                image="./assets/images/coordinators/brajeshSir.png"
                name="Brajesh Meena"
                post="Promotion and Marketing Advisor"
                fb="#"
                linkedin="https://www.linkedin.com/in/brajesh-meena-3529a8193"
              />
            </Col>
            <Col md={6}>
              <Members
                image="./assets/images/coordinators/shulabhSir.png"
                name="Shulabh Prakash"
                post="Graphics and Animation Advisor"
                fb="https://www.instagram.com/shulabh_prakash/"
                linkedin="https://www.linkedin.com/in/shulabh-prakash"
              />
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <Link href="/team" legacyBehavior>
                <a className="team-btn-anchor">
                  <button className="team-btn">Team</button>
                </a>
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    )
  }
}
