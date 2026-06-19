import React, { useEffect, useRef, useState } from 'react';

const DisciplinesSection = () => {
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

  const disciplines = [
    {
      img: '/assets/images/robo-race.png',
      title: 'Robo Race',
      isSmall: false,
      isActive: false
    },
    {
      img: '/assets/images/line-follower.png',
      title: 'Line Follower',
      isSmall: false,
      isActive: false
    },
    {
      img: '/assets/images/rc-racing.png',
      title: 'RC Racing',
      isSmall: false,
      isActive: false
    },
    {
      img: '/assets/images/fpv-drone.png',
      title: 'FPV Drone Racing & Aeromodelling',
      isSmall: true,
      isActive: false
    },
    {
      img: '/assets/images/robo-hockey.png',
      title: 'Robo Hockey',
      isSmall: false,
      isActive: false
    },
    {
      img: '/assets/images/war.jpg',
      title: 'Robo War',
      isSmall: false,
      isActive: true,
      hasPlaceholder: true
    }
  ];

  return (
    <section
      ref={sectionRef}
      className={`w-full bg-black py-[70px] px-5 md:px-[80px] overflow-visible reveal-on-scroll ${
        isVisible ? 'visible' : ''
      }`}
    >
      <div className="max-w-[1400px] mx-auto">
        <p className="text-[#ff3b2f] font-orbitron text-[14px] font-semibold uppercase tracking-[2px] mb-2 text-left">
          SPORTS
        </p>
        <h2 className="font-orbitron text-[28px] md:text-[40px] font-semibold text-white uppercase tracking-[1px] mb-[40px] text-left">
          COMPETITION DISCIPLINES
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 justify-start relative">
          {disciplines.map((d, i) => (
            <article
              key={i}
              className={`w-full max-w-[300px] h-[317px] bg-[#181818] rounded-[12px] overflow-hidden cursor-pointer border-2 flex flex-col transition-all duration-300 hover:border-[#8a2be2] hover:shadow-[0_0_20px_rgba(138,43,226,0.25)] hover:-translate-y-1 ${
                d.isActive
                  ? 'border-[#8a2be2] shadow-[0_0_20px_rgba(138,43,226,0.25)]'
                  : 'border-[#2a2a2a]'
              }`}
            >
              <div className="flex-1 min-h-0 bg-[#222] overflow-hidden flex items-center justify-center relative">
                {d.hasPlaceholder && (
                  <div className="absolute inset-0 discipline-image-placeholder z-0"></div>
                )}
                <img
                  src={d.img}
                  alt={d.title}
                  className="w-full h-full object-cover object-center block z-10"
                />
              </div>
              <div className="shrink-0 min-h-[72px] px-3 py-4 text-center bg-[#1a1a1a] flex items-center justify-center">
                <h3
                  className={`text-white font-orbitron font-medium m-0 leading-[1.25] ${
                    d.isSmall ? 'text-[13px] leading-[1.35]' : 'text-[18px]'
                  }`}
                >
                  {d.title}
                </h3>
              </div>
            </article>
          ))}

          {/* Decor Illustration Image positioned in Grid slot */}
          <div className="col-span-2 row-span-1 relative min-h-[317px] bg-transparent hidden lg:block overflow-visible">
            <img
              src="/assets/images/circuit-decor.png"
              alt=""
              className="w-[353px] h-[707px] opacity-80 rotate-[90.71deg] origin-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-contain pointer-events-none select-none"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DisciplinesSection;
