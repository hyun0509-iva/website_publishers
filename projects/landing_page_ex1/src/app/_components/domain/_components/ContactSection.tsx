"use client";
import React, { forwardRef, useRef } from "react";
import style from "./contact.module.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const ContactSection = forwardRef<HTMLElement>((props, ref) => {
  const contactTxtWrapRef = useRef<HTMLDivElement>(null);
  const contactH1Ref = useRef<HTMLHeadingElement>(null);
  const contactPRef = useRef<HTMLParagraphElement>(null);
  const contactFormRefWrap = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: contactTxtWrapRef.current,
          start: "top 60%",
          end: "bottom center",
          toggleActions: "play none none reverse",
        },
      });

      tl.fromTo(
        contactH1Ref.current,
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
          contactPRef.current,
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
          contactFormRefWrap.current,
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
        );
    },
    { scope: contactTxtWrapRef }
  );

  return (
    <section ref={ref} id={style.contact} className={style.contact}>
      <div className={style.wrap}>
        <div className={`container ${style.contact_container}`}>
          <div ref={contactTxtWrapRef} className={style.inner_txt}>
            <h2 ref={contactH1Ref}>CONTACT US</h2>
            <p ref={contactPRef}>궁금하신 사항을 메일로 문의해주세요!</p>
            <div ref={contactFormRefWrap} className={style.form_wrap}>
              <form>
                <label>
                  <span className={style.name}>성함</span>
                  <input type={style.text} />
                </label>
                <label>
                  <span className={style.name}>연락처</span>
                  <input type={style.text} />
                </label>
                <label>
                  <span className={style.name}>이메일</span>
                  <input type={style.text} />
                </label>
                <label>
                  <span className={style.name}>문의내용</span>
                  <textarea></textarea>
                </label>
                <button className={style.frm_btn} type="submit">
                  제출
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

ContactSection.displayName = "ContactSection";

export default ContactSection;
