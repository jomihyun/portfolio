import React from 'react';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p>© {new Date().getFullYear()} 충실한몽구스5845. All rights reserved.</p>
      </div>
    </footer>
  );
}