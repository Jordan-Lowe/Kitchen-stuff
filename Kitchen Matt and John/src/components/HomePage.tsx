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
            <div className="homePageText">
              <h1 className="homeHeader"> DBI Interior Specialists</h1>
              <h2 className="home2ndHeader">Kitchens done right</h2>
              <p className="homeInfo">
                Welcome to the nexus of innovation and elegance, where we
                transform ordinary spaces into extraordinary interiors. Dive in
                to discover the perfect blend of functionality and style for
                your dream kitchen and beyond.
              </p>
            </div>
          </div>
          <div className="homePageRight">
            <img
              className={currentImageIndex === 0 ? 'imageIn' : 'imageOut'}
              src={images[0]}
              alt="Kitchen 1"
            />
            <img
              className={currentImageIndex === 1 ? 'imageIn' : 'imageOut'}
              src={images[1]}
              alt="Kitchen 2"
            />
            <img
              className={currentImageIndex === 2 ? 'imageIn' : 'imageOut'}
              src={images[2]}
              alt="Kitchen 3"
            />
          </div>
        </div>
        <Banner />
      </div>
    </>
  )
}

export default HomePage
