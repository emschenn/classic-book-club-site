import React from "react";

// styles
import styles from "../../styles/Article.module.scss";

const MeetingMinutes = ({ publisher, updateDate }) => {
  return (
    <>
      <div className={styles.tag}>Meeting minutes</div>
      <div className={styles.detail}>
        <div className={`${styles.publisher} ${styles.row}`}>
          <label>Publisher</label>
          <div>{publisher}</div>
        </div>
        <div className={`${styles.updateDate} ${styles.row}`}>
          <label>Update Date</label>
          <div>{updateDate}</div>
        </div>
      </div>
    </>
  );
};

export default MeetingMinutes;
