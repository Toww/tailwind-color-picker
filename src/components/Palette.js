import React, { useState } from "react";
import ColorBlock from "./ColorBlock";

const Palette = ({ color }) => {
  // On hover over the palette, the cache become visible
  // to hide other palettes
  const [cacheOpacity, setCacheOpacity] = useState("opacity-0");

  function toggleCacheOpacity() {
    cacheOpacity === "opacity-0"
      ? setCacheOpacity("opacity-60")
      : setCacheOpacity("opacity-0");
  }

  const [svgOpacity, setSvgOpacity] = useState("opacity-0");

  function toggleSvgOpacity() {
    svgOpacity === "opacity-0"
      ? setSvgOpacity("opacity-60")
      : setSvgOpacity("opacity-0");
  }

  function togglePalette() {
    toggleCacheOpacity();
    toggleSvgOpacity();
  }

  return (
    <>
      <div
        onMouseEnter={togglePalette}
        onMouseLeave={togglePalette}
        className="palette-container lg:hover:shadow-xl sm:grid-cols-3 md:shadow-md lg:h-40 lg:hover:h-64 lg:grid-cols-9"
      >
        <ColorBlock color={color} svgOpacity={svgOpacity} value="100" />
        <ColorBlock color={color} svgOpacity={svgOpacity} value="200" />
        <ColorBlock color={color} svgOpacity={svgOpacity} value="300" />
        <ColorBlock color={color} svgOpacity={svgOpacity} value="400" />
        <ColorBlock color={color} svgOpacity={svgOpacity} value="500" />
        <ColorBlock color={color} svgOpacity={svgOpacity} value="600" />
        <ColorBlock color={color} svgOpacity={svgOpacity} value="700" />
        <ColorBlock color={color} svgOpacity={svgOpacity} value="800" />
        <ColorBlock color={color} svgOpacity={svgOpacity} value="900" />
      </div>

      <div className={`cache lg:visible ${cacheOpacity}`}></div>
    </>
  );
};

export default Palette;
