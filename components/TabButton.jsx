import React from 'react'
import { motion } from 'framer-motion';

const variants = {
  default: { width: 0},
  active: { width: "calc(100% - 0.75rem)"}
};


const TabButton = ({ active, selectTab, children }) => {

  const buttonClasses = active ? "text-white" : "text-[#ADB7BE]";
  return (
    <span onClick={selectTab}>
        <p className={`mr-3 font-semibold ${buttonClasses}`}>
            {children}
        </p>
        <motion.div
          animate={active ? "active" : "default"}
          variants={variants}
          className="h-1 bg-gradient-to-r from-blue-400 to-purple-600 rounded-sm mt-2"
        >

        </motion.div>
    </span>
  )
}

export default TabButton;