import Chatwoot from "@/components/chat";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  const metadata = {
    title: {
      default: "EJM Services | Web Design",
      template: "%s | EJM Services",
    },
    description:
      "Are you a small business owner in need of a professional website that won't break the bank? Look no further than EJM Services - your go-to web design agency specializing in creating stunning, mobile-friendly websites at affordable prices.",
    icons: "/favicon.ico",
    robots: {
      index: true,
    },

    appleWebApp: {
      title: "EJM Services",
      statusBarStyle: "default",
      capable: true,
      fullscreen: true,
      display: "standalone",
      icon: "/favicon.ico",
    },

    openGraph: {
      title: "EJM Services",
      type: "website",
      locale: "en_US",
      description:
        "Are you a small business owner in need of a professional website that won't break the bank? Look no further than EJM Services - your go-to web design agency specializing in creating stunning, mobile-friendly websites at affordable prices.",
      site_name: "EJM Services | Web Design",
      url: "https://www.ejm.services/",
      image: "https://www.ejm.services/logo.png",
      imageAlt: "EJM Services",
    },
    twitterCard: {
      title: "EJM Services",
      description:
        "Are you a small business owner in need of a professional website that won't break the bank? Look no further than EJM Services - your go-to web design agency specializing in creating stunning, mobile-friendly websites at affordable prices.",
    },
    twitterHandle: "@shonuff1221",
  };
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
      <Chatwoot />
    </Html>
  );
}
