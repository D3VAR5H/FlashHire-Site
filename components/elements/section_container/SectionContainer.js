import styles from "./sectionContainer.module.scss";

const SectionContainer = ({ style, ...props }) => {
	return (
		<div className={styles.container}>
			{props.title && (
				<div className={styles.section_heading}>
					<h2>{props.title}</h2>
					{props.subtitle && <div className={styles.subtitle}>{props.subtitle}</div>}
				</div>
			)}
			<div style={style} className={styles.section_body}>
				{props.children}
			</div>
		</div>
	);
};

export default SectionContainer;
