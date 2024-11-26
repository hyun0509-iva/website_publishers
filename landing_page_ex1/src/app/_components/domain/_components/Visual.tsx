"use client";
import React, { forwardRef, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import style from "./visual.module.css";

const VisualSection = forwardRef<HTMLElement>((props, ref) => {
  const visualTxtWrapRef = useRef<HTMLDivElement>(null);
  const visualH1Ref = useRef<HTMLHeadingElement>(null);
  const visualPRef = useRef<HTMLParagraphElement>(null);

  useGSAP(() => {
      gsap.registerPlugin(ScrollTrigger);
      // scrub: 1 // 부드러운 스크롤 효과
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: visualTxtWrapRef.current,
          start: "top 60%",
          end: "bottom center",
          toggleActions: "play none none reverse",
        },
      });

      tl.fromTo(
        visualH1Ref.current,
        {
          duration: 0.8,
          x: -50,
          opacity: 0,
          ease: "back.out(1.7)",
        },
        {
          duration: 0.8,
          opacity: 1,
          x: 0,
         ease: "back.out(1.7)",
        }
      ).fromTo(
        visualPRef.current,
        {
          duration: 0.8,
          x: -50,
          opacity: 0,
         ease: "back.out(1.7)",
        },
        {
          duration: 0.8,
          opacity: 1,
          x: 0,
          ease: "back.out(1.7)",
        }
      );
    },
    { scope: visualTxtWrapRef }
  );

  return (
    <section ref={ref} id={style.visual} className={style.visual}>
      <div className={style.visual_wrap}>
        <div className={style.visual_container}>
          <div className={style.overlap}></div>
          <div className={style.bg}></div>
          <div ref={visualTxtWrapRef} className={style.inner_txt}>
            <h1 ref={visualH1Ref}>
              혁신과 신뢰를 중요시 하는 기업, <br /> 고객의 가치와 최고의 품질
              서비스로 보답하는 기업
            </h1>
            <p ref={visualPRef}>
              혁신과 신뢰를 바탕으로 고객의 가치를 창출하는 기업입니다. 최고의
              품질과 서비스를 <br />
              제공하여 지속 가능한 성장을 추구합니다.
            </p>
          </div>
          <div className={style.scroll}>
            <div>Scroll Down</div>
            <div className={style.arrow}>
              <span className={style.dot}></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

VisualSection.displayName = "VisualSection";

export default VisualSection;
