import React from "react";

// style
import styles from "../../styles/About.module.scss";

const LookMoreButton = ({ innerRef, onClick }) => (
  <svg
    onClick={onClick}
    className={styles.lookMoreButton}
    ref={innerRef}
    width="54"
    height="54"
    viewBox="0 0 54 54"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M26.75 53.25C41.3855 53.25 53.25 41.3855 53.25 26.75C53.25 12.1145 41.3855 0.25 26.75 0.25C12.1145 0.25 0.25 12.1145 0.25 26.75C0.25 41.3855 12.1145 53.25 26.75 53.25Z"
      fill="white"
      stroke="black"
      strokeWidth="0.5"
      strokeMiterlimit="10"
    />
    <path
      d="M14.75 26.25H38.75L31 19.75"
      stroke="black"
      strokeWidth="0.5"
      strokeMiterlimit="10"
    />
  </svg>
);

const LookLessButton = ({ innerRef, onClick }) => (
  <svg
    className={styles.lookLessButton}
    onClick={onClick}
    ref={innerRef}
    width="54"
    height="54"
    viewBox="0 0 54 54"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M26.75 53.5C41.3855 53.5 53.25 41.6355 53.25 27C53.25 12.3645 41.3855 0.5 26.75 0.5C12.1145 0.5 0.25 12.3645 0.25 27C0.25 41.6355 12.1145 53.5 26.75 53.5Z"
      fill="white"
      stroke="black"
      strokeWidth="0.5"
      strokeMiterlimit="10"
    />
    <path
      d="M38.75 26.5H14.75L22.5 20"
      stroke="black"
      strokeWidth="0.5"
      strokeMiterlimit="10"
    />
  </svg>
);

const ContentBody = ({
  lookMoreButtonRef,
  lookLessButtonRef,
  bodyRef,
  bodyContainerRef,
  leftContentRef,
  rightContentRef,
  setState,
}) => {
  return (
    <div className={styles.bodySection}>
      <div className={styles.body} ref={bodyRef}>
        <div className={styles.container} ref={bodyContainerRef}>
          <div className={styles.left} ref={leftContentRef}>
            閱讀指南：閱讀經典，我們打破了時間的禁錮，
            <br />
            認識了世界各地的偉大靈魂以及他們的洞見。 <br />
            <br />
            (link)探險地圖：拖曳時間軸的起迄並移動地圖以鎖定特定時空的文本。
            <br />
            (Image: Map) 討論經典，我們學會用多元的角度看待世界， <br />
            豐滿了我們的épistémè和學問的脈絡。 <br />
            <br />
            (link)知識之樹：在六大領域及學科領域中選取特定知識的文本。 <br />
            (Image:真理之門的樹) (待補@遙遠未來：分類的規則及涵蓋的細項)
          </div>
          <div className={styles.right} ref={rightContentRef}>
            2017年，載著三個來自學術象牙塔的大學生，
            <br />
            經典讀書會的小舟啟航了。
            <br />
            冬去春來，小舟補漏訂訛成了一艘乘載各色夥伴的大船
            <br />
            <br />
            我們在經典的帶領下探索這個世界的精采
            <br />
            我們在讀書會的甲板上暢談彼此的經驗與見解
            <br />
            <br />
            世界太大，我們
            <br />
            旅程的終點，是百年後的闔眼。
          </div>
        </div>
      </div>
      <LookMoreButton
        innerRef={lookMoreButtonRef}
        onClick={() => setState(2)}
      />
      <LookLessButton
        innerRef={lookLessButtonRef}
        onClick={() => setState(1)}
      />
    </div>
  );
};

export default ContentBody;
