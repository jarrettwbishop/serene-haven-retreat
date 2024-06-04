import { Inter } from "next/font/google";
import "./main.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Serene Haven Retreat",
	description: "Camping Made Easy",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<div className="container">{children}</div>
			</body>
		</html>
	);
}
