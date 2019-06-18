import React, { Component } from "react";
// import { Timeline, TimelineEvent } from "react-event-timeline";
import TimelineHeader from "../components/TimelineHeader/TimelineHeader";
import TimelineCard from "../components/TimelineCard/TimelineCard";
import designer from "../assets/designer.png";
import fiber from "../assets/fiber.jpg";
import yarn from "../assets/yarn.jpeg";
import fabric from "../assets/fabric.jpeg";
import garment from "../assets/garment.jpg";
import store from "../assets/store.jpeg";

class Inforchain extends Component {
	render() {
		const DesignDetail = <a href="/">Designing Detail</a>;
		const Polyester = <a href="/detail">Polyester</a>;

		return (
			<div
				class="batchTimeline-container"
				// style={{ backgroundColor: "#F4F4F4" }}
			>
				<TimelineHeader />
				<TimelineCard
					cardDate="12:24 | 05/02/2018"
					cardTitle="DESIGNING"
					cardAvatar={designer}
					cardCompany="Zara Female Garment City Group"
					cardPrincipal="Eric P | Senior Designer"
					cardDetail={DesignDetail}
				/>
				<TimelineCard
					cardDate="13:43 | 05/08/2018"
					cardTitle="FIBER PRODUCER"
					cardAvatar={fiber}
					cardCompany="Indian Bando Fiber Company"
					cardPrincipal="Group 9"
					cardDetail={Polyester}
				/>
				<TimelineCard
					cardDate="02:24 | 05/14/2018"
					cardTitle="YARN SPINNER"
					cardAvatar={yarn}
					cardCompany="Bangladesh Yarning"
					cardPrincipal="Factory 6"
					cardDetail="Mule spinning"
				/>
				<TimelineCard
					cardDate="12:24 | 05/17/2018"
					cardTitle="FABRIC PRODUCER"
					cardAvatar={fabric}
					cardCompany="Bangladesh Fabric"
					cardPrincipal="Group 0128"
					cardDetail="Cheviot Fabric"
				/>
				<TimelineCard
					cardDate="12:24 | 05/20/2018"
					cardTitle="GARMENT PRODUCER"
					cardAvatar={garment}
					cardCompany="Bangladesh Garment Fac"
					cardPrincipal="Cutting Group: 0232 Jade"
					cardDetail="Sering Group: 0213 Steven"
				/>
				<TimelineCard
					cardDate="12:24 | 06/02/2018"
					cardTitle="RETAILER"
					cardAvatar={store}
					cardCompany="Zara"
					cardPrincipal="Timesquare Shop"
					cardDetail=""
				/>
			</div>
		);
	}
}

export default Inforchain;
