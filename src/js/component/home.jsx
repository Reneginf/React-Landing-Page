import React from "react";
import { NavBar } from "./navbar";
import { CardSection } from "./cardSection";
import { Jumbo } from "./jumbo";

//create your first component
const Home = () => {
	return (
		<React.Fragment>
			<NavBar/>
			<main className="container">
				<Jumbo/>
				<CardSection/>
			</main>
		</React.Fragment>
	);
};

export default Home;
