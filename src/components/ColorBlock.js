import React, {useState} from "react";

const ColorBlock = ({ color, value, svgOpacity }) => {
  const valueNum = parseInt(value);
  const svgColor = valueNum > 500 ? "white" : "gray-900";


  // ---- Copying to clpboard and displaying info
  const infoDiv = React.createRef();

  const [copiedEl, setCopiedEl] = useState('');

  function svgClick(element) {

    // Telling user that Hex or Name of the color is copied
    setCopiedEl(element);
    infoDiv.current.classList.add("pop");
    infoDiv.current.addEventListener("animationend", (e) => {
      e.target.classList.remove("pop");
    });
  }

  return (
    <div className={`color-block px-4 bg-${color}-${value} text-${svgColor}`}>
      <div className={`relative svg-container lg:flex-col lg:${svgOpacity}`}>
        <div
          ref={infoDiv}
          className="absolute invisible top-50% z-10 p-2 info text-sm bg-white text-gray-900 border border-gray-100 rounded-md shadow-xl"
        >
          {copiedEl} copied !
        </div>
        <svg
          onClick={() => svgClick('Hex')}
          className="svg"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"></path>
        </svg>
        <svg
          onClick={() => svgClick('Name')}
          className="svg"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"></path>
        </svg>
      </div>
    </div>
  );
};

export default ColorBlock;
