"use client";
import React, { useState, useRef } from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag'
import { motion, useInView } from 'framer-motion';

const ProjectsData = [
    {
        id: 1,
        title: "Personal Portfolio Website",
        description: "Used ReactJS, TailwindCSS, NextJS, Framer Motion",
        image: "/Image/Projects/portfolio.jpg",
        tag: ["All", "Web"],
        gitURL: "/",
        previewURL: "/"
    },
    {
        id: 2,
        title: "ChatGPT-Clone",
        description: "Used OpenAI's API, langchain and streamlit for webpage",
        image: "/Image/Projects/Chat-gpt.jpg",
        tag: ["All", "Web", "AI"],
        gitURL: "https://github.com/mishra077/ChatGPT_Projects",
        previewURL: "https://gptclone-theta.vercel.app/"
    },
    {
        id: 3,
        title: "Stock Market IOS App",
        description: "An IOS app to track stock market prices with Buy/sell and portfolio management features",
        image: "/Image/Projects/StockApp.jpg",
        tag: ["All", "Web"],
        gitURL: "https://github.com/mishra077/IOS",
        previewURL: "/"
    },
    {
        id: 4,
        title: "Checker AI Bot",
        description: "A CLI based checker bot using minimax algorithm with alpha-beta pruning",
        image: "/Image/Projects/Checker.jpg",
        tag: ["All", "AI"],
        gitURL: "https://github.com/mishra077/Checker_AI_agent",
        previewURL: "/"
    },
    {
        id: 5,
        title: "FOL Engine",
        description: "First Order Logic Engine using resolution algo to solve queries",
        image: "/Image/Projects/FOL.jpg",
        tag: ["All", "AI"],
        gitURL: "/https://github.com/mishra077/FOL_Engine",
        previewURL: "/"
    },
    {
        id: 6,
        title: "Optimizing Monte Carlo Path Tracer",
        description: "CUDA based parallelized Monte Carlo Path Tracer of Peter Shirley's Ray Tracing in One Weekend",
        image: "/Image/Projects/ray-tracing.jpg",
        tag: ["All", "AI"],
        gitURL: "/https://github.com/mishra077/Optimizing_-Path-Tracing-Rendering-System-Using-CUDA/tree/main/Optimizing_Path_Tracing_Rendering_System_using_CUDA-main",
        previewURL: "/"
    },

]



const ProjectSection = () => {
    const [tag, setTag] = useState("All");
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    
    const handleTagChange = (newTag) => {
        setTag(newTag);
    };

    const filteredProjects = ProjectsData.filter((project) => 
        project.tag.includes(tag)
    );

    const cardVariants = {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1 },
    };

  return (
    <section id="#projects">
        <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
            My Projects
        </h2>
        <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
            <ProjectTag 
                name="All" 
                isSelected={tag === "All"} 
                onClick={handleTagChange} 
            />
            <ProjectTag 
                name="AI" 
                isSelected={tag === "AI"} 
                onClick={handleTagChange} 
            />
            <ProjectTag 
                name="Web" 
                isSelected={tag === "Web"} 
                onClick={handleTagChange} 
            />
        </div>
        <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
            {filteredProjects.map((project, index) => (
                <motion.li 
                    key={index}
                    variants={cardVariants} 
                    initial="initial" 
                    animate={isInView ? "animate" : "initial"}
                    transition={{ duration: 0.3, delay: index * 0.4 }}
                >
                    <ProjectCard 
                        key={project.id} 
                        title={project.title} 
                        description={project.description} 
                        imgUrl={project.image} 
                        gitURL={project.gitURL}
                        previewURL={project.previewURL}
                    />
                </motion.li>
            ))}
        </ul>
    </section>
  );
};

export default ProjectSection;