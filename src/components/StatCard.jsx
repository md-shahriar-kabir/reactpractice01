export default function StatCard({ value, label, description }) {
  return (
    <div className="space-y-1">
      <div className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-mono">
        {value}
      </div>
      <div className="text-xs font-mono text-neutral-500 uppercase tracking-wider">
        {label}
      </div>
      <p className="text-xs text-neutral-400">{description}</p>
    </div>
  );
}
