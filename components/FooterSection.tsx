import React, { ReactNode } from 'react'

interface FooterSectionProps {
    title: string;
    options: string[];
}

const FooterSection: React.FC<FooterSectionProps> = ({title, options}) => {
  
    const footerOptions = options.map((option, index) => (
        <p className="font-light text-slate-500" key={index}>{option}</p>
    ))

    return (
    <div className='flex flex-col gap-3'>
      <h1 className='text-xl text-slate-300'>{title}</h1>
      {footerOptions}
    </div>
  )
}

export default FooterSection
