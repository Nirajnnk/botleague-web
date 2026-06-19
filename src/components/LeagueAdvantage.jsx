import React, { useEffect, useRef, useState } from 'react';

const LeagueAdvantage = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const advantages = [
    {
      icon: 'fa-medal',
      title: 'NATIONAL RECOGNITION',
      desc: '"Benchmark your skills on India\'s official robotics leaderboard."'
    },
    {
      icon: 'fa-gavel',
      title: 'FAIR JUDGING',
      desc: '"Compete with confidence under standardized, expert-led evaluation."'
    },
    {
      icon: 'fa-briefcase',
      title: 'CAREER OPS',
      desc: '"Bridge the gap between arena victories and top-tier tech placements."'
    },
    {
      icon: 'fa-bolt',
      title: 'HIGH - ENERGY ECO',
      desc: '"Join a nationwide community of elite innovators and robotics athletes."'
    }
  ];

  return (
    <section
      ref={sectionRef}
      className={`bg-[#1a1a1a] py-[90px] px-5 md:px-[80px] reveal-on-scroll ${
        isVisible ? 'visible' : ''
      }`}
    >
      <div className="max-w-[1200px] mx-auto flex flex-col xl:flex-row items-center justify-between gap-[50px] xl:gap-[80px]">
        {/* LEFT: Why Register content */}
        <div className="flex-1 w-full xl:max-w-[580px] text-left">
          <p className="font-orbitron text-[16px] font-semibold text-[#ff4d4d] tracking-[2px] uppercase mb-[10px]">
            WHY REGISTER ?
          </p>
          <h2 className="font-orbitron text-[30px] md:text-[48px] font-bold text-white tracking-[1px] uppercase leading-[1.1] mb-[36px] md:mb-[52px]">
            THE LEAGUE ADVANTAGE
          </h2>

          <div className="flex flex-col gap-[40px]">
            {advantages.map((item, idx) => (
              <article key={idx} className="flex items-start gap-[24px]">
                <div className="shrink-0 w-[44px] h-[44px] flex items-center justify-center mt-[2px] text-[#ff4d4d] text-[28px]" aria-hidden="true">
                  <i className={`fas ${item.icon}`}></i>
                </div>
                <div className="text-left">
                  <h3 className="font-orbitron text-[17px] md:text-[22px] font-bold text-white uppercase tracking-[0.5px] mb-2 leading-[1.3]">
                    {item.title}
                  </h3>
                  <p className="font-orbitron text-[12px] md:text-[14px] font-normal text-[#8b9299] leading-[1.7] tracking-[0.2px]">
                    {item.desc}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* RIGHT: Leaderboard panel */}
        <div className="shrink-0 flex items-center justify-center w-full max-w-[340px] xl:max-w-none xl:w-auto">
          <img
            src="/assets/images/leaderboard.png"
            alt="Leaderboard showing top ranked players"
            className="w-full max-w-[831px] h-auto xl:h-[760px] block object-contain"
            width="831"
            height="760"
          />
        </div>
      </div>
    </section>
  );
};

export default LeagueAdvantage;
