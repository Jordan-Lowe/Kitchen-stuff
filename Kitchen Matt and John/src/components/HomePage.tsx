import React, { useState, useEffect } from "react";
import "../../public/Styles/homePage.css";
import NavBar from "./NavBar";
import Banner from "./Banner";

const images = [
	"../Images/Kitchen/3Kitchen.jpg",
	"../Images/Kitchen/6Kitchen.jpeg",
	"../Images/Kitchen/7Kitchen.jpeg",
];

function HomePage() {
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
		}, 5000); // Change image every 5 seconds

		return () => clearInterval(interval); // Clear the interval on component unmount
	}, [currentImageIndex]);

	return (
		<>
			<div className="homePageSection">
				<NavBar />
				<div className="homePageContainer">
					<div className="homePageLeft">
						<div className="homePageText">
							<h2>DBI Design Build Installation</h2>
							<p className="homeInfo">
								Welcome to DBI Design Build Install. We specialize in creating
								bespoke kitchen designs for our clients. With years of
								experience, our team ensures top-notch quality and craftsmanship
								in every project.
							</p>
						</div>
					</div>
					<div className="homePageRight">
						<img
							className={currentImageIndex === 0 ? "imageIn" : "imageOut"}
							src={images[0]}
							alt="Kitchen 1"
						/>
						<img
							className={currentImageIndex === 1 ? "imageIn" : "imageOut"}
							src={images[1]}
							alt="Kitchen 2"
						/>
						<img
							className={currentImageIndex === 2 ? "imageIn" : "imageOut"}
							src={images[2]}
							alt="Kitchen 3"
						/>
					</div>
				</div>
				<Banner />
			</div>
		</>
	);
}

export default HomePage;
