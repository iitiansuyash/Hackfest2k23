import React from 'react';

import TimelineTrack from './TimelineTrack';
import TimelineTrackItem from './TimelineTrackItem';
import HourLabel from './HourLabel';

// import '../../assets/styles/schedule.css';

const GeneratedHourLabels = () => {
	let columns = [];
	let start = 9;
	let suffix = 'PM';
	for(let i=1;i<52;i++){
		let time = (start++)%12;
		if(time == 0){
			time = 12;
			suffix = suffix=='AM' ? 'PM' : 'AM';
		}
		columns.push(<HourLabel left={(i-1)*80+'px'} time={time+suffix} />);
	}
	return columns;
}

const width = 51*80;

export default class Timeline extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			activeDay: 1
		};
	}

	timeline = React.createRef();

	componentDidMount(){
		const node = this.timeline.current;
		node.addEventListener("scroll", this.updateActiveDay);
	}

	updateActiveDay = () => {
		const node = this.timeline.current;
		let day = 1;
		if(node.scrollLeft >= 32*80)
			day = 3;
		else if(node.scrollLeft >= 8*80)
			day = 2;
		this.setState({ activeDay: day });
	}

	componentWillUnmount(){
		const node = this.timeline.current;
		node.removeEventListener("scroll", this.updateActiveDay);
	}

	handleDaySwitch = (day) => {
		const node = this.timeline.current;
		if(day == 1)
			node.scrollLeft = 0;
		else if(day == 2)
			node.scrollLeft = 8*80;
		else if(day == 3)
			node.scrollLeft = 32*80;
	}

	render(){
		return(
			<div className="schedule__container">
				<div className="schedule__days">
					<button className={"day-switch " + (this.state.activeDay == 1 ? 'active' : '')} onClick={() => { this.handleDaySwitch(1); }}>Day 1</button>
					<button className={"day-switch " + (this.state.activeDay == 2 ? 'active' : '')} onClick={() => { this.handleDaySwitch(2); }}>Day 2</button>
					<button className={"day-switch " + (this.state.activeDay == 3 ? 'active' : '')} onClick={() => { this.handleDaySwitch(3); }}>Day 3</button>
				</div>
				<div className="schedule__timeline" ref={this.timeline}>
					<TimelineTrack width={width+'px'}>
						<TimelineTrackItem event_name="Hack Begins!" left={3*80+'px'} width={36*80+'px'} color="rgb(136,194,229)" openModal={this.props.openModal} changeModalContent={this.props.changeModalContent} />
					</TimelineTrack>

					<TimelineTrack width={width+'px'}>
						<TimelineTrackItem event_name="Team Registration" img="" left={0+'px'} width={80+'px'} color="rgb(136,194,229)" openModal={this.props.openModal} changeModalContent={this.props.changeModalContent} />
						{/* <TimelineTrackItem event_name="Introduction" left={60+'px'} width={60+'px'} color="rgb(136,194,229)" openModal={this.props.openModal} changeModalContent={this.props.changeModalContent} />
						<TimelineTrackItem event_name="Problem Statement Release" left={2*60+'px'} width={60+'px'} color="rgb(136,194,229)" openModal={this.props.openModal} changeModalContent={this.props.changeModalContent} /> */}
						<TimelineTrackItem event_name="Tech Talk by Prateek Narang" img="https://media-exp1.licdn.com/dms/image/C4E03AQHvVyHH6lIsyg/profile-displayphoto-shrink_400_400/0/1606127585881?e=1623888000&v=beta&t=N6tnyg6wI7BootGEqe-49_fFMdIZi4Il_BxMYSe_pjk" left={15*80+'px'} width={80+'px'} color="rgb(136,194,229)" openModal={this.props.openModal} changeModalContent={this.props.changeModalContent} />
						<TimelineTrackItem event_name="Tech Talk by Gaurav Kumar" img="https://media-exp1.licdn.com/dms/image/C4D03AQEZHLCCp2KT_g/profile-displayphoto-shrink_400_400/0/1614843321661?e=1623888000&v=beta&t=8Yx3iR0SDd12MGMoHWt8PnOw5oRgufL2VtouGFSXt00" left={37*80+'px'} width={80+'px'} color="rgb(136,194,229)" openModal={this.props.openModal} changeModalContent={this.props.changeModalContent} />
						<TimelineTrackItem event_name="Tech Talk by Aravind Gopal" img="./assets/images/techtalk/aravindgopal.jpeg" alt="Aravind Gopal Mallapureddy" left={23*80+'px'} width={40+'px'} color="rgb(136,194,229)" openModal={this.props.openModal} changeModalContent={this.props.changeModalContent} />
						<TimelineTrackItem event_name="Ula Tech Talk by Alan Wong" img="https://media-exp1.licdn.com/dms/image/C5603AQHQTPIWcEW0tA/profile-displayphoto-shrink_400_400/0/1597411240894?e=1625097600&v=beta&t=-M3M6fvFd9rDqn-lHgDd-Sk0QvuqbQDN0Ybbyj6eaYM" alt="Ula Tech Talk" left={21*80+'px'} width={80+'px'} color="rgb(136,194,229)" openModal={this.props.openModal} changeModalContent={this.props.changeModalContent} />
						{/* <TimelineTrackItem event_name="Final Presentation" left={47*80+'px'} width={2*80+'px'} color="rgb(136,194,229)" openModal={this.props.openModal} changeModalContent={this.props.changeModalContent} />
						<TimelineTrackItem event_name="Announcement of Result & Prize distribution" left={49*80+40+'px'} width={40+'px'} color="rgb(136,194,229)" openModal={this.props.openModal} changeModalContent={this.props.changeModalContent} /> */}
					</TimelineTrack>

					<TimelineTrack width={width+'px'}>
						<TimelineTrackItem event_name="Introduction and Welcome" img="" left={80+'px'} width={80+'px'} color="rgb(113,204,127)" openModal={this.props.openModal} changeModalContent={this.props.changeModalContent} />
						<TimelineTrackItem event_name="Tech Talk by Aman Dhattarwal" img="https://media-exp1.licdn.com/dms/image/C4E03AQFAoY-MSYJsCA/profile-displayphoto-shrink_400_400/0/1600154260690?e=1623888000&v=beta&t=wIFYc5VeJmERBIpeEhq0txPaOK4NmBVVmXBsfv4Ey5M" left={25*80+'px'} width={80+'px'} color="rgb(136,194,229)" openModal={this.props.openModal} changeModalContent={this.props.changeModalContent} />
						<TimelineTrackItem event_name="Tech Talk by Sandeep Jain" img="https://media-exp1.licdn.com/dms/image/C4D03AQGGB6CT6NqFzQ/profile-displayphoto-shrink_400_400/0/1618725077016?e=1624492800&v=beta&t=QP_C0SzMHPPKQdCbAR9_WMERW0Vt_YeNbHzdovZm5Oo" left={17*80+'px'} width={80+'px'} color="rgb(113,204,127)" openModal={this.props.openModal} changeModalContent={this.props.changeModalContent} />
						{/* <TimelineTrackItem event_name="Tech Talk by Anubhav Dubey" img="https://media-exp1.licdn.com/dms/image/C5603AQFIwoAix9V8Ag/profile-displayphoto-shrink_400_400/0/1529929223211?e=1623888000&v=beta&t=_k3MAfbx5kXKqFcy5ePV1WvKhenvb-VIwTSwTUfMUJE" left={21*80+'px'} width={80+'px'} color="rgb(113,204,127)" openModal={this.props.openModal} changeModalContent={this.props.changeModalContent} /> */}
						<TimelineTrackItem event_name="Results Announcement" img="" left={44*80+'px'} width={80+'px'} color="rgb(113,204,127)" openModal={this.props.openModal} changeModalContent={this.props.changeModalContent} />
						{/* <TimelineTrackItem event_name="Tech Talk 1 (Gold Sponsor)" left={19*80+40+'px'} width={40+'px'} color="rgb(113,204,127)" openModal={this.props.openModal} changeModalContent={this.props.changeModalContent} />
						<TimelineTrackItem event_name="Tech Talk 2 (Title Sponsor)" left={27*80+'px'} width={80+'px'} color="rgb(113,204,127)" openModal={this.props.openModal} changeModalContent={this.props.changeModalContent} />
						<TimelineTrackItem event_name="Creative Event" left={32*80+40+'px'} width={40+'px'} color="rgb(113,204,127)" openModal={this.props.openModal} changeModalContent={this.props.changeModalContent} />
						<TimelineTrackItem event_name="Tech Talk 3 (Platinum Sponsor)" left={44*80+20+'px'} width={60+'px'} color="rgb(113,204,127)" openModal={this.props.openModal} changeModalContent={this.props.changeModalContent} /> */}
					</TimelineTrack>

					<TimelineTrack width={width+'px'}>
						<TimelineTrackItem event_name="Problem Statement Release" img="" left={2*85+'px'} width={80+'px'} color="#EF2F3C" openModal={this.props.openModal} changeModalContent={this.props.changeModalContent} />
						<TimelineTrackItem event_name="Tech Talk by Ankush Singla" img="https://media-exp1.licdn.com/dms/image/C4E03AQH92gP_R_a4yw/profile-displayphoto-shrink_400_400/0/1516346163138?e=1623888000&v=beta&t=VWdYTgk_RMj67XFC4qFdN9dfTeHrorCTyWZMu_dyJBg" left={19*80+'px'} width={80+'px'} color="#EF2F3C" openModal={this.props.openModal} changeModalContent={this.props.changeModalContent} />
						<TimelineTrackItem event_name="Coding Contest by Coding Ninjas" left={26*80+'px'} width={2*80+'px'} color="rgb(113,204,127)" openModal={this.props.openModal} changeModalContent={this.props.changeModalContent} />
						<TimelineTrackItem event_name="Tech Talk by Anubhav Dubey" img="https://media-exp1.licdn.com/dms/image/C5603AQFIwoAix9V8Ag/profile-displayphoto-shrink_400_400/0/1529929223211?e=1623888000&v=beta&t=_k3MAfbx5kXKqFcy5ePV1WvKhenvb-VIwTSwTUfMUJE" left={24*80+'px'} width={80+'px'} color="rgb(113,204,127)" openModal={this.props.openModal} changeModalContent={this.props.changeModalContent} />
						<TimelineTrackItem event_name="Final Presentation" img="" left={39*80+'px'} width={4*80+'px'} color="#EF2F3C" openModal={this.props.openModal} changeModalContent={this.props.changeModalContent} />
						{/* <TimelineTrackItem event_name="Breakfast" left={15*80+'px'} width={80+40+'px'} color="#EF2F3C" openModal={this.props.openModal} changeModalContent={this.props.changeModalContent} />
						<TimelineTrackItem event_name="Lunch" left={20*80+40+'px'} width={2*80+'px'} color="#EF2F3C" openModal={this.props.openModal} changeModalContent={this.props.changeModalContent} />
						<TimelineTrackItem event_name="Dinner" left={28*80+'px'} width={80+40+'px'} color="#EF2F3C" openModal={this.props.openModal} changeModalContent={this.props.changeModalContent} />
						<TimelineTrackItem event_name="Snacks" left={36*80+'px'} width={80+'px'} color="#EF2F3C" openModal={this.props.openModal} changeModalContent={this.props.changeModalContent} />
						<TimelineTrackItem event_name="Breakfast" left={39*80+'px'} width={80+40+'px'} color="#EF2F3C" openModal={this.props.openModal} changeModalContent={this.props.changeModalContent} />
						<TimelineTrackItem event_name="Lunch" left={45*80+'px'} width={80+40+'px'} color="#EF2F3C" openModal={this.props.openModal} changeModalContent={this.props.changeModalContent} /> */}
					</TimelineTrack>

					<TimelineTrack width={width+'px'}>
						<GeneratedHourLabels />
					</TimelineTrack>
				</div>
			</div>
		);
	}
}
