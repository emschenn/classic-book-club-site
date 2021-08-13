import React from "react";
import styled from "styled-components";

const Slider = styled.div`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  width: ${(props) => props.width || "200px"};
  height: 10px;
  background-color: red;
`;

const InputButton = styled.input`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  width: ${(props) => props.width || "200px"};
  height: 10px;
  background-color: red;
`;

const YearSlider = ({
  startYear,
  setStartYear,
  endYear,
  setEndYear,
  yearsData,
}) => {
  return (
    <div>
      <Slider width="200px">
        <InputButton
          className="start"
          name="start"
          type="range"
          step="1"
          value={startYear}
          onChange={({ target }) => setStartYear(target.value)}
        />
        <InputButton
          className="end"
          name="end"
          type="range"
          step="1"
          value={endYear}
          onChange={({ target }) => setEndYear(target.value)}
        />
      </Slider>
    </div>
  );
};

export default YearSlider;
