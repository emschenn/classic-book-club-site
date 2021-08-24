import React from "react";

// style
import styles from "../../styles/Archive.module.scss";

const EmptyCase = () => {
  return (
    <div className={styles.emptyCase}>
      <p>我們需要你的支援</p>
      <svg
        width="58"
        height="58"
        viewBox="0 0 58 58"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="29" cy="29" r="29" fill="black" />
      </svg>
    </div>
  );
};

export default EmptyCase;
