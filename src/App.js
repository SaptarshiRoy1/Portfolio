import React from 'react';
import { Route,BrowserRouter as Router, Switch, Link, Routes} from "react-router-dom";
import styles from './App.module.css';
import { Navbar } from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Skills from "./components/Skills/Skills"
import Projects from "./components/Projects/Projects"
import Connect from "./components/Connect/Connect"
import Contact from "./components/Contact/Contact"

function App() {
  return (
    <>
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact/>
      <Connect />
      </div>
      </>
      );
}

export default App;
