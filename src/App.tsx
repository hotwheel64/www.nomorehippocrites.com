import React, { useState } from 'react';
import { socialLinks } from './data/socialLinks';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleAudio = () => {
    setIsAudioPlaying(!isAudioPlaying);
  };

  return (
    <div className="text-sky-400 text-[10px] not-italic font-light bg-neutral-950 box-border block tracking-normal leading-normal list-outside list-disc text-start normal-case visible border-separate font-sans">
      <div className="box-border">
        <div className="box-border">
          {/* Navigation Menu Overlay */}
          {isMenuOpen && (
            <div className="fixed inset-0 bg-neutral-950 z-50 flex items-center justify-center">
              <nav className="text-center">
                <ul className="space-y-8">
                  <li><a href="/destinations" className="text-sky-400 text-2xl hover:text-sky-300 transition-colors">Destinations</a></li>
                  <li><a href="/experiences" className="text-sky-400 text-2xl hover:text-sky-300 transition-colors">Experiences</a></li>
                  <li><a href="/about" className="text-sky-400 text-2xl hover:text-sky-300 transition-colors">About</a></li>
                  <li><a href="/contact" className="text-sky-400 text-2xl hover:text-sky-300 transition-colors">Contact</a></li>
                </ul>
              </nav>
            </div>
          )}

          {/* Navigation Overlay */}
          <div className="fixed box-border z-10 inset-0">
            <button 
              aria-label="Toggle menu" 
              type="button" 
              className="absolute text-[13.3333px] font-normal items-center bg-transparent flex flex-col h-3.5 justify-between text-center w-5 z-[2] p-0 left-[18.75px] top-[21px] md:left-[30.6954px] md:top-[35px]"
              onClick={toggleMenu}
            >
              <span className="bg-sky-400 box-border block h-[1.5px] origin-[0%_50%] w-full"></span>
              <span className="bg-sky-400 box-border block h-[1.5px] origin-[0%_50%] w-[18px]"></span>
              <span className="bg-sky-400 box-border block h-[1.5px] origin-[0%_50%] w-full"></span>
            </button>
            
            <div className="absolute box-border hidden h-full w-full z-[1] left-0 top-0"></div>
            
            {/* Social Links */}
            <ul className="absolute items-center box-border gap-x-3 hidden list-none pl-0 left-[18.75px] bottom-[18.75px] md:flex md:left-[30.6954px] md:bottom-[30.6954px]">
              {socialLinks.map((link) => (
                <li key={link.id} className="box-border min-h-0 min-w-0 text-left md:min-h-[auto] md:min-w-[auto]">
                  <a 
                    href={link.href} 
                    aria-label={link.ariaLabel} 
                    className="box-border"
                  >
                    <img 
                      src={link.iconSrc} 
                      alt="Icon" 
                      className={`${link.iconClass} filter brightness-0 saturate-100 invert-0 sepia-0 hue-rotate-0 brightness-200 contrast-200`}
                      style={{filter: 'brightness(0) saturate(100%) invert(69%) sepia(25%) saturate(2878%) hue-rotate(174deg) brightness(104%) contrast(97%)'}}
                    />
                  </a>
                </li>
              ))}
            </ul>
            
            {/* Audio Toggle */}
            <button 
              aria-label="Toggle audio" 
              type="button" 
              className="absolute text-[13.3333px] font-normal items-center bg-transparent gap-x-0.5 flex h-8 justify-center text-center w-8 z-[2] border border-sky-400/30 p-0 rounded-[50%] border-solid right-[18.75px] bottom-[18.75px] md:right-[30.6954px] md:bottom-[30.6954px]"
              onClick={toggleAudio}
            >
              <span className="bg-sky-400 box-border block h-[13px] w-0.5 scale-y-[0.2px]"></span>
              <span className="bg-sky-400 box-border block h-[13px] w-0.5 scale-y-[0.2px]"></span>
              <span className="bg-sky-400 box-border block h-[13px] w-0.5 scale-y-[0.2px]"></span>
              <span className="bg-sky-400 box-border block h-[13px] w-0.5 scale-y-[0.2px]"></span>
              <span className="bg-sky-400 box-border block h-[13px] w-0.5 scale-y-[0.2px]"></span>
            </button>
            
            <audio className="box-border hidden"></audio>
          </div>

          {/* Main Content */}
          <main className="relative box-border min-h-[1000px] z-[2] overflow-hidden">
            <div className="box-border min-h-[1000px] overflow-hidden">
              <div className="absolute items-end box-border flex justify-center min-h-[1000px] w-full z-[2] pb-[150px] left-0 top-0 md:items-center md:pb-0">

                {/* Hero Content */}
                <div className="box-border gap-x-[18.75px] grid grid-cols-[repeat(5,1fr)] w-full px-[18.75px] md:gap-x-[15.3477px] md:grid-cols-[repeat(24,1fr)] md:px-[30.6954px]">
                  <div className="relative box-border col-end-[-1] col-start-1 text-center z-[3]">
                    <div className="text-center mb-6">
                      <h1 className="text-6xl font-bold text-sky-400 mb-2 md:text-8xl">NOMADIC</h1>
                      <div className="flex items-center justify-center gap-4 mb-4">
                        <div className="w-8 h-8 border-2 border-sky-400 rounded-full flex items-center justify-center">
                          <div className="w-2 h-2 bg-sky-400 rounded-full"></div>
                        </div>
                        <h2 className="text-2xl font-light text-sky-400 tracking-widest md:text-4xl">COMPASS</h2>
                      </div>
                      <h3 className="text-lg font-light text-sky-400 tracking-wider md:text-xl">TRAVEL CO.</h3>
                    </div>
                    <h2 className="text-xl font-normal box-border tracking-wider leading-6 max-w-[70%] mt-5 mx-auto font-sans md:text-3xl md:tracking-widest md:leading-8 md:max-w-none md:mt-12">Discover Your Next Adventure</h2>
                    
                    {/* Call to Action Buttons */}
                    <div className="box-border gap-x-[normal] flex flex-col justify-center gap-y-[21.0938px] mt-[25px] md:gap-x-[30px] md:flex-row md:gap-y-0 md:mt-[45px]">
                      <a href="/destinations" className="text-sm font-normal items-center box-border flex h-12 justify-center tracking-wider leading-4 min-w-auto border border-sky-400 px-4 rounded border-solid font-sans hover:bg-sky-400 hover:text-neutral-950 transition-colors md:text-base md:h-10 md:tracking-wider md:leading-4 md:min-w-38">
                        <span className="text-sm items-center box-border grid h-5 justify-center tracking-wider leading-4 overflow-hidden pt-0.5 md:text-base md:tracking-wider md:leading-4">
                          <span className="text-sm box-border block col-end-auto col-start-1 row-start-1 tracking-wider leading-4 md:text-base md:tracking-wider md:leading-4">Explore Destinations</span>
                        </span>
                      </a>
                      <a href="/book" className="text-sm font-normal items-center box-border flex h-12 justify-center tracking-wider leading-4 min-w-auto border border-sky-400 px-4 rounded border-solid font-sans hover:bg-sky-400 hover:text-neutral-950 transition-colors md:text-base md:h-10 md:tracking-wider md:leading-4 md:min-w-38">
                        <span className="text-sm items-center box-border grid h-5 justify-center tracking-wider leading-4 overflow-hidden pt-0.5 md:text-base md:tracking-wider md:leading-4">
                          <span className="text-sm box-border block col-end-auto col-start-1 row-start-1 tracking-wider leading-4 md:text-base md:tracking-wider md:leading-4">Book Now</span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Background Videos */}
                <div className="absolute box-border h-full w-full left-0 top-0">
                  <video 
                    src="./videos/mobile-background.mp4" 
                    className="absolute box-border block h-full object-cover w-full z-0 left-0 top-0 md:hidden"
                    autoPlay
                    muted
                    loop
                    playsInline
                  ></video>
                  <video 
                    src="./videos/desktop-background.mp4" 
                    className="absolute box-border hidden h-full object-cover w-full z-0 left-0 top-0 md:block"
                    autoPlay
                    muted
                    loop
                    playsInline
                  ></video>
                  <div className="absolute bg-neutral-950 box-border h-full opacity-30 w-full z-0 left-0 top-0"></div>
                </div>
              </div>
            </div>
          </main>

          <div className="fixed bg-[url('https://www.nomorehippocrites.com/_nuxt/noise.BzbFej6P.png')] box-border h-[calc(100%_+_200px)] left-[-100px] top-[-100px] translate-x-[90px] translate-y-[-90px] w-[calc(100%_+_200px)] z-[2] bg-center right-0 bottom-0 md:translate-x-[5px] md:translate-y-[-35px]"></div>
        </div>
      </div>
      <div className="box-border"></div>
    </div>
  );
}
