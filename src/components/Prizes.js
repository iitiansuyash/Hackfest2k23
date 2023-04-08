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
        <Container>
						<p className="section-header">Problem Statements</p>
						<div className="prizes-list">
							
							<div className="prize-card">
								<div className="thumb">
									<img src="https://roboism.in/images/logo.png" className="img-fluid" style={{ height: "70px" }} />
								</div>
								<div className="prize-content">

									<p className='extraLittleText' style={{fontSize:'1.25rem'}}>Robotronics Club</p>
									<div style={{ marginTop: "1rem" }}>
										<btn className="btn-grad register-btn"><a href="https://docs.google.com/document/d/1wWjXHUUq9UnE4HIK8d2XV9-0eEbvvsl7IScyv1O1X6Y/edit" target="_blank" style={{ color: 'white', textDecoration: 'none' }}>Problem Statement</a></btn>
									</div>

								</div>
							</div>
              <div className="prize-card">
								<div className="thumb">
									<img src="../assets/images/sponsors/mechismu.png" className="img-fluid" style={{ height: "70px" }} />
								</div>
								<div className="prize-content">

									<p className='extraLittleText' style={{fontSize:'1.25rem'}}>Electric Mobility Club</p>
									<div style={{ marginTop: "1rem" }}>
										<btn className="btn-grad register-btn"><a href="https://docs.google.com/document/d/1iesfqIVyNTbtlAwbgwAwZWtfWxnRa4UeOb52F4pGAwI/edit" target="_blank" style={{ color: 'white', textDecoration: 'none' }}>Problem Statement</a></btn>
									</div>

								</div>
							</div>
              <div className="prize-card">
								<div className="thumb">
									<img src="https://i.imgur.com/pm6UQeR.jpeg" className="img-fluid" style={{ height: "70px" }} />
								</div>
								<div className="prize-content">

									<p className='extraLittleText' style={{fontSize:'1.25rem'}}>Parishram</p>
									<div style={{ marginTop: "1rem" }}>
										<btn className="btn-grad register-btn"><a href="https://docs.google.com/document/d/11prRSd_RyZNe0npQ6MCqZpPS5MTHqvIZjayFwhvtjeM/edit?usp=sharing " target="_blank" style={{ color: 'white', textDecoration: 'none' }}>Problem Statement</a></btn>
									</div>

								</div>
							</div>
              <div className="prize-card">
								<div className="thumb">
									<img src="https://media.licdn.com/dms/image/C560BAQHJ_dGU2xEJEQ/company-logo_200_200/0/1653843671214?e=1689206400&v=beta&t=wQQ-gcxr5qchK64lSQDvufTTkbRccTnXFgfsgjbLzpI" className="img-fluid" style={{ height: "70px" }} />
								</div>
								<div className="prize-content">

									<p className='extraLittleText' style={{fontSize:'1.25rem'}}>Fintech Club</p>
									<div style={{ marginTop: "1rem" }}>
										<btn className="btn-grad register-btn"><a href="https://docs.google.com/document/d/1KraIDZHKbMmkKR_GJrTm08Z08jFc1LKHUeBaAe5fg3k/edit" target="_blank" style={{ color: 'white', textDecoration: 'none' }}>Problem Statement</a></btn>
									</div>

								</div>
							</div>
              <div className="prize-card">
								<div className="thumb">
									<img src="data:image/png;base64,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" className="img-fluid" style={{ height: "70px" }} />
								</div>
								<div className="prize-content">

									<p className='extraLittleText' style={{fontSize:'1.25rem'}}>NVCTI</p>
									<div style={{ marginTop: "1rem" }}>
										<btn className="btn-grad register-btn"><a href="https://docs.google.com/document/d/1PUxhqLHcwj7Lqvn6aKITtF7gBBK1vSb-zA5eEyoOIJE/edit" target="_blank" style={{ color: 'white', textDecoration: 'none' }}>Problem Statement</a></btn>
									</div>

								</div>
							</div>
              <div className="prize-card">
								<div className="thumb">
									<img src="https://pbs.twimg.com/profile_images/1503350950739988481/YV4g3Qoe_400x400.jpg" className="img-fluid" style={{ height: "70px" }} />
								</div>
								<div className="prize-content">

									<p className='extraLittleText' style={{fontSize:'1.25rem'}}>Texmin</p>
									<div style={{ marginTop: "1rem" }}>
										<btn className="btn-grad register-btn"><a href="https://docs.google.com/document/d/17VNP0p2EKw_NqusE9VotkxbYgsT5N2sQjgaokaN1ATI/edit?usp=sharing" target="_blank" style={{ color: 'white', textDecoration: 'none' }}>Problem Statement</a></btn>
									</div>

								</div>
							</div>
						</div>
					</Container>
      </section>
    )
  }
}
//suyash