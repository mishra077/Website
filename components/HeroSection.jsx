"use client";
import React from 'react'
import Image from 'next/image';
// import resume from '../public/Resume/Abhishek_Resume.pdf';
import { motion } from 'framer-motion';

import { TypeAnimation } from 'react-type-animation';


const onDownloadClick = () => {

    fetch('Abhishek_Resume.pdf').then(response => {
        response.blob().then(blob => {
            // Creating new object of PDF file
            const fileURL = window.URL.createObjectURL(blob);
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'Abhishek_Resume.pdf';
            alink.click();
        })
    })
}


const HeroSection = () => {
  return (
    <section className="lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-12">
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
            >
                
                <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                        Hello, I&apos;m{" "}
                    </span> 
                    <br></br>
                    <TypeAnimation
                        sequence={[
                            // Same substring at the start will only be typed out once, initially
                            'Abhishek',
                            1000, // wait 1s before replacing "Mice" with "Hamsters"
                            'a Researcher',
                            1000,
                            'an AI Enthusiast',
                            1000,
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                    />
                </h1>
                <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
                    Currently working as a Software Engineer at Cansera. <br/>
                    Passionate about AI and its applications. <br/>
                    +3 years of Research experience in the field of Computer Vision.
                    Open for new opportunities.
                </p>
                <div>
                    {/* <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white">
                        Hire Me
                    </button> */}
                    
                    <button onClick={onDownloadClick} className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white border border-white mt-3">
                        <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                            Download CV
                        </span>
                    </button>
                    
                </div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="col-span-4 place-self-center mt-4 lg:mt-0"
            >
                <div style={{overflow: "hidden"}} className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[350px] lg:h-[350px] relative">
                    <Image
                        src="/Image/profile.jpg"
                        width={500}
                        height={500}
                        alt="Hero Image"
                        className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"

                    />
                </div>
            </motion.div>
            
        </div>
    </section>
  );
};

export default HeroSection; 
