import Image from 'next/image'
import React from 'react'
import Marquee from "react-fast-marquee";
// import logo from '../public/homeLogos/desyncLandingLogo1.png'
// import logo from '../public/homeLogos/desyncLandingLogo10.png'

interface LogoLineTypes  {
  start: number,
  end: number
}

const LogoLine: React.FC<LogoLineTypes> = ({start, end}) => {

  // const numbers = Array.from({ length: 6 }, (_, i) => i + 1); // Generates an array [1, 2, ..., 36]

  const numbers = Array.from({ length: end - start + 1 }, (_, i) => i + start);

  const images = numbers.map(num => {

    const imagePath = `/homeLogos/desyncLandingLogo${num}.png`;

    return(
      <div key={num} className="h-auto w-auto"> {/* Fixed height and width */}
        <img
          src={imagePath}
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
    <Marquee>
      <div className='flex gap-3'>
        {images}
      </div>
    </Marquee>
  )
}

export default LogoLine

{/* <Image
    src={logo}
    alt='landing logo'
    width={100}
    height={100}
    /> */}