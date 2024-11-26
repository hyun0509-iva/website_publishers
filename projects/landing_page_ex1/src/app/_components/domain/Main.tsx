"use client";
import React from "react";
import VisualSection from "./_components/Visual";
import IntroductionSection from "./_components/IntroductionSection";
import ServicesSection from "./_components/ServicesSection";
import ContactSection from "./_components/ContactSection";
import { useScrollContext } from "../common/ScrollContext";

const Main = () => {
  const { visual, introduction, services, contact } = useScrollContext();

  return (
    <main className="wrap">
      <VisualSection ref={visual} />
      <IntroductionSection ref={introduction} />
      <ServicesSection ref={services} />
      <ContactSection ref={contact} />
    </main>
  );
};

export default Main;
