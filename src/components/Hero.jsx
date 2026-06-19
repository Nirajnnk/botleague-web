import React from 'react';

const Hero = () => {
  return (
    <section className="h-[calc(100vh-70px)] bg-[url('/assets/images/bg1.png')] bg-no-repeat bg-center bg-cover relative flex items-center pl-[20px] md:pl-[80px] justify-center md:justify-start overflow-hidden">
      {/* Fade overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-black/20 z-[1]"></div>

      {/* Live Banner */}
      <div className="absolute top-5 right-[30px] z-[2] flex items-center gap-[10px] bg-black/65 backdrop-blur-[8px] px-4 py-2 border border-white/10 text-[13px] font-barlow font-medium tracking-[0.5px] text-white">
        <div className="w-[10px] h-[10px] rounded-full bg-red-600 animate-live-pulse"></div>
        <span>
          <span className="text-[#ff3b2f] font-bold">LIVE </span>: Episode 14 . Bengaluru Regionals
        </span>
        <a id="lal" href="#" className="text-[#f5a623] hover:text-white font-bold font-barlow tracking-[1px] text-[13px] transition-colors duration-200 no-underline ml-1">
          WATCH LIVE
        </a>
      </div>

      {/* Hero Content */}
      <div className="relative z-[2] text-white max-w-[560px] md:text-left text-center">
        <h1 className="text-[40px] md:text-[80px] leading-[1.0] mb-[18px] uppercase font-orbitron font-black tracking-[-1px] drop-shadow-[0_2px_20px_rgba(0,0,0,0.5)]">
          INDIA'S ULTIMATE<br />ROBOTICS ARENA
        </h1>
        <p className="text-[16px] mb-[36px] opacity-85 font-barlow font-normal tracking-[0.3px] leading-[1.5]">
          Build. Compete. Rank. The National<br />Ecosystem for Robotics Arena
        </p>
        <div className="flex gap-[18px] justify-center md:justify-start">
          <button className="bg-[#ff3b2f] hover:bg-[#e02e24] text-white px-[30px] py-[13px] border-none rounded-[4px] font-bold cursor-pointer font-barlow text-[15px] tracking-[1.5px] uppercase transition-colors duration-[0.25s]">
            CREATE ACCOUNT
          </button>
          <button className="bg-transparent hover:bg-white/10 text-white px-[30px] py-[13px] border-2 border-white/85 rounded-[4px] font-bold cursor-pointer font-barlow text-[15px] tracking-[1.5px] uppercase transition-colors duration-[0.25s]">
            EXPLORE EVENTS
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
