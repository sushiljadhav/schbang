"use client";
import React from "react";
import styles from "../page.module.css";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { sliderData } from "../utils/sliderData";

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
					<Swiper
						slidesPerView={2.5}
						spaceBetween={21}
						autoplay={true}
						loop={true}
						modules={[Autoplay]}
						className={styles.services_slider}
						centeredSlides={true}
					>
						{sliderData.map((slide) => {
							return (
								<SwiperSlide
									key={slide.id}
									className={styles.services_card}
								>
									<div className={styles.services_icon}>
										<img
											src={`/images/${slide.imageSrc}`}
											alt={slide.title}
											className={styles.services_image}
										/>
									</div>

									<h3 className={styles.card_title}>
										{slide.title}
									</h3>
									<p className={styles.card_subtitle}>
										{slide.subTitle}
									</p>
								</SwiperSlide>
							);
						})}
					</Swiper>
				</div>
			</div>
		</div>
	);
}

export default Services;
