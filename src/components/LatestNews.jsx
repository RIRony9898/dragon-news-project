import React from "react";
import Marquee from "react-fast-marquee";

const LatestNews = () => {
  return (
    <div className="w-11/12 mx-auto my-5 flex gap-5 bg-base-200 px-3 py-2">
      <p className="bg-secondary text-base-100 font-medium text-xl px-3 py-2">Latest</p>

      <Marquee>
        <div className="flex gap-5">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere,
            eius?
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere,
            eius?
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere,
            eius?
          </p>
        </div>
      </Marquee>
    </div>
  );
};

export default LatestNews;
