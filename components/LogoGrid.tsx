'use client'
import React, { useEffect, useRef, useState } from 'react'
import LogoImg from './LogoImg';

const logos = [
    {"id": 1, "src": "/homeLogos/desyncLandingLogo1.png", "isChosen": true},
    {"id": 2, "src": "/homeLogos/desyncLandingLogo2.png", "isChosen": true},
    {"id": 3, "src": "/homeLogos/desyncLandingLogo3.png", "isChosen": true},
    {"id": 4, "src": "/homeLogos/desyncLandingLogo4.png", "isChosen": true},
    {"id": 5, "src": "/homeLogos/desyncLandingLogo5.png", "isChosen": true},
    {"id": 6, "src": "/homeLogos/desyncLandingLogo6.png", "isChosen": true},
    {"id": 7, "src": "/homeLogos/desyncLandingLogo7.png", "isChosen": true},
    {"id": 8, "src": "/homeLogos/desyncLandingLogo8.png", "isChosen": true},
    {"id": 9, "src": "/homeLogos/desyncLandingLogo9.png", "isChosen": true},
    {"id": 10, "src": "/homeLogos/desyncLandingLogo10.png", "isChosen": true},
    {"id": 11, "src": "/homeLogos/desyncLandingLogo11.png", "isChosen": true},
    {"id": 12, "src": "/homeLogos/desyncLandingLogo12.png", "isChosen": true},
    {"id": 13, "src": "/homeLogos/desyncLandingLogo13.png", "isChosen": true},
    {"id": 14, "src": "/homeLogos/desyncLandingLogo14.png", "isChosen": true},
    {"id": 15, "src": "/homeLogos/desyncLandingLogo15.png", "isChosen": true},
    {"id": 16, "src": "/homeLogos/desyncLandingLogo16.png", "isChosen": true},
    {"id": 17, "src": "/homeLogos/desyncLandingLogo17.png", "isChosen": true},
    {"id": 18, "src": "/homeLogos/desyncLandingLogo18.png", "isChosen": true},
    {"id": 19, "src": "/homeLogos/desyncLandingLogo19.png", "isChosen": true},
    {"id": 20, "src": "/homeLogos/desyncLandingLogo20.png", "isChosen": true},
    {"id": 21, "src": "/homeLogos/desyncLandingLogo21.png", "isChosen": true},
    {"id": 22, "src": "/homeLogos/desyncLandingLogo22.png", "isChosen": true},
    {"id": 23, "src": "/homeLogos/desyncLandingLogo23.png", "isChosen": true},
    {"id": 24, "src": "/homeLogos/desyncLandingLogo24.png", "isChosen": true},
    {"id": 25, "src": "/homeLogos/desyncLandingLogo25.png", "isChosen": true},
    {"id": 26, "src": "/homeLogos/desyncLandingLogo26.png", "isChosen": true},
    {"id": 27, "src": "/homeLogos/desyncLandingLogo27.png", "isChosen": true},
    {"id": 28, "src": "/homeLogos/desyncLandingLogo28.png", "isChosen": true},
    {"id": 29, "src": "/homeLogos/desyncLandingLogo29.png", "isChosen": true},
    {"id": 30, "src": "/homeLogos/desyncLandingLogo30.png", "isChosen": true},
    {"id": 31, "src": "/homeLogos/desyncLandingLogo31.png", "isChosen": true},
    {"id": 32, "src": "/homeLogos/desyncLandingLogo32.png", "isChosen": true},
    {"id": 33, "src": "/homeLogos/desyncLandingLogo33.png", "isChosen": true}
]

  
const LogoGrid = () => {

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const images = logos.map(logo => {
  
      return(
        <div key={logo.id} className=""> {/* Fixed height and width */}
          <LogoImg
            src={logo.src}
            alt={`landing logo ${logo.id}`}
            isChosen={logo.isChosen}
            isHovered={isHovered}
          />
        </div>
      )
    });

    useEffect(()=>{
        logos.sort(() => Math.random() - 0.5);

    },[])

  return (
    <div 
        className='grid grid-cols-6 gap-3  rounded-xl'
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
    >
      {images}
    </div>
  )
}

export default LogoGrid






// import { motion, useScroll, useTransform } from 'framer-motion';
// import Image from 'next/image'
// import LogoImg from './LogoImg';
// // import logo from '../public/homeLogos/desyncLandingLogo1.png'
// // import logo from '../public/homeLogos/desyncLandingLogo10.png'

// interface LogoLineTypes  {
//   start: number,
//   end: number,
// }

// const LogoLine: React.FC<LogoLineTypes> = ({start, end}) => {

//   const ref = useRef(null)

//   const {scrollYProgress} = useScroll({
//     target: ref,
//   })

//   // const xLeft = useTransform(scrollYProgress, [0.75, 1], ["0%", "-100%"]) 
//   // const xRight = useTransform(scrollYProgress, [0.75, 1], ["0%", "100%"])
//   const xLeft = useTransform(scrollYProgress, [0, 0.5, 1], ["0%", "0%", "-100%"]);
//   const xRight = useTransform(scrollYProgress, [0, 0.5, 1], ["0%", "0%", "100%"]);
  
  
   

//   // const chosenSaturation = useTransform(scrollYProgress, [0.25, 1], ["0%", "100%"]) 

//   // const x = isLeft ? xLeft : xRight
  


//   // const numbers = Array.from({ length: 6 }, (_, i) => i + 1); // Generates an array [1, 2, ..., 36]

//   const numbers = Array.from({ length: end - start + 1 }, (_, i) => i + start);

//   const images = numbers.map(num => {

//     const imagePath = `/homeLogos/desyncLandingLogo${num}.png`;

//     return(
//       <div key={num} className="h-48 w-auto"> {/* Fixed height and width */}
//         {/* <img
//           src={imagePath}
//           alt={`landing logo ${num}`}
//         /> */}
//         <LogoImg
//           src={imagePath}
//         />
//         <Image
//           width={500}
//           height={500}
//           alt={`landing logo ${num}`}
//         />
//       </div>
//     )
//   });

//   return (
//       <div className="flex">
//         {images}
//       </div>
//   )
// }
