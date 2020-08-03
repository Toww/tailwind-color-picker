import React, { useState } from "react";

const Palette = ({ color }) => {
  // On hover over the palette, the cache become visible
  // to hide other palettes
  const [opacity, setopacity] = useState("opacity-0");

  function toggleopacity(e) {
    opacity === "opacity-0"
      ? setopacity("opacity-50")
      : (setopacity("opacity-0"));
    console.log(e.target.parentNode);
  }

  return (
    <>
      <div
        onMouseEnter={toggleopacity}
        onMouseLeave={toggleopacity}
        className="palette-container transition-all duration-150 ease-in-out"
      >
        <div className={`color-block bg-${color}-100`}></div>
        <div className={`color-block bg-${color}-200`}></div>
        <div className={`color-block bg-${color}-300`}></div>
        <div className={`color-block bg-${color}-400`}></div>
        <div className={`color-block bg-${color}-500`}></div>
        <div className={`color-block bg-${color}-600`}></div>
        <div className={`color-block bg-${color}-700`}></div>
        <div className={`color-block bg-${color}-800`}></div>
        <div className={`color-block bg-${color}-900`}></div>
      </div>
      
      <div className={`cache ${opacity}`}>
      </div>
    </>
  );
};

export default Palette;
