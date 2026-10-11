export default function FeatureCard({ icon, category, title, description }) {
  return (
    <div className="p-8 bg-[#0a0a0a] hover:bg-[#111111] transition-colors group">
      <div className="w-10 h-10 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-white mb-6">
        <img src={icon} alt="" className="w-5 h-5 invert" />
      </div>
      <div className="text-xs font-mono text-neutral-500 mb-1">{category}</div>
      <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-white transition-colors">
        {title}
      </h3>
      <p className="text-sm text-neutral-400 leading-relaxed">{description}</p>
    </div>
  );
}
