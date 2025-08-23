import { useParams, Link } from "react-router-dom";
import { useState, useCallback, useEffect } from "react";
import api from "../../../api";

export default function Details() {
  const { id } = useParams(); // Obtiene el ID de la URL
  const [proyecto, setProyecto] = useState(null);
  const fetchDataDetail = useCallback(async () => {
    const response = await api.get(`/proyectos/${id}`);
    setProyecto(response.data);
  }, [id]);
  useEffect(() => {
      fetchDataDetail();
    }, [fetchDataDetail]);
  if (!proyecto) return <p>Cargando...</p>;

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 px-4">
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-xl p-6">
        
        {/* Botón volver */}
        <Link to={"/proyectos"}>
          <button className="mb-6 px-4 py-2 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition">
            ← Volver a los proyectos
          </button>
        </Link>

        {/* Info del proyecto */}
        <h2 className="text-2xl font-bold text-indigo-700 mb-4">
          Proyecto: {proyecto.proyecto}
        </h2>

        <div className="space-y-2 text-gray-700">
          <p><span className="font-semibold">No. Cámara:</span> {proyecto.numero_camara}</p>
          <p><span className="font-semibold">No. Senado:</span> {proyecto.numero_senado}</p>
          <p><span className="font-semibold">Legislatura:</span> {proyecto.legislatura.periodo}</p>
          <p><span className="font-semibold">Tipo:</span> {proyecto.tipo.nombre}</p>
          <p><span className="font-semibold">Estado:</span> {proyecto.estado.nombre}</p>
          <p><span className="font-semibold">Comisión:</span> {proyecto.comision.nombre}</p>
          <p><span className="font-semibold">Origen:</span> {proyecto.origen.nombre}</p>
          <p>
            <span className="font-semibold">Autores:</span>{" "}
            {proyecto.autores.map((a) => a.nombre).join(", ")}
          </p>
        </div>
      </div>
    </div> 
  );
}
