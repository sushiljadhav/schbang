import { Nunito_Sans, Inter } from "next/font/google";
import "./globals.css";

const nunitoSans = Nunito_Sans({ subsets: ["latin"] });
// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Travlog",
	description: "Travlog is the app",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`${nunitoSans.className}`}>{children}</body>
		</html>
	);
}
