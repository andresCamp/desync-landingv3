import React from 'react'
import TeamBio from './TeamBio'
import CTA from '@/components/CTA'


const page = () => {
  return (
    <div className='flex flex-col items-center gap-8 my-16 justify-center'>
      <h1 className='text-5xl'>Meet the Team</h1>

      <div className='flex flex-row px-16 justify-center gap-16'>
        <TeamBio 
          name="Mark"
          title="Co-Founder & CEO"
          subtitle="The Catalyst"
          exp="Sales, Fundraising, Startup Building, Prompt Engineer, Growth hacker"
          desc="Coach at Alchemist accelerator, Serial Founder, Investor at NDVC.  Specializes in scaling and helping with fundraising for early stage ventures. "
          tool="Clay"
          toolNum="7"
        />
        <TeamBio 
          name="Andrés"
          title="Co-Founder & CTO"
          subtitle="The Maverick"
          exp="Startup Building, Full-Stack Development, Project Management, SME, ESG, Logistics"
          desc="Driving Business Optimization through AI, with a focus on Mexico's market."
          tool="MidJourney"
          toolNum="22"
        />
        <TeamBio 
          name="Justin"
          title="Co-Founder & COO"
          subtitle="The Prodigy"
          exp="Joined the start-up movement in May. Got hired by an industry giant in June (Retirement solutions). Founded a start-up in July."
          desc=" In London closing deals and seeing the world looking for new opportunities for us to explore!"
          tool="ChatGPT"
          toolNum="24"
        />
      </div>


      <CTA
        title='Prepare for a Mindshift'
        subtitle="Ready for transformative solutions that redefines what's possible? Let's embark on this journey together."
      />


    </div>
  )
}

export default page
