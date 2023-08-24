import { useState, useEffect } from 'react';

export default function RangeSlider({ budget, setBudget }) {
  const [deviceWidth, setDeviceWidth] = useState(4);

  useEffect(() => {
    if (window.innerWidth >= 960) {
      setDeviceWidth(13);
    }
  }, [deviceWidth]);

  return (
    <>
      <label
        htmlFor="budget-range"
        className="flex items-center gap-[14px] text-[1.5rem] font-bold text-black mb-[1rem]"
      >
        <span>Project Budget</span>
        <span className="text-[#e1520a]">${budget}</span>
      </label>
      <div className="relative h-[16px] lg:h-[52px]">
        <div className="absolute top-[0.125rem] lg:top-[6.5px] left-0 w-full h-[12px] lg:h-[39px] bg-[rgba(245,247,248,1)]  rounded-l-full rounded-r-full"></div>
        <div
          style={{
            width: `calc(${Math.round(budget / 100)}% + ${deviceWidth}px)`
          }}
          className="absolute top-[0.125rem] lg:top-[6.5px] left-0 w-full h-[12px] lg:h-[39px] bg-[rgba(0,87,255,1)] rounded-l-full rounded-r-full"
        ></div>
        <input
          type="range"
          name="budget-range"
          id="budget-range"
          min="0"
          max="10000"
          onChange={(event) => setBudget(event.target.value)}
          className="absolute bottom-0 left-0 w-full h-full opacity-0 z-10"
        />
        <div
          style={{ left: `${Math.round(budget / 100)}%` }}
          className="absolute top-0 w-[4px] lg:w-[13px] h-[16px] lg:h-[52px] bg-[rgba(47,151,247,1)] rounded-full z-[1]"
        ></div>
      </div>
    </>
  );
}
