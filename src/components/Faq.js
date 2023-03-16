import React from 'react';
import { Container, Row, Col } from 'reactstrap';
// import ScrollableAnchor from 'react-scrollable-anchor';

import Question from './Question';

// import '../../assets/styles/faq_dropdown.css';

export default class Faq extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			windowHeight: 720
		};
	}

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
			// <ScrollableAnchor id="faq">
				<section className="faq">
					<Container className="my-5">
						<h2 className="section-header">FAQ&rsquo;s</h2>
						{/* <h2 className="section-header">Past Sponsors</h2> */}
						<Row className="align-items-centre">
							<Col md={6}>
								<div className="faq-content">
									<Question id="q1" question="What is hackfest?">
										Hackfest is an event in which numerous tech lovers divided into teams develop a product which is a hardware or software solution to real world problems or industrial problems. Hundreds of programmers get together to build something from scratch, be it a website, an app, or some other product of their imagination.
									</Question>
									<Question id="q2" question="I don&rsquo;t have an idea, what should I do?">
										Don’t worry! We will walk you through how to generate great ideas in the beginning of the HackFest. Together as a team you can work on problem statements of the sponsoring companies.
									</Question>
									<Question id="q3" question="Who can participate?">
										All university students. If you’re someone who is willing to learn and wants to take a shot at changing the world, no matter what your field is, you definitely belong here. However, teams will be shortlisted in the ideation round based on their idea presentation.
									</Question>
									<Question id="q4" question="How do I register for Hackfest?">
										Participants have to register for the hackathon online by clicking at the register button when available on the landing section of this website and following along.
									</Question>
									<Question id="q9" question="Will there be any shortlisting prior to hackathon?">
									    Yes, due to large number of registrations every year, based on your proposal and idea during registration, we will shortlist the standout teams who will further advance to the actual hackathon.
									</Question>
									{/* <Question id="q1" question="What should be the team size and composition?">
										Participants have to register for the hackathon online.
										Teams of 3-5 can take participate in the Hackathon.
									</Question>
                                    <Question id="q2" question="Is there travelling reimbursement?">
										We can’t guarantee reimbursements for everyone, but we don’t want money to keep you from experiencing Hackfest.
										Let us know if you still need help making your way to IIT(ISM) Dhanbad and we’ll see what we can do.
									</Question> */}
								</div>
							</Col>
							<Col md={6}>
								<div className="faq-content">
									<Question id="q5" question="What should be the team size and composition?">
										Participants have to register for the hackathon online. Teams of 3-5  members can participate in the Hackathon.
									</Question>
									<Question id="q6" question="I have never been to a hackathon, what should I do?">
										Thats completely fine! You&rsquo;ll have plenty of opportunities to pick the brains of talented students around you. Furthermore, 36 hours is plenty of time to learn something new.
									</Question>
									<Question id="q7" question="What  technical requirements do I need?">
										You will need a laptop with proper internet connectivity.
									</Question>
									<Question id="q8" question="How much does it cost?">
										Nothing. The event is absolutely free for all the participants. You just need to show up with a great zeal.
									</Question>
									<Question id="q10" question="Which problem statement should work on?">
									All teams will have a primary idea of their own which they submitted in the proposal and they are free to work on them. In addition to this, they can also work on the problem statements given by our sponsors
									</Question>
								</div>
							</Col>
						</Row>
					</Container>
				</section>
			// </ScrollableAnchor>
		);
	}
}
