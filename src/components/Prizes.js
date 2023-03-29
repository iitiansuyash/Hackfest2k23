import React from 'react'
import { Container } from 'reactstrap'
import Button from 'react-bootstrap/Button'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import NET from 'vanta/dist/vanta.net.min'
import * as THREE from 'three'

export default class Prizes extends React.Component {
  constructor(props) {
    super(props)
    this.vantaRef = React.createRef()
    this.state = {
      windowHeight: 720,
    }
  }

  componentDidMount() {
    this.updateDimensions()
    window.addEventListener('resize', this.updateDimensions)
    this.vantaEffect = NET({
      el: this.vantaRef.current,
      color: 0xffffff,
      backgroundColor: 0x0,
      scale: 1.0,
      scaleMobile: 1.0,
      THREE,
    })
  }

  updateDimensions = () => {
    this.setState({ windowHeight: window.innerHeight })
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions)
    if (this.vantaEffect) this.vantaEffect.destroy()
  }

  render() {
    return (
      //<ScrollableAnchor>
      <section className="prizes" id="prizes" ref={this.vantaRef}>
        <Container>
          <h2 className="section-header">Prizes</h2>
          <div className="prizes-list">
            <div className="cash-prize-card">
              <div className="up">
                <img src="./assets/images/prizes/1st.svg" />
              </div>
              <div className="cash-prize-content">
                <div className="title">1st Place</div>
                <div className="amount">Rs. 50000</div>
                <div className="extra">+ Goodies and Cool Swags</div>
              </div>
            </div>
            <div className="cash-prize-card">
              <div className="up">
                <img src="./assets/images/prizes/2nd.svg" />
              </div>
              <div className="cash-prize-content">
                <div className="title">2nd Place</div>
                <div className="amount">Rs. 30000</div>
                <div className="extra">+ Goodies and Cool Swags</div>
              </div>
            </div>
            <div className="cash-prize-card">
              <div className="up">
                <img src="./assets/images/prizes/3rd.svg" />
              </div>
              <div className="cash-prize-content">
                <div className="title">3rd Place</div>
                <div className="amount">Rs. 20000</div>
                <div className="extra">+ Goodies and Cool Swags</div>
              </div>
            </div>
            <div className="cash-prize-card">
              <div className="up"></div>
              <div className="cash-prize-content">
                <div className="title">4th - 10th Place</div>
                <div className="amount">Rs. 2000</div>
                <div className="extra">+ Goodies and Cool Swags</div>
              </div>
            </div>
          </div>
        </Container>
        {/* <Container>
						<p className="sub-header">Other Prizes</p>
						<div className="prizes-list">
							capgemini
							<div className="prize-card">
								<div className="thumb">
									<img src="./assets/images/sponsors/ca1.png" className="img-fluid" style={{ height: "100px" }} />
								</div>
								<div className="prize-content">

									<p className='extraLittleText'>Interview Opportunity</p>
									<div style={{ marginTop: "1rem" }}>
										<btn className="btn-grad register-btn"><a href="https://docs.google.com/presentation/d/19-YKHkEPCT11o81K9XiSIQGSbzjahf73/edit#slide=id.p1" target="_blank" style={{ color: 'white', textDecoration: 'none' }}>Problem Statement</a></btn>
									</div>

								</div>
							</div>
							Atlassian
							<div className="prize-card">
								<div className="thumb">
									<img src="./assets/images/sponsors/horizontal-logo-gradient-blue-atlassian.png" className="img-fluid" style={{ padding: "20px" }} />
								</div>
								<div className="prize-content">

									<p className='extraLittleText'>Interview Opportunity</p>
									<div style={{ marginTop: "1rem" }}>
										<btn className="btn-grad register-btn"><a href="https://docs.google.com/document/d/18qnj6RqxnDOYBa3EEF0G3PsIAVo6TlNMmcctslqQsWU/edit" target="_blank" style={{ color: 'white', textDecoration: 'none' }}>Problem Statement</a></btn>
									</div>
					

								</div>
							</div>
							flam
							<div className="prize-card">
								<div className="thumb">
									<img src="./assets/images/sponsors/flamap.svg" className="img-fluid" style={{ padding: "20px" }} />
								</div>
								<div className="prize-content">

									<p className='extraLittleText'>Interview Opportunity</p>
									<div style={{ marginTop: "1rem" }}>
										<btn className="btn-grad register-btn"><a href="https://docs.google.com/document/d/17gkYgSxsd5_sB1rdnTm1iY_xmRSeHUZXjYf8tVAjbbc/edit" target="_blank" style={{ color: 'white', textDecoration: 'none' }}>Problem Statement</a></btn>
									</div>
								</div>
							</div>
							texmin
							<div className="prize-card">
								<div className="thumb">
									<img src="./assets/images/sponsors/texin - logo-18.png" className="img-fluid" />
								</div>
								<div className="prize-content">

									<p className='extraLittleText'>Internship Opportunity</p>
									<div style={{ marginTop: "1rem" }}>
										<btn className="btn-grad register-btn"><a href="https://docs.google.com/document/d/1rjqDMVROM4xULF2QYTpK9cMkBqeLOWuX/edit" target="_blank" style={{ color: 'white', textDecoration: 'none' }}>Problem Statement</a></btn>
									</div>

								</div>
							</div>
						</div>
					</Container> */}
      </section>
    )
  }
}
