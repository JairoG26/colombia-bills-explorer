import { Search } from "lucide-react";

export default function Toolbar({ keyword, setKeyword }) {
  return (
    <div className="w-full max-w-4xl mx-auto my-6">
      <div className="relative">
        {/* Icono de búsqueda */}
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />

        <input
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="Buscar proyectos..."
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
        />
      </div>
    </div>
  );
}
