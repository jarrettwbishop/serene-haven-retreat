import React from "react";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
	return (
		<div className="testimonials">
			<div className="testimonials--title">
				<h3 className="testimonials--title-title">
					Feedback & Reviews
				</h3>
				<div className="testimonials--title-underline"></div>
				<p className="testimonials--title-description">
					At Serene Haven Retreat Campground, we value the feedback of
					our campers. Take a look at what they have to say about
					their experiences and discover what makes our campground
					stand out.
				</p>
			</div>
			<div className="testimonials--grid">
				<TestimonialCard
					name="Quinn Davis"
					review="My trip to  Serene Haven Retreat Campground was nothing short of amazing. The  beautiful scenery and friendly staff made it an unforgettable  experience."
					className="testimonial-card-one"
				/>
				<TestimonialCard
					name="Quinn Davis"
					review="My trip to  Serene Haven Retreat Campground was nothing short of amazing. The  beautiful scenery and friendly staff made it an unforgettable  experience."
					className="testimonial-card-two"
				/>
				<TestimonialCard
					name="Quinn Davis"
					review="My trip to  Serene Haven Retreat Campground was nothing short of amazing. The  beautiful scenery and friendly staff made it an unforgettable  experience."
					className="testimonial-card-three"
				/>
			</div>
		</div>
	);
};

export default Testimonials;
