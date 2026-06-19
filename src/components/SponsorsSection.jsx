import React, { useEffect, useRef, useState } from 'react';

const SponsorsSection = () => {
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

  const sponsors = [
    {
      logo: '/assets/sponsors/nit-delhi.png',
      alt: 'NIT Delhi logo',
      name: 'NIT DELHI',
      logoClass: 'w-[72px] h-[72px]'
    },
    {
      logo: '/assets/sponsors/indian-bit.png',
      alt: 'Indian BIT logo',
      name: 'INDIAN BIT',
      logoClass: 'w-[56px] h-[56px]',
      imgClass: 'w-[56px] h-auto min-h-[120px] object-cover object-top'
    },
    {
      logo: '/assets/sponsors/nit-silchar.png',
      alt: 'NIT Silchar logo',
      name: 'NIT SILCHAR',
      logoClass: 'w-[72px] h-[72px]'
    },
    {
      logo: '/assets/sponsors/delhivery-robotics.png',
      alt: 'Delhivery Robotics logo',
      name: 'ROBO COMPANY',
      logoClass: 'w-[160px] h-[56px]'
    },
    {
      logo: '/assets/sponsors/iit-bombay.png',
      alt: 'IIT Bombay logo',
      name: 'IIT BOMBAY',
      logoClass: 'w-[80px] h-[80px]'
    },
    {
      logo: '/assets/sponsors/general-robotics.png',
      alt: 'General Robotics logo',
      name: 'ROBO COMPANY',
      logoClass: 'w-[120px] h-[42px] lg:w-[140px] lg:h-[48px]'
    }
  ];

  return (
    <section
      ref={sectionRef}
      className={`bg-black pb-[80px] px-6 md:px-[80px] reveal-on-scroll ${
        isVisible ? 'visible' : ''
      }`}
    >
      <div className="max-w-[1400px] mx-auto">
        <h2 className="font-orbitron text-[26px] md:text-[32px] font-semibold text-white tracking-[1px] uppercase mb-9 text-left">
          SPONSORS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-[56px] gap-x-[80px] items-center">
          {sponsors.map((s, idx) => (
            <article key={idx} className="flex items-center gap-6 min-h-[80px]">
              <div className={`shrink-0 flex items-center justify-center overflow-hidden ${s.logoClass}`}>
                <img
                  src={s.logo}
                  alt={s.alt}
                  className={s.imgClass || 'w-full h-full object-contain object-center block'}
                />
              </div>
              <span className="font-roboto font-semibold text-[20px] md:text-[30px] leading-[100%] tracking-[2%] text-[#d9d9d9] uppercase flex-1 min-w-0 text-left">
                {s.name}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;
