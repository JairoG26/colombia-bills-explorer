import { Link } from "react-router-dom";

export default function Item({ item }) {
  return (
    <li className="border p-4 rounded-md shadow-md">
      <h2 className="text-xl font-bold">{item.proyecto}</h2>
      <p className="text-gray-600">{item.legislatura.periodo}</p>
      <Link to={`/proyectos/${item.id}`}>
            <button>Ver detalles</button>
          </Link>
    </li>
  );
}
