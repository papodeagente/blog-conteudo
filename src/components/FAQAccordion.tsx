'use client';

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="faq-list">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <details
            key={index}
            className="faq-card"
            open={isOpen}
            onClick={(e) => {
              e.preventDefault();
              setOpenIndex(isOpen ? null : index);
            }}
          >
            <summary>
              <span className="qnum">0{index + 1}</span>
              <span>{item.question}</span>
              <span className="plus">+</span>
            </summary>
            <div className="answer">{item.answer}</div>
          </details>
        );
      })}
    </div>
  );
}
