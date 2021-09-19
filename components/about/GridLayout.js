import React from "react";

// style
import styles from "../../styles/About.module.scss";

const VerticalPath = ({ innerRef, index, size, x }) => (
  <path
    ref={innerRef}
    d={`M${x},0 C${x},200 ${x},400 ${x},${size.height}`}
    stroke="black"
    strokeWidth="0.5"
    strokeMiterlimit="10"
  />
);

const HorizontalPath = ({ innerRef, index, size, y }) => (
  <path
    ref={innerRef}
    d={`M0,${y} 200,${y} 400,${y} ${size.width},${y}`}
    stroke="black"
    strokeWidth="0.5"
    strokeMiterlimit="10"
  />
);

const GridLayout = ({
  gridCount,
  size,
  verticalPathRef,
  horizontalPathRef,
  padding,
  sideLength,
}) => {
  return (
    <svg
      width={size.width}
      height={size.height}
      viewBox={`0 0 ${size.width} ${size.height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {Array(gridCount)
        .fill()
        .map((_, i) => (
          <HorizontalPath
            innerRef={(el) => (horizontalPathRef.current[i] = el)}
            key={`horizontal-${i}`}
            index={i}
            size={size}
            y={padding + sideLength * i}
          />
        ))}
      {Array(gridCount)
        .fill()
        .map((_, i) => (
          <VerticalPath
            innerRef={(el) => (verticalPathRef.current[i] = el)}
            key={`vertical-${i}`}
            index={i}
            size={size}
            x={padding + sideLength * i}
          />
        ))}
    </svg>
  );
};

export default GridLayout;
