import React from 'react';
import styles from './About.module.css';

export default function About() {
  return (
    <section id="about" className={styles.about} aria-labelledby="about-heading">
      <div className={styles.inner}>
        <h2 id="about-heading" className={styles.title}>ABOUT.</h2>
        <div className={styles.profile}>
          <img src="/images/profile.png" alt="프로필" className={styles.avatar} />
          <div className={styles.desc}>
            <p>안녕하세요. 퍼블리셔 충실한몽구스5845입니다.</p>
            <p>주요 기술: HTML / CSS / SCSS / JavaScript / jQuery / Gulp / GSAP</p>
          </div>
        </div>
      </div>
    </section>
  );
}