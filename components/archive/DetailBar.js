import React from "react";

// style
import styles from "../../styles/Archive.module.scss";

const RightArrow = () => (
  <svg
    width="17"
    height="20"
    viewBox="0 0 17 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0.380005 0.950195L8.44 5.6002L16.5 10.2602L8.44 14.9102L0.380005 19.5602"
      stroke="black"
      strokeWidth="0.44"
      strokeMiterlimit="10"
    />
  </svg>
);

const DetailBar = () => {
  return (
    <>
      <label>sort by</label>
      <div className={styles.sort}>
        latest
        <RightArrow />
      </div>
    </>
  );
};

export default DetailBar;
