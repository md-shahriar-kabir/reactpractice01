export default function PricingCard({ plan, isAnnual }) {
  const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;

  return (
    <div
      className={`p-8 rounded-xl bg-[#0a0a0a] flex flex-col justify-between space-y-6 ${
        plan.isPopular
          ? 'border-2 border-white relative shadow-2xl'
          : 'border border-neutral-800'
      }`}
    >
      <div className="space-y-4">
        <div>
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold text-white">{plan.name}</h3>
            {plan.badge && (
              <span className="px-2 py-0.5 text-[10px] font-mono font-bold text-black bg-white rounded">
                {plan.badge}
              </span>
            )}
          </div>
          <p className="text-xs text-neutral-400 mt-1">{plan.description}</p>
        </div>

        <div className="flex items-baseline gap-1 font-mono">
          <span className="text-4xl font-bold text-white pricing-value">
            {price}
          </span>
          {plan.period && (
            <span className="text-xs text-neutral-500">{plan.period}</span>
          )}
        </div>

        <div
          className={`pt-4 border-t space-y-2.5 text-xs font-mono ${
            plan.isPopular
              ? 'border-neutral-800 text-neutral-200'
              : 'border-neutral-900 text-neutral-300'
          }`}
        >
          {plan.features.map((feature, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <img
                src="/assets/icons/check.svg"
                alt=""
                className="w-3.5 h-3.5 invert"
              />
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>

      <a
        href={plan.ctaLink}
        className={`w-full inline-flex items-center justify-center gap-1.5 py-2.5 text-xs font-mono font-medium rounded-lg transition-colors ${
          plan.isPopular
            ? 'text-black bg-white hover:bg-neutral-200'
            : 'text-neutral-300 bg-neutral-900 hover:bg-neutral-800 hover:text-white border border-neutral-800'
        }`}
      >
        <span>{plan.ctaText}</span>
        <img
          src="/assets/icons/arrow-right.svg"
          alt=""
          className={`w-3.5 h-3.5 invert ${plan.isPopular ? '' : 'opacity-70'}`}
        />
      </a>
    </div>
  );
}
