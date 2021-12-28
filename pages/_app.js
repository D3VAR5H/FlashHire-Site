import "../styles/global.scss";

// import SmoothScroll from "../components/elements/smooth_scroll/SmoothScroll";
import BaseLayout from "../components/layouts/base_layout/BaseLayout";

function MyApp({ Component, pageProps }) {
	return (
		// <SmoothScroll ease={0.05}>
			<BaseLayout>
				<Component {...pageProps} />
			</BaseLayout>
		// </SmoothScroll>
	);
}

export default MyApp;
