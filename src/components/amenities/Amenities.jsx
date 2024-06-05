import React from "react";
import "./amenities.css";
import AmenityCard from "./AmenityCard";
import {
	faToilet,
	faFireBurner,
	faPeopleGroup,
	faBellConcierge,
} from "@fortawesome/free-solid-svg-icons";

const Amenities = () => {
	return (
		<div className="amenities">
			<div className="amenities--title">
				<h3 className="amenities--title-title">Our Amenities</h3>
				<div className="amenities--title-underline"></div>
			</div>
			<div className="amenities-section">
				{/* <Image src="amenitiesBg" /> */}
				<AmenityCard
					icon={faFireBurner}
					title="Grills"
					description="Everything You Need. The  campground offers a range of amenities to enhance your outdoor  experience. "
				/>
				<AmenityCard
					icon={faPeopleGroup}
					title="Common Area"
					description="You will have access to convenient grills where you can  prepare your own delicious meals. "
				/>
				<AmenityCard
					icon={faToilet}
					title="Bathrooms"
					description="Make  use of our clean and easily accessible porta-potties."
				/>
				<AmenityCard
					icon={faBellConcierge}
					title="Service"
					description="Enjoy cozy evenings by our inviting  firepits, relax & dine at our custom-made picnic tables"
				/>
			</div>
		</div>
	);
};

export default Amenities;
