import './styles/global.scss';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {AnimatePresence} from "framer-motion";
import { useLocation } from 'react-router';

import Topbar from './components/Topbar';
import Aside from './components/Aside';
import Offer from './components/Offer';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import Fleet from './components/Fleet';

function App() {
  return (
    <div className="App">
          <div className="home">
          <Router>
          <Topbar/>
             <div className="home__container">
          <Aside/>
         <AnimatePresence exitBeforeEnter initial>
          <Routes>
            <Route exact strict path="/" element={<Header/>}/>
            <Route exact strict path="/about" element={<About/>}/>
            <Route exact strict path="/offer" element={<Offer/>}/>
            <Route exact strict path="/fleet" element={<Fleet/>}/>
            <Route exact strict path="/contact" element={<Contact/>}/>
          </Routes>
          </AnimatePresence>
      </div>
      </Router>

    </div>

    </div>
  );
}

export default App;
