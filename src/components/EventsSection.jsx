import React from 'react';

const EventsSection = () => {
  return (
    <section className="py-[60px] px-[25px] bg-[#0d0d0d] text-white font-orbitron">
      <h2 className="text-[32px] tracking-[2px] mb-[40px] uppercase font-semibold">
        COMPETITIONS & EVENTS
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-[25px] items-start">
        {/* Column 1: Live Now */}
        <div className="flex flex-col">
          <h3 className="mb-[25px] text-[22px] text-[#ff5a5a] tracking-[1px] font-semibold uppercase">
            LIVE NOW
          </h3>
          <div className="bg-[#111111] p-[24px] rounded-[4px] border border-[#222] mb-5 min-h-[400px]">
            <h4 className="text-[20px] font-roboto font-medium tracking-[2%] leading-[100%] text-white flex justify-between items-center">
              Bengaluru Regionals <span className="bg-[#ff5a5a] text-white px-2 py-[3px] text-[10px] rounded-[2px] uppercase font-semibold">Ongoing</span>
            </h4>
            <p className="text-[14px] text-[#888] mt-1">Lorem Ipsum</p>
            <hr className="border-[#222] my-4" />

            {/* Bracket Visualization */}
            <div className="relative h-[250px] w-full mt-[25px] bracket-grid-bg">
              {/* Round 1 Nodes */}
              <div className="absolute w-[121px] h-[40px] rounded-[5px] bg-[#252525] border border-[#444] opacity-50" style={{ top: '0px', left: '0px' }}></div>
              <div className="absolute w-[121px] h-[40px] rounded-[5px] bg-[#252525] border border-[#444] opacity-50" style={{ top: '60px', left: '0px' }}></div>
              <div className="absolute w-[121px] h-[40px] rounded-[5px] bg-[#252525] border border-[#444] opacity-50" style={{ top: '120px', left: '0px' }}></div>
              <div className="absolute w-[121px] h-[40px] rounded-[5px] bg-[#252525] border border-[#444] opacity-50" style={{ top: '180px', left: '0px' }}></div>

              {/* Round 1 Connectors */}
              <div className="absolute w-[2px] bg-[#ff5a5a] opacity-60" style={{ top: '20px', left: '121px', height: '60px' }}></div>
              <div className="absolute w-[2px] bg-[#ff5a5a] opacity-60" style={{ top: '140px', left: '121px', height: '60px' }}></div>
              <div className="absolute height-[2px] h-[2px] bg-[#ff5a5a] opacity-60" style={{ top: '50px', left: '121px', width: '30px' }}></div>
              <div className="absolute height-[2px] h-[2px] bg-[#ff5a5a] opacity-60" style={{ top: '170px', left: '121px', width: '30px' }}></div>

              {/* Round 2 Nodes */}
              <div className="absolute w-[121px] h-[40px] rounded-[5px] bg-[#252525] border border-[#444] opacity-50" style={{ top: '30px', left: '151px' }}></div>
              <div className="absolute w-[121px] h-[40px] rounded-[5px] bg-[#252525] border border-[#444] opacity-50" style={{ top: '150px', left: '151px' }}></div>

              {/* Round 2 Connectors */}
              <div className="absolute w-[2px] bg-[#ff5a5a] opacity-60" style={{ top: '50px', left: '272px', height: '120px' }}></div>
              <div className="absolute height-[2px] h-[2px] bg-[#ff5a5a] opacity-60" style={{ top: '110px', left: '272px', width: '30px' }}></div>

              {/* Final Node */}
              <div className="absolute w-[121px] h-[40px] rounded-[5px] bg-[#252525] border border-[#444] opacity-50" style={{ top: '90px', left: '302px' }}></div>
            </div>
          </div>
        </div>

        {/* Column 2: Upcoming */}
        <div className="flex flex-col">
          <h3 className="mb-[25px] text-[22px] text-[#ff5a5a] tracking-[1px] font-semibold uppercase">
            UPCOMING
          </h3>

          {/* Mumbai Card */}
          <div className="bg-[#111111] p-[24px] rounded-[4px] border border-[#222] mb-5">
            <h4 className="text-[30px] font-roboto font-medium tracking-[2%] leading-[100%] text-white">
              Event in Mumbai
            </h4>
            <div className="flex gap-[30px] my-5">
              <div>
                <span className="text-[#888] font-barlow text-[12px] uppercase">Date</span>
                <br />
                <span className="text-white font-orbitron text-[14px]">11/11/25</span>
              </div>
              <div>
                <span className="text-[#888] font-barlow text-[12px] uppercase">Location</span>
                <br />
                <span className="text-white font-orbitron text-[14px]">BKC</span>
              </div>
              <div>
                <span className="text-[#888] font-barlow text-[12px] uppercase">Category</span>
                <br />
                <span className="text-white font-orbitron text-[14px]">Lorem</span>
              </div>
            </div>
            <button className="px-[20px] py-[8px] border-none bg-[#ff3b2f] text-white rounded-[4px] cursor-pointer font-barlow text-[14px] font-semibold tracking-[1px] uppercase transition-colors duration-[0.25s] hover:bg-[#e02e24]">
              REGISTER
            </button>
          </div>

          {/* Delhi Card */}
          <div className="bg-[#111111] p-[24px] rounded-[4px] border border-[#222] mb-5">
            <h4 className="text-[30px] font-roboto font-medium tracking-[2%] leading-[100%] text-white">
              Event in Delhi
            </h4>
            <div className="flex gap-[30px] my-5">
              <div>
                <span className="text-[#888] font-barlow text-[12px] uppercase">Date</span>
                <br />
                <span className="text-white font-orbitron text-[14px]">11/11/25</span>
              </div>
              <div>
                <span className="text-[#888] font-barlow text-[12px] uppercase">Location</span>
                <br />
                <span className="text-white font-orbitron text-[14px]">BKC</span>
              </div>
              <div>
                <span className="text-[#888] font-barlow text-[12px] uppercase">Category</span>
                <br />
                <span className="text-white font-orbitron text-[14px]">Lorem</span>
              </div>
            </div>
            <button className="px-[20px] py-[8px] border-none bg-[#ff3b2f] text-white rounded-[4px] cursor-pointer font-barlow text-[14px] font-semibold tracking-[1px] uppercase transition-colors duration-[0.25s] hover:bg-[#e02e24]">
              REGISTER
            </button>
          </div>
        </div>

        {/* Column 3: Past Results */}
        <div className="flex flex-col">
          <h3 className="mb-[25px] text-[22px] text-[#ff5a5a] tracking-[1px] font-semibold uppercase">
            PAST RESULTS
          </h3>
          <div className="bg-[#111111] p-[24px] rounded-[4px] border border-[#222] w-full lg:w-[95%] h-[400px]">
            <div className="flex flex-col py-5 border-b border-white first:pt-0">
              <h4 className="text-[18px] font-medium text-white m-0">Bengaluru Regionals</h4>
              <p className="text-[14px] text-[#888] m-0 font-orbitron">Lorem Ipsum</p>
            </div>
            <div className="flex flex-col py-5 border-b border-white">
              <h4 className="text-[18px] font-medium text-white m-0">Bengaluru Regionals</h4>
              <p className="text-[14px] text-[#888] m-0 font-orbitron">Lorem Ipsum</p>
            </div>
            <div className="flex flex-col py-5 border-b-0 pb-0">
              <h4 className="text-[18px] font-medium text-white m-0">Bengaluru Regionals</h4>
              <p className="text-[14px] text-[#888] m-0 font-orbitron">Lorem Ipsum</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
