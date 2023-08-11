import React from "react";
import "../../public/Styles/navBar.css";

function NavBar() {
	return (
		<>
			<div className="navBarSection">
				<div className="navBarContainer">
					<ul className="navBarList">
						<li className="navLogo">
							<img
								className="navLogoImg"
								src="../Images/Logos/DbiLogo.png"
								alt="Logo"
							/>
						</li>
						<li className="navHome">
							<a className="navHome" href="#home">
								Home
							</a>
						</li>
						<li className="navHome">
							<a className="navHome" href="#kitchen">
								Kitchen
							</a>
						</li>
						<li className="navHome">
							<a className="navHome" href="#wardrobe">
								Wardrobe
							</a>
						</li>
						<li className="navHome">
							<a className="navHome" href="#about">
								About
							</a>
						</li>
						<li className="navHome">
							<a className="navHome" href="#contact">
								Contact
							</a>
						</li>
						<li className="navFacebook">
							<a
								href="https://facebook.com"
								target="_blank"
								rel="noopener noreferrer"
							>
								<img
									className="navFacebookImg"
									src="../Images/Logos/facebook.svg"
									alt="Facebook Icon"
								/>
							</a>
						</li>
						<li className="navInstagram">
							<a
								href="https://instagram.com"
								target="_blank"
								rel="noopener noreferrer"
							>
								<img
									className="navInstagramImg"
									src="../Images/Logos/instagram.svg"
									alt="Instagram Icon"
								/>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
}

export default NavBar;
