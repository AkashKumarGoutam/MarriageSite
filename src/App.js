// import logo from './logo.svg';
import "./App.css";
import About from "./components/About";
import Booking from "./components/Booking";
import Footer from "./components/Footer";
import Gallary from "./components/Gallary";
import LogIn from "./components/LogIn";
import Mainbody from "./components/Mainbody";
import Navbar from "./components/Navbar";
import Schedule from "./components/Schedule";
import Services from "./components/Services";
import Servies from "./components/Servies";
import Visit from "./components/Visit";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Mainbody />} />
        
        

        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/visit" element={<Visit />} />
        <Route path="/gallary" element={<Gallary />} />
        <Route path="/booking" element={<Booking/>} />
        <Route path="/schedule" element={<Schedule/>} />


      </Routes>
      <Servies/>
      
      <Footer />
    </>
  );
}

export default App;
