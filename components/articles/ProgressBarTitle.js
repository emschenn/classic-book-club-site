import React from "react";

// styles
import styles from "../../styles/Article.module.scss";

const ProgressBarTitle = ({
  isCross,
  firstLine,
  secondLine,
  progressBarRef,
}) => {
  return (
    <>
      <div className={`${styles.text} ${styles.outline}`}>
        {firstLine}
        {isCross && <span className={styles.cross}>x</span>} <br />
        {secondLine}
      </div>
      <div
        className={`${styles.text} ${styles.progressBar}`}
        ref={progressBarRef}
      >
        {firstLine}
        {isCross && <span className={styles.cross}>x</span>} <br />
        {secondLine}
      </div>
    </>
  );
};

export default ProgressBarTitle;
