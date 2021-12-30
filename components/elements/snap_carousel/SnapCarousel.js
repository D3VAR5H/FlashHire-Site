import { useEffect, useState } from "react";
import useWindowDimensions from "../../../utils/custom_hooks/useWindowDimensions";
import BorderedBox from "../bordered_box/BorderedBox";
import styles from "./snapCarousel.module.scss";

const SnapCarousel = ({ data }) => {
	// const [currentIndex, setCurrentIndex] = useState(0);
	const { height, width: w } = useWindowDimensions();

	// useEffect(() => {
	// 	const intervalId = setInterval(
	// 		() => setCurrentIndex((currentIndex) => (currentIndex + 1) % data.length),
	// 		5000 // every 5 seconds
	// 	);
	// 	return () => clearTimeout(intervalId);
	// }, []);

	return (
		<>
			<div className={styles.snap_carousel}>
				{data.map((item, index) => (
					<div className={styles.snap_carousel_container}>
						<div className={styles.snap_carousel__item}>
							<div className={styles.snap_carousel__item_description}>
								<div className={styles.snap_carousel__item_description_icon}>
									<img src={item.icon} />
								</div>
								<div className={styles.snap_carousel__item_description_title}>{item.title}</div>
								<div className={styles.snap_carousel__item_description_content}>{item.content.description}</div>
							</div>
							<div
								className={styles.snap_carousel__navigator}
								// style={w < 990 ? { width: `calc(${data.length} * 100%)`, transform: `translateX(calc(-100% * ${currentIndex / data.length}))` } : {}}>
							>
								{data.map((navitem, navindex) => (
									<div className={styles.snap_carousel__navigator_item} key={navindex}>
										<span className={index === navindex && styles.active_tab}>{navitem.title}</span>
									</div>
								))}
							</div>
						</div>
						<div className={styles.snap_carousel__item_image} style={{backgroundColor:item.content.color}}>
							<img src={item.content.image} />
						</div>
					</div>
				))}
			</div>
		</>
	);
};

export default SnapCarousel;
