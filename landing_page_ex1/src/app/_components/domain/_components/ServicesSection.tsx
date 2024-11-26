"use client";
import React, { forwardRef, useCallback, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import style from "./services.module.css";

const ServicesSection = forwardRef<HTMLElement>((props, ref) => {
  const serviceContainerRef = useRef<HTMLDivElement>(null);
  const serviceH1Ref = useRef<HTMLHeadingElement>(null);
  const servicePRef = useRef<HTMLParagraphElement>(null);
  const serviceContentsRefs = useRef<(HTMLDivElement | null)[]>([]);

  // ref 콜백 핸들러
  const serviceContentsRefsHandler = useCallback(
    (index: number) => (el: HTMLDivElement | null) => {
      serviceContentsRefs.current[index] = el;
    },
    []
  );

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: serviceContainerRef.current,
          start: "top 60%",
          end: "bottom center",
          toggleActions: "play none none reverse",
        },
      });

      tl.fromTo(
        serviceH1Ref.current,
        {
          duration: 0.8,
          y: 50,
          opacity: 0,
          ease: "power2.inOut",
        },
        {
          duration: 0.8,
          opacity: 1,
          y: 0,
          ease: "power2.inOut",
        }
      )
        .fromTo(
          servicePRef.current,
          {
            duration: 0.8,
            y: 50,
            opacity: 0,
            ease: "power2.inOut",
          },
          {
            duration: 0.8,
            opacity: 1,
            y: 0,
            ease: "power2.inOut",
          }
        )
        .from(
          serviceContentsRefs.current,
          {
            duration: 0.8,
            opacity: 0,
            y: 50,
            stagger: 0.2, // 각 요소들 사이의 간격
            ease: "back.out(1.7)",
          }
        );
    },
    { scope: serviceContainerRef }
  );

  return (
    <section ref={ref} id={style.services} className={style.section02}>
      <div className={style.wrap}>
        <div
          ref={serviceContainerRef}
          className={`container ${style.service_container}`}
        >
          <div className={style.service_inner}>
            <div className={style.inner_txt}>
              <h2 ref={serviceH1Ref}>SERVICE</h2>
              <p ref={servicePRef}>아래와 같은 서비스를 제공합니다.</p>
            </div>
            <div className={style.service_content_list}>
              <div
                ref={serviceContentsRefsHandler(0)}
                className={style.service_content}
              >
                <img src="./images/work1.webp" alt="work img" loading="lazy" />
                <span className={style.txt}>텍스트</span>
              </div>
              <div
                ref={serviceContentsRefsHandler(1)}
                className={style.service_content}
              >
                <img src="./images/work2.webp" alt="work img" loading="lazy" />
                <span className={style.txt}>텍스트</span>
              </div>
              <div
                ref={serviceContentsRefsHandler(2)}
                className={style.service_content}
              >
                <img src="./images/work3.webp" alt="work img" loading="lazy" />
                <span className={style.txt}>텍스트</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

ServicesSection.displayName = "ServicesSection";

export default ServicesSection;
