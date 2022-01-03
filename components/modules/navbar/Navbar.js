import { useState } from "react";
import ActionBtn from "../../elements/action_button/ActionBtn";
import SectionContainer from "../../elements/section_container/SectionContainer";

import styles from "./navbar.module.scss";

const NavbarMenuList = [
	{
		name: "How it works?",
		link: "/#process",
	},
	{
		name: "Benefits",
		link: "/#about",
	},
];

const Navbar = () => {
	const [isActive, setIsActive] = useState(false);
	return (
		<>
			<nav className={styles.navbar}>
				<SectionContainer>
					<div className={styles.navbar__logo}>
						<img src="logo.svg" /> &ensp; Flash Hire
					</div>
					<div className={`${styles.navbar__menu} ${isActive && styles.active}`}>
						<ul className={styles.navbar__menu_list}>
							{NavbarMenuList.map((item, index) => {
								return (
									<li className={styles.navbar__menu_list_item} key={index}>
										<a href={item.link} className={styles.navbar__menu_link} onClick={() => setIsActive(false)}>
											{item.name}
										</a>
									</li>
								);
							})}
						</ul>
						{/* <ActionBtn>Start Hiring</ActionBtn> */}
						<div className={styles.hamburgerWrapper} onClick={() => setIsActive((isActive) => !isActive)}>
							<span className={styles.hamburger}></span>
						</div>
					</div>
				</SectionContainer>
			</nav>
		</>
	);
};

export default Navbar;
