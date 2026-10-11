import { stats } from '../data/stats';
import StatCard from './StatCard';

export default function Stats() {
  return (
    <section className="py-20 border-b border-neutral-800 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stat Cards Grid (Re-usable Component via Array of Objects) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((item) => (
            <StatCard
              key={item.id}
              value={item.value}
              label={item.label}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
