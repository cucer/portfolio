import React from 'react';
// import { RxGithubLogo, RxLinkedinLogo, RxSpeakerLoud } from 'react-icons/rx';

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] ">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          {/* 1 */}
          {/* <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <RxLinkedinLogo />
              <a
                href="https://www.linkedin.com/in/cagatayucer/"
                target="_blank"
              >
                <span className="text-[15px] ml-[6px]">Linkedin</span>
              </a>
            </p>
          </div> */}
          {/* 2 */}
          {/* <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <RxGithubLogo />
              <a href="https://github.com/cucer" target="_blank">
                <span className="text-[15px] ml-[6px]">GitHub</span>
              </a>
            </p>
          </div> */}
          {/* 3 */}
          {/* <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <RxSpeakerLoud />
              <a
                href="https://soundcloud.com/cagatayucer/soul-transformation-frndzzacademy-cgty"
                target="_blank"
              >
                <span className="text-[15px] ml-[6px]">SoundCloud</span>
              </a>
            </p>
          </div> */}
        </div>

        <div className="mb-[20px] text-[15px] text-center">
          Cagatay Ucer &copy; All rights reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
