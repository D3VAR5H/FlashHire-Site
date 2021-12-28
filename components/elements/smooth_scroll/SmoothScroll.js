import React, { useEffect, useRef } from "react";
import useWindowDimensions from "../../../utils/custom_hooks/useWindowDimensions";

import styles from "./smoothScroll.module.scss";

const SmoothScroll = ({ ease, children }) => {
	const windowSize = useWindowDimensions();

	const scrollingContainerRef = useRef();
	const scrollingWrapperRef = useRef();

	const data = {
		// ease: Math.max(0, Math.min(1, ease ?? 0.1)),
		ease: 0.05,
		current: 0,
		previous: 0,
		rounded: 0,
	};

	const setBodyHeight = () => {
		document.body.style.height = `${scrollingContainerRef.current.getBoundingClientRect().height}px`;
	};

	useEffect(() => {
		setBodyHeight();
	}, [windowSize.height]);

	useEffect(() => {
		requestAnimationFrame(() => smoothScrollingHandler());
	}, []);

	const smoothScrollingHandler = () => {
		data.current = window.scrollY;
		data.previous += (data.current - data.previous) * data.ease;
		data.rounded = Math.round(data.previous * 100) / 100;

		scrollingContainerRef.current.style.transform = `translateY(-${data.previous}px)`;

		// Recursive call
		requestAnimationFrame(() => smoothScrollingHandler());
	};

	return (
		<div ref={scrollingWrapperRef} className={styles.parent}>
			<div ref={scrollingContainerRef}className={styles.scrollingDiv}>{children}</div>
		</div>
	);
};

export default SmoothScroll;
