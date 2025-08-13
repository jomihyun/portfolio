import { useState } from 'react'
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import WorkList from './components/Work/WorkList';
import Footer from './components/Footer';

function App() {

  return (
     <>
      <Header />
      <main>
        <Home />
        <About />
        <WorkList />
      </main>
      <Footer />
    </>
  )
}

export default App
