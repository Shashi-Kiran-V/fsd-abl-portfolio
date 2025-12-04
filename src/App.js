import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  const [dark, setDark] = useState(true);

  return (
    <BrowserRouter>
      <div style={{
        background: dark ? "#0f0f0f" : "#f5f5f5",
        color: dark ? "white" : "black",
        minHeight: "100vh",
        transition: "0.4s"
      }}>
        <Navbar dark={dark} setDark={setDark} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
