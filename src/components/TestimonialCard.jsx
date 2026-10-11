export default function TestimonialCard({ quote, name, role, avatar }) {
  return (
    <div className="p-6 rounded-xl border border-neutral-800 bg-[#0a0a0a] flex flex-col justify-between space-y-6">
      <p className="text-sm text-neutral-300 leading-relaxed">{quote}</p>
      <div className="flex items-center gap-3 pt-4 border-t border-neutral-900">
        <img
          src={avatar}
          alt={name}
          className="w-8 h-8 rounded-full border border-neutral-800"
        />
        <div>
          <div className="text-xs font-semibold text-white">{name}</div>
          <div className="text-[11px] font-mono text-neutral-500">{role}</div>
        </div>
      </div>
    </div>
  );
}
