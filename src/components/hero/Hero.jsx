import React from "react";
import "./hero.css";
import Image from "next/image";
import heroImage from "../../../public/assets/hero-bg-halfed.svg";

const Hero = () => {
	return (
		<div className="hero">
			<div className="hero--cta">
				<div className="hero--cta-title">
					<h2>Camping</h2>
					<h2>
						Made <span>Easy</span>
					</h2>
				</div>
				<p>
					Experience the beauty of nature at Serene Haven Retreat
					Campground. Our primitive camping near the Red River Gorge
					and Daniel Boone Forest ensures a serene and inviting
					atmosphere.
				</p>
				<button>Book an Experience</button>
			</div>
			<div className="hero--graphic">
				<Image src={heroImage} className="graphic-image" />
				<div className="graphic-text">
					<div className="graphic-text-top">
						<h4>Destination</h4>
						<p>
							Serene Haven <br></br>Retreat
						</p>
					</div>
					<div className="graphic-text-bottom">
						<h4>Elevation</h4>
						<p>1145 ft</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
