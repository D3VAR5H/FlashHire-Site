import ActionBtn from "../../elements/action_button/ActionBtn";
import SectionContainer from "../../elements/section_container/SectionContainer";

import styles from "./navbar.module.scss";

const NavbarMenuList = [
	{
		name: "Process",
		link: "/process",
	},
	{
		name: "About Us",
		link: "/about",
	},
];

const Navbar = () => {
	return (
		<>
			<nav className={styles.navbar}>
				<SectionContainer>
					<div className={styles.navbar__logo}>
						<img src="logo.svg" /> &ensp;
						Flash Hire
					</div>
					<div className={styles.navbar__menu}>
						<ul className={styles.navbar__menu_list}>
							{NavbarMenuList.map((item, index) => {
								return (
									<li className={styles.navbar__menu_list_item} key={index}>
										{/* <a href={item.link} className={styles.navbar__menu_link}> */}
											{item.name}
										{/* </a> */}
									</li>
								);
							})}
						</ul>
					</div>
					{/* <div className={styles.navbar__actionBtn}>
						<a href="#" className={styles.navbar__actionBtn_link}>
							<span className={styles.navbar__actionBtn_text}>Start Hiring</span>
						</a>
					</div> */}
					<ActionBtn>Start Hiring</ActionBtn>
				</SectionContainer>
			</nav>
		</>
	);
};

export default Navbar;
