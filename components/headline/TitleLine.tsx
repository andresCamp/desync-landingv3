'use client'
import { useRef, useState, useEffect } from "react";
import { motion, useAnimation, useInView, useMotionValueEvent, useScroll } from "framer-motion";

type Props = {
    title: String
    id: String
}

const TitleLine: React.FC<Props> = ({title, id}) => {    
    const ref = useRef<HTMLElement>(null)
    const isInView = useInView(ref, {margin: "-65% 0px -35% 0px"})

    const [isInit, setIsInit] = useState(id==="1")

    useEffect(()=>{
        if(id==="1" && isInView){
            setIsInit(false)
        }
    }, [isInView])

    return (
        <div className='w-3/4 mx-16'>


            {isInit ? 
            
                <motion.span ref={ref} className="py-16 text-6xl transition-colors text-white">
                    <h1>
                        {title}
                    </h1>
                </motion.span>

            :
                
                <motion.span
                    className={isInView ? 
                        "py-16 text-6xl transition-colors text-white" 
                        : "py-16 text-6xl transition-colors text-gray-400"
                    }
                    ref={ref} 
                >
                    <h1>
                    {title}
            
                    </h1>
            </motion.span>
        
            }

    </div>
    )
}

export default TitleLine



{/* <motion.h1
    className={isInView ? 
        "py-16 text-5xl transition-colors text-white" 
        : "py-16 text-5xl transition-colors text-gray-400"
    }
    ref={ref} 
>

        {title}
</motion.h1> */}