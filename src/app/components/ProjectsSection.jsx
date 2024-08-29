"use client";
import React, { useState, useRef, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useAnimation } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "TADAI",
    description: "Web application for music recommendation using machine learning models.",
    image: "/images/projects/1.png",
    tag: ["All", "Data"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "BodyScan",
    description: "Mobile application for tracking sports performance",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Solution 250",
    description: "Web application for analyzing feedback for e-commerce using NLP.",
    image: "/images/projects/3.png",
    tag: ["All","Data"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Scorify",
    description: "Scorify is a tool for managing contracts that helps teams, contracts, deals, and suppliers through a unique scoring system. It makes decision-making easier by giving a clear, data-driven view of how well everything is performing.",
    image: "/images/projects/4.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Hackathon Cloud Computing - 3ème Édition",
    description: "Our team developed an app that predicts and analyzes station crowd levels to optimize the network. Users can enter their location and departure time to receive forecasts of crowd levels at nearby stations and the current status of available Vélib stations.",
    image: "/images/projects/5.png",
    tag: ["All", "Data"],
    gitUrl: "/",
    previewUrl: "/",
  },
  
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const controls = useAnimation();

  const handleTagChange = (newTag) => {
    setTag(newTag);
    controls.start("hidden").then(() => {
      controls.start("visible");
    });
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            controls.start("visible");
          } else {
            if (entry.boundingClientRect.top > 0) {
              controls.start("hidden");
            }
          }
        });
      },
      {
        root: null,
        rootMargin: "-30% 0px 0px 0px",
        threshold: 0,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [controls]);

  return (
    <section id="projects" ref={ref}>
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Data"
          isSelected={tag === "Data"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
      </div>
      <motion.ul 
        className="grid md:grid-cols-3 gap-8 md:gap-12"
        initial="hidden"
        animate={controls}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.1,
            },
          },
          hidden: {
            transition: {
              staggerChildren: 0.05,
              staggerDirection: -1,
            },
          },
        }}
      >
        {filteredProjects.map((project, index) => (
          <motion.li
            key={project.id}
            variants={cardVariants}
            transition={{ duration: 0.3 }}
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
};

export default ProjectsSection;