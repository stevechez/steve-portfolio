import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import images from "./images";
import Image from "next/image";

export interface Image {
  image: HTMLImageElement;
  src: string;
  className?: string;
}

const LogoSlider = () => {
  //   console.log(images);

  return (
    <div>
      <div className="flex items-start bg-white-900">
        {/* <Image
              src={image}
              width={120}
              height={120}
              alt="image...."
              className=""
            /> */}

        <Image src={images} alt="" width={90} height={90} />
      </div>

      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
    </div>
  );
};
export default LogoSlider;
