import React from 'react'

import styles from '../styles/Global'
import assets from '../assets'
import Button from './Button'
import CustomParticles from './Particles'

const Download = () => {
  return (
    <div className={`${styles.download} ${styles.bgPrimary} banner flex-col`}>
        <CustomParticles />
      <div className={`${styles.subSection} flex-col text-center my-20`}>
        <h1 className={`${styles.h1Text}${styles.blackText} absolute`}>Download the source code on GitHub!</h1>
      </div>
      <div className={`${styles.subSection} flex-col text-center my-10`}>
        <Button buttonStyle={`${styles.btnPrimary} absolute cursor-pointer`}
      assetUrl={assets.github}
      buttonText="Repo"
      source="Github"
      link="https://github.com/jtheprogammer" />
      </div>
      <div className={`${styles.flexCenter}`}>
        <img src={assets.scene} alt="download_png"
        className={`relative mb-20`} />
      </div>
    </div>
  )
}

export default Download