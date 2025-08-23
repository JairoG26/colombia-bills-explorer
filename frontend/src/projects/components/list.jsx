import Item from "./item";

export default function List({ items, onSelect }) {
  return (
    <div className="w-full max-w-4xl mx-auto mt-6 shadow-lg rounded-lg overflow-hidden">
      <ul className="divide-y divide-gray-200">
        {/* Header visible en pantallas >= sm */}
        <li className="hidden sm:grid grid-cols-2 gap-4 px-6 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold text-sm uppercase tracking-wide shadow-md">
          <span>Proyecto</span>
          <span>Legislatura</span>
        </li>

        {/* Título visible solo en móviles */}
        <li className="sm:hidden px-6 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold text-lg text-center shadow-md">
          Lista de Proyectos
        </li>

        {items.map((item) => (
          <Item key={item.id} item={item} onSelect={() => onSelect(item.id)} />
        ))}
      </ul>
    </div>
  );
}
