import React from 'react';

const UserJourney = () => {
  const steps = [
    {
      step: 1,
      icon: 'fa-tools',
      title: 'BUILD YOUR TEAM'
    },
    {
      step: 2,
      icon: 'fa-landmark',
      title: 'COMPETE ACROSS INDIA'
    },
    {
      step: 3,
      icon: 'fa-trophy',
      title: 'EARN NATIONAL RANKING & VALUE'
    },
    {
      step: 4,
      icon: 'fa-users',
      title: 'JOIN THE LEAGUE'
    }
  ];

  return (
    <section className="bg-[#0a0a0a] text-white py-[60px] px-5 text-center font-sans">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-[#ff4d4d] text-[14px] tracking-[2px] font-semibold uppercase">
          USER JOURNEY
        </h2>
        <h1 className="text-[40px] my-[10px] font-bold uppercase leading-tight">
          YOUR PATH TO THE LEAGUE
        </h1>
        <p className="text-[#888] mb-[50px] text-[16px]">
          Lorem Ipsum Lorem Ipsum Lorem Ipsum
        </p>

        {/* Steps Wrapper */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start max-w-[1000px] mx-auto relative gap-10 md:gap-0 before:content-[''] before:absolute before:top-[60px] before:left-[10%] before:right-[10%] before:h-[2px] before:bg-[#0000ff] before:z-0 before:hidden before:md:block">
          {steps.map((item) => (
            <div key={item.step} className="z-[1] w-[200px] md:w-[20%] flex flex-col items-center">
              <div className="relative w-[120px] h-[120px] bg-[#1a1a1a] border-4 border-[#0000ff] rounded-full flex justify-center items-center text-[40px] mb-5 after:content-[''] after:absolute after:bottom-[-20px] after:w-[2px] after:h-[20px] after:bg-white">
                <i className={`fas ${item.icon} text-white`}></i>
              </div>
              <span className="text-[#ff4d4d] font-bold mb-[10px] tracking-[1px] text-[14px]">
                STEP {item.step}
              </span>
              <h3 className="text-[16px] leading-[1.4] font-semibold tracking-[0.5px]">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UserJourney;
