import { useState } from "react";
import { motion } from "framer-motion";
import "./App.css";

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30,
};

export default function App() {
  const [toggled, setToggled] = useState(false);

  return (
    <div className="flex items-center justify-center flex-col gap-5 min-h-screen w-full">
      <h1 className="font-bold text-6xl ">Toggle Button</h1>
      <div
        className="w-[400px] h-[140px] flex justify-start border rounded-full p-[10px] cursor-pointer "
        data-isOn={toggled}
        onClick={() => setToggled(!toggled)}
      >
        <motion.div
          layout
          transition={spring}
          className="w-[120px] h-[120px]  bg-white rounded-full"
        />
      </div>
    </div>
  );
}
