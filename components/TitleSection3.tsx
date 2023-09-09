'use client'
import { useRef, useEffect, Children, useState } from "react";
import { motion, useAnimation, useInView, useMotionValueEvent, useScroll } from "framer-motion";
import TitleLine from "./TitleLine";

const sentences = [
    {
        title: "Step into an era where AI reshapes the boundaries of what's possible.",
        id: "1",
    },
    {
        title: "With us, your ambition isn't just an aspiration—it's your greatest capital.",
        id: "2",
    },
    {
        title: "We're not just implementing technology; we're leveling the playing field for every organization.",
        id: "3",
    },

]



const TitleSection3: React.FC = () => {
    const ref = useRef<HTMLElement>(null)
    const isInView = useInView(ref, {margin: "-75% 0px -75% 0px"})
    const [isWhite, setIsWhite] = useState(true)

    useEffect(()=>{

        if(isInView) {
            setIsWhite(prev=>!prev)
        }


    }, [isInView])

    console.log(isWhite)
    
  return (
    <div className='mt-16'>
       
       

        {/* <motion.span
                className={isWhite ? 
                    "py-16 text-6xl transition-colors text-gray-400" 
                    : "py-16 text-6xl transition-colors text-white"
                }
                ref={ref} 
            >
                <h1>
                Step into an era where AI reshapes the boundaries of what&apos;s possible.

                </h1>
            </motion.span> */}

        {sentences.map((sentence) => (
            <span key={sentence.id}>
                <TitleLine id={sentence.id} title={sentence.title}/>
            </span>
        ))}

    </div>
  );
};

export default TitleSection3;
