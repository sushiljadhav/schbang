import React from "react";
import styles from "../page.module.css";

function Clients() {
	return (
		<div className={styles.clients}>
			<div className={styles.client_wrapper}>
				<ul className={styles.client_list}>
					<li className={styles.client_images_list}>
						<img
							src="/images/tripadvisor.png"
							alt="Client Image"
							className={styles.client_images}
						/>
					</li>
					<li className={styles.client_images_list}>
						<img
							src="/images/expedia.png"
							alt="Client Image"
							className={styles.client_images}
						/>
					</li>
					<li className={styles.client_images_list}>
						<img
							src="/images/booking-client.png"
							alt="Client Image"
							className={styles.client_images}
						/>
					</li>
					<li className={styles.client_images_list}>
						<img
							src="/images/airbnb.png"
							alt="Client Image"
							className={styles.client_images}
						/>
					</li>
					<li className={styles.client_images_list}>
						<img
							src="/images/bitz.png"
							alt="Client Image"
							className={styles.client_images}
						/>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default Clients;
