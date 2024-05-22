import styles from "./page.module.css";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Clients from "./components/Clients";
import Services from "./components/Services";
import TravelPoint from "./components/TravelPoint";

export default function Home() {
	return (
		<>
			<Header></Header>
			<main className={styles.main}>
				<Banner></Banner>
				<Clients></Clients>
				<Services></Services>
				<TravelPoint></TravelPoint>
			</main>
		</>
	);
}
