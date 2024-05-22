import React from "react";
import styles from "../page.module.css";

function TravelPoint() {
	return (
		<div className={styles.travel_point}>
			<div className={styles.travel_point_wrapper}>
				<div className={styles.travel_point_left}>
					<div className={styles.travel_point_image}>
						<img
							src="/images/travel-point.png"
							alt="Travel Image"
							className={styles.services_image}
						/>
					</div>
				</div>
				<div className={styles.travel_point_right}>
					<h3 className={styles.travel_point_subtitle}>
						Travel Point
					</h3>
					<p className={styles.travel_point_title}>
						We helping you find your dream location
					</p>
					<p className={styles.travel_point_subText}>
						Contrary to popular belief, Lorem Ipsum is not simply
						random text. It has roots in a piece of classical Latin
						literature from 45 BC.
					</p>
					<div className={styles.travel_point_cardsWrapper}>
						<div className={styles.travel_point_card}>
							<p className={styles.travel_point_number}>500+</p>
							<p className={styles.travel_point_card_title}>
								Holiday Package
							</p>
						</div>
						<div className={styles.travel_point_card}>
							<p className={styles.travel_point_number}>100</p>
							<p className={styles.travel_point_card_title}>
								Luxury Hotel
							</p>
						</div>
						<div className={styles.travel_point_card}>
							<p className={styles.travel_point_number}>7</p>
							<p className={styles.travel_point_card_title}>
								Premium Airlines
							</p>
						</div>
						<div className={styles.travel_point_card}>
							<p className={styles.travel_point_number}>2k+</p>
							<p className={styles.travel_point_card_title}>
								Happy Customer
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default TravelPoint;
