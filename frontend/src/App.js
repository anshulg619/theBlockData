import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Career from "./components/Career";
import Qoute from "./components/Qoute";
import Faq from "./components/Faq";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/Portfolio" element={<Portfolio />} />
          <Route path="/Career" element={<Career />} />
          <Route path="/qoute" element={<Qoute />} />
          <Route path="/faq" element={<Faq />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
