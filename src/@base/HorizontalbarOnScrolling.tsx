'use client'
import {motion, useScroll} from 'framer-motion'
interface IProps {
  children: React.ReactNode;
}
const HorizontalOnScrolling = ({ children }: IProps) => {
    const {scrollYProgress} =useScroll()
    return (
      <>
        <motion.div
          id="horizontal-on-scrolling"
          style={{
            scaleX: scrollYProgress,
            position: "fixed",
            // top: 65,
            left: 0,
            width: "100%",
            height: 6,
            originX: 0,
            backgroundColor: "#3B9DF8",
          }}
          className='max-sm:top-14 top-[65px]'
        />
        {children}
      </>
    );
};

export default HorizontalOnScrolling;