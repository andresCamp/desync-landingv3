import Image from 'next/image'
import React from 'react'

interface GridItemTypes {
  logo: {
    id: number;
    title: string;
    src: string;
    isChosen: boolean;
  },
  onLogoClick: any,

}

const GridItem: React.FC<GridItemTypes> = ({ logo, onLogoClick }) => {
  return <div onClick={() => onLogoClick(logo.id)}>{logo.title}</div>;
};

export default GridItem



// interface LogoImgTypes  {
//     src: string,
//     alt: string,
//     isChosen: boolean,
//     // isHovered: boolean,
//   }
  
// const LogoImg: React.FC<LogoImgTypes> = ({src, alt, isChosen}) => {

//     //scroll opacity

//   return (
//     <div>
//       <Image
//             className={`transition hover:shadow-xl  ease-in duration-500 ${isChosen  ? 'filter grayscale-0' : 'filter grayscale'}`}
//             src={src}
//             width={500}
//             height={500}
//             alt={alt}
//         />
//     </div>
//   )
// }

// export default LogoImg
