import Image from 'next/image'
import React from 'react'

interface LogoImgTypes  {
    src: string,
    alt: string,
    isChosen: boolean,
    isHovered: boolean,
  }
  
const LogoImg: React.FC<LogoImgTypes> = ({src, alt, isChosen, isHovered}) => {

    //scroll opacity

  return (
    <div>
      <Image
            className={`transition hover:opacity-0 ease-in duration-10000 ${isChosen && isHovered ? 'filter grayscale-0' : 'filter grayscale'}`}
            src={src}
            width={500}
            height={500}
            alt={alt}
        />
    </div>
  )
}

export default LogoImg
