import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";

export default function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" exact >
              INSERT MY REACT COMPONENT HERE
          </Route>
        </Routes>
      </Router>
    </>
  );
}

