import { useEffect, useState } from "react";
import styles from "./stepCarousel.module.scss";

const StepCarousel = ({ data }) => {
	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		const intervalId = setInterval(
			() => setCurrentIndex((currentIndex) => (currentIndex + 1) % data.length),
			5000 // every 5 seconds
		);
		return () => clearTimeout(intervalId);
	}, []);

	return (
		<>
			<div className={styles.step_carousel}>
				<div className={styles.step_carousel_navigator}>
					{data.map((item, index) => (
						<div
							className={styles.step_carousel_navigator_item}
							style={currentIndex === index ? { opacity: 1, background: "#F1F6FD", borderColor: "#1771E4" } : { opacity: 0.5 }}
							onClick={() => setCurrentIndex(index)}>
							<img src={item.icon} />
							&ensp;&ensp;
							<span>{item.title}</span>
						</div>
					))}
				</div>
				<div className={styles.step_carousel_container}>
					<div
						className={styles.step_carousel__items}
						style={{ height: `calc(100% * ${data.length})`, transform: `translateY(calc(-100% * ${currentIndex / data.length}))` }}>
						{data.map((item, index) => (
							<div className={styles.step_carousel__item} style={{ height: `calc(100% / ${data.length})` }} key={index}>
								<div className={styles.step_carousel__item_description}>{item.content.description}</div>
								<img src={item.content.image} className={styles.step_carousel__item_image} />
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default StepCarousel;
