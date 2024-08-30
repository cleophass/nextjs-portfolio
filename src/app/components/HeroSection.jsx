"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import { useI18n, useScopedI18n } from '../../locales/client'

export function smoothScroll(e) {
  e.preventDefault();
  const href = e.currentTarget.getAttribute('href');
  const targetId = href.replace(/.*\#/, "");
  const elem = document.getElementById(targetId);
  elem?.scrollIntoView({
    behavior: 'smooth'
  });
}

const HeroSection = () => {
  const t = useI18n();
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
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
          {t("hello")}{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Cléophas",
                1000,
                "Data Engineer",
                1000,
                "Web Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
          {t("herotitle")}
          </p>
          <div>
          <Link
  href="/#contact"
  onClick={smoothScroll}
  className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-400 to-blue-600 hover:bg-slate-200 text-white transition-all duration-300"
>
{t("hire")}
</Link>
            <Link
              href="https://www.canva.com/design/DAGPPA3m3VA/UXscvhrO2qcgFJqB_1zIUg/view?utm_content=DAGPPA3m3VA&utm_campaign=designshare&utm_medium=link&utm_source=editor"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-400 to-blue-600 hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                {t("cv")}
              </span>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="lg:block hidden rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/hero-image.png"
              alt="hero image"
              className="rounded-full absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
          <div className="lg:hidden block rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/hero-image.png"
              alt="hero image"
              className="rounded-full absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={200}
              height={200}
            />
            {/* to handle responsive quickly */}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
