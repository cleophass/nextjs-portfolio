"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { useI18n } from '../../locales/client'

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  const t = useI18n();

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div className="sm:block hidden"><Image src="/images/about-image.png" width={500} height={500} alt="About me image" /></div>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">{t("abouttitle")}</h2>
          <p className="text-base lg:text-lg">{t("aboutcontent")}
            I love working on projects that involve data manipulation, visualization, and building machine learning models, skills I picked up during my studies. I&apos;m also really into web development because I enjoy creating apps that can be useful to me, like one for tracking my workout progress. Outside of tech, 
            I&apos;m really into sports, whether it&apos;s weightlifting, running, or gymnastics, I&apos;m all about pushing myself and staying active!
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </TabButton>
          </div>
          <div className="mt-8">
            {tab === "skills" && (
              <ul className="list-disc pl-2">
                <li>Python (Pandas, Matlplotlib, Numpy, Keras, Sklearn & TensorFlow)</li>
                <li>Database SQL and NoSQL (MongoDB, PostgreSQL, Cassandra & Neo4j)</li>
                <li>JavaScrip (Next, React, Vite)</li>
                <li>Git (GitHub & GitLab)</li>
              </ul>
            )}
            {tab === "education" && (
              <ul className="list-disc pl-2">
                <li>{t("efrei")}</li>
                <li>{t("apu")}</li>
              </ul>
            )}
            {tab === "certifications" && (
              <ul className="list-disc pl-2">
                <li>Azure Fundamentals (AZ-900)</li>
                <li>TOEIC: 920 / 990</li>
                <li>{t("voltaire")}</li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;