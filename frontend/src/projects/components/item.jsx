import { Link } from "react-router-dom";

export default function Item({ item }) {
  return (
    <li className="grid grid-cols-2 gap-4 px-6 py-4 items-center hover:bg-gray-50 transition">
      {/* Columna 1: Proyecto */}
      <div>
        <h2 className="text-base font-medium text-gray-800">{item.proyecto}</h2>
      </div>

      {/* Columna 2: Legislatura + botón */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-600">{item.legislatura.periodo}</p>
        <Link to={`/proyectos/${item.id}`} className="self-start">
        <button className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg shadow hover:bg-blue-700 transition-colors duration-300">
          Ver detalles
        </button>
      </Link>
      </div>
    </li>
  );
}
