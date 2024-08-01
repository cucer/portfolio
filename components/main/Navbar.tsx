import Image from 'next/image';
import React from 'react';
import { Socials } from '@/constants';
import { RxGithubLogo, RxLinkedinLogo, RxSpeakerLoud } from 'react-icons/rx';

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a href="#about" className="h-auto w-auto flex flex-row items-center">
          <Image
            src="./cgty_logo.png"
            alt="logo"
            width={50}
            height={50}
            className="cursor-pointer hover:animate-slowspin"
          />

          <span
            className="font-bold ml-[10px] hidden md:block text-gray-300 text-transparent bg-clip-text
            bg-gradient-to-r from-purple-500 to-cyan-500 py-10"
          >
            Cagatay Ucer
          </span>
        </a>

        <div className="flex flex-row gap-5 text-gray-200">
          {Socials.map((social, index) => (
            <div key={index}>
              <p className="flex flex-row items-center my-[15px] cursor-pointer">
                <a href={social.url} target="_blank">
                  {index === 0 ? (
                    <RxLinkedinLogo />
                  ) : index === 1 ? (
                    <RxGithubLogo />
                  ) : (
                    <RxSpeakerLoud />
                  )}
                </a>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
