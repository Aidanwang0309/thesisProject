import React from "react";
import "./TimelineCard.scss";

const TimelineCard = props => {
	const {
		cardDate,
		cardAvatar,
		cardTitle,
		cardCompany,
		cardPrincipal,
		cardDetail
	} = props;

	return (
		<div className="timeline-card">
			<div className="timeline-timestamp">
				<div className="timeline-timestamp-time">
					<div className="timeline-timestamp-dot" />
					<p> {cardDate} </p>
				</div>
			</div>
			<div className="timeline-card-content-container">
				<div className="timeline-card-content">
					<div className="timeline-card-content-avatar">
						<img src={cardAvatar} alt="img" />
					</div>
					<div className="timeline-card-content-info">
						<p>
							<b> {cardTitle} </b>
						</p>
						<p>{cardCompany}</p>
						<p>{cardPrincipal}</p>
						<p>{cardDetail}</p>
					</div>
				</div>
			</div>
		</div>
	);
};
export default TimelineCard;
