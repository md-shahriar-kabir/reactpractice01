export default function FaqItem({ question, answer, isOpen, onToggle }) {
  return (
    <div className="faq-item py-6 px-3">
      <button
        type="button"
        onClick={onToggle}
        className="faq-trigger w-full flex items-center justify-between text-left focus:outline-none cursor-pointer"
        aria-expanded={isOpen}
      >
        <span className="text-base font-semibold text-white">{question}</span>
        <img
          src="/assets/icons/chevron-down.svg"
          alt={isOpen ? 'Collapse' : 'Expand'}
          className={`faq-icon w-4 h-4 invert opacity-60 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      {isOpen && (
        <div className="faq-content pt-4 text-sm text-neutral-400 leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  );
}
