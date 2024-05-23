"use client";
import React, { useState, useEffect, useRef } from "react";
import styles from "../page.module.css";

function Header() {
	const [isOpen, setIsOpen] = useState(false);
	const menuRef = useRef(null);

	const navClick = (e) => {
		e.preventDefault();
		isOpen ? setIsOpen(false) : setIsOpen(true);
	};

	const handleClickOutside = (event) => {
		if (menuRef.current && !menuRef.current.contains(event.target)) {
			setIsOpen(false);
		}
	};

	useEffect(() => {
		if (isOpen) {
			document.body.classList.add(styles.body_open);
			document.addEventListener("click", handleClickOutside);
		} else {
			document.body.classList.remove(styles.body_open);
			document.removeEventListener("click", handleClickOutside);
		}

		// Cleanup function to remove the class when the component unmounts
		return () => {
			document.body.classList.remove(styles.body_open);
			document.removeEventListener("click", handleClickOutside);
		};
	}, [isOpen]);

	return (
		<header className={styles.header}>
			<div className={styles.wrapper}>
				<div className={styles.nav}>
					<div className={styles.nav_left}>
						<div className={styles.logo}>
							<span className={styles.logo_svg}>
								<img
									src="/images/logo.png"
									alt="logo"
									className={styles.logo_image}
								/>
							</span>
						</div>
					</div>
					<div
						ref={menuRef}
						className={`${styles.nav_right}  ${
							isOpen ? styles.navOpen : ""
						}`}
					>
						<ul className={styles.menu}>
							<li className={styles.menu_list}>
								<a
									href="#"
									className={`${styles.menu_link} ${styles.active}`}
								>
									Home
								</a>
							</li>
							<li className={styles.menu_list}>
								<a href="#" className={styles.menu_link}>
									Discover
								</a>
							</li>
							<li className={styles.menu_list}>
								<a href="#" className={styles.menu_link}>
									Special Deals
								</a>
							</li>
							<li className={styles.menu_list}>
								<a href="#" className={styles.menu_link}>
									Contact
								</a>
							</li>
						</ul>
						<div className={styles.account_content}>
							<div className={styles.account_divider}>
								<div
									className={`${styles.login_buttons} ${styles.account_links}`}
								>
									<a
										href="#"
										className={styles.login_btn_link}
									>
										Log In
									</a>
								</div>
								<div className={`${styles.signUp_buttons}`}>
									<a
										href="#"
										className={styles.signUp_btn_link}
									>
										Sign Up
									</a>
								</div>
							</div>
						</div>
					</div>
					<div
						className={`${styles.hamburger_menu} ${
							isOpen ? styles.open : ""
						}`}
						onClick={navClick}
					>
						<div className={styles.hamburger_menu_icon}>
							<span
								className={`${styles.ham_first} ${styles.ham_lines}`}
							></span>
							<span
								className={`${styles.ham_second} ${styles.ham_lines}`}
							></span>
							<span
								className={`${styles.ham_third} ${styles.ham_lines}`}
							></span>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
}

export default Header;
