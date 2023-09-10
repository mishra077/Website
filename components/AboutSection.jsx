/* eslint no-use-before-define: 0 */  // --> OFF
"use client";
import React, { useState, useTransition } from 'react'
import Image from 'next/image';
// import ReactPlayer from 'react-player';
import TabButton from './TabButton';

import dynamic from 'next/dynamic'
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content:(
            <ul className="list-disc pl-2">
                <li>Node.JS</li>
                <li>PostGres</li>
                <li>HTML</li>
                <li>Pytorch</li>
                <li>OpenCV</li>
                <li>TensorFlow</li>
                <li>C++17</li>
                <li>Jenkins</li>
            </ul>
        ),
    },
    {
        title: "Education",
        id: "education",
        content:(
            <ul className="list-disc pl-2">
                <li>University of Southern California</li>
                <li>Manipal University Jaipur</li>
            </ul>
        ),
    },
    {
        title: "Experience",
        id: "experience",
        content:(
            <ul className="list-disc pl-2">
                <li>Software Engineer at Cansera</li>
                <li>Computer Vision Research Engineer at Aibee</li>
            </ul>
        ),
    }
]

const AboutSection = () => {
  
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition()

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  }

  return (
    <section className="text-white" id="#about">
        <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
            <Image src="/Image/about-image.png" width={500} height={500} alt='/'/>
            <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                <h2 className="text-4xl font-bold text-white mb-4 ">
                    About Me
                </h2>
                <p className="text-base lg:text-lg">

                    I'm a computer scientist with a profound passion for machine learning 
                    and artificial intelligence. My journey through academia, including a 
                    Master's degree in Computer Science, has equipped me with a diverse 
                    skill set and a deep appreciation for technology. I specialize in 
                    computer vision, deep learning, image processing, and natural language 
                    processing, harnessing the power of Convolutional Neural Networks, 
                    Generative Adversarial Networks, and Transformers. I'm well-versed in 
                    a variety of programming languages, including Python, C++, and C, 
                    and have mastered frameworks such as TensorFlow, PyTorch, OpenCV, 
                    NumPy, Sklearn, NLTK, and Pandas. From optimizing algorithms to conducting 
                    pioneering research, I've consistently pushed the boundaries of what's 
                    possible in tech. My commitment to making AI accessible to all drives me 
                    to create innovative, open-source solutions.
                </p>
                <div className="flex flex-row mt-8">
                    <TabButton 
                        active={tab === "skills"} 
                        selectTab={() => handleTabChange("skills")}
                    >
                        {" "}
                        Skills{" "}
                    </TabButton>
                    <TabButton 
                        active={tab === "education"} 
                        selectTab={() => handleTabChange("education")}
                    >
                        {" "}
                        Education{" "}
                    </TabButton>
                    <TabButton 
                        active={tab === "experience"} 
                        selectTab={() => handleTabChange("experience")}
                    >
                        {" "}
                        Experience{" "}
                    </TabButton>
                </div>
                <div className='mt-8'>
                    {TAB_DATA.find((t) => t.id === tab).content}
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutSection;