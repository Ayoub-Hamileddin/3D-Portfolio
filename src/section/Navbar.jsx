import React, { useState } from "react";

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
              src={isOpen ? "assets/close.svg": "assets/menu.svg"}
              alt="menu"
              className="w-6 h-6"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
