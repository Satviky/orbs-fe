import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';


import AOS from 'aos';
import 'aos/dist/aos.css';


// import Navbar from './components/Navbar';

// Pages
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CandidateDashboard from "./pages/candidate/CandidateDashboard";

import Fortry from "./pages/Bone";



function App() {
  // const [count, setCount] = useState(0)
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
    {/* <Navbar/> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/candidatedash" element={<CandidateDashboard />} />

          <Route path="/test" element={<Fortry />} />
          <Route path="*" element={<div className="p-8">Page not found</div>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
