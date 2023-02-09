import "./App.css";
import Home from "./pages/Home";
import "./App.css";
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";
import { Routes, Route } from "react-router";
import ExersicesPage from "./pages/ExercisesPage";
import ExerciseDetail from "./pages/ExerciseDetail";
function App() {
  return (
    <div className="bg-black text-white font-unbounded w-screen h-screen  py-0 my-0 overflow-x-hidden">
      <Navbar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/exercises" element={<ExersicesPage />} />
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
      </Routes>
    </div>
  );
}

export default App;
