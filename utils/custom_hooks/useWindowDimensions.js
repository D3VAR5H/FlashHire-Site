// hook to get window dimensions
import { useState, useEffect } from "react";

export default function useWindowDimensions() {
	const [windowDimensions, setWindowDimensions] = useState({});

	useEffect(() => {
		function handleResize() {
			setWindowDimensions({
				width: window.innerWidth,
				height: window.innerHeight,
			});
		}

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return windowDimensions;
}
