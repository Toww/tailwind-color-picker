import React from "react";

const Palette = ({ color }) => {
  return (
    <div className="palette-container">
      {/* <h2 className="mr-4 text-xl font-semibold">{upcaseColor}</h2> */}
      <div className="flex w-full">
        <div className={`flex-grow bg-${color}-100 h-32 flex flex-col`}>
          <div className="hex h-1/2">Hex</div>
          <div className="name h-1/2">Name</div>
        </div>
        <div className={`flex-grow bg-${color}-200 h-32`}></div>
        <div className={`flex-grow bg-${color}-300 h-32`}></div>
        <div className={`flex-grow bg-${color}-400 h-32`}></div>
        <div className={`flex-grow bg-${color}-500 h-32`}></div>
        <div className={`flex-grow bg-${color}-600 h-32`}></div>
        <div className={`flex-grow bg-${color}-700 h-32`}></div>
        <div className={`flex-grow bg-${color}-800 h-32`}></div>
        <div className={`flex-grow bg-${color}-900 h-32`}></div>
      </div>
    </div>
  );
};

export default Palette;
