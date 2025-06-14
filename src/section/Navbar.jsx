import React, { useState } from "react";
import { motion } from "motion/react";
function Navigation() {
  return (
    <ul className="nav-ul">
      <li className="nav-li">
        <a className="nav-link">Home</a>
      </li>
      <li className="nav-li">
        <a className="nav-link">About</a>
      </li>
      <li className="nav-li">
        <a className="nav-link">Work</a>
      </li>
      <li className="nav-li">
        <a className="nav-link">Contact</a>
      </li>
    </ul>
  );
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="fixed inset-x-0 w-full bg-primary/40  backdrop-blur-lg z-20 ">
      <div className="mx-auto max-w-7xl c-space">
        <div className="flex items-center justify-between  py-2 sm:py-0 ">
          <a
            href="#"
            className="text-xl font-bold transition-colors text-neutral-400 hover:text-white"
          >
            AYOUB
          </a>
          <button
            className="flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <img
              src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
              alt="menu"
              className="w-6 h-6"
            />
          </button>
          <nav className="hidden sm:flex">
            <Navigation />
          </nav>
        </div>
      </div>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="block overflow-hidden text-center sm:hidden"
          style={{ maxHeight: "100vh" }}
        >
          <nav className="pb-5">
            <Navigation />
          </nav>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
