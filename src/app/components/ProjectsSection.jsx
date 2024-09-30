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
          name={t("all")}
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
        {(tag === "All" || tag === "Data" || tag === "Web") && (
          <motion.li variants={cardVariants} transition={{ duration: 0.3 }}>
            <ProjectCard
              title="TADAI"
              description={t("p1")}
              imgUrl="/images/projects/1.png"
              gitUrl="https://github.com/cleophass/tadai"
              previewUrl="https://www.youtube.com/watch?v=XY3lPJDG1sE"
              iconIds={[1,2,4,8]}
            />
          </motion.li>
        )}
        {(tag === "All" || tag === "Data") && (
          <motion.li variants={cardVariants} transition={{ duration: 0.3 }}>
            <ProjectCard
              title={t("Hackathon Cloud Computing")}
              description={t("p5")}
              imgUrl="/images/projects/5.png"
              gitUrl="https://hackathon-transports.streamlit.app/Autour_de_chez_vous"
              previewUrl="https://hackathon-transports.streamlit.app/Autour_de_chez_vous"
              iconIds={[4,5,16]}
            />
          </motion.li>
        )}
        {(tag === "All" || tag === "Data" || tag === "Web") && (
          <motion.li variants={cardVariants} transition={{ duration: 0.3 }}>
            <ProjectCard
              title={t("Geets")}
              description={t("p6")}
              imgUrl="/images/projects/6.png"
              gitUrl="https://github.com/jeandtx/geets/"
              previewUrl="https://mongodb-starter-red-eight.vercel.app/"
              iconIds={[2,6,7,8,9,10]}
            />
          </motion.li>
        )}
        {(tag === "All" || tag === "Data" || tag === "Web") && (
          <motion.li variants={cardVariants} transition={{ duration: 0.3 }}>
            <ProjectCard
              title="Solution 250"
              description={t("p3")}
              imgUrl="/images/projects/3.png"
              gitUrl="https://github.com/jeandtx/Solution250?tab=readme-ov-file"
              previewUrl="https://www.youtube.com/watch?v=PqscHXQ4oxM"
              iconIds={[1,2,4,8]}

            />
          </motion.li>
        )}
        
        
        {(tag === "All" || tag === "Web") && (
          <motion.li variants={cardVariants} transition={{ duration: 0.3 }}>
            <ProjectCard
              title="BodyScan"
              description={t("p2")}
              imgUrl="/images/projects/2.png"
              gitUrl="https://github.com/cleophass/bodyscan_2"
              previewUrl="https://youtube.com/shorts/_TyAym5NU9M"
              iconIds={[2,7,8,10,11]}
            />
          </motion.li>

        )}
        {(tag === "All" || tag === "Data") && (
          <motion.li variants={cardVariants} transition={{ duration: 0.3 }}>
            <ProjectCard
              title="Image Segmentation DBSCAN"
              description={t("p7")}
              imgUrl="/images/projects/7.png"
              gitUrl="https://github.com/cleophass/Application-of-DBSCAN-Clustering-on-Satellite-Imagery-of-Venice"
              previewUrl="/fr/notebook.html"
              iconIds={[4,13,14,15]}
            />
          </motion.li>
          
        )}
        {/* {(tag === "All" || tag === "Web") && (
          <motion.li variants={cardVariants} transition={{ duration: 0.3 }}>
            <ProjectCard
              title="Scorify"
              description={t("p4")}
              imgUrl="/images/projects/4.png"
              gitUrl="https://github.com/cleophass/Scorify"
              previewUrl="https://scorify-cleophass-projects.vercel.app/"
              iconIds={[3,9]}
            />
          </motion.li>
        )} */}
      </motion.ul>
    </section>
  );
};

export default ProjectsSection;