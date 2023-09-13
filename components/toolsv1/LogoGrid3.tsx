'use client'
import React, { useEffect, useRef, useState } from 'react'
import GridItem from './GridItem';



interface LogoGrid3Types {
  logos: {
    id: number;
    src: string;
    title: string;
    isChosen: boolean;
  }[],
  onLogoClick: string,
}

const LogoGrid3: React.FC<LogoGrid3Types> = ({ logos, onLogoClick }) => {
  return (
    <div className="grid grid-cols-3">
      {logos.map((logo) => (
        <GridItem key={logo.id} logo={logo} onLogoClick={onLogoClick} />
      ))}
    </div>
  );
};

export default LogoGrid3




// interface LogoGrid2Types {
//   first: string,
//   second: string,
//   third: string,
// }


  
// const LogoGrid2: React.FC<LogoGrid2Types> = ({first, second, third}) => {

//   const logoSelection = [logos[Number(first)+1], logos[Number(second)+1], logos[Number(third)+1]]

//     // const [isHovered, setIsHovered] = useState(false);

//     // const handleMouseEnter = () => {
//     //     setIsHovered(true);
//     // };

//     // const handleMouseLeave = () => {
//     //     setIsHovered(false);
//     // };

//     const images = logoSelection.map(logo => {
  
//       return(
//         <div key={logo.id} className=""> {/* Fixed height and width */}
//           <LogoImg2
//             src={logo.src}
//             alt={`landing logo ${logo.id}`}
//             isChosen={logo.isChosen}
//             // isHovered={isHovered}
//           />
//         </div>
//       )
//     });

//     // useEffect(()=>{
//     //     logos.sort(() => Math.random() - 0.5);

//     // },[])

//   return (
//     <div 
//         className='grid grid-cols-3 gap-3  rounded-xl'
//         // onMouseEnter={handleMouseEnter}
//         // onMouseLeave={handleMouseLeave}
//     >
//       {images}
//     </div>
//   )
// }

// export default LogoGrid2






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
