import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image'
import React, { useRef } from 'react'
import Marquee from "react-fast-marquee";
// import logo from '../public/homeLogos/desyncLandingLogo1.png'
// import logo from '../public/homeLogos/desyncLandingLogo10.png'

interface LogoLineTypes  {
  start: number,
  end: number,
  isLeft: boolean
}

const LogoLine: React.FC<LogoLineTypes> = ({start, end, isLeft}) => {

  const ref = useRef(null)

  const {scrollYProgress} = useScroll({
    target: ref,
  })

  // const xLeft = useTransform(scrollYProgress, [0.75, 1], ["0%", "-100%"]) 
  // const xRight = useTransform(scrollYProgress, [0.75, 1], ["0%", "100%"])
  const xLeft = useTransform(scrollYProgress, [0, 0.5, 1], ["0%", "0%", "-100%"]);
  const xRight = useTransform(scrollYProgress, [0, 0.5, 1], ["0%", "0%", "100%"]);
  
  
   

  // const chosenSaturation = useTransform(scrollYProgress, [0.25, 1], ["0%", "100%"]) 

  const x = isLeft ? xLeft : xRight
  


  // const numbers = Array.from({ length: 6 }, (_, i) => i + 1); // Generates an array [1, 2, ..., 36]

  const numbers = Array.from({ length: end - start + 1 }, (_, i) => i + start);

  const images = numbers.map(num => {

    const imagePath = `/homeLogos/desyncLandingLogo${num}.png`;

    return(
      <div key={num} className="h-auto w-auto"> {/* Fixed height and width */}
        <img
          src={imagePath}
          alt={`landing logo ${num}`}
        />
        {/* <Image
          src={imagePath}
          layout="fill" // Takes up the full width and height of its container
          objectFit="cover" // Covers the entire content box, potentially cropping the image
          alt={`landing logo ${num}`}
        /> */}
      </div>
    )
  });

  return (
      <motion.div 
        ref={ref}
        style={{x}}
        className="flex gap-3"
      >
        {images}
      </motion.div>
  )
}

export default LogoLine