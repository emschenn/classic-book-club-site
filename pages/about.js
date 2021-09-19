import React, { useEffect, useState, useRef } from "react";
import Head from "next/head";

import { gsap } from "gsap";
import * as d3 from "d3";

// style
import styles from "../styles/About.module.scss";

// components
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContentBody from "../components/about/ContentBody";
import GridLayout from "../components/about/GridLayout";

const About = () => {
  const [size, setSize] = useState({ width: 1200, height: 800 });
  const [state, setState] = useState(0);
  const padding = 10;
  const gridCount = 32;
  const sideLength = Math.floor(size.width / gridCount);

  const panelRef = useRef(null);
  const bodyRef = useRef(null);
  const leftContentRef = useRef(null);
  const rightContentRef = useRef(null);
  const bodyContainerRef = useRef(null);
  const lookMoreButtonRef = useRef(null);
  const lookLessButtonRef = useRef(null);

  const verticalPathRef = useRef([]);
  const horizontalPathRef = useRef([]);

  const tl = useRef();

  useEffect(() => {
    setSize({
      width: panelRef.current.clientWidth,
      height: panelRef.current.clientHeight,
    });
  }, []);

  useEffect(() => {}, [size]);

  const triggerAnimation = (isOn) => {
    if (state != 0) return;
    const verticalCurves = isOn
      ? calcVerticalCurve({
          mid: 24,
          offsetMid: 2,
          offset: 6,
          c1y: 150,
          c2y: 300,
          curve: [0.9, 1.1],
        })
      : getStartPath({ isVertical: true });
    const horizontalCurves = isOn
      ? calcHorizontalCurve({
          mid: 6,
          offsetMid: 2,
          offset: 5,
          c1x: 1000,
          c2x: 1100,
          curve: [0.9, 1.1],
        })
      : getStartPath({ isVertical: false });
    gsap.timeline({ repeat: 0 }).to(verticalPathRef.current, {
      attr: { d: gsap.utils.wrap(verticalCurves) },
      ease: "Power2.easeInOut",
    });
    gsap.timeline({ repeat: 0 }).to(horizontalPathRef.current, {
      attr: { d: gsap.utils.wrap(horizontalCurves) },
      ease: "Power2.easeOut",
    });
    const circleSizeTo = isOn ? { x: 70, y: 70 } : { x: 0, y: 0 };
    const circlePosTo = { x: "75%", y: "35%" };
    animateClipPath({ circleSizeTo, circlePosTo });
  };

  useEffect(() => {
    if (state == 2) {
      clipPathOnLeft();
    } else if (state == 1) {
      clipPathOnRight();
    } else {
    }
  }, [state]);

  const getVerticalPath = (x, c1x, c1y, c2x, c2y) =>
    `M${x},0 C${c1x},${c1y} ${c2x},${c2y} ${x},${size.height}`;

  const getHorizontalPath = (y, c1x, c1y, c2x, c2y) =>
    `M0,${y} C${c1x},${c1y} ${c2x},${c2y} ${size.width},${y}`;

  const calcVerticalCurve = ({ mid, offsetMid, offset, c1y, c2y, curve }) => {
    const scaleMid = d3
      .scaleLog()
      .domain([mid - offset, mid + offset])
      .range([curve[1], curve[0]]);
    const scaleLeft = d3
      .scaleLog()
      .domain([mid - offset, mid + offset])
      .range([1, curve[1]]);
    const scaleRight = d3
      .scaleLog()
      .domain([mid - offset, mid + offset])
      .range([curve[0], 1]);
    return Array(gridCount)
      .fill()
      .map((_, i) => {
        const pos = padding + sideLength * i;
        let scale = 1;
        if (i >= mid - offsetMid && i < mid + offsetMid) {
          scale = scaleMid(i);
        } else if (i >= mid - offset && i < mid - offsetMid) {
          scale = scaleLeft(i);
        } else if (i >= mid + offsetMid && i < mid + offset) {
          scale = scaleRight(i);
        }
        return getVerticalPath(pos, pos / scale, c1y, pos / scale, c2y);
      });
  };

  const calcHorizontalCurve = ({ mid, offsetMid, offset, c1x, c2x, curve }) => {
    const scaleMid = d3
      .scaleLog()
      .domain([mid - offset, mid + offset])
      .range([curve[1], curve[0]]);
    const scaleUp = d3
      .scaleLog()
      .domain([mid - offset, mid + offset])
      .range([1, curve[1]]);
    const scaleDown = d3
      .scaleLog()
      .domain([mid - offset, mid + offset])
      .range([curve[0], 1]);
    return Array(gridCount)
      .fill()
      .map((_, i) => {
        const pos = padding + sideLength * i;
        let scale = 1;
        if (i >= mid - offsetMid && i < mid + offsetMid) {
          scale = scaleMid(i);
        } else if (i >= mid - offset && i < mid - offsetMid) {
          scale = scaleUp(i);
        } else if (i >= mid + offsetMid && i < mid + offset) {
          scale = scaleDown(i);
        }
        return getHorizontalPath(pos, c1x, pos / scale, c2x, pos / scale);
      });
  };
  const getStartPath = ({ isVertical }) =>
    Array(gridCount)
      .fill()
      .map((_, i) => {
        const pos = padding + sideLength * i;
        return isVertical
          ? getVerticalPath(pos, pos, 200, pos, 400)
          : getHorizontalPath(pos, 200, pos, 400, pos);
      });

  const animateClipPath = ({ circleSizeTo, circlePosTo }) => {
    gsap
      .timeline()
      .to(bodyRef.current, {
        clipPath: `ellipse(${circleSizeTo.x}px ${circleSizeTo.y}px at ${circlePosTo.x} ${circlePosTo.y})`,
        ease: "Power2.easeOut",
      })
      .to(
        bodyContainerRef.current,
        {
          clipPath: `ellipse(${circleSizeTo.x - 0.5}px ${
            circleSizeTo.y - 0.5
          }px at ${circlePosTo.x} ${circlePosTo.y})`,
          ease: "Power2.easeOut",
        },
        "<"
      );
  };

  const animateGridLayout = ({ verticalCurves, horizontalCurves }) => {
    gsap
      .timeline()
      .to(verticalPathRef.current, {
        attr: { d: gsap.utils.wrap(verticalCurves) },
        ease: "Power2.easeOut",
      })
      .to(
        horizontalPathRef.current,
        {
          attr: { d: gsap.utils.wrap(horizontalCurves) },
          ease: "Power2.easeOut",
        },
        "<"
      );
  };

  const clipPathOnLeft = () => {
    gsap
      .timeline()
      .to(rightContentRef.current, {
        opacity: 0,
        ease: "Power2.easeOut",
      })
      .to(
        leftContentRef.current,
        {
          opacity: 1,
          ease: "Power2.easeOut",
        },
        0.3
      );
    gsap
      .timeline()
      .to(lookMoreButtonRef.current, {
        opacity: 0,
        ease: "Power2.easeOut",
      })
      .to(
        lookLessButtonRef.current,
        {
          opacity: 1,
          ease: "Power2.easeOut",
        },
        0.8
      );
    const verticalCurves = calcVerticalCurve({
      mid: 11,
      offsetMid: 5,
      offset: 8,
      c1y: 350,
      c2y: 380,
      curve: [0.85, 1.2],
    });
    const horizontalCurves = calcHorizontalCurve({
      mid: 9,
      offsetMid: 3,
      offset: 6,
      c1x: 200,
      c2x: 600,
      curve: [0.9, 1.1],
    });
    animateGridLayout({ verticalCurves, horizontalCurves });
    const circleSizeTo = { x: 360, y: 250 };
    const circlePosTo = { x: "36%", y: "50%" };
    animateClipPath({ circleSizeTo, circlePosTo });
  };

  const clipPathOnRight = () => {
    gsap
      .timeline()
      .to(leftContentRef.current, {
        opacity: 0,
        ease: "Power2.easeOut",
      })
      .to(
        rightContentRef.current,
        {
          opacity: 1,
          ease: "Power2.easeOut",
        },
        0.3
      );
    gsap
      .timeline()
      .to(lookLessButtonRef.current, {
        opacity: 0,
        ease: "Power2.easeOut",
      })
      .to(
        lookMoreButtonRef.current,
        {
          opacity: 1,
          ease: "Power2.easeOut",
        },
        0.8
      );
    const verticalCurves = calcVerticalCurve({
      mid: 22,
      offsetMid: 3,
      offset: 7,
      c1y: 350,
      c2y: 380,
      curve: [0.85, 1.2],
    });
    const horizontalCurves = calcHorizontalCurve({
      mid: 9,
      offsetMid: 2,
      offset: 6,
      c1x: 1000,
      c2x: 1200,
      curve: [0.9, 1.1],
    });
    animateGridLayout({ verticalCurves, horizontalCurves });

    const circleSizeTo = { x: 250, y: 250 };
    const circlePosTo = { x: "70%", y: "50%" };
    animateClipPath({ circleSizeTo, circlePosTo });
  };

  return (
    <>
      <Head>
        <title>經典讀書會 | 關於我們</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <div ref={panelRef} className={styles.panel}>
        {state === 0 && (
          <div
            className={styles.button}
            onClick={() => setState(1)}
            onMouseEnter={() => triggerAnimation(true)}
            onMouseLeave={() => triggerAnimation(false)}
          />
        )}
        <GridLayout
          gridCount={gridCount}
          size={size}
          verticalPathRef={verticalPathRef}
          horizontalPathRef={horizontalPathRef}
          padding={padding}
          sideLength={sideLength}
        />
        <ContentBody
          bodyRef={bodyRef}
          lookMoreButtonRef={lookMoreButtonRef}
          lookLessButtonRef={lookLessButtonRef}
          bodyContainerRef={bodyContainerRef}
          setState={setState}
          leftContentRef={leftContentRef}
          rightContentRef={rightContentRef}
        />
      </div>
      <Footer />
    </>
  );
};

export default About;
