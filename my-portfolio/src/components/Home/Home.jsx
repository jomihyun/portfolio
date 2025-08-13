import React, { useRef, useEffect } from 'react';
import styles from './Home.module.css';
import gsap from 'gsap';

export default function Home() {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      gsap.from(ref.current.querySelectorAll('h2, p, a'), { opacity: 0, y: 16, duration: 0.6, stagger: 0.08 });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section id="home" className={styles.home} ref={ref} aria-labelledby="home-heading">
      <div className={styles.container}>
        <h2 id="home-heading" className={styles.title}>Front-end Publisher</h2>
        <p className={styles.subtitle}>퍼블리싱 · 웹표준 · 반응형</p>
        <a className={styles.cta} href="#work">포트폴리오 보기</a>
      </div>
    </section>
  );
}