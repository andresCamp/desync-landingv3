import React, { ReactNode } from 'react'

interface FooterSectionProps {
    title: string;
    options: string[];
}

const FooterSection: React.FC<FooterSectionProps> = ({title, options}) => {
  
    const footerOptions = options.map((option, index) => (
        <p className="font-sans font-light" key={index}>{option}</p>
    ))

    return (
    <div className='flex flex-col gap-3'>
      <h3 className='text-xl text-slate-700'>{title}</h3>
      {footerOptions}
    </div>
  )
}

export default FooterSection
