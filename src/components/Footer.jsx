import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-[#333333] py-[50px] px-6 md:px-[80px]">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-start gap-10">
        
        {/* Quick Links Column */}
        <div className="flex flex-col">
          <h3 className="font-orbitron text-[14px] font-semibold text-white tracking-[1px] uppercase mb-6 text-left">
            QUICK LINKS
          </h3>
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-[80px]">
            <ul className="list-none flex flex-col gap-[10px] p-0 m-0">
              <li><a href="#" className="font-roboto text-[13px] font-normal text-white no-underline transition-colors duration-200 hover:text-[#ff5a5a] text-left block">The Arena</a></li>
              <li><a href="#" className="font-roboto text-[13px] font-normal text-white no-underline transition-colors duration-200 hover:text-[#ff5a5a] text-left block">Episodes</a></li>
              <li><a href="#" className="font-roboto text-[13px] font-normal text-white no-underline transition-colors duration-200 hover:text-[#ff5a5a] text-left block">National Rankings</a></li>
              <li><a href="#" className="font-roboto text-[13px] font-normal text-white no-underline transition-colors duration-200 hover:text-[#ff5a5a] text-left block">Programs</a></li>
              <li><a href="#" className="font-roboto text-[13px] font-normal text-white no-underline transition-colors duration-200 hover:text-[#ff5a5a] text-left block">Rulebooks</a></li>
            </ul>
            <ul className="list-none flex flex-col gap-[10px] p-0 m-0">
              <li><a href="#" className="font-roboto text-[13px] font-normal text-white no-underline transition-colors duration-200 hover:text-[#ff5a5a] text-left block">Join the Team</a></li>
              <li><a href="#" className="font-roboto text-[13px] font-normal text-white no-underline transition-colors duration-200 hover:text-[#ff5a5a] text-left block">Sponsorships</a></li>
              <li><a href="#" className="font-roboto text-[13px] font-normal text-white no-underline transition-colors duration-200 hover:text-[#ff5a5a] text-left block">Help Center</a></li>
              <li><a href="#" className="font-roboto text-[13px] font-normal text-white no-underline transition-colors duration-200 hover:text-[#ff5a5a] text-left block">Contact Us</a></li>
              <li><a href="#" className="font-roboto text-[13px] font-normal text-white no-underline transition-colors duration-200 hover:text-[#ff5a5a] text-left block">Legal</a></li>
            </ul>
          </div>
        </div>

        {/* Social Media Column */}
        <div className="w-full md:w-auto text-left md:text-right">
          <h3 className="font-orbitron text-[14px] font-semibold text-white tracking-[1px] uppercase mb-6 text-left md:text-right">
            SOCIAL MEDIA
          </h3>
          <div className="flex gap-5 justify-start md:justify-end">
            <a href="#" aria-label="YouTube" className="text-white text-[22px] no-underline transition-all duration-200 hover:text-[#ff5a5a] hover:-translate-y-[2px]">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="#" aria-label="Instagram" className="text-white text-[22px] no-underline transition-all duration-200 hover:text-[#ff5a5a] hover:-translate-y-[2px]">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" aria-label="Facebook" className="text-white text-[22px] no-underline transition-all duration-200 hover:text-[#ff5a5a] hover:-translate-y-[2px]">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" aria-label="Twitter" className="text-white text-[22px] no-underline transition-all duration-200 hover:text-[#ff5a5a] hover:-translate-y-[2px]">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
