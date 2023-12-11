import { motion } from "framer-motion";

export default function DayScene({ toggled }: { toggled: boolean }) {
  return (
    <motion.div
      className="absolute top-0 left-0 w-full h-full z-0"
      initial={{ y: 0 }} // Initial position of the background
      animate={{ y: toggled ? "100%" : "0" }} // Slide up when toggled
      transition={{
        duration: 1.2,
      }}
    >
      <motion.div
        transition={{
          duration: 1.2,
          delay: 0.5,
          delayChildren: 0.58,
        }}
      >
        <motion.div
          transition={{
            duration: 1.2,
            delay: 0.5,
            delayChildren: 0.58,
          }}
        >
          {/* Top Cloud*/}
          <motion.div className="bg-white w-[40px] h-[40px] rounded-full absolute top-[20%] left-[50%]" />
          <motion.div className="bg-white w-[30px] h-[30px] rounded-full absolute top-[25%] left-[56%]" />
          <motion.div className="bg-white w-[30px] h-[30px] rounded-full absolute top-[25%] left-[46%]" />
          <motion.div className="bg-white w-[20px] h-[20px] rounded-full absolute top-[30%] left-[60%]" />
        </motion.div>
        <motion.div
          transition={{
            duration: 1.2,
            delay: 0.5,
            delayChildren: 0.58,
          }}
        >
          {/* bottom cloud */}
          <motion.div className="bg-white w-[80px] h-[80px] rounded-full absolute right-5 -bottom-2" />
          <motion.div className="bg-white w-[80px] h-[80px] rounded-full absolute -right-5 -bottom-4" />
          <motion.div className="bg-white w-[80px] h-[80px] rounded-full absolute right-16 -bottom-8" />
          <motion.div className="bg-white w-[80px] h-[80px] rounded-full absolute right-24 -bottom-12" />
        </motion.div>
        <motion.div>
          {/*bottom cloud shadow*/}
          <motion.div className="bg-white w-[80px] h-[80px] opacity-50 rounded-full absolute right-5 -bottom-0" />
          <motion.div className="bg-white w-[80px] h-[80px] opacity-50 rounded-full absolute -right-5 -bottom-2" />
          <motion.div className="bg-white w-[80px] h-[80px] opacity-50 rounded-full absolute right-16 -bottom-6" />
          <motion.div className="bg-white w-[80px] h-[80px] opacity-50 rounded-full absolute right-24 -bottom-10" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
