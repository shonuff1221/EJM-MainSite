import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { useInView, motion } from "framer-motion";

function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  useEffect(() => {
    console.log("Element is in view: ", isInView);
  }, [isInView]);
  return (
    <motion.div
      className="services"
      id="services"
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
        <h2>Our Services</h2>
      </div>
      <div className="services-grid">
        <div className="services-grid-info">
          <p className="services-grid-info-text">
            We offer a wide range of affordable services for our clients,
          </p>

          <p className="services-grid-info-text">
            Here are a few services we have to offer:
          </p>
          <ul className="services-grid-info-list">
            <li>
              <a
                className="services-grid-info-list-item"
                href="/services/web-design"
              >
                Web Design
              </a>
            </li>
            <li>
              <a className="services-grid-info-list-item" href="">
                Mobile Applications
              </a>
            </li>
            <li>
              <a className="services-grid-info-list-item" href="">
                Local SEO
              </a>
            </li>
            <li>
              <a className="services-grid-info-list-item" href="">
                Custom Scripting
              </a>
            </li>
            <li>
              <a className="services-grid-info-list-item" href="">
                Live Chat Services
              </a>
            </li>
            <li>
              <a className="services-grid-info-list-item" href="">
                Online Booking Services
              </a>
            </li>
            <li>
              <a className="services-grid-info-list-item" href="">
                Computer Repair
              </a>
            </li>
            <li>
              <a className="services-grid-info-list-item" href="">
                Email Campaigns
              </a>
            </li>
            <li>
              <a className="services-grid-info-list-item" href="">
                Database Intergrations
              </a>
            </li>
            <li>
              <a className="services-grid-info-list-item" href="">
                AI Automations
              </a>
            </li>
            <li>
              <a className="services-grid-info-list-item" href="">
                Invoice Systems
              </a>
            </li>
            <li>
              <a className="services-grid-info-list-item" href="">
                Custom API Intergration
              </a>
            </li>
            <li>
              <a className="services-grid-info-list-item" href="">
                Custom Chat Bot
              </a>
            </li>
            <li>
              <a className="services-grid-info-list-item" href="">
                Need a Custom Service?
              </a>
            </li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

export default Services;
