import React from "react";
import styles from "../page.module.css";

function Services() {
	return (
		<div className={styles.services}>
			<div className={styles.service_wrapper}>
				<div className={styles.services_left}>
					<p className={styles.services_subtitle}>Services</p>
					<h2 className={styles.services_title}>
						Our top value categories for you
					</h2>
				</div>
				<div className={styles.services_right}>
					<div className={styles.services_slider}>
						<div
							className={`${styles.services_card} ${styles.services_card_active}`}
						>
							<div className={styles.services_icon}>
								<img
									src="/images/destination.png"
									alt="Services Image"
									className={styles.services_image}
								/>
							</div>

							<h3 className={styles.card_title}>
								Best Tour Guide
							</h3>
							<p className={styles.card_subtitle}>
								What looked like a small patch of purple grass,
								above five feet.
							</p>
						</div>
						<div className={styles.services_card}>
							<div className={styles.services_icon}>
								<img
									src="/images/booking.png"
									alt="Services Image"
									className={styles.services_image}
								/>
							</div>
							<h3 className={styles.card_title}>Easy Booking</h3>
							<p className={styles.card_subtitle}>
								Square, was moving across the sand in their
								direction.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Services;
