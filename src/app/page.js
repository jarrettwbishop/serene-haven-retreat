import Image from "next/image";
import Navbar from "../components/navbar/Navbar.jsx";
import Hero from "../components/hero/Hero.jsx";
import Gallery from "@/components/gallery/Gallery.jsx";

export default function Home() {
	return (
		<>
			<Navbar />
			<Hero />
			<Gallery />
		</>
	);
}
