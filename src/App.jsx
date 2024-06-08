import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import BrowserRouter, Routes, and Route
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Services from "./components/Services";

import About from "./components/About";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Reviews from "./components/Review";
import Review from "./components/Review";
import Reservation from "./components/Reservation";

const App = () => {

  //AOS Init
  useEffect(() => {
    AOS.init({
      offest: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  

  return (

    <Router>
    <div>

      <Routes>
        {/* <Route path="/login" element={<Login />} />
        <Route path="/bookBattery" element={<BookBattery />} /> */}

        <Route path="/" element={<>
          <Navbar/>
          <Home/>
          <Services/>
          <Footer />
        </>} />

        <Route path="/reserve" element={<>
          <Navbar/>
          <Reservation />
          <Footer />
        </>} />

      </Routes>

    </div>
  </Router>
  );
};

export default App;
