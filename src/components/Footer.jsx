export default function Footer() {
  const productLinks = [
    { label: 'AI Sprints', href: '#features' },
    { label: 'Edge Previews', href: '#features' },
    { label: 'Architecture Canvas', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
  ];

  const solutionsLinks = [
    { label: 'Engineering Squads', href: '#solutions' },
    { label: 'Startups & Scaleups', href: '#solutions' },
    { label: 'Enterprise Security', href: '#solutions' },
    { label: 'Remote Teams', href: '#solutions' },
  ];

  const companyLinks = [
    { label: 'About Us', href: '#about' },
    { label: 'Careers', href: '#careers' },
    { label: 'Security & Trust', href: '#security' },
    { label: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      href: '#github',
      icon: '/assets/icons/github.svg',
    },
    {
      name: 'Twitter',
      href: '#twitter',
      icon: '/assets/icons/twitter.svg',
    },
    {
      name: 'Discord',
      href: '#discord',
      icon: '/assets/icons/discord.svg',
    },
  ];

  return (
    <footer className="border-t border-neutral-800 bg-black text-neutral-400 text-xs font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Column 1: Brand & Socials */}
          <div className="col-span-2 space-y-4">
            <div className="flex items-center gap-2 text-white">
              <img
                src="/assets/icons/logo.svg"
                alt="NexusFlow"
                className="w-5 h-5 invert"
              />
              <span className="text-sm font-semibold">NexusFlow</span>
            </div>
            <p className="text-xs text-neutral-500 max-w-xs leading-relaxed">
              The unified developer platform for AI-orchestrated sprints,
              instant edge previews, and automated delivery pipelines.
            </p>
            <div className="flex items-center gap-3 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  className="text-neutral-500 hover:text-white transition-colors"
                >
                  <img
                    src={social.icon}
                    alt={social.name}
                    className="w-4 h-4 invert opacity-60 hover:opacity-100"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Product */}
          <div className="space-y-3 font-mono">
            <div className="text-[11px] font-bold text-white uppercase tracking-wider">
              Product
            </div>
            <ul className="space-y-2 text-neutral-400">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Solutions */}
          <div className="space-y-3 font-mono">
            <div className="text-[11px] font-bold text-white uppercase tracking-wider">
              Solutions
            </div>
            <ul className="space-y-2 text-neutral-400">
              {solutionsLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Company */}
          <div className="space-y-3 font-mono">
            <div className="text-[11px] font-bold text-white uppercase tracking-wider">
              Company
            </div>
            <ul className="space-y-2 text-neutral-400">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Status & Copyright Bar */}
        <div className="mt-12 pt-8 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-neutral-500">
          <div>© 2026 NexusFlow Inc. All rights reserved.</div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5 text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>All systems nominal</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
