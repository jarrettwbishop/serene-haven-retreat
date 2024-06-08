import React from "react";
import "./testimonials.css";

const TestimonialCard = (props) => {
	return (
		<div className={`testimonial-card ${props.className}`}>
			<p className="testimonial-card--review">{`"${props.review}"`}</p>
			<h5 className="testimonial-card--person">{`- ${props.name}`}</h5>
		</div>
	);
};

export default TestimonialCard;
