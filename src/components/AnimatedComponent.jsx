import { motion, useReducedMotion } from "framer-motion";

const AnimatedComponent = ({ tag, variants, ...otherProps }) => {
  const MotionTag = motion[tag];
  const prefersReducedMotion = useReducedMotion();

  const shouldAnimate = prefersReducedMotion ? "visible" : variants;

  return (
    <MotionTag
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, threshold: 0.5 }}
      variants={shouldAnimate}
      {...otherProps}
    ></MotionTag>
  );
};

export default AnimatedComponent;
