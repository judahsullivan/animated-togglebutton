import { motion } from "framer-motion";
import StarIcon from "./starIcon";

export default function NightScene({ toggled }: { toggled?: boolean }) {
  const iconData = [
    {
      id: 1,
      width: "65px",
      height: "65px",
      top: "30%",
      left: "30%",
    },
    {
      id: 2,
      width: "35px",
      height: "35px",
      top: "50%",
      left: "50%",
    },
    {
      id: 3,
      width: "50px",
      height: "50px",
      top: "60%",
      left: "10%",
    },
    {
      id: 4,
      width: "20px",
      height: "20px",
      top: "20%",
      left: "20%",
    },
    {
      id: 5,
      width: "10px",
      height: "10px",
      top: "10%",
      left: "10%",
    },
  ];

  return (
    <motion.div
      className="absolute overflow-hidden flex items-center justify-center flex-wrap gap-10 top-0 left-0 w-full h-full z-0"
      initial={{ y: "-100%" }} // Initial position of the background
      animate={{ y: toggled ? "0%" : "-100%" }} // Slide up when toggled
      transition={{
        duration: 1.2,
      }}
    >
      <motion.div
        transition={{
          delayChildren: 0.8,
          staggerChildren: 1.5,
          staggerDirection: -1,
        }}
      >
        {iconData.map((data) => (
          <motion.div
            initial={{}} // Initial position of the background
            animate={{
              y: toggled ? "0vh" : "-100vh",
            }} // Slide up when toggled
            transition={{
              duration: toggled ? 1.2 : 1.2,
              ease: "linear",
            }}
            key={data.id}
            className="absolute w-full h-full"
            style={{
              top: data.top,
              left: data.left,
              width: data.width,
              height: data.height,
            }}
          >
            <motion.div>
              <StarIcon
                props={{
                  width: "100%",
                  height: "100%",
                  fill: "yellow",
                }}
                className="w-full h-full"
              />
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
