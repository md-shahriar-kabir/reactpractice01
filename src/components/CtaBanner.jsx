export default function CtaBanner() {
  return (
    <section className="py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-neutral-800 bg-[#0a0a0a] p-8 sm:p-16 text-center space-y-6 relative overflow-hidden">
          {/* Vercel Subtle Gradient Beam */}
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
              Start building at the speed of thought.
            </h2>

            <p className="text-sm sm:text-base text-neutral-400">
              Join over 250,000+ developers shipping modern applications with
              NexusFlow.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="#pricing"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 text-xs font-mono font-medium text-black bg-white hover:bg-neutral-200 rounded-lg transition-colors"
              >
                <span>Deploy Free Now</span>
                <img
                  src="/assets/icons/arrow-right.svg"
                  alt=""
                  className="w-3.5 h-3.5 invert"
                />
              </a>
              <a
                href="#contact"
                className="w-full sm:w-auto px-6 py-2.5 text-xs font-mono font-medium text-neutral-300 bg-black hover:bg-neutral-900 border border-neutral-800 rounded-lg transition-colors"
              >
                Talk to Enterprise Team
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
