import React from "react";
import navbar from "./navbar.jsx";
import carousele from "./carousele.jsx";
import card from "./card.jsx";
import footer from "./footer.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Navbar from "./navbar.jsx";
import Carousele from "./carousele.jsx";
import Card from "./card.jsx";
import Footer from "./footer.jsx";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<Navbar/>
			
			<Carousele/>

			<Card/>
			
			<Footer/>
			
					
					

  

			
			</div>
	);
};

export default Home;
