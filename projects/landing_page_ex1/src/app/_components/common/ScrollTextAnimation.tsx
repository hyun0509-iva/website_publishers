import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import './ScrollTextAnimation.css';

gsap.registerPlugin(ScrollTrigger);

const ScrollTextAnimation = () => {
  const textRef1 = useRef(null);
  const textRef2 = useRef(null);
  const textRef3 = useRef(null);
  const containerRef = useRef(null);

  useGSAP(() => {
    // 타임라인 생성
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top", // 컨테이너 상단이 뷰포트 상단에 닿았을 때
        end: "bottom bottom", // 컨테이너 하단이 뷰포트 하단에 닿았을 때
        scrub: 1 // 부드러운 스크롤 효과
      }
    });

    // 각 텍스트 요소에 대한 애니메이션 추가
    tl.fromTo(
      textRef1.current,
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1, duration: 1 }
    )
    .fromTo(
      textRef2.current,
      { x: 100, opacity: 0 },
      { x: 0, opacity: 1, duration: 1 },
      "-=0.5" // 이전 애니메이션과 0.5초 겹치도록
    )
    .fromTo(
      textRef3.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1 },
      "-=0.5"
    );
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="scroll-container">
      <div 
        ref={textRef1} 
        className="scroll-text first-text"
      >
        첫 번째 텍스트: 왼쪽에서 오른쪽으로
      </div>
      
      <div className="spacer"></div>
      
      <div 
        ref={textRef2} 
        className="scroll-text second-text"
      >
        두 번째 텍스트: 오른쪽에서 왼쪽으로
      </div>
      
      <div className="spacer"></div>
      
      <div 
        ref={textRef3} 
        className="scroll-text third-text"
      >
        세 번째 텍스트: 아래에서 위로
      </div>
    </div>
  );
};

export default ScrollTextAnimation;