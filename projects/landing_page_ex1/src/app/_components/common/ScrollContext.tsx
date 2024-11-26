'use client';
import React, { createContext, useContext, useRef } from "react";

interface SectionRefs {
  home: React.RefObject<HTMLDivElement>;
  visual: React.RefObject<HTMLDivElement>;
  introduction: React.RefObject<HTMLDivElement>;
  services: React.RefObject<HTMLDivElement>;
  contact: React.RefObject<HTMLDivElement>;
}

const ScrollContext = createContext<SectionRefs | null>(null);

export const ScrollProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const homeRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);
  const introductionRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const sectionRefs = {
    home: homeRef,
    visual: visualRef,
    introduction: introductionRef,
    services: servicesRef,
    contact: contactRef,
  };

  return (
    <ScrollContext.Provider value={sectionRefs}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useScrollContext = () => {
  const context = useContext(ScrollContext);
  if (!context) {
    throw new Error("useScrollContext must be used within a ScrollProvider");
  }
  return context;
};
