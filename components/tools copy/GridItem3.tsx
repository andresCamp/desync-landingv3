'use client'
import React from 'react';
import { GridItemProps } from './types'
import Image from 'next/image';


const GridItem: React.FC<GridItemProps> = ({ logo, setSelectedLogo, selectedLogo }) => {
  const isSelected = selectedLogo?.id === logo.id;
  console.log(selectedLogo)
  return (
    <div 
      onClick={() => setSelectedLogo(logo)} 
      className={`cursor-pointer hover:shadow-lg hover:rounded-2xl ${isSelected ? 'shadow-2xl rounded-xl' : ''}`}>
      <Image src={logo.src} alt={logo.name} width={200} height={200} className="w-full h-full" />
    </div>
  );
};

export default GridItem;

// import Image from 'next/image'
// import React from 'react'

// interface GridItemTypes {
//   logo: {
//     id: number;
//     title: string;
//     src: string;
//     isChosen: boolean;
//   },
//   onLogoClick: any,

// }

// const GridItem: React.FC<GridItemTypes> = ({ logo, onLogoClick }) => {
//   return <div onClick={() => onLogoClick(logo.id)}>{logo.title}</div>;
// };

// export default GridItem



// // interface LogoImgTypes  {
// //     src: string,
// //     alt: string,
// //     isChosen: boolean,
// //     // isHovered: boolean,
// //   }
  
// // const LogoImg: React.FC<LogoImgTypes> = ({src, alt, isChosen}) => {

// //     //scroll opacity

// //   return (
// //     <div>
// //       <Image
// //             className={`transition hover:shadow-xl  ease-in duration-500 ${isChosen  ? 'filter grayscale-0' : 'filter grayscale'}`}
// //             src={src}
// //             width={500}
// //             height={500}
// //             alt={alt}
// //         />
// //     </div>
// //   )
// // }

// // export default LogoImg
