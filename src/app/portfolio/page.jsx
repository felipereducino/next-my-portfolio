"use client";
import { motion } from "framer-motion";
const PortfolioPage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex justify-center items-center text-3xl">
        Coming soon...
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
