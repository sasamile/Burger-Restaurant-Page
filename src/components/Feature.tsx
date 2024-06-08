import React from "react";

const Feature = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className="pt-[5rem] pb-[3rem]">
      {/**Heading */}
      <h1 className="heading">
        burgers made with <br /> love and
        <span className="text-red-800"> Care </span>
      </h1>
      {/**Cards */}
      <div className="w-[90%] md:w-[80%] mt-[3rem] md:mt-[5rem] mb-[3rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[3rem] ">
        {children}
      </div>
    </div>
  );
};

export default Feature;
