import { useState } from "react";
import "./App.css";
import Home from "./components/Home";
import Services from "./components/Services";
import Project from "./components/Project";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";

function App() {
  return (
    <div className="container">
      <Router>
        <header>
          <nav>
            <ul className="flex justify-center items-center gap-6 text-xl ">
              <li>
                <NavLink
                  to="/home"
                  className={({ isActive }) => (isActive ? "active-link" : "")}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/services"
                  className={({ isActive }) => (isActive ? "active-link" : "")}
                >
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/project"
                  className={({ isActive }) => (isActive ? "active-link" : "")}
                >
                  Project
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>

        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="project" element={<Project />} />

          {/* <Route path="/saymon/*" element={<Saymon />}></Route>
          <Route path="*" element={<NotFoundPage />}></Route> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
