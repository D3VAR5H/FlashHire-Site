import { useEffect, useState } from "react";
import TextTransition, { presets } from "react-text-transition";

import SectionContainer from "../../elements/section_container/SectionContainer";
import ActionBtn from "../../elements/action_button/ActionBtn";
import styles from "./hero.module.scss";

const positions = ["engineers", "designers"];

const Hero = () => {
	const [index, setIndex] = useState(0);

	useEffect(() => {
		const intervalId = setInterval(
			() => setIndex((index) => index + 1),
			3000 // every 3 seconds
		);
		return () => clearTimeout(intervalId);
	}, []);

	return (
		<>
			<div className={styles.hero}>
				<SectionContainer style={{ height: "100%", alignItems: "inherit", justifyContents: "center" }}>
					<div className={styles.hero_content}>
						<div>
							<div className={styles.hero_heading}>
								Hire vetted{" "}
								<TextTransition
									className={styles.animated_text}
									inline={true}
									text={`${positions[index % positions.length]}`}
									springConfig={presets.slow}
									style={{ marginRight: 12 }}
								/><br/>
								from India, available <br />
								and ready to build <br />
								your product
							</div>
							<ActionBtn>Start Hiring</ActionBtn>
						</div>
					</div>
					<div className={styles.hero_image}>
						<img src="hero.svg" />
					</div>
				</SectionContainer>
			</div>
			<div className={styles.shapeDividerWrapper}>
				<img src="heroShapeDivider.svg" />
			</div>
		</>
	);
};

export default Hero;
