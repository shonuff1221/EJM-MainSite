import React from "react";
import { motion } from "framer-motion";
import Email from "@/components/Email";
import Loader from "@/components/Loader";
import SocialIcons from "@/components/SocialIcons";
import Footer from "@/sections/Footer";
import Navbar from "@/sections/Navbar";
import Head from "next/head";
import WebDesignSection from "@/sections/WebDesign";

function WebDesign() {
  return (
    <div>
      <Head>
        <title>Web Design || EJM Services</title>
        <meta
          name="description"
          content="Responsive Design: One Site, Endless Possibilities"
        />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>

      <>
        <Navbar />
        <SocialIcons />
        <Email />
        <main>
          <WebDesignSection />
        </main>
        <Footer />
      </>
    </div>
  );
}

export default WebDesign;
