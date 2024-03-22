import React from "react";
import { Route, Routes } from "react-router-dom";
import "./assets/style/main.css";
import Home from "./pages/Home.jsx";
import Courses from "./pages/Courses.jsx";
import Contact from "./pages/Contact.jsx";
import Pricing from "./pages/Pricing.jsx";
import About from "./pages/About.jsx";
import DefaultLayout from "./layout/DefultLayout";

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="courses" element={<Courses />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </main>
  );
}

export default App;
