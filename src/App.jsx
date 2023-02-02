import "./App.css";
import Home from "./pages/Home";
import "./App.css";
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";
import { Routes, Route } from "react-router";
function App() {
  return (
    <div className="bg-black text-white font-unbounded w-screen h-screen  py-0 my-0 overflow-x-hidden">
      <Navbar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
