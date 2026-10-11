import { useState } from 'react';

export default function Hero() {
  const [copied, setCopied] = useState(false);
  const command = 'npx create-nexusflow-app@latest';

  const handleCopy = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="hero"
      className="relative pt-16 pb-20 md:pt-24 md:pb-28 overflow-hidden vercel-glow"
    >
      {/* Grid pattern background */}
      <div className="absolute inset-0 vercel-grid opacity-30 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Announcement Pill Badge */}
        <div className="flex justify-center">
          <a
            href="#features"
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-950 border border-neutral-800 text-xs font-mono text-neutral-300 hover:border-neutral-700 transition-colors shadow-sm"
          >
            <span className="text-white">▲</span>
            <span className="font-semibold text-white">NexusFlow 2.4</span>
            <span className="text-neutral-600">/</span>
            <span className="text-neutral-400">Next-gen AI Workflows</span>
            <img
              src="/assets/icons/arrow-right.svg"
              alt=""
              className="w-3 h-3 invert"
            />
          </a>
        </div>

        {/* Main Headline */}
        <div className="text-center max-w-4xl mx-auto mt-8 space-y-5">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08]">
            Develop with velocity. <br />
            <span className="bg-gradient-to-b from-white via-neutral-200 to-neutral-500 bg-clip-text text-transparent">
              Automate with intelligence.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-neutral-400 font-normal leading-relaxed max-w-2xl mx-auto">
            The unified developer platform for sprint orchestration, instant
            preview pipelines, and autonomous AI agents.
          </p>

          {/* CLI Command & Actions Bar */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
            {/* Copy CLI Box */}
            <div className="w-full sm:w-auto flex-1 flex items-center justify-between gap-3 px-3.5 py-2.5 bg-[#0a0a0a] border border-neutral-800 rounded-lg text-xs font-mono text-neutral-300 shadow-inner">
              <div className="flex items-center gap-2 overflow-hidden">
                <span className="text-neutral-500 select-none">~</span>
                <span id="cli-command" className="truncate">
                  {command}
                </span>
              </div>
              <button
                id="copy-btn"
                type="button"
                onClick={handleCopy}
                aria-label="Copy Command"
                className="p-1 hover:text-white text-neutral-400 transition-colors"
                title={copied ? 'Copied!' : 'Copy command'}
              >
                {copied ? (
                  <img
                    src="/assets/icons/check.svg"
                    alt="Copied"
                    className="w-4 h-4 invert text-emerald-400"
                  />
                ) : (
                  <img
                    src="/assets/icons/copy.svg"
                    alt="Copy"
                    className="w-4 h-4 invert"
                  />
                )}
              </button>
            </div>

            {/* Primary CTA Button */}
            <a
              href="#pricing"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-medium text-black bg-white hover:bg-neutral-200 rounded-lg transition-colors font-mono whitespace-nowrap"
            >
              <span>Start Free Trial</span>
              <img
                src="/assets/icons/arrow-right.svg"
                alt=""
                className="w-3 h-3 invert"
              />
            </a>
          </div>

          {/* Social Proof Stats Mini Strip */}
          <div className="pt-6 flex items-center justify-center gap-4 text-xs font-mono text-neutral-500">
            <div className="flex -space-x-1.5">
              <img
                className="w-6 h-6 rounded-full border border-black"
                src="/assets/images/avatar-1.svg"
                alt="User 1"
              />
              <img
                className="w-6 h-6 rounded-full border border-black"
                src="/assets/images/avatar-2.svg"
                alt="User 2"
              />
              <img
                className="w-6 h-6 rounded-full border border-black"
                src="/assets/images/avatar-3.svg"
                alt="User 3"
              />
            </div>
            <span>Trusted by 10,000+ teams shipping to production</span>
          </div>
        </div>

        {/* Vercel-Style Terminal & Deployment Preview Mockup */}
        <div className="mt-14 max-w-4xl mx-auto">
          <div className="rounded-xl border border-neutral-800 bg-[#0a0a0a] shadow-2xl overflow-hidden font-mono">
            {/* Terminal Header Bar */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-neutral-800 bg-[#050505] text-xs text-neutral-400">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-neutral-700"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-neutral-700"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-neutral-700"></span>
                <span className="ml-2 text-neutral-400 font-mono text-[11px]">
                  nexusflow deploy --prod
                </span>
              </div>

              <div className="flex items-center gap-2 text-[11px]">
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="text-neutral-300">Ready in 420ms</span>
              </div>
            </div>

            {/* Terminal Content Stream */}
            <div className="p-5 text-xs text-neutral-300 space-y-3 bg-[#0a0a0a] leading-relaxed">
              <div className="flex items-center gap-2 text-neutral-500">
                <span className="text-white">▲</span>
                <span>NexusFlow CLI v2.4.0</span>
              </div>

              <div className="space-y-1.5 text-neutral-400 pl-4 border-l border-neutral-800">
                <div className="text-neutral-300">
                  <span className="text-neutral-500">•</span> Building preview
                  for branch{' '}
                  <span className="text-white font-semibold">
                    feat/ai-sprint-engine
                  </span>
                  ...
                </div>
                <div>
                  <span className="text-emerald-400">✓</span> Compiled 48 edge
                  lambdas in 184ms
                </div>
                <div>
                  <span className="text-emerald-400">✓</span> Automated PR
                  analysis: 0 regression risks detected
                </div>
                <div>
                  <span className="text-emerald-400">✓</span> Deployed to 32
                  global edge regions
                </div>
              </div>

              {/* Preview Card Box Inside Terminal */}
              <div className="mt-4 p-4 rounded-lg border border-neutral-800 bg-[#111111] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="text-xs text-neutral-400">Preview URL</div>
                  <div className="text-sm font-semibold text-white flex items-center gap-2">
                    <span>nexusflow-feat-ai-sprint.internal.app</span>
                    <img
                      src="/assets/icons/globe.svg"
                      alt=""
                      className="w-3.5 h-3.5 invert opacity-60"
                    />
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="px-2 py-1 bg-emerald-950/80 border border-emerald-800 text-[11px] font-mono text-emerald-400 rounded">
                    Status: 200 OK
                  </span>
                  <span className="text-xs text-neutral-500 font-mono">
                    P99: 14ms
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
