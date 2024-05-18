import { motion, useAnimationControls } from "framer-motion";
import { useEffect, useState } from "react";
export default function TextSpan({ children }) {
  const [isPlay, setIsPlay] = useState(false);
  const controls = useAnimationControls();
  const rubberBand = () => {
    controls.start({
      transform: [
        "scale3d(1,1,1)",
        "scale3d(1.4,.55,1)",
        "scale3d(.75,1.25,1)",
        "scale3d(1.25,.85,1)",
        "scale3d(.9,1.05,1)",
        "scale3d(1,1,1)",
      ],
      transition: {},
    });
    setIsPlay(true);
  };

  return (
    <motion.span
      animate={controls}
      onMouseOver={() => {
        if (!isPlay) rubberBand();
      }}
      onAnimationComplete={() => setIsPlay(false)}
    >
      {children}
    </motion.span>
  );
}
