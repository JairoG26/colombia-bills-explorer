import { useState, useCallback, useEffect } from 'react';
import api from '../api';
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
    <div>
      <Toolbar keyword={keyword} setKeyword={setKeyword} />
      <List items={items} onSelect={handleSelect} />
      {selectedItem && <Details item={selectedItem} />}
    </div>
  );
}
