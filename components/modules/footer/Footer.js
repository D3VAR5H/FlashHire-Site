import { FiLinkedin, FiInstagram, FiTwitter, FiYoutube, FiFacebook } from "react-icons/fi";

import SectionContainer from "../../elements/section_container/SectionContainer";
import styles from "./footer.module.scss";

const Footer = () => {
	return (
		<div className={styles.footer}>
			<SectionContainer>
				<div className={styles.footer__details}>
					<div className={styles.footer__details_contacts}>
						<div className={styles.footer__details_heading}>CONTACTS</div>
						<div className={styles.footer__details_contacts_content}>mail@flashtech.com</div>
					</div>
					<div className={styles.footer__details_socials}>
						<div className={styles.footer__details_heading}>FOLLOW</div>
						<div className={styles.footer__details_socials_content}>
							<FiInstagram />
							<FiTwitter />
							<FiLinkedin />
							<FiYoutube />
							<FiFacebook />
						</div>
					</div>
					<div className={styles.footer__details_copyright}>
						<p className={styles.footer__details_copyright_subtitle}>
							It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point
							of using Lorem Ipsum.
						</p>
						<p className={styles.footer__details_copyright_heading}>Flash Tech 2021</p>
					</div>
				</div>
				<div className={styles.footer__contact}>
					<div className={styles.footer__details_contact}>
						<div className={styles.footer__details_contact_heading}>REACH OUT TO US</div>
						<div className={styles.footer__details_contact_content}>Collaboration with Flash Hire? </div>
					</div>
					<div className={styles.footer__contact_form}>
						<form action="https://getform.io/f/650d5af1-1e79-4f7c-b50e-d050c500baa1" method="POST">
							<div className={styles.footer__contact_form_group}>
								<div className={styles.footer__contact_form_input}>
									<label htmlFor="name">Name</label>
									<input type="text" name="name" placeholder="John Doe" />
								</div>
								<div className={styles.footer__contact_form_input}>
									<label htmlFor="email">Email</label>
									<input type="text" name="email" placeholder="johndoe@gmail.com" />
								</div>
							</div>
							<div className={styles.footer__contact_form_group}>
								<div className={styles.footer__contact_form_input}>
									<label htmlFor="companyName">Company Name</label>
									<input type="text" name="companyName" placeholder="FlashTech" />
								</div>
								<div className={styles.footer__contact_form_input}>
									<label htmlFor="phone">Phone Number</label>
									<input type="text" name="phone" placeholder="+91-9999999999" />
								</div>
							</div>
							<div className={styles.footer__contact_form_input}>
								<label htmlFor="message">Project Details</label>
								<textarea name="message" placeholder="Description..." />
							</div>
							<button type="submit" className={styles.footer__contact_form_button}>
								Send
							</button>
						</form>
					</div>
				</div>
			</SectionContainer>
		</div>
	);
};

export default Footer;
