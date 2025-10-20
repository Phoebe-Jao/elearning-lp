import { useRef } from "react"
import { motion, useInView } from "motion/react"

const ScrollFadeInUp = ({ children, duration = 1, delay = 0.2 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: duration, delay: delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollFadeInUp;