import Image from "next/image";
import React from "react";

const Banner = ({ image }) => {
  return (
    <div className="relative w-full aspect-video overflow-hidden mt-5">
      <Image src={image} className="object-cover" />
    </div>
  );
};

export default Banner;
