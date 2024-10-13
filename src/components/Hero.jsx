import React from "react";
import { motion } from "framer-motion";
import { styles } from "../style";
import { ComputersCanvas } from "./canvas";
import { Tilt } from "react-tilt";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaBehance,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Thilshan</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I Develop Web and Mobile Application{" "}
            <br className="sm:block hidden" />
          </p>

          <div className="flex space-x-4 mt-6">
            <a
              href="https://www.linkedin.com/in/thilshan-mohamed/"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-container"
            >
              <FaLinkedin className="icon" />
            </a>
            <a
              href="https://github.com/smThilshan"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-container"
            >
              <FaGithub className="icon" />
            </a>
            <a
              href="mailto:smthilshan@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-container"
            >
              <FaEnvelope className="icon" />
            </a>
   
            <a
              href="https://www.facebook.com/share/wUeRVRSTczgxaBof/?mibextid=qi2Omg"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-container"
            >
              <FaFacebook className="icon" />
            </a>
            <a
              href= "https://www.instagram.com/mohamed_thilshan/profilecard/?igsh=cWpnMmh5bTFnZGFh"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-container"
            >
              <FaInstagram className="icon" />
            </a>

            <a
              href="https://x.com/Thilshan20?t=utZ1BHaW2caPFjSmj0hpPQ&s=08"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-container"
            >
              <FaXTwitter className="icon" />
            </a>
          </div>
        </div>
      </div>

      {/* <ComputersCanvas /> */}

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
