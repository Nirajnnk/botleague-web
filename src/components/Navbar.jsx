import React, { useState } from 'react';

const Navbar = () => {
  const [activeTab, setActiveTab] = useState('Events');

  const links = ['Events', 'Programs', 'Community', 'Ranks'];

  return (
    <nav className="w-full md:h-[70px] h-auto bg-[#111111] flex flex-col md:flex-row justify-between items-center px-[30px] py-4 md:py-0 border-b border-[rgba(255,255,255,0.05)] z-50 relative">
      {/* Logo */}
      <div className="w-[290px] cursor-pointer mb-4 md:mb-0">
        <img src="/assets/logo.png" alt="BotLeague Logo" className="w-full block" />
      </div>

      {/* Navigation Links */}
      <ul className="flex gap-[40px] list-none md:pr-[60px] mb-4 md:mb-0">
        {links.map((link) => {
          const isActive = activeTab === link;
          return (
            <li key={link} className="relative pb-1">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setActiveTab(link);
                }}
                className={`font-barlow text-[16px] font-medium tracking-[0.5px] no-underline transition-colors duration-300 ${
                  isActive ? 'text-white' : 'text-[#e8e8e8] hover:text-[#ff5a5a]'
                }`}
              >
                {link}
              </a>
              {isActive && (
                <span className="absolute bottom-[-4px] left-0 w-full h-[2px] bg-[#ff3b2f] rounded-[1px]" />
              )}
            </li>
          );
        })}
      </ul>

      {/* Buttons */}
      <div className="flex items-center gap-[20px]">
        <button className="px-[22px] h-[38px] border-2 border-white bg-transparent text-white rounded-[4px] cursor-pointer font-barlow text-[15px] font-semibold tracking-[1px] uppercase transition-all duration-[0.25s] whitespace-nowrap hover:bg-white hover:text-[#111]">
          LOGIN
        </button>
        <button className="px-[20px] h-[38px] border-none bg-[#ff3b2f] text-white rounded-[4px] cursor-pointer font-barlow text-[15px] font-semibold tracking-[1px] uppercase transition-all duration-[0.25s] whitespace-nowrap hover:bg-[#e02e24]">
          REGISTER NOW
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
