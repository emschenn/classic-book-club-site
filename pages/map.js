import React, { useState } from "react";
import YearSlider from "../components/map/YearSlider";

// components
import Header from "../components/Header";
import Footer from "../components/Footer";

const Map = () => {
  const yearsData = [1, 2, 3, 4, 5, 6];
  const [startYear, setStartYear] = useState(yearsData[0]);
  const [endYear, setEndYear] = useState(yearsData[yearsData.length - 1]);

  return (
    <>
      <Header />
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

      <Footer />
    </>
  );
};

export default Map;
