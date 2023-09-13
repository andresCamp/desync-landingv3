import Image from 'next/image'
import React from 'react'

interface LogoImgTypes  {
    src: string,
    alt: string,
    isChosen: boolean,
    // isHovered: boolean,
  }
  
const LogoImg: React.FC<LogoImgTypes> = ({src, alt, isChosen}) => {

    //scroll opacity

  return (
    <div>
      <Image
            className={`transition hover:shadow-xl  ease-in duration-500 ${isChosen  ? 'filter grayscale-0' : 'filter grayscale'}`}
            src={src}
            width={500}
            height={500}
            alt={alt}
        />
    </div>
  )
}

export default LogoImg
