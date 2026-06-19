import React, { useEffect, useRef, useState } from 'react';

const EcosystemSection = () => {
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

  const roles = [
    { title: 'BECOME A JUDGE' },
    { title: 'VOLUNTEER' },
    { title: 'COMMUNITY MEMBER' }
  ];

  return (
    <section
      ref={sectionRef}
      className={`bg-black py-[80px] px-6 md:px-[80px] reveal-on-scroll ${
        isVisible ? 'visible' : ''
      }`}
    >
      <div className="max-w-[1400px] mx-auto">
        <h2 className="font-orbitron text-[26px] md:text-[32px] font-semibold text-white tracking-[1px] uppercase mb-[40px] text-left">
          JOIN THE ECOSYSTEM
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 justify-center max-w-[420px] lg:max-w-none mx-auto lg:mx-0">
          {roles.map((r, idx) => (
            <article key={idx} className="bg-[#181818] border border-[#3a3a3a] rounded-[10px] pt-[28px] px-[24px] pb-[24px]">
              <h3 className="font-orbitron text-[18px] font-semibold text-white uppercase tracking-[0.5px] text-center mb-6">
                {r.title}
              </h3>
              <form className="flex flex-col gap-[14px]" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="text"
                  placeholder="Name"
                  aria-label="Name"
                  className="w-full h-[44px] px-4 bg-[#111111] border border-[#3a3a3a] rounded-[6px] text-white font-roboto text-[14px] outline-none transition-colors duration-200 placeholder-[#888888] focus:border-[#666666]"
                />
                <input
                  type="text"
                  placeholder="Location"
                  aria-label="Location"
                  className="w-full h-[44px] px-4 bg-[#111111] border border-[#3a3a3a] rounded-[6px] text-white font-roboto text-[14px] outline-none transition-colors duration-200 placeholder-[#888888] focus:border-[#666666]"
                />
                <input
                  type="text"
                  placeholder="Enroll"
                  aria-label="Enroll"
                  className="w-full h-[44px] px-4 bg-[#111111] border border-[#3a3a3a] rounded-[6px] text-white font-roboto text-[14px] outline-none transition-colors duration-200 placeholder-[#888888] focus:border-[#666666]"
                />
                <button
                  type="submit"
                  className="w-full h-[48px] mt-[6px] bg-[#ff5a5a] border-none rounded-[6px] text-white font-orbitron text-[14px] font-semibold tracking-[0.5px] uppercase cursor-pointer transition-all duration-200 hover:bg-[#ff4545] hover:-translate-y-[1px]"
                >
                  SIGN UP
                </button>
              </form>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EcosystemSection;
