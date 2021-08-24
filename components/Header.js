import React, { useState } from "react";
import { useRouter } from "next/router";

import styles from "../styles/Layout.module.scss";

const Earth = () => (
  <svg
    width="54"
    height="54"
    viewBox="0 0 54 54"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M31.0302 52.9402C29.7065 53.1436 28.3694 53.2472 27.0302 53.2502C23.6289 53.2541 20.2594 52.5952 17.1102 51.3102C17.1102 51.3102 16.6102 50.7502 18.2802 49.9202C19.9502 49.0902 21.6102 49.0802 23.2802 48.2502C24.9502 47.4202 26.6102 48.2502 28.2802 49.9202C29.9502 51.5902 31.0302 52.9402 31.0302 52.9402Z"
      fill="black"
    />
    <path
      d="M52.5099 20.75C51.4819 16.5475 49.4317 12.6639 46.5417 9.44425C43.6518 6.22461 40.0114 3.76858 35.9438 2.29434C31.8763 0.820093 27.5076 0.37328 23.2258 0.993579C18.9441 1.61388 14.8818 3.28209 11.3999 5.85003C11.3999 5.85003 14.0799 12.39 14.9199 14.05C15.7599 15.71 16.5799 18.22 23.2499 19.05C23.2499 19.05 26.5799 19.89 27.4199 21.55C28.2599 23.21 27.4199 24.89 27.4199 26.55C27.3223 27.8587 27.5801 29.1695 28.1663 30.3436C28.7524 31.5178 29.6452 32.5116 30.7499 33.22C30.7499 33.22 32.4198 34.05 31.5798 37.39C30.7398 40.73 29.0798 43.22 29.0798 44.05C29.0798 44.88 29.0798 45.72 31.5798 45.72C34.0798 45.72 39.9199 39.89 39.9199 39.05C40.9114 37.5725 42.0252 36.1809 43.2499 34.89C44.9199 33.22 44.9199 29.05 43.2499 26.55C41.5799 24.05 40.7498 24.05 39.0798 21.55C37.4098 19.05 34.0799 20.72 32.4199 19.89C30.5694 18.7366 28.8869 17.3333 27.4199 15.72C27.4199 15.72 24.0799 13.22 25.7499 12.39C27.4199 11.56 29.0798 13.22 29.0798 14.89C29.0798 15.64 29.9599 15.3 30.3499 15.09C30.9699 14.75 31.5299 14.34 31.5099 13.57C31.4499 12.9749 31.4499 12.3752 31.5099 11.78C31.597 11.2323 31.7944 10.7079 32.0901 10.2387C32.3857 9.76946 32.7734 9.36508 33.2299 9.05003C35.7299 7.39003 38.2299 4.89003 40.7299 5.72003C41.8009 6.15883 42.7534 6.84404 43.5099 7.72003C44.3799 8.60003 45.2399 9.50003 46.0199 10.46C46.6499 11.22 47.5199 12.24 47.2699 13.31C46.9787 14.224 46.4467 15.0427 45.7299 15.68C44.0599 17.35 45.7299 19.85 47.3999 20.68C49.0699 21.51 52.5099 20.75 52.5099 20.75Z"
      fill="black"
    />
    <path
      d="M27 53.25C41.4975 53.25 53.25 41.4975 53.25 27C53.25 12.5025 41.4975 0.75 27 0.75C12.5025 0.75 0.75 12.5025 0.75 27C0.75 41.4975 12.5025 53.25 27 53.25Z"
      stroke="black"
      strokeWidth="0.42"
      strokeMiterlimit="10"
    />
  </svg>
);

const Magnifier = () => (
  <svg
    width="52"
    height="52"
    viewBox="0 0 52 52"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M36.25 6.93982C33.5557 4.24624 30.1685 2.35095 26.4634 1.46383C22.7583 0.57671 18.8799 0.73239 15.2579 1.91362C11.6358 3.09485 8.41144 5.25553 5.94169 8.15639C3.47194 11.0572 1.85325 14.5851 1.26493 18.3492C0.676613 22.1133 1.14153 25.9668 2.60832 29.4829C4.07511 32.9991 6.48648 36.0406 9.57536 38.2708C12.6642 40.5009 16.3101 41.8326 20.1092 42.1183C23.9083 42.4041 27.7123 41.6328 31.1 39.8898C31.3709 40.3829 31.7073 40.837 32.1 41.2398L40.37 49.4998C41.5953 50.7251 43.2572 51.4135 44.99 51.4135C46.7229 51.4135 48.3847 50.7251 49.61 49.4998C50.8353 48.2745 51.5237 46.6127 51.5237 44.8798C51.5237 43.147 50.8353 41.4851 49.61 40.2598L41.34 31.9898C40.9382 31.6003 40.4878 31.2642 40 30.9898C42.0045 27.1011 42.7216 22.676 42.0475 18.3532C41.3735 14.0305 39.3433 10.0337 36.25 6.93982V6.93982Z"
      stroke="black"
      strokeWidth="0.5"
      strokeMiterlimit="10"
    />
    <path
      d="M22.13 36.6702C30.4861 36.6702 37.26 29.8962 37.26 21.5402C37.26 13.1841 30.4861 6.41016 22.13 6.41016C13.7739 6.41016 7 13.1841 7 21.5402C7 29.8962 13.7739 36.6702 22.13 36.6702Z"
      stroke="black"
      strokeWidth="0.5"
      strokeMiterlimit="10"
    />
  </svg>
);

const RightArrow = () => (
  <svg
    width="40"
    height="45"
    viewBox="0 0 40 45"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={styles.arrow}
  >
    <path
      d="M0.880005 0.75L19.83 11.69L38.78 22.63L19.83 33.57L0.880005 44.51"
      stroke="black"
      strokeWidth="0.35"
      strokeMiterlimit="10"
    />
  </svg>
);

const Header = ({ categories }) => {
  const router = useRouter();
  const currentRoute = router.pathname;
  const [showChildCat, setShowChildCat] = useState({});
  const routes = [
    { route: "/about", name: "about" },
    { route: "/articles", name: "épistémè" },
    { route: "/contact", name: "contact" },
  ];

  return (
    <div className={styles.header}>
      <ul className={styles.nav}>
        <div
          className={styles.logo}
          onClick={() => {
            router.push("/");
          }}
        >
          LOGO
        </div>
        {routes.map(({ route, name }, index) => (
          <>
            {index !== 0 && <span className={styles.navDivider}></span>}
            <li
              key={name}
              className={`${styles.navLi} ${
                currentRoute.includes(route) ? styles.focus : undefined
              }`}
              onClick={() => {
                router.push(route);
              }}
            >
              {name}
            </li>
          </>
        ))}
        {currentRoute.includes("/articles") && (
          <div className={styles.category}>
            <RightArrow />
            <ul className={styles.cat}>
              {categories.map(({ name, children, slug }, index) => (
                <>
                  <li
                    key={`category-${name}`}
                    className={styles.catLi}
                    onMouseEnter={() =>
                      setShowChildCat({ cat: name, open: true })
                    }
                    onMouseLeave={() =>
                      setShowChildCat({ cat: name, open: false })
                    }
                    onClick={() => {
                      router.push(`/articles?cat=${slug}`);
                    }}
                  >
                    {name}
                    {showChildCat.cat === name && showChildCat.open && (
                      <div className={styles.childCat}>
                        <ul>
                          {children.map(({ name, slug }) => (
                            <li
                              key={`childCat-${slug}`}
                              onClick={(e) => {
                                e.stopPropagation();
                                router.push(`/articles?cat=${slug}`);
                              }}
                            >
                              {name}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </li>
                  {index !== categories.length - 1 && (
                    <span className={styles.catDivider}></span>
                  )}
                </>
              ))}
            </ul>
          </div>
        )}
      </ul>
      <ul className={styles.rightNav}>
        <li className={styles.search}>
          <Magnifier />
        </li>
        <li className={styles.map} onClick={() => router.push("/map")}>
          <Earth />
        </li>
      </ul>
    </div>
  );
};

export default Header;
