import React from 'react';
// import ScrollableAnchor from 'react-scrollable-anchor';

export default class Glimpse extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			className: this.props.className,
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

	static getDerivedStateFromProps(nextProps, prevState) {
		if (nextProps.className !== prevState.className) {
			return { className: nextProps.className };
		}
		else return null;
	}

	render() {
		return (
			// <ScrollableAnchor id="glimpse">
				<div className={"glimpse " + "glimpse--" + this.props.className}>
					<div className="thumb">
						<img src={"./assets/images/gallery/" + this.props.img} className="img-fluid" />
					</div>
					<div className="progress-bar"></div>
				</div>
                // </ScrollableAnchor>
		);
	}
}
