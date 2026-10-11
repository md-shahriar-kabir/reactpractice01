export default function Solutions() {
  const spotlight1Checks = [
    'Automated PR code quality & security scanning',
    'Instant preview environments per Git commit',
    'Zero-downtime canary releases & rollbacks',
  ];

  const pipelineSteps = [
    {
      id: 1,
      icon: '/assets/icons/zap.svg',
      title: 'git push origin main',
      status: 'Triggered',
      statusClass: 'text-neutral-500',
      boxClass: 'p-3 rounded-lg border border-neutral-800 bg-[#111111] flex items-center justify-between',
    },
    {
      id: 2,
      icon: '/assets/icons/sparkles.svg',
      title: 'AI Agent: Generate Release Specs',
      status: 'Completed (0.8s)',
      statusClass: 'text-emerald-400',
      boxClass: 'p-3 rounded-lg border border-neutral-700 bg-[#141414] flex items-center justify-between',
    },
    {
      id: 3,
      icon: '/assets/icons/globe.svg',
      title: 'Deploy Global Edge Network',
      status: '200 OK (14ms)',
      statusClass: 'text-emerald-400',
      boxClass: 'p-3 rounded-lg border border-neutral-800 bg-[#111111] flex items-center justify-between',
    },
  ];

  return (
    <section id="solutions" className="py-24 border-b border-neutral-800 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-28">
        {/* Spotlight 1: Automated Release Pipeline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="text-xs font-mono text-neutral-400 uppercase tracking-widest">
              [ 02 ] AUTOMATED WORKFLOWS
            </div>
            <h3 className="text-3xl font-bold tracking-tight text-white leading-tight">
              Connect your codebase. Automate every branch lifecycle.
            </h3>
            <p className="text-sm text-neutral-400 leading-relaxed">
              From the moment a pull request opens to production deployment,
              NexusFlow coordinates code reviews, tests, stakeholder sign-offs,
              and changelog creation automatically.
            </p>

            <div className="space-y-3 pt-2 font-mono text-xs text-neutral-300">
              {spotlight1Checks.map((text, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <img
                    src="/assets/icons/check.svg"
                    alt="Check"
                    className="w-4 h-4 invert"
                  />
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Flow Visual Card */}
          <div className="lg:col-span-6">
            <div className="p-6 rounded-xl border border-neutral-800 bg-[#0a0a0a] font-mono text-xs space-y-3">
              <div className="flex items-center justify-between text-neutral-500 pb-2 border-b border-neutral-800">
                <span>PIPELINE: PROD-DEPLOY-442</span>
                <span className="text-emerald-400 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>{' '}
                  ONLINE
                </span>
              </div>

              {pipelineSteps.map((step) => (
                <div key={step.id} className={step.boxClass}>
                  <div className="flex items-center gap-3">
                    <img src={step.icon} alt="" className="w-4 h-4 invert" />
                    <span
                      className={
                        step.id === 2 ? 'text-white' : 'text-neutral-200'
                      }
                    >
                      {step.title}
                    </span>
                  </div>
                  <span className={step.statusClass}>{step.status}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Spotlight 2: Velocity & Capacity */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="p-6 rounded-xl border border-neutral-800 bg-[#0a0a0a] font-mono text-xs space-y-4">
              <div className="text-neutral-400 flex items-center justify-between">
                <span>TEAM SPRINT VELOCITY</span>
                <span className="text-white">Q3-CYCLE-12</span>
              </div>

              <div className="space-y-3 pt-2">
                <div>
                  <div className="flex justify-between text-neutral-300 text-[11px] mb-1">
                    <span>Sprint Completion Rate</span>
                    <span className="text-white font-semibold">98.4%</span>
                  </div>
                  <div className="w-full bg-neutral-900 h-2 rounded-full overflow-hidden">
                    <div className="bg-white h-full rounded-full w-[98.4%]"></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-neutral-300 text-[11px] mb-1">
                    <span>PR Cycle Latency</span>
                    <span className="text-emerald-400 font-semibold">
                      -64% (Fast)
                    </span>
                  </div>
                  <div className="w-full bg-neutral-900 h-2 rounded-full overflow-hidden">
                    <div className="bg-emerald-400 h-full rounded-full w-[82%]"></div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3 bg-[#111111] rounded border border-neutral-800">
                  <div className="text-neutral-500 text-[10px]">TIME TO MERGE</div>
                  <div className="text-base font-bold text-white mt-0.5">
                    38m avg
                  </div>
                </div>
                <div className="p-3 bg-[#111111] rounded border border-neutral-800">
                  <div className="text-neutral-500 text-[10px]">AI AGENT RUNS</div>
                  <div className="text-base font-bold text-white mt-0.5">
                    14,290 / wk
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
            <div className="text-xs font-mono text-neutral-400 uppercase tracking-widest">
              [ 03 ] OBSERVABILITY
            </div>
            <h3 className="text-3xl font-bold tracking-tight text-white leading-tight">
              Total engineering clarity across distributed squads.
            </h3>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Eliminate manual status reports and endless sync meetings.
              NexusFlow synthesizes live activity across Git, task boards, and
              deployment feeds into actionable velocity metrics.
            </p>

            <div className="pt-2">
              <a
                href="#pricing"
                className="inline-flex items-center gap-2 text-xs font-mono text-white hover:text-neutral-300 border-b border-neutral-700 pb-0.5 transition-colors"
              >
                <span>Read the Velocity Benchmark Report</span>
                <img
                  src="/assets/icons/arrow-right.svg"
                  alt=""
                  className="w-3.5 h-3.5 invert"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
