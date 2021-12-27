import Navbar from "../../modules/navbar/Navbar";
import Footer from "../../modules/footer/Footer";

const BaseLayout = (props) => {
	return (
		<>
			<Navbar />
			{props.children}
			<Footer />
		</>
	);
};

export default BaseLayout;
