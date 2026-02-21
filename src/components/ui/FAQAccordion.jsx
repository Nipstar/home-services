import { useState, useRef } from 'react';

export default function FAQAccordion({ question, answer }) {
    const [isOpen, setIsOpen] = useState(false);
    const contentRef = useRef(null);

    // Parse HTML string in case there are links
    const createMarkup = (html) => ({ __html: html });

    return (
        <div className="border-b border-border last:border-0">
            <button
                className="w-full py-6 flex items-start justify-between text-left focus:outline-none group"
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
            >
                <span className="text-lg font-semibold text-dark pr-8 group-hover:text-primary transition-colors">
                    {question}
                </span>
                <span className="shrink-0 mt-1 relative w-6 h-6 flex items-center justify-center text-primary">
                    <span className={`absolute w-4 h-0.5 bg-current transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                    <span className={`absolute h-4 w-0.5 bg-current transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`} />
                </span>
            </button>

            <div
                ref={contentRef}
                style={{
                    maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : '0px',
                    opacity: isOpen ? 1 : 0
                }}
                className="overflow-hidden transition-all duration-300 ease-in-out"
            >
                <div
                    className="pb-6 text-text leading-relaxed max-w-3xl"
                    dangerouslySetInnerHTML={createMarkup(answer)}
                />
            </div>
        </div>
    );
}
