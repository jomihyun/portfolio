import React from 'react';
import styles from './Contact.module.css';

export default function Contact() {
  return (
    <section id="contact" className={styles.contact} aria-labelledby="contact-heading">
      <div className={styles.inner}>
        <h2 id="contact-heading">CONTACT.</h2>
        <p>문의: your.email@example.com</p>
        <p>Github: <a href="#" target="_blank" rel="noreferrer">github.com/yourid</a></p>
      </div>
    </section>
  );
}