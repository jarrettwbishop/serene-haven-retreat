import React from "react";
import "./gallery.css";
import PhotoSlider from "./PhotoSlider";

const Gallery = () => {
	return (
		<div className="gallery">
			{/* 
				TODO: REMOVE GALLERY SLIDER AND CREATE STATIC GRID LAYOUT OF PHOTOS
			*/}
			<PhotoSlider className="gallery--slider" />
			<div className="gallery--textbox">
				<h3 className="gallery--textbox-title">
					<span>Discover</span> <br />
					Outdoor Bliss
				</h3>
				<p className="gallery--textbox-description">
					Located in Zoe, Kentucky, Serene Haven Retreat Campground
					has been a favorite destination for families, friends, and
					solo campers since 2006. Our hundreds of pristine acres are
					miles away from the stresses of everyday life, providing a
					natural oasis for you to relax and rejuvenate. Whether you
					want to drink in the views or hit the trail and hike miles
					of well-maintained paths, we've got you covered.
				</p>
			</div>
		</div>
	);
};

export default Gallery;
