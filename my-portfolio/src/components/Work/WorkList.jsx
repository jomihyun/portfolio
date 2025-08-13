import React, { useRef, useEffect } from 'react';
import WorkCard from './WorkCard';
import { works } from '../../data/works';
import styles from './Work.module.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default function WorkList() {
  const rootRef = useRef(null);

  useEffect(() => {
    if (!rootRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from(rootRef.current.querySelectorAll(`.${styles.workCard}`), {
        opacity: 0,
        y: 20,
        duration: 0.6,
        stagger: 0.12,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: rootRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      });
    }, rootRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="work" className={styles.work} ref={rootRef} aria-labelledby="works-heading">
      <div className={styles.inner}>
        <h2 id="works-heading" className={styles.sectionTitle}>WORKS.</h2>
        <div className={styles.workList} role="list">
          {works.map(w => (
            <div role="listitem" key={w.id}>
              <WorkCard item={w} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}