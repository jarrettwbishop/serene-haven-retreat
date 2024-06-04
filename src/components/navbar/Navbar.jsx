import React from "react";
import "./navbar.css";
import Link from "next/link";

const Navbar = () => {
	return (
		<nav className="navbar">
			<Link href="/">
				<div className="nav--logo">
					<h2>Serene Haven Retreat</h2>
					<h3>- Campground -</h3>
				</div>
			</Link>
			<ul className="nav-menu">
				<li className="nav-item">Home</li>
				<li className="nav-item">FAQ</li>
				<li className="nav-item">Contact Us</li>
				<li>
					<button>Book Now</button>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
