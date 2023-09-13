'use client'
import React, { useState } from 'react';
import LogoGrid from './LogoGrid4';
import { Logo, LogoGridProps } from './types'
import DetailBox from './DetailBox3';

const logos: Logo[] = [
  {
      "id": 1, 
      "name": "Notion",
      "src": "/homeLogos/desyncLandingLogo4.png", 
      "link": "https://www.notion.so/",
      "descLabel": "Common Use-Case: ",
      "desc": "A rudimentary note-taking app. Most users barely scratch the surface.",
      "useCaseLabel": "Our Secret Weapon: ",
      "useCase": "We see an infinitely customizable workspace and have built Notion into a dynamic nerve center interconnecting every aspect of our business. With customized templates, automations, and integrations, our Notion ecosystem grants an omniscient view across teams and projects.",
      "extra": ""
  },
  {
      "id": 2, 
      "name": "ChatGPT",
      "src": "/homeLogos/desyncLandingLogo24.png", 
      "link": "https://chat.openai.com",
      "descLabel": "Common Use: ",
      "desc": "A humble text generator for menial tasks.",
      "useCaseLabel": "Our Breakthrough: ",
      "useCase": "We've weaponized ChatGPT into a legion of AI specialists, dominating verticals from business coaches to software engineering.",
      "extra": {
          "text": "Even Wharton MBAs wont save you…",
          "linkText": "ChatGPT outperforms humans on Wharton MBA exam: professor",
          "link": "https://nypost.com/2023/01/23/chatgpt-outperforms-humans-on-wharton-mba-exam-professor/"
      }
  },
  {
      "id": 3,
      "name": "Claude",
      "src": "/homeLogos/desyncLandingLogo31.png",
      "link": "https://claude.ai",
      "descLabel": "Typical Use: ",
      "desc": "Who would want to use a chat gpt tool with safety features? Someone who understands that it’s context window is 4 times that of chat gpt",
      "useCaseLabel": "Our Secret: ",
      "useCase": "We've applied Claude to data analytics to distill dozens of hours of interviews into key insights in minutes. Skip the lengthy listen, never miss crucial points, and focus on what really matters—leaving competitors still listening to them.",
      "extra": ""
  },
  {
      "id": 4,
      "name": "Clay.ai",
      "src": "/homeLogos/desyncLandingLogo7.png",
      "link": "https://clay.ai",
      "descLabel": "Beyond Basic: ",
      "desc": "Clay.ai isn't just a CRM—it's your secret weapon for hyper-personalized email campaigns.",
      "useCaseLabel": "Cold Email 2.0: ",
      "useCase": "Forget ineffective cold emails. We scrape real-time data to tailor emails for each prospect, refining your lead lists to zero in on your ideal user. Save time, boost results, and outperform the competition.",
      "extra": ""
  },
  {
      "id": 5,
      "name": "Make.com",
      "src": "/homeLogos/desyncLandingLogo6.png",
      "link": "https://make.com",
      "descLabel": "Average Users: ",
      "desc": "scratch the surface of basic functions, missing enormous potential.",
      "useCaseLabel": "Automation Secret: ",
      "useCase": "Automation will be your weapon of choice as we scrape live data and infuse it into your operations, catapulting your efficiency into overdrive. Prepare for comprehensive processing of tasks, real-time updates that will turn heads, and summaries you no longer have to spend hours on. Welcome to the future of work.",
      "extra": ""
  },
  {
    "id": 6, 
    "name": "VenturusAI",
    "src": "/homeLogos/desyncLandingLogo13.png", 
    "link": "http://Venturusai.com",
    "descLabel": "Description: ",
    "desc": "VenturusAI is your oracle for business success, eliminating guesswork and transforming a single input into a cascade of actionable insights. From SWOT to PESTEL analyses and target audience identification, we do the heavy lifting so you don't have to. Why settle for intuition when you can command the future?",
    "useCaseLabel": "Why Play Business Roulette? ",
    "useCase": "Why stress over SWOT or PESTEL? With one click, VenturusAI delivers game-changing insights that'll make you the envy of the boardroom.",
    "extra": ""
}
]
const ToolsSection6 = () => {
  const [selectedLogo, setSelectedLogo] = useState<Logo>(logos[0]);
  console.log(selectedLogo)

  return (
    <div className="flex flex-col items-center sm:px-24 justify-center w-full bg-white p-8 gap-8">
      <div className="text-2xl font-bold mb-4 text-black">Title</div>
      
      <div className="flex flex-col items-center lg:items-start lg:flex-row gap-3 md:gap-8">
        <LogoGrid logos={logos} setSelectedLogo={setSelectedLogo} selectedLogo={selectedLogo} />
        <DetailBox logo={selectedLogo} />
      </div>
    </div>
  );
};

export default ToolsSection6







// import React from 'react'
// import LogoGrid3 from './LogoGrid4'
// import DetailBox from './DetailBox3'



// const logos = [
//     {
//         "id": 1, 
//         "name": "Notion",
//         "src": "/homeLogos/desyncLandingLogo4.png", 
//         "link": "https://www.notion.so/",
//         "descLabel": "Common Use-Case: ",
//         "desc": "A rudimentary note-taking app. Most users barely scratch the surface.",
//         "useCaseLabel": "Our Secret Weapon: ",
//         "useCase": "We see an infinitely customizable workspace and have built Notion into a dynamic nerve center interconnecting every aspect of our business. With customized templates, automations, and integrations, our Notion ecosystem grants an omniscient view across teams and projects.",
//         "extra": ""
//     },
//     {
//         "id": 2, 
//         "name": "ChatGPT",
//         "src": "/homeLogos/desyncLandingLogo24.png", 
//         "link": "https://chat.openai.com",
//         "descLabel": "Common Use: ",
//         "desc": "A humble text generator for menial tasks.",
//         "useCaseLabel": "Our Breakthrough: ",
//         "useCase": "We've weaponized ChatGPT into a legion of AI specialists, dominating verticals from business coaches to software engineering.",
//         "extra": {
//             "text": "Even Wharton MBAs wont save you…",
//             "linkText": "ChatGPT outperforms humans on Wharton MBA exam: professor",
//             "link": "https://nypost.com/2023/01/23/chatgpt-outperforms-humans-on-wharton-mba-exam-professor/"
//         }
//     },
//     {
//         "id": 3,
//         "name": "Claude",
//         "src": "/homeLogos/desyncLandingLogo31.png",
//         "link": "https://claude.ai",
//         "descLabel": "Typical Use: ",
//         "desc": "Who would want to use a chat gpt tool with safety features? Someone who understands that it’s context window is 4 times that of chat gpt",
//         "useCaseLabel": "Our Secret: ",
//         "useCase": "We've applied Claude to data analytics to distill dozens of hours of interviews into key insights in minutes. Skip the lengthy listen, never miss crucial points, and focus on what really matters—leaving competitors still listening to them.",
//         "extra": ""
//     },
//     {
//         "id": 4,
//         "name": "Clay.ai",
//         "src": "/homeLogos/desyncLandingLogo7.png",
//         "link": "https://clay.ai",
//         "descLabel": "Beyond Basic: ",
//         "desc": "Clay.ai isn't just a CRM—it's your secret weapon for hyper-personalized email campaigns.",
//         "useCaseLabel": "Cold Email 2.0: ",
//         "useCase": "Forget ineffective cold emails. We scrape real-time data to tailor emails for each prospect, refining your lead lists to zero in on your ideal user. Save time, boost results, and outperform the competition.",
//         "extra": ""
//     },
//     {
//         "id": 5,
//         "name": "Make.com",
//         "src": "/homeLogos/desyncLandingLogo6.png",
//         "link": "https://make.com",
//         "descLabel": "Average Users: ",
//         "desc": "scratch the surface of basic functions, missing enormous potential.",
//         "useCaseLabel": "Automation Secret: ",
//         "useCase": "Automation will be your weapon of choice as we scrape live data and infuse it into your operations, catapulting your efficiency into overdrive. Prepare for comprehensive processing of tasks, real-time updates that will turn heads, and summaries you no longer have to spend hours on. Welcome to the future of work.",
//         "extra": ""
//     }
// ]


// const ToolsSection = () => {
//     const [selectedLogo, setSelectedLogo] = React.useState(null);
  
//     // const handleLogoClick = (logoId) => {
//     //   const logoDetails = logos.find((logo) => logo.id === logoId);
//     //   setSelectedLogo(logoDetails);
//     // };
  
//     return (
//       <>
//         <div>title</div>
//         {/* <LogoGrid3 logos={logos} onLogoClick={handleLogoClick} /> */}
//         {/* <DetailBox logoDetails={selectedLogo} /> */}
//       </>
//     );
//   };










// // const ToolsSection4 = () => {
// //   return (
// //     <div className='w-full flex flex-col gap-8 p-8 items-center justify-center bg-white z-10'>

// //         <div className='text-4xl font-medium text-black'>
// //             <h2>Skip the Experiments: We&apos;ve Pre-Tested AI Tools for Your Success</h2>
// //         </div>

// //         <div className='sm:w-1/3'>
// //             <label className='text-black'>Collaborate with your Team</label>
// //             <LogoGrid2
// //                 first='1'
// //                 second='2'
// //                 third='3'
// //             />
// //         </div>
// //         <div className='sm:w-1/3'>
// //         <label className='text-black'>Reach new Customers</label>

// //             <LogoGrid2
// //                 first='4'
// //                 second='5'
// //                 third='6'
// //             />
// //         </div>
// //         <div className='sm:w-1/3'>
// //         <label className='text-black'>Keep in touch with current Customers</label>

// //             <LogoGrid2
// //                 first='7'
// //                 second='8'
// //                 third='9'
// //             />
// //         </div>

    

// //     </div>
// //   )
// // }

// // export default ToolsSection4
