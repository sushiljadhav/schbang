import React from "react";
import styles from "../page.module.css";

function Clients() {
	return (
		<div className={styles.clients}>
			<div className={styles.client_wrapper}>
				<div className={styles.client_list}>
					<div className={styles.client_images_list}>
						<img
							src="/images/tripadvisor.png"
							alt="Client Image"
							className={styles.client_images}
						/>
					</div>
					<div className={styles.client_images_list}>
						<img
							src="/images/expedia.png"
							alt="Client Image"
							className={styles.client_images}
						/>
					</div>
					<div className={styles.client_images_list}>
						<img
							src="/images/booking-client.png"
							alt="Client Image"
							className={styles.client_images}
						/>
					</div>
					<div className={styles.client_images_list}>
						<img
							src="/images/airbnb.png"
							alt="Client Image"
							className={styles.client_images}
						/>
					</div>
					<div className={styles.client_images_list}>
						<img
							src="/images/bitz.png"
							alt="Client Image"
							className={styles.client_images}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Clients;
