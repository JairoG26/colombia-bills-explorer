import { useParams, Link } from "react-router-dom";
import { useState, useCallback, useEffect } from "react";
import api from "../../api";

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
    <div>
      <Link to={'/proyectos/'}>
        <button>
          Volver a los proyectos
        </button>
      </Link>
      
      <div className="p-4 border-t border-gray-300">
        <h2 className="text-xl font-bold">Proyecto: {proyecto.proyecto}</h2>
        <p className="text-gray-600">No. Cámara: {proyecto.numero_camara}</p>
        <p className="text-gray-600">No. Senado: {proyecto.numero_senado}</p>
        <p className="text-gray-600">Legislatura: {proyecto.legislatura.periodo}</p>
        <p className="text-gray-600">Tipo: {proyecto.tipo.nombre}</p>
        <p className="text-gray-600">Estado: {proyecto.estado.nombre}</p>
        <p className="text-gray-600">Comisión: {proyecto.comision.nombre}</p>
        <p className="text-gray-600">Origen: {proyecto.origen.nombre}</p>
        <p className="text-gray-600">Autores: {proyecto.autores.map(a => a.nombre).join(', ')}</p>
      </div>
    </div>
    
  );
}
