import React from "react";
import { assets } from "../assets/assets";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Result = () => {
  const { resultImage, image } = useContext(AppContext);

  return (
    <div className="mx-4 my-3 lg:mx-44 mb-14 min-h-[75vh]">
      <div className="bg-white rounded-lg px-6 py-8 drop-shadow-sm">
        {/* Image Container */}
        <div className="flex flex-col sm:grid grid-cols-2 gap-8">
          {/* ----------------- Left side------ */}
          <div>
            <p className="text-gray-600 font-semibold mb-2">Original</p>
            <img
              className="rounded-md border"
              src={image ? URL.createObjectURL(image) : ""}
              alt=""
            />
          </div>
          {/* Right Side */}
          <div className="flex flex-col">
            <p className="text-gray-600 font-semibold mb-2">
              Background Removed
            </p>
            <div className="rounded-md border border-gray-300 h-full relative bg-layer overflow-hidden">
              <img src={resultImage ? resultImage : ""} alt="" />
              {!resultImage && image && (
                <div className="absolute right-1/2 bottom-1/2 transform translate-x-1/2 translate-y-1/2">
                  <div className="border-4 border-violet-600 w-12 h-12 rounded-full justify-center border-t-transparent animate-spin "></div>
                </div>
              )}
            </div>
          </div>
        </div>
        {/* ---Button--- */}
        {resultImage && (
          <div className="flex justify-center sm:justify-end items-center flex-wrap gap-4 mt-6">
            <button className="px-8 py-2.5 text-violet-600 text-sm border border-violet-600 cursor-pointer rounded-full hover:scale-105 transition-all duration-500">
              try another image
            </button>
            <a
              href={resultImage}
              download
              className="px-8 py-2.5 text-white text-sm bg-gradient-to-r from-violet-600 to-fuchsia-500 rounded-full hover:scale-90 transition-all duration-300"
            >
              Download Image
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Result;
