'use client'
import { useRef, useEffect, Children } from "react";
import { motion, useAnimation, useInView, useMotionValueEvent, useScroll } from "framer-motion";

const ScrollParallax: React.FC = () => {
    
    const ref = useRef<HTMLDivElement>(null)
    const isInView = useInView(ref, {margin: "-50% 0px -50% 0px"})
    
    
    const { scrollY } = useScroll()

    // console.log(isInView)


    const { scrollYProgress} = useScroll({
        target: ref,
        offset: ["1 0"]
    })

  return (
    <div className='mt-36'>
       
        <motion.h1
            className={isInView ? 
                "py-16 text-5xl transition-colors text-white" 
                : "py-16 text-5xl transition-colors text-gray-400"
            }
            ref={ref} 
        >
            Step into an era where AI reshapes the boundaries of what&apos;s possible. 
        </motion.h1>
    

        <motion.h1 
            className={isInView ? 
            "py-16 text-5xl transition-colors text-white" 
            : "py-16 text-5xl transition-colors text-gray-400"
            }
            ref={ref} 
        >
            With us, your ambition isn&apos;t just an aspiration—it&apos;s your greatest capital. 
        </motion.h1>

        <motion.h1 
            className={isInView ? 
            "py-16 text-5xl transition-colors text-white" 
            : "py-16 text-5xl transition-colors text-gray-400"
            }
            ref={ref} 
        >
            We&apos;re not just implementing technology; we&apos;re leveling the playing field for every organization.
        </motion.h1>
    </div>
  );
};

export default ScrollParallax;
