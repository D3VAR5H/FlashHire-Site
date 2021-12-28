import useWindowDimensions from "../../../utils/custom_hooks/useWindowDimensions";

import BorderedBox from "../../elements/bordered_box/BorderedBox";
import SectionContainer from "../../elements/section_container/SectionContainer";
import styles from "./about.module.scss";

const Companies = [
	{
		name: "Google",
		logo: "google.svg",
	},
	{
		name: "Amazon",
		logo: "amazon.svg",
	},
	{
		name: "Goldman Sachs",
		logo: "goldmanSachs.svg",
	},
	// {
	// 	name: "Smart Insights",
	// 	logo: "smartInsights.svg",
	// },
	{
		name: "Locale AI",
		logo: "localeAI.svg",
	},
	{
		name: "TEKION",
		logo: "tekion.svg",
	},
	{
		name: "Red Hat",
		logo: "redHat.svg",
	},
	// {
	// 	name: "MOZ",
	// 	logo: "moz.svg",
	// },
];

const aboutHiring = [
	{
		text: (
			<>
				Avoid the <span>hassle of writing</span> job descriptions and posting jobs.
			</>
		),
		image: "hiring1.svg",
		imagePosition: "bottom",
	},
	{
		text: (
			<>
				<span>Don’t worry about tracking</span> and analysing the effectiveness of your hiring channels.
			</>
		),
		image: "hiring2.svg",
		imagePosition: "top",
	},
	{
		text: (
			<>
				<span>Don’t get overwhelmed</span> by the influx of applicants. Save time by selecting from pre-screened candidates
			</>
		),
		image: "hiring3.svg",
		imagePosition: "top",
	},
	{
		text: (
			<>
				<span>Save cost</span> on advertising jobs on job portals
			</>
		),
		image: "hiring4.svg",
		imagePosition: "bottom",
	},
];

const About = (props) => {
	const { height, width } = useWindowDimensions();

	return (
		<>
			<div className={styles.about}>
				<SectionContainer
					title={
						<>
							Save significant{" "}
							<span>
								time and
								<br />
								money
							</span>{" "}
							in your hiring cycle
						</>
					}>
					<div className={styles.about_content}>
						<div className="">
							<div className={styles.about_content_tiles}>
								{aboutHiring.map((tile, index) => (
									<BorderedBox key={index} style={{ backgroundColor: "#FFFFFF" }}>
										<div
											className={styles.about_content_tile}
											style={{ flexDirection: tile.imagePosition === "bottom" && width >= 990 && "column-reverse" }}>
											<img src={tile.image} alt={"text Illustration"} className={styles.about_content_tile_image} height={240} width={240} />
											<div className={styles.separator}></div>
											<div className={styles.about_content_tile_text}>{tile.text}</div>
										</div>
									</BorderedBox>
								))}
							</div>
						</div>
					</div>
				</SectionContainer>

				<SectionContainer
					title={
						<>
							Our techies are{" "}
							<span>
								experienced
								<br /> interviewers
							</span>{" "}
							who hail from
						</>
					}>
					<div className={styles.about_content_grid}>
						{Companies.map((company, index) => (
							<div className={styles.about_grid_item} key={index}>
								<img src={company.logo} alt={company.name} />
							</div>
						))}
					</div>
				</SectionContainer>
			</div>
		</>
	);
};

export default About;
