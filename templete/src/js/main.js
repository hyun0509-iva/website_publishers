import { animate } from "./animate";
import { initSwiper } from "./swiper";

class NavControl {
  constructor() {
    this.gnbMenu = document.querySelectorAll(".gnb_menu");
    this.headerWrap = document.querySelector(".header_wrap");
    this.trigger = document.querySelector(".visual");
    this.sections = document.querySelectorAll("section");
    
    this.init();
  }

  init() {
    this.setupSmoothScroll();
    this.setupIntersectionObserver();
  }

  setupSmoothScroll() {
    this.gnbMenu.forEach((anchor) => {
      anchor.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = e.target.getAttribute("href")?.substring(1);
        if (!targetId) return;

        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          // 현재 스크롤 위치와 목표 위치 사이의 거리 계산
          const distance = Math.abs(
            targetElement.getBoundingClientRect().top + window.scrollY - window.scrollY
          );
          
          // 거리에 비례하여 duration 설정 (최소 500ms, 최대 1000ms)
          const duration = Math.min(Math.max(distance / 2, 500), 1000);

          targetElement.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });

          // active 클래스 업데이트
          this.updateActiveClass(targetId);
        }
      });
    });
  }

  setupIntersectionObserver() {
    const observerOptions = {
      threshold: [0.2, 0.8], // 섹션이 20% 또는 80% 보일 때 트리거
      rootMargin: "-50px 0px" // 상단에서 50px 오프셋
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const sectionId = entry.target.getAttribute("id");
        
        // 헤더 스크롤 상태 관리
        if (entry.target === this.trigger) {
          this.headerWrap?.classList.toggle("scrolled", !entry.isIntersecting);
        }

        // active 클래스 관리
        if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
          this.updateActiveClass(sectionId);
        }
      });
    }, observerOptions);

    // 모든 섹션 관찰 시작
    this.sections.forEach(section => observer.observe(section));
  }

  updateActiveClass(activeSectionId) {
    this.gnbMenu.forEach((menu) => {
      const link = menu.querySelector('a');
      const href = link?.getAttribute("href")?.substring(1);
      
      if (href === activeSectionId) {
        link?.classList.add("active");
      } else {
        link?.classList.remove("active");
      }
    });
  }
}

// DOMContentLoaded 이벤트에서 초기화
document.addEventListener("DOMContentLoaded", () => {
  new NavControl();
  initSwiper();
  animate();
});