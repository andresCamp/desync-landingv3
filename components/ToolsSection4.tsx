import React from 'react'
import LogoGrid2 from './LogoGrid2'

const ToolsSection4 = () => {
  return (
    <div className='w-full flex flex-col gap-8 p-8 items-center justify-center bg-white z-10'>

        <div className='text-4xl font-medium text-black'>
            <h2>Skip the Experiments: We&apos;ve Pre-Tested AI Tools for Your Success</h2>
        </div>

        <div className='w-1/3'>
            <label className='text-black'>Collaborate with your Team</label>
            <LogoGrid2
                first='1'
                second='2'
                third='3'
            />
        </div>
        <div className='w-1/3'>
        <label className='text-black'>Reach new Customers</label>

            <LogoGrid2
                first='4'
                second='5'
                third='6'
            />
        </div>
        <div className='w-1/3'>
        <label className='text-black'>Keep in touch with current Customers</label>

            <LogoGrid2
                first='7'
                second='8'
                third='9'
            />
        </div>

    </div>
  )
}

export default ToolsSection4
