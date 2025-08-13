import React, { useState } from 'react';
import styles from './Header.module.css';
import clsx from 'clsx';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header} role="banner">
      <div className={styles.headerInner}>
        <h1 className={styles.logo}><a href="#home">JOMIHYUN</a></h1>

        <button
          className={styles.toggle}
          aria-label="메인 메뉴 열기"
          aria-expanded={open}
          aria-controls="main-nav"
          onClick={() => setOpen(p => !p)}
        >
          <span className={styles.hamburger} aria-hidden="true" />
        </button>

        <nav id="main-nav" className={clsx(styles.nav, open && styles.open)} aria-label="주요 메뉴">
          <ul className={styles.list}>
            <li className={styles.item}><a href="#home" onClick={() => setOpen(false)}>Home</a></li>
            <li className={styles.item}><a href="#about" onClick={() => setOpen(false)}>About</a></li>
            <li className={styles.item}><a href="#work" onClick={() => setOpen(false)}>Work</a></li>
            <li className={styles.item}><a href="#contact" onClick={() => setOpen(false)}>Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}