import "./App.css";
import Home from "./pages/Home";
import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route, useLocation } from "react-router";
import ExersicesPage from "./pages/ExercisesPage";
import ExerciseDetail from "./pages/ExerciseDetail";
import { ContactUs } from "./pages/ContactEmail";
import { RendersContext } from "./RendersContext";
import { BenifitsContext } from "./BenifitsContext";
import { useState } from "react";
import { NotExit } from "./NotExit";
export default function App() {
  const [active, set] = useState(0);
  const [renders, increment] = useState(0);
  const location = useLocation();
  return (
    <div className="bg-black text-white font-unbounded w-screen h-screen  py-0 my-0 overflow-x-hidden">
      <Navbar />
      <BenifitsContext.Provider value={{ active, set }}>
        <RendersContext.Provider value={{ renders, increment }}>
          <Routes location={location} key={location.pathname}>
            <Route index path="/" element={<Home />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/exercises" element={<ExersicesPage />} />
            <Route path="/exit" element={<NotExit />} />
            <Route path="/exercise/:id" element={<ExerciseDetail />} />
          </Routes>
        </RendersContext.Provider>
      </BenifitsContext.Provider>
    </div>
  );
}
