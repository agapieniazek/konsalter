import React from 'react';
import Aside from '../components/Aside';
import Header from '../components/Header';
import Topbar from '../components/Topbar';
import About from "../components/About";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {AnimatePresence} from "framer-motion";
import Offer from '../components/Offer';
import Contact from '../components/Contact';

function Home() {
  return (
    <div className="home">
      <Topbar/>
      <div className="home__container">
      <Router>
        <Aside/>
        <AnimatePresence exitBeforeEnter initial={true}>
          <Routes>
            <Route exact strict path="/" element={<Header/>}/>
            <Route exact strict path="/about" element={<About/>}/>
            <Route exact strict path="/ofer" element={<Offer/>}/>
            <Route exact strict path="/contact" element={<Contact/>}/>
          </Routes>
          </AnimatePresence>
        </Router>
      </div>
    </div>
  )
}

export default Home
