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
                image="https://media.licdn.com/dms/image/D4D03AQHoFbR4uRKQtg/profile-displayphoto-shrink_800_800/0/1712898983374?e=1720656000&v=beta&t=jibI2t6dETNFbAGvQYN2tOajCVTFBRgHW-1gN6tR934"
                name="Mudit Virmani"
                post="Coordinator"
                fb="#"
                linkedin="#"
              />
            </Col>
            <Col md={6}>
              <Members
                image="https://media.licdn.com/dms/image/D4D03AQEdrLWzeTAXJw/profile-displayphoto-shrink_400_400/0/1713977551207?e=1720656000&v=beta&t=cz2sNjCB_mtayjdT5lPRHptDbx_B31MIn0NA8DnUSRs"
                name="Suyash Suryavanshi"
                post="Technical Advisor"
                fb="#"
                linkedin="#"
              />
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Members
                image="https://media.licdn.com/dms/image/D5603AQGI_8LRMDsdAQ/profile-displayphoto-shrink_800_800/0/1699124659800?e=1720656000&v=beta&t=5CLSnLlK-UNBRhZ3NrhJDGHBwDT3GljDqfjffw5CW44"
                name="Ayush Gupta"
                post="Sponsorship Advisor"
                fb="#"
                linkedin="#"
              />
            </Col>
            <Col md={6}>
              <Members
                image="https://media.licdn.com/dms/image/D4D03AQEoMUo675vGFA/profile-displayphoto-shrink_800_800/0/1707252472654?e=1720656000&v=beta&t=5wRPMBnzY08PVQ92T2k1nDXvQfmj4r86PiTLCGSU-fs"
                name="Surbhi Goel"
                post="Public Relation Advisor"
                fb="#"
                linkedin="#"
              />
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Members
                image="https://media.licdn.com/dms/image/D5603AQGx-SUl5KMCyg/profile-displayphoto-shrink_800_800/0/1683295819334?e=1720656000&v=beta&t=uGqwyK0fb-vp2u9mfSemIq1GfkZLDy2StT-ELXInCZM"
                name="Aneesha Das"
                post="Content Advisor"
                fb="#"
                linkedin="#"
              />
            </Col>
            <Col md={6}>
              <Members
                image=""
                name="Prashant Rajveer"
                post="Promotion and Marketing Advisor"
                fb="#"
                linkedin="#"
              />
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Members
                image=""
                name="Shiwangi Anand"
                post="Design Advisor"
                fb="#"
                linkedin="#"
              />
            </Col>
            <Col md={6}>
              <Members
                image=""
                name="Aakash Bhat"
                post="Promotion and Marketing Advisor"
                fb="#"
                linkedin="#"
              />
            </Col>
            <Col md={6}>
              <Members
                image=""
                name="Harshit Sharma"
                post="Treasurer Advisor"
                fb="#"
                linkedin="#"
              />
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <Link href="/team" legacyBehavior>
                <a className="team-btn-anchor" style={{ textDecoration: 'none' }}>
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
