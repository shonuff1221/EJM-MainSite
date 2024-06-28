import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
function Experience() {
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    const transformSelected = () => {
      const underline = document.querySelector<HTMLElement>(".underline");
      underline!.style.top = `${selected * 2.5}rem`;
    };
    transformSelected();
  }, [selected]);

  const expereinces = [
    {
      name: "EJM Services",
      role: "Full Stack Developer / Owner",
      url: "https://www.ejm.services",
      start: "January 2024",
      end: "Present",
      shortDescription: [
        "I had experience working on a large codebase utilizing Nextjs and typescript.",
        "Throughout my work, I've utilized various MERN stack technologies, including React, Redux, TypeScript, Node.js, vite, and postgres, among others.",
        "I've also managed a small team that includes Frontend Developers, Backend Developers, and UI/UX Developers.",
        "Additionally, I've represented the company in client meetings, communicating effectively on their behalf.",
      ],
    },
    {
      name: "Sharing Well",
      role: "Developer",
      url: "https://sharing-well.com",
      start: "April 2023",
      end: "Present",
      shortDescription: [
        "I help maintain the website, with the aim of enhancing my skills and working with the latest technologies, specifically React and Node.",
        "I maintain the database sharing-well uses and provide new ways for them to interact with their clients.",
        "As a result, I've helped them to easily connect with their clients in real time and without having to worry about getting data loss",
      ],
    },
    {
      name: "Bridge City Church",
      role: "Network Administrator",
      url: "https://bridge-city.church",
      start: "November 2019",
      end: "present",
      shortDescription: [
        "I've build a secure Windows Server to manage the internal communication between office employees.",
        "Additionally, I help maintain the website, with the aim of keeping to updated software",
        "Overall, its a rewarding experience that allows me to develop my leadership skills while contributing positively to the growth of the organization.",
      ],
    },
    {
      name: "COMPPLUS",
      role: "Owner",
      url: "https://www.linkedin.com/in/stephan-moreman-850767124/",
      start: "March 2013",
      end: "November 2018",
      shortDescription: [
        "Write modern, performant, maintainable code for a diverse array of client and internal projects",
        "Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Gatsby, React, Craft, WordPress, Prismic, and Netlify",
        "Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis",
        "Repair mobile devices and laptop devices, help clients speed up their devices and fix security issues",
      ],
    },
  ];
  return (
    <motion.div
      className="experience"
      id="experience"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      <div className="title">
        <h2>Where I&apos;ve Worked</h2>
      </div>
      <div className="container">
        <ul className="exp-slider">
          <div className="underline"></div>
          {expereinces.map((expereince, index) => {
            return (
              <li
                className={`exp-slider-item ${
                  index === selected && "exp-slider-item-selected"
                }`}
                onClick={() => setSelected(index)}
                key={expereince.name}
              >
                <span>{expereince.name}</span>
              </li>
            );
          })}
        </ul>
        <div className="exp-details">
          <div className="exp-details-position">
            <h3>
              <span>{expereinces[selected].role}</span>
              <span className="exp-details-position-company">
                &nbsp;@&nbsp;
                <Link href={expereinces[selected].url} className="link">
                  {expereinces[selected].name}
                </Link>
              </span>
            </h3>
            <p className="exp-details-range">
              {expereinces[selected].start} - {expereinces[selected].end}
            </p>
            <ul className="exp-details-list">
              {expereinces[selected].shortDescription.map(
                (description, index) => (
                  <li key={index} className="exp-details-list-item">
                    {description}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Experience;
