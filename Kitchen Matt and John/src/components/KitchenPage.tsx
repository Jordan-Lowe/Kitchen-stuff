import React, { useState, useEffect } from 'react'
import '../../public/Styles/kitchenPage.css'
import Header from './Header'

const kitchenImages = [
  '../Images/Kitchen/3Kitchen.jpg',
  // "../Images/Kitchen/4Kitchen.png",
  '../Images/Kitchen/6Kitchen.jpeg',
  '../Images/Kitchen/7Kitchen.jpeg',
  '../Images/Kitchen/8Kitchen.jpeg',
]

function KitchenPage() {
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
      <div className="kitchenPageSection">
        <Header />
        <div className="kitchenPageContainer">
          <div className="kitchenPageLeft">
            <div className="kitchenPageText">
              <h2>
                <br></br>Our Kitchen Projects
              </h2>
              <p className="kitchenInfo">
                Discover a world of kitchen possibilities with DBI Interior
                Specialist. We offer tailored kitchen installations, whether
                you're looking for a custom design that perfectly matches your
                style or a practical flat-packed solution.<br></br>
                <br></br> Our team works closely with you to bring your ideas to
                life, ensuring your custom kitchen reflects your preferences.
                From cabinetry to countertops, we focus on the details that
                matter most to you. If a budget-friendly option is what you
                seek, our flat-packed kitchen installations provide a smart and
                functional choice.
                <br></br>
                <br></br> Our skilled team assembles and installs flat-pack
                kitchens efficiently, delivering a seamless blend of
                affordability and quality. With DBI Interior Specialist, you can
                expect dependable kitchen installation services that cater to
                your individual needs.
              </p>
            </div>
          </div>
          <div className="kitchenPageRight">
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
            <img
              className={
                currentKitchenImageIndex === 3 ? 'imageIn' : 'imageOut'
              }
              src={kitchenImages[2]}
              alt="Kitchen 3"
            />
            <img
              className={
                currentKitchenImageIndex === 4 ? 'imageIn' : 'imageOut'
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

export default KitchenPage
