import { motion, useCycle } from "framer-motion";
import "./App.css";
import DayScene from "./components/day";
import NightScene from "./components/night";

export default function App() {
  const [toggled, setToggled] = useCycle(false, true);
  const description = "You can find the code here!";

  const sunriseGradient = "linear-gradient(180deg, #87CEEB 0%, #B0E0E6 100%)"; // Sky blue to celest blue gradient for sunrise
  const sunsetGradient = "linear-gradient(180deg, #800080 0%, #4B0082 100%)"; // Purple to deep purple gradient for sunset
  const transitionalGradient =
    "linear-gradient(180deg, #FFAA00 0%, #FFAA00 100%)"; // Example transitional colors

  const background = toggled
    ? sunsetGradient
    : toggled
      ? transitionalGradient
      : sunriseGradient;

  const sunColor = toggled ? "gray" : "yellow"; // Gray when night, yellow when day

  return (
    <div className="flex items-center p-2 justify-center flex-col gap-20 min-h-screen w-full relative">
      <h1 className="font-bold text-6xl z-10">Toggle Button</h1>
      <motion.div
        className="w-[400px] h-[140px] flex justify-start border rounded-full p-[10px] cursor-pointer z-10 relative overflow-hidden"
        initial={false}
        animate={toggled ? "On" : "Off"}
        onClick={() => setToggled()}
      >
        <motion.div
          layout
          transition={{
            duration: 1.2,
          }}
          className="z-10 w-[120px] h-[120px] bg-black rounded-full"
          style={{
            marginLeft: toggled ? "auto" : "0", // Moves the button to the right when toggled
            backgroundColor: sunColor, // Change sun color based on toggle state
          }}
        />
        <motion.div
          layout
          transition={{
            duration: 1.2,
            type: "tween",
          }}
          className="absolute top-0 left-0 w-full h-full"
          style={{
            background: background,
          }}
        />
        <NightScene toggled={toggled} />
        <DayScene toggled={toggled} />
      </motion.div>
      <motion.div
        transition={{
          staggerChildren: 0.6,
        }}
        className="flex gap-1"
      >
        {description.split(" ").map((word, index) => (
          <motion.span
            key={index}
            className="inline-block text-xl overflow-hidden"
          >
            <motion.span
              initial={{
                y: 100,
              }}
              animate={{
                y: 0,
              }}
              transition={{
                ease: "easeInOut",
                duration: 1.2,
              }}
              className="inline-block"
            >
              {word}
            </motion.span>
          </motion.span>
        ))}
      </motion.div>
      <a
        href="https://github.com/judahsullivan/animated-togglebutton"
        target="_blank"
        aria-label="link to repository"
      >
        Head the Repository
      </a>
    </div>
  );
}
