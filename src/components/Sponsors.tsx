import React from 'react';
import { Container } from 'reactstrap';
// import NET from 'vanta/dist/vanta.net.min'
// import ScrollableAnchor from 'react-scrollable-anchor';
import * as THREE from 'three'

export default class Sponsors extends React.Component {
	// constructor(props) {
	// 	super(props);
	// 	this.state = {
	// 		windowHeight: 720
	// 	};
	// }

	componentDidMount() {
		this.updateDimensions();
		window.addEventListener("resize", this.updateDimensions);
	}

	updateDimensions = () => {
		this.setState({ windowHeight: window.innerHeight });
	}

	componentWillUnmount() {
		window.removeEventListener("resize", this.updateDimensions);

	}

	render() {
		return (
			// <ScrollableAnchor >
				<section className="sponsors" id="sponsors">
					<Container>
						<h2 className="section-header">Past Sponsors</h2>
						<div className="sponsors-list">
						<a href="https://www.atlassian.com/" target="_blank">
								<img src="./assets/images/sponsors/atlassian.png" className="img-fluid" />
							</a> 
						<a href="https://www.capgemini.com/" target="_blank">
								<img src="./assets/images/sponsors/Capgemini_Logo_Color_eMedia.jpg" className="img-fluid" />
							</a> 
							<a href="https://juspay.in/" target="_blank">
								<img src="./assets/images/sponsors/jus_pay.jpg" className="img-fluid" />
							</a>
							<a href="https://landing.ula.app/en/" target="_blank">
								<img src="./assets/images/sponsors/ula.png" className="img-fluid" />
							</a>
							<a href="https://www.phonepe.com/" target="_blank">
								<img src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8yIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjAiIHk9IjAiIHZpZXdCb3g9IjAgMCAxMzIgNDgiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxzdHlsZT4uc3Qwe2ZpbGw6IzVmMjU5Zn08L3N0eWxlPjxjaXJjbGUgdHJhbnNmb3JtPSJyb3RhdGUoLTc2LjcxNCAxNy44NyAyNC4wMDEpIiBjbGFzcz0ic3QwIiBjeD0iMTcuOSIgY3k9IjI0IiByPSIxNy45Ii8+PHBhdGggY2xhc3M9InN0MCIgZD0iTTkwLjUgMzQuMnYtNi41YzAtMS42LS42LTIuNC0yLjEtMi40LS42IDAtMS4zLjEtMS43LjJWMzVjMCAuMy0uMy42LS42LjZoLTIuM2MtLjMgMC0uNi0uMy0uNi0uNlYyMy45YzAtLjQuMy0uNy42LS44IDEuNS0uNSAzLS44IDQuNi0uOCAzLjYgMCA1LjYgMS45IDUuNiA1LjR2Ny40YzAgLjMtLjMuNi0uNi42SDkyYy0uOSAwLTEuNS0uNy0xLjUtMS41em05LTMuOWwtLjEuOWMwIDEuMi44IDEuOSAyLjEgMS45IDEgMCAxLjktLjMgMi45LS44LjEgMCAuMi0uMS4zLS4xLjIgMCAuMy4xLjQuMi4xLjEuMy40LjMuNC4yLjMuNC43LjQgMSAwIC41LS4zIDEtLjcgMS4yLTEuMS42LTIuNC45LTMuOC45LTEuNiAwLTIuOS0uNC0zLjktMS4yLTEtLjktMS42LTIuMS0xLjYtMy42di0zLjljMC0zLjEgMi01IDUuNC01IDMuMyAwIDUuMiAxLjggNS4yIDV2Mi40YzAgLjMtLjMuNi0uNi42aC02LjN6bS0uMS0yLjJIMTAzLjJ2LTFjMC0xLjItLjctMi0xLjktMnMtMS45LjctMS45IDJ2MXptMjUuNSAyLjJsLS4xLjljMCAxLjIuOCAxLjkgMi4xIDEuOSAxIDAgMS45LS4zIDIuOS0uOC4xIDAgLjItLjEuMy0uMS4yIDAgLjMuMS40LjIuMS4xLjMuNC4zLjQuMi4zLjQuNy40IDEgMCAuNS0uMyAxLS43IDEuMi0xLjEuNi0yLjQuOS0zLjguOS0xLjYgMC0yLjktLjQtMy45LTEuMi0xLS45LTEuNi0yLjEtMS42LTMuNnYtMy45YzAtMy4xIDItNSA1LjQtNSAzLjMgMCA1LjIgMS44IDUuMiA1djIuNGMwIC4zLS4zLjYtLjYuNmgtNi4zem0tLjEtMi4ySDEyOC42di0xYzAtMS4yLS43LTItMS45LTJzLTEuOS43LTEuOSAydjF6TTY2IDM1LjdoMS40Yy4zIDAgLjYtLjMuNi0uNnYtNy40YzAtMy40LTEuOC01LjQtNC44LTUuNC0uOSAwLTEuOS4yLTIuNS40VjE5YzAtLjgtLjctMS41LTEuNS0xLjVoLTEuNGMtLjMgMC0uNi4zLS42LjZ2MTdjMCAuMy4zLjYuNi42aDIuM2MuMyAwIC42LS4zLjYtLjZ2LTkuNGMuNS0uMiAxLjItLjMgMS43LS4zIDEuNSAwIDIuMS43IDIuMSAyLjR2Ni41Yy4xLjcuNyAxLjQgMS41IDEuNHptMTUuMS04LjRWMzFjMCAzLjEtMi4xIDUtNS42IDUtMy40IDAtNS42LTEuOS01LjYtNXYtMy43YzAtMy4xIDIuMS01IDUuNi01IDMuNSAwIDUuNiAxLjkgNS42IDV6bS0zLjUgMGMwLTEuMi0uNy0yLTItMnMtMiAuNy0yIDJWMzFjMCAxLjIuNyAxLjkgMiAxLjlzMi0uNyAyLTEuOXYtMy43em0tMjIuMy0xLjdjMCAzLjItMi40IDUuNC01LjYgNS40LS44IDAtMS41LS4xLTIuMi0uNHY0LjVjMCAuMy0uMy42LS42LjZoLTIuM2MtLjMgMC0uNi0uMy0uNi0uNlYxOS4yYzAtLjQuMy0uNy42LS44IDEuNS0uNSAzLS44IDQuNi0uOCAzLjYgMCA2LjEgMi4yIDYuMSA1LjZ2Mi40ek01MS43IDIzYzAtMS42LTEuMS0yLjQtMi42LTIuNC0uOSAwLTEuNS4zLTEuNS4zdjYuNmMuNi4zLjkuNCAxLjYuNCAxLjUgMCAyLjYtLjkgMi42LTIuNFYyM3ptNjguMiAyLjZjMCAzLjItMi40IDUuNC01LjYgNS40LS44IDAtMS41LS4xLTIuMi0uNHY0LjVjMCAuMy0uMy42LS42LjZoLTIuM2MtLjMgMC0uNi0uMy0uNi0uNlYxOS4yYzAtLjQuMy0uNy42LS44IDEuNS0uNSAzLS44IDQuNi0uOCAzLjYgMCA2LjEgMi4yIDYuMSA1LjZ2Mi40em0tMy42LTIuNmMwLTEuNi0xLjEtMi40LTIuNi0yLjQtLjkgMC0xLjUuMy0xLjUuM3Y2LjZjLjYuMy45LjQgMS42LjQgMS41IDAgMi42LS45IDIuNi0yLjRWMjN6Ii8+PHBhdGggZD0iTTI2IDE5LjNjMC0uNy0uNi0xLjMtMS4zLTEuM2gtMi40bC01LjUtNi4zYy0uNS0uNi0xLjMtLjgtMi4xLS42bC0xLjkuNmMtLjMuMS0uNC41LS4yLjdsNiA1LjdIOS41Yy0uMyAwLS41LjItLjUuNXYxYzAgLjcuNiAxLjMgMS4zIDEuM2gxLjR2NC44YzAgMy42IDEuOSA1LjcgNS4xIDUuNyAxIDAgMS44LS4xIDIuOC0uNXYzLjJjMCAuOS43IDEuNiAxLjYgMS42aDEuNGMuMyAwIC42LS4zLjYtLjZWMjAuOGgyLjNjLjMgMCAuNS0uMi41LS41di0xem0tNi40IDguNmMtLjYuMy0xLjQuNC0yIC40LTEuNiAwLTIuNC0uOC0yLjQtMi42di00LjhoNC40djd6IiBmaWxsPSIjZmZmIi8+PC9zdmc+" className="img-fluid" />
							</a>
							<a href="https://www.drdo.gov.in/" target="_blank">
								<img style={{ height: "160px" }} src="./assets/images/sponsors/drdo.png" className="img-fluid" />
							</a>
							<a href="https://matic.network/" target="_blank">
								<img src="./assets/images/sponsors/matic.png" className="img-fluid" />
							</a>
							<a href="https://www.digitalocean.com" target="_blank">
								<img src="./assets/images/sponsors/digital-ocean.png" className="img-fluid" />
							</a>
							<a href="https://www.wikimedia.org/" target="_blank">
								<img src="./assets/images/sponsors/wikimedia.jpg" className="img-fluid" />
							</a>
							<a href="https://www.grabon.in/" target="_blank">
								<img src="./assets/images/sponsors/grabon.jpg" className="img-fluid" />
							</a>
							{/* <a href="https://skillenza.com/" target="_blank">
								<img src="./assets/images/sponsors/skillenza.png" className="img-fluid" />
							</a> */}
							{/* <a href="https://devfolio.co/" target="_blank">
								<img src="./assets/images/sponsors/devfolio.png" className="img-fluid" />
							</a> */}
							{/* <a href="/" target="_blank">
								<img src="./assets/images/sponsors/habsy.png" className="img-fluid" />
							</a> */}
							{/* <a href="https://www.infopine.com/" target="_blank">
								<img src="./assets/images/sponsors/infopine_1.png" className="img-fluid" />
							</a> */}
							{/* <a href="http://www.codeasylums.com/" target="_blank">
								<img src="./assets/images/sponsors/codeasylums.png" className="img-fluid" />
							</a> */}
							{/* <a href="https://cipherschools.com/" target="_blank">
								<img src="./assets/images/sponsors/cipherSchool.jpg" className="img-fluid" />
							</a> */}

							{/* <a href="/" target="_blank">
								<img src="./assets/images/sponsors/work-on-wheels_1.jpeg" className="img-fluid" />
							</a> */}
							{/* <a href="https://skillshipfoundation.com/" target="_blank">
								<img src="./assets/images/sponsors/skillship.png" className="img-fluid" />
							</a> */}
							{/* <a href="https://classplusapp.com/" target="_blank">
								<img src="./assets/images/sponsors/classplus.png" className="img-fluid" />
							</a> */}
							{/* <a href="https://fun2dolabs.com/" target="_blank">
								<img src="./assets/images/sponsors/fun2do.png" className="img-fluid" />
							</a> */}
							{/* <a href="https://zulipchat.com/" target="_blank">
								<img src="./assets/images/sponsors/zulip.png" className="img-fluid" />
							</a> */}
							{/* <a href="" target="_blank">
								<img style={{ height: "160px" }} src="./assets/images/sponsors/deepmoth.jpeg" className="img-fluid" />
							</a> */}
							{/* <a href="https://www.techgig.com/" target="_blank">
								<img src="./assets/images/sponsors/techgig.png" className="img-fluid" />
							</a> */}
							{/* <a href="https://www.womentechmakers.com//" target="_blank">
								<img src="./assets/images/sponsors/womentechmakers.png" className="img-fluid" />
							</a> */}
							{/* <a href="https://hirescript.in/" target="_blank">
								<img src="./assets/images/sponsors/hirescript.jpg" className="img-fluid" />
							</a> */}
							{/* <a href="https://www.bugsee.com" target="_blank">
								<img src="./assets/images/sponsors/bugsee.png" className="img-fluid" />
							</a> */}
							{/* <a href="https://www.wolframalpha.com/" target="_blank">
								<img src="./assets/images/sponsors/wolfram.png" className="img-fluid" />
							</a> */}
							{/* <a href="https://zulipchat.com/" target="_blank">
								<img src="./assets/images/sponsors/zulip.png" className="img-fluid" />
							</a> */}
							{/* <a href="https://cloudsploit.com/" target="_blank">
								<img src="./assets/images/sponsors/cloudsploit.png" className="img-fluid" />
							</a> */}
							{/* <a href="https://www.creative-tim.com" target="_blank">
								<img src="./assets/images/sponsors/creative-tim.png" className="img-fluid" />
							</a> */}
							{/* <a href="https://www.olacabs.com/" target="_blank">
								<img src="./assets/images/sponsors/ola.png" className="img-fluid" />
							</a> */}
							{/* <a href="https://challengerocket.com/" target="_blank">
								<img src="./assets/images/sponsors/challengerocket.png" className="img-fluid" />
							</a> */}
						</div>
						<div className="sponsors-list">
							<a href="https://www.walmart.com/" target="_blank">
								<img src="./assets/images/sponsors/walmart.png" className="img-fluid" />
							</a>
							<a href="https://www.techgig.com/" target="_blank">
								<img src="./assets/images/sponsors/techgig.png" className="img-fluid" />
							</a>
							<a href="http://www.codeasylums.com/" target="_blank">
								<img src="./assets/images/sponsors/codeasylums.JPG" className="img-fluid" />
							</a>
							<a href="https://devfolio.co/" target="_blank">
								<img src="./assets/images/sponsors/devfolio.png" className="img-fluid" />
							</a>
							<a href="https://www.womentechmakers.com//" target="_blank">
								<img src="./assets/images/sponsors/womentechmakers.png" className="img-fluid" />
							</a>
							<a href="https://hirescript.in/" target="_blank">
								<img src="./assets/images/sponsors/hirescript.jpg" className="img-fluid" />
							</a>
							<a href="https://www.bugsee.com" target="_blank">
								<img src="./assets/images/sponsors/bugsee.png" className="img-fluid" />
							</a>
							<a href="https://www.wolframalpha.com/" target="_blank">
								<img src="./assets/images/sponsors/wolfram.png" className="img-fluid" />
							</a>
							<a href="https://zulipchat.com/" target="_blank">
								<img src="./assets/images/sponsors/zulip.png" className="img-fluid" />
							</a>
							<a href="https://cloudsploit.com/" target="_blank">
								<img src="./assets/images/sponsors/cloudsploit.png" className="img-fluid" />
							</a>
							<a href="https://www.creative-tim.com" target="_blank">
								<img src="./assets/images/sponsors/creative-tim.png" className="img-fluid" />
							</a>
							<a href="https://skillenza.com/" target="_blank">
								<img src="./assets/images/sponsors/skillenza.png" className="img-fluid" />
							</a>
							<a href="https://www.olacabs.com/" target="_blank">
								<img src="./assets/images/sponsors/ola.png" className="img-fluid" />
							</a>
							<a href="https://challengerocket.com/" target="_blank">
								<img src="./assets/images/sponsors/challengerocket.png" className="img-fluid" />
							</a>
						</div>
						<div className="sponsors-list">
							<a href="https://www.samsung.com" target="_blank">
								<img src="./assets/images/sponsors/samsung.png" className="img-fluid" />
							</a>
							<a href="https://www.mozilla.org" target="_blank">
								<img src="./assets/images/sponsors/mozilla.PNG" className="img-fluid" />
							</a>
							<a href="https://www.github.com" target="_blank">
								<img src="./assets/images/sponsors/github.png" className="img-fluid" />
							</a>
							<a href="https://www.hackerearth.com" target="_blank">
								<img src="./assets/images/sponsors/hackerearth.png" className="img-fluid" />
							</a>
							<a href="https://www.atkinsglobal.com" target="_blank">
								<img src="./assets/images/sponsors/atkins.png" className="img-fluid" />
							</a>
							{/* <a href="https://www.wikimedia.org/" target="_blank">
							<a href="https://www.jetbrains.com" target="_blank">
								<img src="./assets/images/sponsors/jetbrains.png" className="img-fluid" />
							</a>
							<a href="https://www.sketchapp.com" target="_blank">
								<img src="./assets/images/sponsors/sketch.png" className="img-fluid" />
							</a>
							<a href="https://www.geeksforgeeks.org" target="_blank">
								<img src="./assets/images/sponsors/geeksforgeeks.png" className="img-fluid" />
							</a>
							<a href="https://www.vedantalimited.com" target="_blank">
								<img src="./assets/images/sponsors/vedanta.png" className="img-fluid" />
							</a>
							<a href="https://www.jiosaavn.com" target="_blank">
								<img src="./assets/images/sponsors/saavn.png" className="img-fluid" />
							</a>
							<a href="https://www.pepsi.com" target="_blank">
								<img src="./assets/images/sponsors/pepsi.png" className="img-fluid" />
							</a>
							<a href="https://www.nestle.in" target="_blank">
								<img src="./assets/images/sponsors/nestle.png" className="img-fluid" />
							</a>
							<a href="https://www.ntpc.co.in" target="_blank">
								<img src="./assets/images/sponsors/ntpc.png" className="img-fluid" />
							</a>
								<img src="./assets/images/sponsors/wikimedia.jpg" className="img-fluid" />
							</a> */}
							{/* <a href="https://www.grabon.in/" target="_blank">
								<img src="./assets/images/sponsors/grabon.jpg" className="img-fluid" />
							</a> */}
							{/* <a href="https://www.rosenfeldmedia.com" target="_blank">
								<img src="./assets/images/sponsors/rosenfeld.png" className="img-fluid" />
							</a> */}
							{/* <a href="https://www.flock.com" target="_blank">
								<img src="./assets/images/sponsors/flock.png" className="img-fluid" />
							</a> */}
							{/* <a href="https://www.balsamiq.com" target="_blank">
								<img src="./assets/images/sponsors/balsamiq.png" className="img-fluid" />
							</a> */}
							{/* <a href="https://www.teqip.in" target="_blank">
								<img src="./assets/images/sponsors/teqip-3.png" className="img-fluid" />
							</a> */}
							{/* <a href="https://www.temboo.com" target="_blank">
								<img src="./assets/images/sponsors/temboo.png" className="img-fluid" />
							</a> */}
							{/* <a href="https://blog.venturesity.com/" target="_blank">
								<img src="./assets/images/sponsors/venturesity.png" className="img-fluid" />
							</a> */}
						</div>
					</Container>
				</section>
			// </ScrollableAnchor>
		)
	}
}
