import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image'
import React, { useRef } from 'react'
// import logo from '../public/homeLogos/desyncLandingLogo1.png'
// import logo from '../public/homeLogos/desyncLandingLogo10.png'

interface LogoLineTypes  {
  start: number,
  end: number,
}

const LogoLine: React.FC<LogoLineTypes> = ({start, end}) => {

  const ref = useRef(null)

  const {scrollYProgress} = useScroll({
    target: ref,
  })

  // const xLeft = useTransform(scrollYProgress, [0.75, 1], ["0%", "-100%"]) 
  // const xRight = useTransform(scrollYProgress, [0.75, 1], ["0%", "100%"])
  const xLeft = useTransform(scrollYProgress, [0, 0.5, 1], ["0%", "0%", "-100%"]);
  const xRight = useTransform(scrollYProgress, [0, 0.5, 1], ["0%", "0%", "100%"]);
  
  
   

  // const chosenSaturation = useTransform(scrollYProgress, [0.25, 1], ["0%", "100%"]) 

  // const x = isLeft ? xLeft : xRight
  


  // const numbers = Array.from({ length: 6 }, (_, i) => i + 1); // Generates an array [1, 2, ..., 36]

  const numbers = Array.from({ length: end - start + 1 }, (_, i) => i + start);

  const images = numbers.map(num => {

    const imagePath = `/homeLogos/desyncLandingLogo${num}.png`;

    return(
      <div key={num} className="h-48 w-auto"> {/* Fixed height and width */}
        {/* <img
          src={imagePath}
          alt={`landing logo ${num}`}
        /> */}
        <Image
          src={imagePath}
          width={500}
          height={500}
          alt={`landing logo ${num}`}
        />
      </div>
    )
  });

  return (
      <div className="flex">
        {images}
      </div>
  )
}

export default LogoLine