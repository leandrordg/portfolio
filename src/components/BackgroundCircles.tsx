import { motion } from 'framer-motion';

type Props = {};

const BackgroundCircles = ({}: Props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.5, 0.9, 0.2, 1],
      }}
      transition={{
        duration: 1.5,
      }}
      className="relative flex justify-center items-center pt-28"
    >
      <div className="absolute border border-[#333333] rounded-full h-[200px] w-[200px] mt-52 animate-ping" />
      <div className="absolute border border-[#333333] rounded-full h-[300px] w-[300px] mt-52" />
      <div className="absolute border border-[#333333] rounded-full h-[500px] w-[500px] mt-52" />
      <div className="absolute rounded-full border border-[#537FE7] opacity-20 h-[650px] w-[650px] mt-52 animate-pulse" />
      <div className="absolute rounded-full border border-[#333333] h-[800px] w-[800px] mt-52" />
    </motion.div>
  );
};

export default BackgroundCircles;
