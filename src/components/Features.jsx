import { features } from '../data/features';
import FeatureCard from './FeatureCard';

export default function Features() {
  return (
    <section id="features" className="py-24 border-b border-neutral-800 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-left max-w-2xl space-y-2 mb-16">
          <div className="text-xs font-mono text-neutral-400 uppercase tracking-widest">
            [ 01 ] CAPABILITIES
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Engineered for velocity, reliability, and scale.
          </h2>
          <p className="text-sm sm:text-base text-neutral-400">
            Everything required to build, orchestrate, and automate mission-critical
            software workflows.
          </p>
        </div>

        {/* Feature Cards Grid (Re-usable Component via Array of Objects) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-neutral-800 border border-neutral-800 rounded-xl overflow-hidden">
          {features.map((feature) => (
            <FeatureCard
              key={feature.id}
              icon={feature.icon}
              category={feature.category}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
