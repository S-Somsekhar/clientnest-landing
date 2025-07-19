'use client';

import { useState } from 'react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      q: "Do I need technical skills to use ClientNest?",
      a: "Not at all. We've designed ClientNest specifically for solopreneurs who want powerful tools without complexity. If you can use a smartphone, you can use ClientNest.",
      icon: '💻'
    },
    {
      q: "How secure is my client data?",
      a: "We treat your data like our own. ClientNest uses bank-level 256-bit encryption, regular backups, and secure data centers. You own your data 100% - we never sell or share it.",
      icon: '🔒'
    },
    {
      q: "Can I access ClientNest on my phone?",
      a: "Absolutely! ClientNest works perfectly on all devices. Our mobile app (coming Q4 2024) will provide even smoother on-the-go access.",
      icon: '📱'
    },
    {
      q: "What happens after my free trial ends?",
      a: "Your account continues with all features intact. We'll notify you 3 days before trial ends. No surprise charges - you choose when to upgrade.",
      icon: '⏳'
    },
    {
      q: "What's your refund policy?",
      a: "100% satisfaction guarantee. If you're unhappy within 7 days of payment, we'll refund every penny. No hoops to jump through.",
      icon: '↩️'
    },
    {
      q: "Can I import data from other tools?",
      a: "Yes! We support CSV/XLSX imports from spreadsheets, and will soon add direct imports from popular CRMs (coming soon).",
      icon: '📤'
    }
  ];

  return (
    <section className="w-full bg-gray-50 py-16 sm:py-24 px-4 sm:px-6" id="faq">
      <div className="max-w-4xl mx-auto">
        <div className="text-center">
          <div className="mb-4">
            <span className="inline-block bg-blue-100 text-blue-900 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
              Need Help?
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-blue-600">
              Frequently Asked
            </span> Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Everything you need to know about getting started with ClientNest.
          </p>
        </div>

        <div className="mt-12 space-y-4">
          {faqs.map((faq, i) => (
            <div 
              key={i}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-all"
            >
              <button 
                onClick={() => toggleFAQ(i)}
                className="w-full flex justify-between items-center p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                aria-expanded={openIndex === i}
                aria-controls={`faq-answer-${i}`}
              >
                <div className="flex items-start">
                  <span className="text-xl mr-4 mt-0.5">{faq.icon}</span>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                    {faq.q}
                  </h3>
                </div>
                <svg 
                  className={`w-5 h-5 text-gray-500 transition-transform duration-200 flex-shrink-0 ${openIndex === i ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div
                id={`faq-answer-${i}`}
                className={`px-6 pb-6 transition-all duration-300 ${openIndex === i ? 'block' : 'hidden'} ml-10`}
                aria-hidden={openIndex !== i}
              >
                <p className="text-gray-600 leading-relaxed">
                  {faq.a}
                  {i === 2 && (
                    <a href="#demo" className="text-blue-600 hover:underline ml-1 whitespace-nowrap">
                      See mobile demo →
                    </a>
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;