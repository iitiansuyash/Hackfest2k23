import React from 'react';

import styles from '../../styles/Timeline2.module.css';

const DatesTimeline = () => (
	<div>
		<ul className={styles.timeline}>
			<li>
				<div className={styles.directionL}>
				<div className={styles.flagWrapper}>
					<span className={styles.hexa}></span>
					<span className={styles.flag}>Registration starts</span>
					<span className={styles.timeWrapper}><span className={styles.time}>15 April, 2021<sup></sup></span></span>
				</div>
				</div>
			</li>
			<li>
				<div className={styles.directionL}>
				<div className={styles.flagWrapper}>
					<span className={styles.hexa}></span>
					<span className={styles.flag}>Idea submission</span>
					<span className={styles.timeWrapper}><span className={styles.time}>16 April, 2021<sup></sup></span></span>
				</div>
				</div>
			</li>
			<li>
				<div className={styles.directionL}>
				<div className={styles.flagWrapper}>
					<span className={styles.hexa}></span>
					<span className={styles.flag}>Registration Ends</span>
					<span className={styles.timeWrapper}><span className={styles.time}>29 April, 2021<sup></sup></span></span>
				</div>
				</div>
			</li>
			<li>
				<div className={styles.directionL}>
				<div className={styles.flagWrapper}>
					<span className={styles.hexa}></span>
					<span className={styles.flag}>Workshops: Day 1</span>
					<span className={styles.timeWrapper}><span className={styles.time}>28 April, 2021</span></span>
				</div>
				</div>
			</li>
			<li>
				<div className={styles.directionL}>
				<div className={styles.flagWrapper}>
					<span className={styles.hexa}></span>
					<span className={styles.flag}>Workshops: Day 2</span>
					<span className={styles.timeWrapper}><span className={styles.time}>29 April, 2021</span></span>
				</div>
				</div>
			</li>
			<li>
				<div className={styles.directionL}>
				<div className={styles.flagWrapper}>
					<span className={styles.hexa}></span>
					<span className={styles.flag}>Workshops: Day 3</span>
					<span className={styles.timeWrapper}><span className={styles.time}>30 April, 2021</span></span>
				</div>
				</div>
			</li>
			<li>
				<div className={styles.directionL}>
				<div className={styles.flagWrapper}>
					<span className={styles.hexa}></span>
					<span className={styles.flag}>Announcement of shorlisted ideas</span>
					<span className={styles.timeWrapper}><span className={styles.time}>30 April, 2021<sup></sup></span></span>
				</div>
				</div>
			</li>
			{/* <li>
				<div className={styles.directionL}>
				<div className={styles.flagWrapper}>
					<span className={styles.hexa}></span>
					<span className={styles.flag}>Announcement of extended shortlist</span>
					<span className={styles.timeWrapper}><span className={styles.time}>1 May<sup></sup></span></span>
				</div>
				</div>
			</li> */}
			<li>
				<div className={styles.directionL}>
				<div className={styles.flagWrapper}>
					<span className={styles.hexa}></span>
					<span className={styles.flag}>Hack begins!</span>
					<span className={styles.timeWrapper}><span className={styles.time}>1 May, 2021<sup></sup></span></span>
				</div>
				</div>
			</li>
		</ul>
	</div>
);

export default DatesTimeline;
