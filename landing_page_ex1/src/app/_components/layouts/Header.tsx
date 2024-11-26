"use client";
import React, { useLayoutEffect, useRef } from "react";
import style from "./header.module.css";
import { useScrollContext } from "../common/ScrollContext";

const Header = () => {
  const headerWrapRef = useRef<HTMLDivElement>(null);
  const { visual, introduction, services, contact } = useScrollContext();

  useLayoutEffect(() => {
    if (headerWrapRef.current && visual.current) {
      const headerWrap = headerWrapRef.current;
      const trigger = visual.current;

      const observercb = (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry: IntersectionObserverEntry) => {
          if (!entry.isIntersecting) {
            headerWrap.classList.add(style.scrolled);
          } else {
            headerWrap.classList.remove(style.scrolled);
          }
        });
      };

      const observer = new IntersectionObserver(observercb, {
        threshold: [0, 0.3],
      });

      observer.observe(trigger);
    }
  }, [visual]);

  const handleScroll = (ref: React.RefObject<HTMLElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className={style.header}>
      <div ref={headerWrapRef} className={style.header_wrap}>
        <div className={style.header_container}>
          <a
            href="#visual"
            className={style.logo_wrap}
            onClick={() => handleScroll(visual)}
          >
            <img src="/images/logo.svg" alt="logo" />
          </a>
          <nav className={style.gnb_wrap}>
            <ul className={style.gnb_container}>
              <li className={style.gnb_menu}>
                <a
                  href="#introduction"
                  onClick={() => handleScroll(introduction)}
                >
                  소개
                </a>
                <ul className={style.sub_menu}>
                  <li>
                    <a onClick={(e) => e.preventDefault()}>서브1-1</a>
                  </li>
                  <li>
                    <a onClick={(e) => e.preventDefault()}>서브1-2</a>
                  </li>
                  <li>
                    <a onClick={(e) => e.preventDefault()}>서브1-3</a>
                  </li>
                  <li>
                    <a onClick={(e) => e.preventDefault()}>서브1-4</a>
                  </li>
                </ul>
              </li>
              <li className={style.gnb_menu}>
                <a href="#services" onClick={() => handleScroll(services)}>
                  서비스
                </a>
                <ul className={style.sub_menu}>
                  <li>
                    <a>서브2-1</a>
                  </li>
                  <li>
                    <a>서브2-2</a>
                  </li>
                  <li>
                    <a>서브2-3</a>
                  </li>
                  <li>
                    <a>서브2-4</a>
                  </li>
                </ul>
              </li>
              <li className={style.gnb_menu}>
                <a href="#contact" onClick={() => handleScroll(contact)}>
                  문의
                </a>
                <ul className={style.sub_menu}>
                  <li>
                    <a>서브3-1</a>
                  </li>
                  <li>
                    <a>서브3-2</a>
                  </li>
                  <li>
                    <a>서브3-3</a>
                  </li>
                  <li>
                    <a>서브3-4</a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
          <div className={style.user_menu}>
            <ul>
              <li>
                <a onClick={(e) => e.preventDefault()}>회원가입</a>
              </li>
              <li>
                <a onClick={(e) => e.preventDefault()}>로그인</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
