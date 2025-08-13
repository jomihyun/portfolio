import React, { useRef, useEffect } from 'react';
import styles from './Home.module.css';
// GSAP 사용 시: import { gsap } from 'gsap';

export default function Home() {
  const ref = useRef(null);

  useEffect(() => {
    // GSAP 애니메이션 예시(사용 시 gsap 설치 필요)
    // gsap.from(ref.current, { opacity: 0, y: 20, duration: 0.6 });
  }, []);

  return (
    <section id="home" className={styles.home} ref={ref}>
      <div className={styles.container}>
        <h2 className={styles.title}>Front-end Publisher</h2>
        <p className={styles.subtitle}>퍼블리싱 · 웹표준 · 반응형</p>
        <a className={styles.cta} href="#work">포트폴리오 보기</a>
      </div>
    </section>
  );
}