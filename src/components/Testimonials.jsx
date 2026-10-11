import { testimonials } from '../data/testimonials';
import TestimonialCard from './TestimonialCard';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 border-b border-neutral-800 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-left max-w-2xl space-y-2 mb-16">
          <div className="text-xs font-mono text-neutral-400 uppercase tracking-widest">
            [ 04 ] CUSTOMERS
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Loved by engineers. Trusted by founders.
          </h2>
          <p className="text-sm sm:text-base text-neutral-400">
            How leading technology organizations leverage NexusFlow every single day.
          </p>
        </div>

        {/* Testimonials Grid (Re-usable Component via Array of Objects) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item) => (
            <TestimonialCard
              key={item.id}
              quote={item.quote}
              name={item.name}
              role={item.role}
              avatar={item.avatar}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
