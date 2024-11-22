import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { animateValue } from "./utils/animateValue";

export const animate = () => {
  gsap.registerPlugin(ScrollTrigger);

  /* visual */
  const visual = document.querySelector(".visual .inner_txt .txt");
  const visualH1 = visual.querySelector("h1");
  const visualP = visual.querySelector("p");

  /* visual animate */
  const visualTl = gsap.timeline({
    scrollTrigger: {
      trigger: visual,
      start: "top 60%",
      end: "bottom center",
      toggleActions: "play none none reverse",
    },
  });

  visualTl
    .from(visualH1, {
      duration: 0.8,
      opacity: 0,
      x: -50,
      ease: "power2.inOut",
    })
    .from(visualP, {
      duration: 0.8,
      opacity: 0,
      x: -50,
      ease: "power2.inOut",
    });

  /* section01 */
  const section01 = document.querySelector(".section01 .inner_txt .txt");
  const section01H2 = section01.querySelector("h2");
  const section01P = section01.querySelector("p");

  const section01Tl = gsap.timeline({
    scrollTrigger: {
      trigger: section01,
      start: "top 60%",
      end: "bottom center",
      toggleActions: "play none none reverse",
    },
  });

  section01Tl
    .from(section01H2, {
      duration: 0.5,
      opacity: 0,
      y: 50,
      ease: "power2.inOut",
    })
    .from(
      section01P,
      {
        duration: 0.5,
        opacity: 0,
        y: 50,
        ease: "power2.inOut",
      },
      "-=0.8"
    );

  /* section02 */
  const section02 = document.querySelector(".section02 .service_container");
  const section02H2 = section02.querySelector("h2");
  const serviceContents = document.querySelectorAll(".service_content");

  const section02Tl = gsap.timeline({
    scrollTrigger: {
      trigger: section02,
      start: "top 60%",
      end: "bottom center",
      toggleActions: "play none none reverse",
    },
  });

  section02Tl
    .from(section02H2, {
      duration: 0.5,
      opacity: 0,
      y: 50,
      ease: "power2.inOut",
    })
    .from(serviceContents, {
      duration: 0.6,
      opacity: 0,
      y: 50,
      stagger: 0.2, // 각 요소들 사이의 간격
      ease: "power2.inOut",
    })
    .from(".service_content .txt", {
      duration: 0.7,
      opacity: 0,
      y: 30,
      stagger: 0.2, // 각 텍스트 요소의 간격
      ease: "power2.inOut",
      delay: 0.2, // 배경이 올라온 후 나타나도록 딜레이 설정
    });

  /* section03 */
  const section03 = document.querySelector(".section03 .stats_container");
  const section03H2 = section03.querySelector("h2");
  const section03P = section03.querySelector("p");
  const statsItems = document.querySelectorAll(".stats");

  const section03Tl = gsap.timeline({
    scrollTrigger: {
      trigger: section03,
      start: "top 60%",
      end: "bottom center",
      toggleActions: "play none none reverse",
    },
  });

  section03Tl
    .from(section03H2, {
      duration: 0.5,
      opacity: 0,
      y: 50,
      stagger: 0.2, // 각 요소들 사이의 간격
      ease: "power2.inOut",
    })
    .from(section03P, {
      duration: 0.5,
      opacity: 0,
      y: 30,
      stagger: 0.2, // 각 요소들 사이의 간격
      ease: "power2.inOut",
    })
    .from(statsItems, {
      duration: 0.8,
      opacity: 0,
      y: 30,
      stagger: 0.2, // 각 텍스트 요소의 간격
      ease: "power2.inOut",
      delay: 0.2, // 배경이 올라온 후 나타나도록 딜레이 설정,
      onComplete: () => {
        // 애니메이션이 끝난 후 수치가 올라가도록 설정
        animateValue(document.querySelector(".value1"), 0, 87, 2000);
        animateValue(document.querySelector(".value2"), 0, 1000, 2000);
        animateValue(document.querySelector(".value3"), 0, 98, 2000);
      },
    });

  /* section01 */
  const contact = document.querySelector(".contact_container");
  const contactH2 = contact.querySelector("h2");
  const contactP = contact.querySelector("p");
  const contactForm = contact.querySelector("form");

  const contactTl = gsap.timeline({
    scrollTrigger: {
      trigger: contact,
      start: "top 60%",
      end: "bottom center",
      toggleActions: "play none none reverse",
    },
  });

  contactTl
    .from(contactH2, {
      duration: 0.5,
      opacity: 0,
      y: 50,
      ease: "power2.inOut",
      delay: 0.1
    })
    .from(
      contactP,
      {
        duration: 0.5,
        opacity: 0,
        y: 50,
        ease: "power2.inOut",
        delay: 0.2
      },
      "-=0.3"
    )
    .from(
      contactForm,
      {
        duration: 0.5,
        opacity: 0,
        y: 50,
        ease: "power2.inOut",
        delay: 0.3

      },
      "-=0.8"
    );
};
