import React from "react";

import styles from "../styles/Global";

const Button = ({ buttonStyle, assetUrl, link, source, buttonText }) => {
  return (
    <div
      className={buttonStyle}
      onClick={() => window.open(link, "_blank")}
    >
      {assetUrl && 
      <img src={assetUrl} alt="button_icon" className={styles.btnIcon} />
      }
      <div className="flex flex-col justify-start ml-4 text-center">
        <p className={`${styles.btnText} font-normal text-xs`}>{buttonText}</p>
        <p className={`${styles.btnText} font-bold text-sm`}>{source}</p>
      </div>
    </div>
  );
};

export default Button;
