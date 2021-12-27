import SectionContainer from "../../elements/section_container/SectionContainer";
import StepCarousel from "../../elements/step_carousel/StepCarousel";
import styles from "./process.module.scss";

const carouselData = [
	{
		icon: "processIcon1.svg",
		title: "Sign Up",
		content: {
			description:
				"We reach out to you in 24 hours to learn about your vision and assist you in ascertaining the techie mix you need to build your product.",
			image: "process1.svg",
			link: "",
		},
	},
	{
		icon: "processIcon2.svg",
		title: "Get Vetted Engineers And Designers",
		content: {
			description:
				"We curate and provide a list of pre-screened candidates who have proven their mettle through their portfolio and not just what they write in their resume.",
			image: "process2.svg",
			link: "",
		},
	},
	{
		icon: "processIcon3.svg",
		title: "Hire in a flash",
		content: {
			description: (
				<>
					Candidates that are ready to interview, reply in 72 hours.
					<br />
					We set up interviews → Get you the right fit within 2 weeks.
				</>
			),
			image: "process3.svg",
			link: "",
		},
	},
	{
		icon: "processIcon4.svg",
		title: "Assisted Scheduling of Interviews",
		content: {
			description:
				"Sit back and tell us what’s a convenient schedule for you. We manage the rest and ensure you secure a connection with the candidate.",
			image: "process4.svg",
			link: "",
		},
	},
	{
		icon: "processIcon5.svg",
		title: "Pay only if you hire",
		content: {
			description: "We charge flat 8.33% of the CTC, with a 3 month candidate-replacement guarantee. ",
			image: "process5.svg",
			link: "",
		},
	},
];

const Process = (props) => {
	return (
		<>
			<div className={styles.process}>
				<SectionContainer
					title={
						<>
							We make
							<br />
							<span>sourcing hassle free </span>for you
							<div className={styles.background_vector}><img src="flashBig.svg"/></div>
						</>
					}
					subtitle={
						<>
							Great engineers are hard to find; even harder when you’re <br /> working to a tight timeline.
						</>
					}>
					<StepCarousel data={carouselData} />
				</SectionContainer>
			</div>
		</>
	);
};

export default Process;
