"use client";
import React, { useState } from "react";

import Image from "next/image";

const howSteps = [
  {
    icon: "/assets/banner/dashboard.svg",
    title: "Input Request Details and Upload Files",
    color: "border-red-400"
  },
  {
    icon: "/assets/banner/shapes.svg",
    title: "Understanding your Requirements",
    color: "border-blue-900"
  },
  {
    icon: "/assets/buyers/projectcompleted.svg",
    title: "Patent Drawing Experts at Work",
    color: "border-green-400 font-bold"
  },
  {
    icon: "/assets/footer/email.svg",
    title: "Receive Formal Drawings in 2-3 Business Days (*T&C Apply)",
    color: "border-blue-400"
  },
  {
    icon: "/assets/buyers/ourbuyers.svg",
    title: "Unlimited Iterations - No Additional Cost",
    color: "border-yellow-500"
  }
];

const faqs = [
  {
    question: "What types of patent drawings do you provide?",
    answer: "We offer utility, design, trademark, and technical patent drawings tailored to global standards."
  },
  {
    question: "How do I submit my invention details?",
    answer: "You can upload your files and provide details through our secure online form."
  },
  {
    question: "How long does it take to receive my drawings?",
    answer: "Most projects are delivered within 2-3 business days, depending on complexity."
  },
  {
    question: "Can I request revisions to my drawings?",
    answer: "Yes, we offer unlimited revisions at no extra cost until you are satisfied."
  },
  {
    question: "Are your drawings accepted by patent offices worldwide?",
    answer: "Our drawings comply with USPTO, EPO, WIPO, and other major patent office requirements."
  },
  {
    question: "What file formats do you deliver?",
    answer: "We provide drawings in PDF, TIFF, and other formats as required by patent offices."
  },
  {
    question: "Is my information kept confidential?",
    answer: "Absolutely. All client data and invention details are handled with strict confidentiality."
  },
  {
    question: "How do I contact your support team?",
    answer: "You can reach us via WhatsApp, email, or our contact form for any queries."
  }
];

export default function HowItWorksFAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  return (
    <div className="py-20 px-4 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-blue-900 mb-2">How it Works?</h2>
        <p className="text-center text-lg text-bluegray mb-12">Our Patent Drawing Services are designed to support patent agents, attorneys, and innovators with a simple, transparent process.</p>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-16">
          {howSteps.map((step, idx) => (
            <div key={idx} className={`flex flex-col items-center text-center pb-4 border-b-4 ${step.color} bg-white rounded-xl shadow-md p-6 transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl min-h-[220px]`}>
              <div className="mb-4">
                <Image src={step.icon} alt={step.title} width={56} height={56} className="drop-shadow-lg" />
              </div>
              <span className={step.color.includes('font-bold') ? 'font-bold text-navyblue' : ''}>{step.title}</span>
            </div>
          ))}
        </div>
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-8">Frequently Asked Questions</h2>
        <div className="max-w-2xl mx-auto">
          {faqs.map((faq, idx) => (
            <div key={idx} className="mb-6">
              <button
                className="w-full flex items-center justify-between px-6 py-5 text-left bg-white rounded-xl shadow hover:shadow-lg transition-all duration-300 focus:outline-none"
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                aria-expanded={openIdx === idx}
              >
                <span className="text-lg font-semibold text-navyblue">{faq.question}</span>
                <svg className={`ml-4 w-6 h-6 text-blue-500 transform transition-transform duration-300 ${openIdx === idx ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ${openIdx === idx ? 'max-h-40 py-4 px-6 bg-blue-50 border border-blue-100' : 'max-h-0 py-0 px-6'}`}
                style={{ borderRadius: openIdx === idx ? '0 0 0.75rem 0.75rem' : '0 0 0.75rem 0.75rem' }}
              >
                <p className="text-bluegray text-base animate-fade-in">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
        <style jsx>{`
          .animate-fade-in {
            animation: fadeIn 0.3s;
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-5px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}</style>
      </div>
    </div>
  );
}
