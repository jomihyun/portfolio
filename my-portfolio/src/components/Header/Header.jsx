import React, { useState } from 'react';
import styles from './Header.module.css';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header} role="banner">
      <div className={styles.inner}>
        <h1 className={styles.logo}><a href="#home">JOMIHYUN</a></h1>

        <button
          className={styles.toggle}
          aria-label="메뉴 열기"
          aria-expanded={open}
          onClick={() => setOpen(prev => !prev)}
        >
          <span className={styles.hamburger} />
        </button>

        <nav className={`${styles.nav} ${open ? styles.open : ''}`} aria-label="주요 메뉴">
          <ul className={styles.list}>
            <li><a href="#home" onClick={() => setOpen(false)}>Home</a></li>
            <li><a href="#about" onClick={() => setOpen(false)}>About</a></li>
            <li><a href="#work" onClick={() => setOpen(false)}>Work</a></li>
            <li><a href="#contact" onClick={() => setOpen(false)}>Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}