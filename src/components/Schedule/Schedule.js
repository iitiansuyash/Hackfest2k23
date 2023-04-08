import React from 'react';
import { Container, Row, Col } from 'reactstrap';
// import ScrollableAnchor from 'react-scrollable-anchor';
import Rodal from 'rodal';
import WAVES from 'vanta/dist/vanta.waves.min'
import * as THREE from 'three'
import DatesTimeline from './DatesTimeline3';
import Timeline from './Timeline';


export default class Schedule extends React.Component {
	constructor(props) {
		super(props);
		this.vantaRef = React.createRef()
		this.state = {
			windowHeight: 720,
			modalIsOpen: false,
			modalContent: {
				eventName: '',
				eventTime: '',
				image: ''
			}
		};
	}

	componentDidMount() {
		this.updateDimensions();
		window.addEventListener("resize", this.updateDimensions);
		this.vantaEffect = WAVES({
			el: this.vantaRef.current,
			// backgroundColor: 0x101040,
			scale: 1.00,
            scaleMobile: 1.00,
            color: 0x3,
			THREE: window.THREE
		})
	}

	updateDimensions = () => {
		this.setState({ windowHeight: window.innerHeight });
	}

	componentWillUnmount() {
		window.removeEventListener("resize", this.updateDimensions);
		if (this.vantaEffect) this.vantaEffect.destroy()
	}

	openModal = () => {
		this.setState({ modalIsOpen: true });
	}

	closeModal = () => {
		this.setState({ modalIsOpen: false });
	}

	changeModalContent = (eventName, eventTime, image) => {
		this.setState({
			modalContent: {
				eventName,
				eventTime,
				image
			}
		});
	}

	render() {
		return (
			// <ScrollableAnchor >
				<div id="schedule">
					<section className="schedule" ref={this.vantaRef} style={{ minHeight: this.state.windowHeight + 'px' }}>
						<Container>
							<h2 className="section-header">Event Schedule</h2>
							<Row className="align-items-center">
								<Col md={12}>
									<div>
										<DatesTimeline />
									</div>
								</Col>
								{/* calendar view  */}
								{/* <Col md={6}>
								<div className="division">
									<Timeline openModal={this.openModal} changeModalContent={this.changeModalContent} />
								</div>
							</Col> */}
							</Row>
						</Container>

						<Rodal
							visible={this.state.modalIsOpen}
							onClose={this.closeModal}
							closeOnEsc={true}
							animation="slideUp"
						>
							<div className="modal-content__container" style={{ textAlign: 'center' }}>
								{this.state.modalContent.image ?
									<img src={this.state.modalContent.image} className="guest-img" style={{ marginBottom: '20px' }} /> : null
								}
								<h5>{this.state.modalContent.eventName}</h5>
								<h6 style={{ color: 'rgba(0, 0, 0, 0.5)' }}>{this.state.modalContent.eventTime}</h6>
							</div>
						</Rodal>
					</section>
				</div>
			// </ScrollableAnchor>
		);
	}
}
