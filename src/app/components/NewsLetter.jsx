import React from "react";
import styles from "../page.module.css";

function NewsLetter() {
	return (
		<div className={styles.news_letter}>
			<div className={styles.news_letter_wrapper}>
				<div className={styles.pattern}>
					<img
						src="/images/pattern.png"
						alt="Pattern Image"
						className={styles.pattern_image}
					/>
				</div>
				<div className={styles.news_letter_content}>
					<p className={styles.news_letter_subtitle}>
						subscribe to our newsletter
					</p>
					<h3 className={styles.news_letter_title}>
						Prepare yourself & let’s explore the beauty of the world
					</h3>
					<form>
						<div className={styles.form_wrapper}>
							<div className={styles.input_email}>
								<input
									type="text"
									className={styles.email}
									id="#email"
									placeholder="Your Email"
								/>
								<span className={styles.email_icon}>
									<svg
										width={32}
										height={32}
										viewBox="0 0 32 32"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fillRule="evenodd"
											clipRule="evenodd"
											d="M22.586 4C24.374 4 26.094 4.70667 27.3594 5.97467C28.626 7.24 29.334 8.94667 29.334 10.7333V21.2667C29.334 24.9867 26.3074 28 22.586 28H9.41403C5.69269 28 2.66736 24.9867 2.66736 21.2667V10.7333C2.66736 7.01333 5.67936 4 9.41403 4H22.586ZM24.7074 12.72L24.814 12.6133C25.1327 12.2267 25.1327 11.6667 24.7994 11.28C24.614 11.0813 24.3594 10.96 24.094 10.9333C23.814 10.9187 23.5474 11.0133 23.346 11.2L17.334 16C16.5607 16.6413 15.4527 16.6413 14.6674 16L8.66736 11.2C8.25269 10.8933 7.67936 10.9333 7.33403 11.2933C6.97403 11.6533 6.93403 12.2267 7.23936 12.6267L7.41403 12.8L13.4807 17.5333C14.2274 18.12 15.1327 18.44 16.0807 18.44C17.026 18.44 17.9474 18.12 18.6927 17.5333L24.7074 12.72Z"
											fill="#191825"
											fillOpacity="0.75"
										/>
									</svg>
								</span>
							</div>
							<button
								type="submit"
								className={styles.subscribe_btn}
							>
								Subscribe
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}

export default NewsLetter;
