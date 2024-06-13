// import React, { useEffect } from "react";
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import BrowserRouter, Routes, and Route
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// import Navbar from "./components/Navbar";
// import Home from "./components/Home";
// import Footer from "./components/Footer";
// import Services from "./components/Services";
// import WhyChooseUs from "./components/WhyChooseUs";
// import ChefsNote from "./components/ChefsNote";

// import Menu from "./components/Menu";
// import Reviews from "./components/Review";
// import Review from "./components/Review";
// import Reservation from "./components/Reservation";
// import Awards from "./components/Awards";

// const App = () => {

//   //AOS Init
//   useEffect(() => {
//     AOS.init({
//       offest: 100,
//       duration: 800,
//       easing: "ease-in-sine",
//       delay: 100,
//     });
//     AOS.refresh();
//   }, []);
  

//   return (

//     <Router>
//     <div>

//       <Routes>
//         {/* <Route path="/login" element={<Login />} />
//         <Route path="/bookBattery" element={<BookBattery />} /> */}

//         <Route path="/" element={<>
//           <Navbar/>
//           <Home/>
//           <Services/>
//           <Footer />
//         </>} />

//         <Route path="/reserve" element={<>
//           <Navbar/>
//           <Reservation />
//           <Footer />
//         </>} />


//         <Route path="/about" element={<>
//           <Navbar/>
//           <ChefsNote />
//           <Awards />
//           <WhyChooseUs />
//           <Footer />
//         </>} />

//       </Routes>

//     </div>
//   </Router>
//   );
// };

// export default App;

import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import BrowserRouter, Routes, and Route
import AOS from 'aos';
import 'aos/dist/aos.css';

import ScrollToTop from './components/ScrollToTop';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import ChefsNote from "./components/ChefsNote";
import Awards from "./components/Awards";
import Location from "./components/Location";
import Reservation from "./components/Reservation";
import GetinTouch from "./components/GetinTouch";
import DineinMenu from "./components/DineinMenu.jsx";

const App = () => {

  // AOS Init
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
      <ScrollToTop />
      <div>
        <Routes>
          <Route path="/" element={
            <>
              <Navbar />
              <Home />
              <Services />
              <Footer />
            </>
          } />

          <Route path="/reserve" element={
            <>
              <Navbar />
              <Reservation />
              <Footer />
            </>
          } />

          <Route path="/about" element={
            <>
              <Navbar />
              <ChefsNote />
              <Awards />
              <WhyChooseUs />
              <Footer />
            </>
          } />

          <Route path="/contact" element={
            <>
              <Navbar />
              <Location/>
              <GetinTouch />
              <Footer />
            </>
          } />

          <Route path="/menu" element={
            <>
              <Navbar />
              <DineinMenu/>
              <Footer />
            </>
          } />

        </Routes>
      </div>
    </Router>
  );
};

export default App;
