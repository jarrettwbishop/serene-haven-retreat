import Image from "next/image";
import Navbar from "../components/navbar/Navbar.jsx";
import Hero from "../components/hero/Hero.jsx";
import Gallery from "@/components/gallery/Gallery.jsx";
import Amenities from "@/components/amenities/Amenities.jsx";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

export default function Home() {
	return (
		<>
			<Navbar />
			<Hero />
			<Gallery />
			<Amenities />
		</>
	);
}
