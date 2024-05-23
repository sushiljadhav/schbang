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
			<div className={styles.atf}>
				<div className={styles.atf_linear}>
					<img
						src="/images/atf-bg.png"
						alt="Client Image"
						className={styles.atf_linear_image}
					/>
				</div>
				<Header />
				<Banner />
			</div>
			<main className={styles.main}>
				<div className={styles.btf_liner}>
					<img
						src="/images/btf-liner.png"
						alt="Client Image"
						className={styles.btf_linear_image}
					/>
				</div>
				<Clients />
				<Services />
				<TravelPoint />
				<NewsLetter />
			</main>
			<Footer />
		</>
	);
}
