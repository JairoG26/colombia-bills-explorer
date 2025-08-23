import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Container from "./components/containerProjects"
import Details from "./components/detail/detailProjects";

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/proyectos" element={<Container />} />
        <Route path="/proyectos/:id" element={<Details />} />
      </Routes>
    </Router>
    </>
  )
}

export default App