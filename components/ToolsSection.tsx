import React from 'react'
import LogoLine from './LogoLine'

const ToolsSection = () => {
  return (
    <div className="my-32 relative">

      <div className="p-4 md:px-8 w-full sm:w-max bg-black flex items-center justify-center absolute top-1/2 left-1/2 z-50 transform -translate-x-1/2 -translate-y-1/2 ring-8 ring-opacity-75 ring-white rounded-md">
        <h3 className="text-xl md:text-2xl lg:text-4xl text-blue-400">
          We&apos;ve tested hundreds of tools so you dont have to.
        </h3>
      </div>
      
   
        <LogoLine
          start={1}
          end={7}
        />
        <LogoLine
          start={26}
          end={36}
        />
        <LogoLine
          start={7}
          end={18}
        />
        <LogoLine
          start={12}
          end={18}
        />

        <LogoLine
          start={1}
          end={7}
        />

        <LogoLine
          start={15}
          end={26}
        />
        <LogoLine
          start={20}
          end={32}
        />
        <LogoLine
          start={26}
          end={36}
        />
    </div>
  )
}

export default ToolsSection
