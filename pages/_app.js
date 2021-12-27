import "../styles/global.scss";

import BaseLayout from "../components/layouts/base_layout/BaseLayout";

function MyApp({ Component, pageProps }) {
	return (
		<BaseLayout>
			<Component {...pageProps} />
		</BaseLayout>
	);
}

export default MyApp;
