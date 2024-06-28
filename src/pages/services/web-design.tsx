import React from "react";
import { motion } from "framer-motion";
import Email from "@/components/Email";
import Loader from "@/components/Loader";
import SocialIcons from "@/components/SocialIcons";
import Footer from "@/sections/Footer";
import Navbar from "@/sections/Navbar";
import Head from "next/head";

function WebDesign() {
  return (
    <div>
      <Head>
        <title>Web Design || EJM Services</title>
        <meta name="description" content="" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>

      <>
        <Navbar />
        <SocialIcons />
        <Email />
        <main></main>
        <Footer />
      </>
    </div>
  );
}

export default WebDesign;
