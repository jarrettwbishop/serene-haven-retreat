import React from "react";
import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
	return (
		<div className="footer">
			<div className="footer--cta">
				<div className="footer--cta-logo">
					<h3>Serene Haven Retreat</h3>
					<h4>- Campground -</h4>
				</div>
				<button className="footer--cta-button">
					Book an Experience
				</button>
			</div>
			<div className="footer--socials">
				<FontAwesomeIcon icon={faFacebook} />
				<FontAwesomeIcon icon={faInstagram} />
			</div>
			<p className="footer--copyright">
				Copyright © 2024 Serene Haven Retreat Campground
			</p>
		</div>
	);
};

export default Footer;
