import React from 'react';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import WorkList from './components/Work/WorkList';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

export default function App() {
  return (
    <>
      <a href="#main" className="skipLink">메인으로 건너뛰기</a>
      <Header />
      <main id="main" tabIndex={-1}>
        <Home />
        <About />
        <WorkList />
        <Contact />
      </main>
      <Footer />
    </>
  );
}