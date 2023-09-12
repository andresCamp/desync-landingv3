import React, { ReactNode } from 'react'

interface FooterSectionProps {
    title: string;
    email: string;
}

const FooterSection: React.FC<FooterSectionProps> = ({title, email}) => {
  

    return (
    <div className='flex flex-col gap-3'>
      <h1 className='text-3xl text-slate-300'>{title}</h1>
      <p className='text-slate-400'>email: <span>{email}</span></p>
    </div>
  )
}

export default FooterSection
