import React, { useState, useEffect } from "react";
import "../../public/Styles/kitchenPage.css";
import Header from "./Header";

const kitchenImages = [
	"../Images/Kitchen/3Kitchen.jpg",
	// "../Images/Kitchen/4Kitchen.png",
	"../Images/Kitchen/6Kitchen.jpeg",
	"../Images/Kitchen/7Kitchen.jpeg",
	"../Images/Kitchen/8Kitchen.jpeg",
];

function KitchenPage() {
	const [currentKitchenImageIndex, setCurrentKitchenImageIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentKitchenImageIndex(
				(prevIndex) => (prevIndex + 1) % kitchenImages.length
			);
		}, 5000); // Change image every 5 seconds

		return () => clearInterval(interval); // Clear the interval on component unmount
	}, [currentKitchenImageIndex]);

	return (
		<>
			<div className="kitchenPageSection">
				<Header />
				<div className="kitchenPageContainer">
					<div className="kitchenPageLeft">
						<div className="kitchenPageText">
							<h2>Our Kitchen Projects</h2>
							<p className="kitchenInfo">
								Welcome to DBI Design Build Install. We specialize in creating
								bespoke kitchen designs for our clients. With years of
								experience, our team ensures top-notch quality and craftsmanship
								in every project.
							</p>
						</div>
					</div>
					<div className="kitchenPageRight">
						<img
							className={
								currentKitchenImageIndex === 0 ? "imageIn" : "imageOut"
							}
							src={kitchenImages[0]}
							alt="Kitchen 1"
						/>
						<img
							className={
								currentKitchenImageIndex === 1 ? "imageIn" : "imageOut"
							}
							src={kitchenImages[1]}
							alt="Kitchen 2"
						/>
						<img
							className={
								currentKitchenImageIndex === 2 ? "imageIn" : "imageOut"
							}
							src={kitchenImages[2]}
							alt="Kitchen 3"
						/>
						<img
							className={
								currentKitchenImageIndex === 3 ? "imageIn" : "imageOut"
							}
							src={kitchenImages[2]}
							alt="Kitchen 3"
						/>
						<img
							className={
								currentKitchenImageIndex === 4 ? "imageIn" : "imageOut"
							}
							src={kitchenImages[2]}
							alt="Kitchen 3"
						/>
					</div>
				</div>
			</div>
		</>
	);
}

export default KitchenPage;
