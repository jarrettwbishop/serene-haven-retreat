import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faToilet,
	faFireBurner,
	faPeopleGroup,
	faBellConcierge,
} from "@fortawesome/free-solid-svg-icons";
import "./amenities.css";

const AmenityCard = (props) => {
	return (
		<div className="amenity-card">
			<FontAwesomeIcon icon={props.icon} className="fa-icon" />
			<h4 className="amenity-card-title">{props.title}</h4>
			<p className="amenity-card-description">{props.description}</p>
		</div>
	);
};

export default AmenityCard;
