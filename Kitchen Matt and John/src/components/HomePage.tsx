import React, { useState, useEffect } from 'react'
import '../../public/Styles/homePage.css'
import NavBar from './NavBar'
import Banner from './Banner'

const images = [
  '../Images/Kitchen/3Kitchen.jpg',
  '../Images/Kitchen/6Kitchen.jpeg',
  '../Images/Kitchen/7Kitchen.jpeg',
]

function HomePage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 5000)

    return () => clearInterval(interval) // Clear the interval on component unmount
  }, [currentImageIndex])

  return (
    <>
      <div className="homePageSection">
        <NavBar />
        <div className="homePageContainer">
          <div className="homePageLeft">
            <div className="homeLogo">
              <img
                src="../Images/Logos/SecondLogo.png"
                alt="Logo"
                className="home2ndLogo"
              />
            </div>
          </div>
          <div className="homePageRight">
            <div className="headerCap">
              <p>Hi</p>
            </div>
            <div className="boxesContainer">
              <div className="firstBoxCon">
                <div className="imgSteps"></div>
                <div className="imgSteps"></div>
              </div>
              <div className="secondBoxCon">
                <div className="imgSteps"></div>
                <div className="imgSteps"></div>
              </div>
            </div>
          </div>
        </div>
        <Banner />
      </div>
    </>
  )
}

export default HomePage
