import React from "react";


const Palette = ({color}) => {

    const firstLetterCap = (string) => {
            return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const upcaseColor = firstLetterCap(color)
  return (
    <div className="flex border-t border-b py-4 px-2">
      <h2 className="mr-4 text-xl font-semibold">Gray {color}</h2>
      <div className="flex w-full">
  
        <div className={`flex-grow bg-${color}-100 h-24`}></div>
        <div className={`flex-grow bg-${color}-200 h-24`}></div>
        <div className={`flex-grow bg-${color}-300 h-24`}></div>
        <div className={`flex-grow bg-${color}-400 h-24`}></div>
        <div className={`flex-grow bg-${color}-500 h-24`}></div>
        <div className={`flex-grow bg-${color}-600 h-24`}></div>
        <div className={`flex-grow bg-${color}-700 h-24`}></div>
        <div className={`flex-grow bg-${color}-800 h-24`}></div>
        <div className={`flex-grow bg-${color}-900 h-24`}></div>

      </div>
    </div>
  );
};

export default Palette;
