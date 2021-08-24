import React from "react";

// styles
import styles from "../../styles/Article.module.scss";

const ProgressBarTitle = ({ firstLine, secondLine, progressBarRef }) => {
  return (
    <>
      <div className={`${styles.text} ${styles.outline}`}>
        {firstLine} <br />
        {secondLine}
      </div>
      <div
        className={`${styles.text} ${styles.progressBar}`}
        ref={progressBarRef}
      >
        {firstLine} <br />
        {secondLine}
      </div>
    </>
  );
};

export default ProgressBarTitle;
