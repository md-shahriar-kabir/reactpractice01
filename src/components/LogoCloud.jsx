import { brands } from '../data/brands';

export default function LogoCloud() {
  return (
    <section className="py-12 border-y border-neutral-800 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-mono tracking-widest text-neutral-500 uppercase">
          POWERS THE WORLD&apos;S BEST ENGINEERING TEAMS
        </p>

        {/* Brand Logos Grid (Array of Objects target) */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-6 gap-8 items-center justify-items-center opacity-60 hover:opacity-100 transition-opacity">
          {brands.map((brand) => (
            <img
              key={brand.name}
              src={brand.logo}
              alt={brand.name}
              className="h-6 invert"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
