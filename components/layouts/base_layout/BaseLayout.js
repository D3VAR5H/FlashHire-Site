import Head from "next/head";

import Navbar from "../../modules/navbar/Navbar";
import Footer from "../../modules/footer/Footer";

const BaseLayout = (props) => {
	return (
		<>
			<Head>
				<link rel="shortcut icon" href="/favicon.ico" />
			</Head>
			<Navbar />
			{props.children}
			<Footer />
		</>
	);
};

export default BaseLayout;
