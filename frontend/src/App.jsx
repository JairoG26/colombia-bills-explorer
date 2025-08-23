import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Container from "./projects/components/containerProjects"
import Details from "./projects/components/detail/detailProjects";
import Menu from "./menu"

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element = {<Menu />}/>
        <Route path="/proyectos" element={<Container />} />
        <Route path="/proyectos/:id" element={<Details />} />
      </Routes>
    </Router>
    </>
  )
}

export default App