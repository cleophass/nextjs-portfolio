"use client";
import React from "react";
import { useI18n } from "../../locales/client";

const skills = [
  { src: "/icon/azure.png", alt: "Icon 1" },
  { src: "/icon/js.png", alt: "Icon 2" },
  { src: "/icon/jupyter.png", alt: "Icon 3" },
  { src: "/icon/mongodb.svg", alt: "Icon 4" },
  { src: "/icon/nextjs.png", alt: "Icon 5" },
  { src: "/icon/NLP.png", alt: "Icon 6" },
  { src: "/icon/numpy.svg", alt: "Icon 7" },
  { src: "/icon/postgresql.png", alt: "Icon 8" },
  { src: "/icon/pwa.webp", alt: "Icon 9" },
  { src: "/icon/python.webp", alt: "Icon 10" },
  { src: "/icon/sklearn.svg", alt: "Icon 11" },
  { src: "/icon/streamlit.png", alt: "Icon 12" },
  { src: "/icon/vercel.png", alt: "Icon 13" },
  { src: "/icon/vite.svg", alt: "Icon 14" },
];

const Skills: React.FC = () => {
    const t = useI18n();
  return (
    <div className="my-32">
      {/* <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">{t("skillstitle")}</h2> */}

      <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
          {skills.map((skill, index) => (
            <li key={index}>
              <img src={skill.src} alt={skill.alt} className="h-16" />
            </li>
          ))}
        </ul>
        <ul
          className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
          aria-hidden="true"
        >
          {skills.map((skill, index) => (
            <li key={index}>
              <img src={skill.src} alt={skill.alt} className="h-16" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Skills;
