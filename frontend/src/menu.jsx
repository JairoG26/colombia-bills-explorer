import { Link } from "react-router-dom";

export default function Menu () {
  return (
    <nav className="bg-indigo-600 p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-white font-bold text-xl">Proyectos de ley en Colombia</h1>
        <div className="space-x-4">
          <Link
            to="/proyectos/"
            className="bg-white text-indigo-600 px-4 py-2 rounded-lg font-medium hover:bg-indigo-100 transition"
          >
            Ver proyectos de ley
          </Link>
        </div>
      </div>
    </nav>
    )
}