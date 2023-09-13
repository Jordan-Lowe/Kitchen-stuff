import React, { useState, useEffect } from 'react'
import '../../public/Styles/about.css'
import Header from './Header'

const kitchenImages = [
  '../Images/Kitchen/3Kitchen.jpg',
  '../Images/Kitchen/6Kitchen.jpeg',
  '../Images/Kitchen/7Kitchen.jpeg',
]

function AboutPage() {
  const [currentKitchenImageIndex, setCurrentKitchenImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentKitchenImageIndex(
        (prevIndex) => (prevIndex + 1) % kitchenImages.length
      )
    }, 5000) // Change image every 5 seconds

    return () => clearInterval(interval) // Clear the interval on component unmount
  }, [currentKitchenImageIndex])

  return (
    <>
      <div className="aboutPageSection">
        <Header />

        <div className="aboutPageContainer">
          <div className="aboutPageLeft">
            <div className="aboutPageText">
              <h2>About Us</h2>
              <p className="aboutInfo">
                Welcome to DBI Design Build Install. We specialize in creating
                bespoke kitchen designs for our clients. With years of
                experience, our team ensures top-notch quality and craftsmanship
                in every project.
              </p>
            </div>
          </div>
          <div className="aboutPageRight">
            <img
              className={
                currentKitchenImageIndex === 0 ? 'imageIn' : 'imageOut'
              }
              src={kitchenImages[0]}
              alt="Kitchen 1"
            />
            <img
              className={
                currentKitchenImageIndex === 1 ? 'imageIn' : 'imageOut'
              }
              src={kitchenImages[1]}
              alt="Kitchen 2"
            />
            <img
              className={
                currentKitchenImageIndex === 2 ? 'imageIn' : 'imageOut'
              }
              src={kitchenImages[2]}
              alt="Kitchen 3"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutPage
