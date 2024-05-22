import styles from "./page.module.css";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Clients from "./components/Clients";
import Services from "./components/Services";
import TravelPoint from "./components/TravelPoint";
import NewsLetter from "./components/NewsLetter";
import Footer from "./components/Footer";

export default function Home() {
	return (
		<>
			<Header />
			<main className={styles.main}>
				<Banner />
				<Clients />
				<Services />
				<TravelPoint />
				<NewsLetter />
			</main>
			<Footer />
		</>
	);
}
