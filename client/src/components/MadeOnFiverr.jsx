import { madeOnFiverrImages } from "@/helpers/madeOnFiverr";
import {madeOnFiverrHeart, madeOnFiverrDot} from '../helpers/Images'
import { useState } from "react";
const MadeOnFiverr = (props) => {
  return (
    <section className="w-full">
      <h1 className="text-6xl text-[#414045]">Made on Fiverr</h1>
      <div className="" style={{ columns: props.columnCount, columnGap: 0 }}>
        {madeOnFiverrImages.map((item, index) => {
          return (
            <div
              key={index}
              className="relative group " // Using group for hover effect
              style={{ padding: props.gap / 2 }}
            >
              <img
                style={{ padding: props.gap / 2 }}
                src={item.image}
                alt=""
                className="block w-full rounded-2xl"
              />
              <div
                className="absolute inset-0 flex flex-col items-center justify-center text-white opacity-0 rounded-2xl group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: "rgba(0, 0, 0, 0.3)" }} // Optional background color for text visibility
              >
                <div className="relative w-full h-full">
                
                <div className="absolute top-4 right-5 ">
                  <img src={madeOnFiverrHeart} className="p-2 bg-white rounded-full w-10 h-10" alt="" />
                </div>
                <div className=" absolute bottom-5 w-full flex px-5 items-center">
                <p className="px-3">{item.title}</p>
                <div className="hover:bg-gray-500  h-10 rounded-full w-10 flex justify-center items-center">
                <img src={madeOnFiverrDot} className="" alt="" />
                </div>
                </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default MadeOnFiverr;
