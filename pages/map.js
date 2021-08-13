import React, { useState } from "react";
import YearSlider from "../components/YearSlider";

const Map = () => {
  const yearsData = [1, 2, 3, 4, 5, 6];
  const [startYear, setStartYear] = useState(yearsData[0]);
  const [endYear, setEndYear] = useState(yearsData[yearsData.length - 1]);

  return (
    <div>
      <YearSlider
        startYear={startYear}
        endYear={endYear}
        setStartYear={setStartYear}
        setEndYear={setEndYear}
        yearsData={yearsData}
      />
      {startYear} - {endYear}
    </div>
  );
};

export default Map;
