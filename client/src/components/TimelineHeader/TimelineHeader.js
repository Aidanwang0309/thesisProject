import React from "react";
import "./TimelineHeader.scss";
import avatar from "../../assets/avatar.png";

const TimelineHeader = () => {
	return (
		<section className="timeline-header">
			<div className="timeline-header-avatar">
				<img src={avatar} />
			</div>
			<div className="timeline-header-info">
				<p>
					<b>Batch ID</b> : 0X9883647
				</p>
				<p>
					<b>Batch Date</b> 03/03/18
				</p>
				<p>
					<b>Brand</b>: Zara
				</p>
			</div>
		</section>
	);
};
export default TimelineHeader;
