import { useState, useCallback, useEffect } from 'react';
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
    <div className="min-h-screen bg-gray-50 flex justify-center p-8">
      <div className="bg-white shadow-xl rounded-2xl w-full max-w-5xl p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          📜 Proyectos de Ley
        </h1>

        <div className="mb-6">
          <Toolbar keyword={keyword} setKeyword={setKeyword} />
        </div>

        {/* Lista ocupa todo el ancho */}
        <div className="w-full">
          <List items={items} onSelect={handleSelect} />
        </div>

        {/* Detalle ocupa todo el ancho debajo */}
        {selectedItem && (
          <div className="mt-6 w-full">
            <Details item={selectedItem} />
          </div>
        )}
      </div>
    </div>
  );
}
