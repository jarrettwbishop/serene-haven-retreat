import React from "react";
import galleryPhotoOne from "../../../public/assets/gallery-photos/shr-1.jpg";
import Image from "next/image";

const PhotoSlider = () => {
	return (
		<div
			className="photo-slider"
			style={{
				display: "flex",
				overflow: "hidden",
				gap: "3rem",
			}}
		>
			<Image
				src={galleryPhotoOne}
				height={800}
				style={{ borderRadius: "2.3rem" }}
			/>
			<Image
				src={galleryPhotoOne}
				height={800}
				style={{ borderRadius: "2.3rem" }}
			/>
		</div>
	);
};

export default PhotoSlider;
