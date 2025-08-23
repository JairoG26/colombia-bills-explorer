import Item from "./item";

export default function List({ items, onSelect }) {
  return (
    <div>
        <ul className="min-w-max">
        {/* Header visible solo en pantallas >= sm */}
        <li className="hidden sm:grid grid-cols-flex gap-4 px-4 py-3 bg-gray-100 rounded-t font-bold uppercase text-gray-700 text-sm border-b border-gray-300">
          <span>Proyecto</span>
          <span>Legislatura</span>
        </li>
        {/* Título de lista solo para móviles */}
        <li className="sm:hidden px-4 py-3 bg-gray-100 rounded-t font-semibold text-gray-700 text-lg border-b border-gray-300">
          Lista de Proyectos
        </li>
        {items.map(item => (
          <Item key={item.id} item={item} onSelect={() => onSelect(item.id)} />
        ))}
      </ul>
    </div>
  );
}
