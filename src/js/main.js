import { animate } from "./animate";
import { initSwiper } from "./swiper";

const gnbMenu = document.querySelectorAll(".gnb_menu");
const headerWrap = document.querySelector(".header_wrap");
const trigger = document.querySelector(".visual");

/* 스크롤 부드러운 모션 */
gnbMenu.forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = e.target.getAttribute("href").substring(1);
    const targetElement = document.querySelector(`#${targetId}`);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});

/* Add IntersectionObserver for nav link active class */
const sections = document.querySelectorAll("section");

const observercb = (entries) => {
  entries.forEach((entry) => {
    const sectionId = entry.target.getAttribute("id");
    const navLink = document.querySelector(`.gnb_menu>a[href="#${sectionId}"]`);

    if (entry.isIntersecting) {
      // Set the active class only on the link corresponding to the visible section
      gnbMenu.forEach((link) => {
        console.log(link.childNodes[1])
        link.childNodes[1].classList.remove("active");
      });
      navLink?.classList.add("active");
    }

    // Toggle header class on scroll
    if (!entry.isIntersecting && entry.target === trigger) {
      headerWrap.classList.add("scrolled");
    } else if (entry.isIntersecting && entry.target === trigger) {
      headerWrap.classList.remove("scrolled");
    }
  });
};

const observer = new IntersectionObserver(observercb, {
  threshold: 0.3, // Trigger when 30% of the section is visible
});

// Observe each section for active link and header updates
sections.forEach((section) => observer.observe(section));

document.addEventListener("DOMContentLoaded", () => {
  initSwiper();
  animate();
});
