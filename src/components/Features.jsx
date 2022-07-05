import React from 'react'
import { BiMobileAlt } from "react-icons/bi"
import { BsLaptop, BsTablet } from "react-icons/bs"

import assets from '../assets'
import styles from '../styles/Global'

const FeatureCard = ({ iconText, iconUrl}) => (
  <div className={styles.featureCard}>
    <img src={iconUrl} alt="feature icon" className={styles.featureImg} />
    <p className={styles.featureText}>{iconText}</p>
  </div>
)

window.addEventListener("scroll", (e) => {
  let top = window.scrollY

  let icons = document.querySelectorAll('.icon');
  let features = document.getElementById("features")

  let featuresPos = features.offsetTop

  if(top > featuresPos-400){
		
    icons[0].classList.add("slideIn");
    icons[1].classList.add("slideIn");
    icons[2].classList.add("slideIn");
  }
})

const Features = () => {

  return (
    <div id="features" className={`${styles.section} ${styles.bgPrimary} banner03`}>
      <div className={`${styles.subSection} flex-col text-center`}>
        <div>
          <h1 className={`${styles.h1Text} ${styles.whiteText}`}>Technologies</h1>
          <p className={`${styles.pText} ${styles.whiteText}`}>This app has been developed using the cross-platform technology that is React Native</p>
        </div>

        <div className={styles.flexWrap}>
          <FeatureCard iconUrl={assets.react}
          iconText="React Native" />
          <FeatureCard iconUrl={assets.javascript}
          iconText="Javascript" />
        </div>
        <p className={`${styles.pText} ${styles.whiteText}`}>Designs that respond to every screen</p>
        <div className="flex flex-row justify-center w-full">
			<BsLaptop className="icon"/>
			<BiMobileAlt className="icon" />
      <BsTablet className="icon" />
		</div>
      </div>

   
    </div>
  )
}

export default Features