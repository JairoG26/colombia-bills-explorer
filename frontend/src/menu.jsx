import { Link } from "react-router-dom";

export default function Menu () {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-2xl rounded-2xl p-12 w-96 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-8">Proyectos de ley en Colombia</h2>

        <nav className="flex flex-col space-y-6">
          <Link
            to="/proyectos/"
            className="bg-indigo-600 text-white py-4 rounded-xl text-lg font-semibold hover:bg-indigo-700 transition transform hover:scale-105"
          >
            Ver proyectos de ley
          </Link>
          <a
            href="https://www.camara.gov.co/secretaria/proyectos-de-ley#menu"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-gray-200 text-gray-700 rounded-xl shadow hover:bg-gray-300 transition"
          >
            Fuente de datos
          </a>
        </nav>
      </div>
    </div>
    )
}