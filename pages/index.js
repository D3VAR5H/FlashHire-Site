import Hero from "../components/sections/hero/Hero";
import Process from "../components/sections/process/Process";
import About from "../components/sections/about/About";

const Home = () => {
	return (
		<>
			<main className="main">
				<Hero />
				<Process />
				<About />
			</main>
		</>
	);
};

export default Home;
