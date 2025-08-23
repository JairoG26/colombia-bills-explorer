import { useState, useCallback, useEffect } from 'react';
import { Link } from "react-router-dom";
import api from '../../api';
import List from './list';
import Details from './detail/detailProjects';
import Toolbar from './toolbar';

export default function Container() {
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [keyword, setKeyword] = useState('');

  const fetchData = useCallback(async () => {
    const response = await api.get(`/proyectos/?keyword=${keyword}`);
    setItems(response.data);
  }, [keyword]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleSelect = (id) => {
    const item = items.find(item => item.id === id);
    setSelectedItem(item);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-8">
    {/* Botón separado del card */}
    <div className="w-full max-w-5xl mb-6 flex justify-start">
      <Link to={"/"}>
        <button className="px-6 py-3 bg-gray-200 text-gray-700 rounded-xl shadow hover:bg-gray-300 transition">
          ← Volver
        </button>
      </Link>
    </div>

    {/* Card principal */}
    <div className="bg-white shadow-xl rounded-2xl w-full max-w-5xl p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        📜 Proyectos de Ley
      </h1>

      <div className="mb-6">
        <Toolbar keyword={keyword} setKeyword={setKeyword} />
      </div>

      <div className="w-full">
        <List items={items} onSelect={handleSelect} />
      </div>

      {selectedItem && (
        <div className="mt-6 w-full">
          <Details item={selectedItem} />
        </div>
      )}
    </div>
  </div>
  );
}
