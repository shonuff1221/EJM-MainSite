import Button from "@/components/Button";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
function WebDesignSection() {
  return (
    <div className="hero">
      <motion.h1
        className="hero-title"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 0.6,
        }}
      >
        EJM SERVICES
      </motion.h1>
      <motion.h2
        className="hero-title-large"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 0.75,
        }}
      >
        Web Design Service
      </motion.h2>
      <motion.h3
        className="hero-title-large hero-title-sub"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 1.05,
        }}
      ></motion.h3>
      <motion.p
        className="hero-text"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 1.35,
        }}
      >
        In today&apos;s digital landscape, your website is your virtual
        storefront. It&apos;s the first impression you make on potential
        clients, and it can make or break your online success. Our web design
        services are more than just pretty pixels; they&apos;re the key to
        unlocking your brand&apos;s full potential in the digital realm. We
        don&apos;t just build websites; we craft digital experiences that
        engage, inspire, and convert.&nbsp;
        <br></br>
        <br></br>
        <h2>
          Gone are the days of pinching and zooming on mobile devices.
        </h2>{" "}
        <br></br>
        Our responsive web design ensures your site looks stunning and functions
        flawlessly across all screen sizes. From smartphones to desktops, we
        create fluid layouts that adapt seamlessly, providing an optimal viewing
        experience for every user. As the legendary Steve Jobs once said,
        "Design is not just what it looks like and feels like. Design is how it
        works." User Experience (UX) That Delights and Converts What's the
        secret sauce of a successful website? It's all about the user
        experience. Our UX-focused approach puts your visitors at the center of
        the design process. We craft intuitive navigation, strategically place
        call-to-action buttons, and create a journey that guides users
        effortlessly towards conversion. Remember, "Good design is obvious.
        Great design is transparent." - Joe Sparano SEO-Friendly Architecture:
        Climbing the Search Engine Summit What good is a beautiful website if no
        one can find it? Our web design services incorporate SEO best practices
        from the ground up. We build a solid foundation with clean code,
        optimized images, and lightning-fast load times. Like a well-oiled
        machine, every element works together to boost your search engine
        rankings and drive organic traffic to your digital doorstep.
        Brand-Centric Design: Your Digital DNA Your website should be as unique
        as your fingerprint. We don't believe in one-size-fits-all templates.
        Instead, we dive deep into your brand's essence, crafting a custom
        design that reflects your values, personality, and goals. From color
        psychology to typography choices, every element is carefully selected to
        resonate with your target audience and leave a lasting impression.
        Continuous Evolution: Websites That Grow With You The digital world
        never stands still, and neither should your website. Our web design
        services don't end at launch. We offer ongoing support and optimization
        to ensure your site evolves with your business and stays ahead of the
        curve. As Charles Darwin wisely noted, "It is not the strongest of the
        species that survives, nor the most intelligent. It is the one most
        adaptable to change."
      </motion.p>
      <motion.div
        className="hero-button"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 1.65,
        }}
      >
        <Button
          text="Check out our services"
          link="https://ejm.services/our-services"
        />
      </motion.div>
    </div>
  );
}

export default WebDesignSection;
