export default function Toolbar({ keyword, setKeyword }) {
  return (
    <div className="toolbar">
      <input
        type="text"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="Buscar proyectos..."
      />
    </div>
  );
}
