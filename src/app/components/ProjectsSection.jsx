"use client";
import React, { useState, useRef, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useAnimation } from "framer-motion";
import { useI18n } from "../../locales/client";

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const controls = useAnimation();
  const t = useI18n();

  const handleTagChange = (newTag) => {
    setTag(newTag);
    controls.start("hidden").then(() => {
      controls.start("visible");
    });
  };

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
        {t("project")}
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={() => handleTagChange("All")}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={() => handleTagChange("Data")}
          name="Data"
          isSelected={tag === "Data"}
        />
        <ProjectTag
          onClick={() => handleTagChange("Web")}
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
        {(tag === "All" || tag === "Data") && (
          <motion.li variants={cardVariants} transition={{ duration: 0.3 }}>
            <ProjectCard
              title="TADAI"
              description={t("p1")}
              imgUrl="/images/projects/1.png"
              gitUrl="/"
              previewUrl="/"
            />
          </motion.li>
        )}
        {(tag === "All" || tag === "Web") && (
          <motion.li variants={cardVariants} transition={{ duration: 0.3 }}>
            <ProjectCard
              title="BodyScan"
              description={t("p2")}
              imgUrl="/images/projects/2.png"
              gitUrl="/"
              previewUrl="/"
            />
          </motion.li>
        )}
        {(tag === "All" || tag === "Data") && (
          <motion.li variants={cardVariants} transition={{ duration: 0.3 }}>
            <ProjectCard
              title="Solution 250"
              description={t("p3")}
              imgUrl="/images/projects/3.png"
              gitUrl="/"
              previewUrl="/"
            />
          </motion.li>
        )}
        {(tag === "All" || tag === "Web") && (
          <motion.li variants={cardVariants} transition={{ duration: 0.3 }}>
            <ProjectCard
              title="Scorify"
              description={t("p4")}
              imgUrl="/images/projects/4.png"
              gitUrl="/"
              previewUrl="/"
            />
          </motion.li>
        )}
        {(tag === "All" || tag === "Data") && (
          <motion.li variants={cardVariants} transition={{ duration: 0.3 }}>
            <ProjectCard
              title={t("Hackathon Cloud Computing")}
              description={t("p5")}
              imgUrl="/images/projects/5.png"
              gitUrl="/"
              previewUrl="/"
            />
          </motion.li>
        )}
      </motion.ul>
    </section>
  );
};

export default ProjectsSection;