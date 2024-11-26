"use client";
import React, { forwardRef, useCallback, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import style from "./introduction.module.css";
import { countUpAnimation } from "../_utils/countUpAnimation";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

const IntroductionSection = forwardRef<HTMLElement>((props, ref) => {
  const introTxtWrapRef = useRef<HTMLDivElement>(null);
  const introH1Ref = useRef<HTMLHeadingElement>(null);
  const introPRef = useRef<HTMLParagraphElement>(null);
  const statsH1Ref = useRef<HTMLHeadingElement>(null);
  const statsPRef = useRef<HTMLParagraphElement>(null);

  // 각 stats 요소에 대한 ref 추가
  const statsRefs = useRef<(HTMLDivElement | null)[]>([]);
  const statsValueRefs = useRef<(HTMLDivElement | null)[]>([]);

  // ref 콜백 핸들러
  const statsRefHandler = useCallback(
    (index: number) => (el: HTMLDivElement | null) => {
      statsRefs.current[index] = el;
    },
    []
  );

  const statsValueRefsHandler = useCallback(
    (index: number) => (el: HTMLDivElement | null) => {
      statsValueRefs.current[index] = el;
    },
    []
  );

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: introTxtWrapRef.current,
          start: "top 60%",
          end: "bottom center",
          toggleActions: "play none none reverse",
        },
      });

      tl.fromTo(
        introH1Ref.current,
        {
          duration: 0.5,
          y: 50,
          opacity: 0,
          ease: "power2.inOut",
        },
        {
          duration: 0.5,
          opacity: 1,
          y: 0,
          ease: "power2.inOut",
        }
      )
        .fromTo(
          introPRef.current,
          {
            duration: 0.5,
            y: 50,
            opacity: 0,
            ease: "power2.inOut",
          },
          {
            duration: 0.5,
            opacity: 1,
            y: 0,
            ease: "power2.inOut",
          }
        )
        .fromTo(
          statsH1Ref.current,
          {
            duration: 0.5,
            y: 50,
            opacity: 0,
            ease: "power2.inOut",
          },
          {
            duration: 0.5,
            opacity: 1,
            delay: 0.3,
            y: 0,
            ease: "power2.inOut",
          }
        )
        .fromTo(
          statsPRef.current,
          {
            duration: 0.5,
            y: 50,
            opacity: 0,
            delay: 0.3,
            ease: "power2.inOut",
          },
          {
            duration: 0.5,
            opacity: 1,
            y: 0,
            ease: "power2.inOut",
          }
        )
        .from(statsRefs.current, {
          duration: 0.5,
          opacity: 0,
          y: 30,
          stagger: 0.2, // 각 텍스트 요소의 간격
          ease: "power2.inOut",
          delay: 0.2, // 배경이 올라온 후 나타나도록 딜레이 설정,
          onComplete: () => {
            // 애니메이션이 끝난 후 수치가 올라가도록 설정
            countUpAnimation(statsValueRefs.current[0]!, 0, 92, 2000);
            countUpAnimation(statsValueRefs.current[1]!, 0, 1000, 2000);
            countUpAnimation(statsValueRefs.current[2]!, 0, 98, 2000);
          },
        });
    },
    { scope: introTxtWrapRef }
  );

  return (
    <section ref={ref} id={style.introduction} className={style.section01}>
      <div className={style.wrap}>
        <div className={`container ${style.intro_container}`}>
          <div ref={introTxtWrapRef} className={style.inner_txt}>
            <h2 ref={introH1Ref}>회사소개</h2>
            <p ref={introPRef}>
              <span className={style.txt_color}>혁신</span>과
              <span className={style.txt_color}>신뢰</span>를 중요시 하는 기업,
              <br /> 고객의 가치와 최고의 품질 서비스로 보답하는 기업
            </p>
          </div>
        </div>
        <div className={`container ${style.stats_container}`}>
          <h2 ref={statsH1Ref}>연간 성장 지표 현황</h2>
          <p ref={statsPRef}>고객님들의 관심으로 성장하는 회사</p>
          <div className={style.stats_inner}>
            <div ref={statsRefHandler(0)} className={style.stats}>
              <div>
                <div className={style.name}>연간 성장률</div>
                <span
                  ref={statsValueRefsHandler(0)}
                  className={`${style.value} ${style.value1}`}
                >
                  0
                </span>
                <span className={style.percent}>&#37;</span>
              </div>
            </div>
            <div ref={statsRefHandler(1)} className={style.stats}>
              <div>
                <div className={style.name}>신규 고객</div>
                <span
                  ref={statsValueRefsHandler(1)}
                  className={`${style.value} ${style.value2}`}
                >
                  0
                </span>
                <span className={style.percent}>&#43;</span>
              </div>
            </div>
            <div ref={statsRefHandler(2)} className={style.stats}>
              <div>
                <div className={style.name}>매출 증가</div>
                <span
                  ref={statsValueRefsHandler(2)}
                  className={`${style.value} ${style.value3}`}
                >
                  0
                </span>
                <span className={style.percent}>&#37;</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

IntroductionSection.displayName = "IntroductionSection";

export default IntroductionSection;
