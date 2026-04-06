export default function PreLaunchBadge() {
  return (
    <div
      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-semibold font-body"
      style={{ backgroundColor: "#f7f0d4", color: "#735c00" }}
    >
      <span
        className="w-2 h-2 rounded-full flex-shrink-0 animate-pulse"
        style={{ backgroundColor: "#735c00" }}
      />
      Estamos construyendo AgroLink
    </div>
  );
}
