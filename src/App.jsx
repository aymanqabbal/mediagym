import "./App.css";
import Home from "./pages/Home";
import "./App.css";
import { Routes, Route, useLocation } from "react-router";
import ExersicesPage from "./pages/ExercisesPage";
import ExerciseDetail from "./pages/ExerciseDetail";
import { ContactUs } from "./pages/ContactEmail";
import { RendersContext } from "./RendersContext";
import { BenifitsContext } from "./BenifitsContext";
import { NavContext } from "./navContext";
import { useState } from "react";
import { NotExit } from "./NotExit";
import Nav from "./components/Nav";
import Test from "./components/Test";
export default function App() {
  const [active, set] = useState(0);
  const [renders, increment] = useState(0);
  const [nav, setNav] = useState(0);
  console.log("app", nav);
  const location = useLocation();
  return (
    <div className="bg-black text-white font-unbounded w-screen h-screen  py-0 my-0 overflow-x-hidden">
      <NavContext.Provider value={{ nav, setNav }}>
        <Nav />
        <BenifitsContext.Provider value={{ active, set }}>
          <RendersContext.Provider value={{ renders, increment }}>
            <Routes location={location} key={location.pathname}>
              <Route index path="/" element={<Home />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/exercises" element={<ExersicesPage />} />
              <Route path="/exit" element={<NotExit />} />
              <Route path="/test" element={<Test />} />
              <Route path="/exercise/:id" element={<ExerciseDetail />} />
            </Routes>
          </RendersContext.Provider>
        </BenifitsContext.Provider>
      </NavContext.Provider>
    </div>
  );
}
