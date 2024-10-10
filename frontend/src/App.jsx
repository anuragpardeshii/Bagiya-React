import React from 'react'
// import './App.css'
import NavBar from './Landing_page/NavBar';
import Hero from './Landing_page/Hero/Hero';
import Features from './Landing_page/Features/Features';
import Uses from './Landing_page/Uses/Uses';
import Community from './Landing_page/Community/Community';
import EarnCoins from './Landing_page/EarnCoins/EarnCoins';
import Footer from './Landing_page/Footer';

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <Features />
      <Uses />
      <EarnCoins />
      <Community />
      <Footer />
    </>
  )
}

export default App
