import React from 'react';
import { Container } from 'reactstrap';

import styles from  '../../styles/Timeline.module.css';

const DatesTimeline = () => (
	<Container>
		<ul className={styles.timeline}>
			<li>
				<div className={styles.directionL}>
					<div className={styles.flagWrapper}>
						<span className={styles.flag}>Registration starts</span>
						<span className={styles.timeWrapper}><span className={styles.time}>To be declared.<sup></sup></span></span>
					</div>
					{/* <div className="desc">Lorem ipsum doler cit ammet</div> */}
				</div>
			</li>

			<li>
				<div className={styles.directionL}>
					<div className={styles.flagWrapper}>
						<span className={styles.flag}>Idea submission</span>
						<span className={styles.timeWrapper}><span className={styles.time}>To be declared.<sup></sup></span></span>
					</div>
					{/* <div className="desc">Lorem ipsum doler cit ammet</div> */}
				</div>
			</li>
			<li>
				<div className={styles.directionL}>
					<div className={styles.flagWrapper}>
						<span className={styles.flag}>Announcement of shorlisted ideas</span>
						<span className={styles.timeWrapper}><span className={styles.time}>To be declared.<sup></sup></span></span>
					</div>
					{/* <div className="desc">Lorem ipsum doler cit ammet</div> */}
				</div>
			</li>
			<li>
				<div className={styles.directionL}>
					<div className={styles.flagWrapper}>
						<span className={styles.flag}>Announcement of extended shortlist</span>
						<span className={styles.timeWrapper}><span className={styles.time}>To be declared.<sup></sup></span></span>
					</div>
					{/* <div className="desc">Lorem ipsum doler cit ammet</div> */}
				</div>
			</li>
			<li>
				<div className={styles.directionL}>
					<div className={styles.flagWrapper}>
						<span className={styles.flag}>Hack begins !</span>
						<span className={styles.timeWrapper}><span className={styles.time}>To be declared.<sup></sup></span></span>
					</div>
					{/* <div className="desc">Lorem ipsum doler cit ammet</div> */}
				</div>
			</li>
		</ul>
	</Container>
);

export default DatesTimeline;
