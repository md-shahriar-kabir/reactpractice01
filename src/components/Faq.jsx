import { useState } from 'react';
import { faqs } from '../data/faqs';
import FaqItem from './FaqItem';

export default function Faq() {
  const [openId, setOpenId] = useState(null);

  const handleToggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-24 border-b border-neutral-800 bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-left space-y-2 mb-16">
          <div className="text-xs font-mono text-neutral-400 uppercase tracking-widest">
            [ 06 ] FAQ
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Frequently Asked Questions
          </h2>
        </div>

        {/* FAQ Accordion List (Re-usable Component via Array of Objects) */}
        <div
          className="divide-y divide-neutral-800 border-y border-neutral-800"
          id="faq-accordion"
        >
          {faqs.map((faq) => (
            <FaqItem
              key={faq.id}
              question={faq.question}
              answer={faq.answer}
              isOpen={openId === faq.id}
              onToggle={() => handleToggle(faq.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
