"use client";

import { useState } from "react";
import { useEffect } from "react";
import Image from "next/image";
import ContactForm from "../Contact/ContactForm";

const Banner = () => {
  const [showContactForm, setShowContactForm] = useState(false);
  const [headlineIdx, setHeadlineIdx] = useState(0);
  const [transitionState, setTransitionState] = useState<'idle' | 'fadeout' | 'fadein' | 'scale'>('idle');
  const [transitionType, setTransitionType] = useState<'horizontal' | 'vertical' | 'scale'>('horizontal');
  const headlines = [
    "Trusted Partner for Accurate & Affordable Patent Drawings",
    "Delivering Precision Patent Drawings for Every Innovation",
    "High-Quality Patent Drawings That Meet Global Standards"
  ];

  // Slideshow effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTransitionState('fadeout');
      // Set transition type based on which headline is next
      if ((headlineIdx + 1) % headlines.length === 2) {
        setTransitionType('vertical');
      } else if ((headlineIdx + 1) % headlines.length === 0) {
        setTransitionType('scale');
      } else {
        setTransitionType('horizontal');
      }
      setTimeout(() => {
        setHeadlineIdx((prev) => (prev + 1) % headlines.length);
        setTransitionState(transitionType === 'scale' ? 'scale' : 'fadein');
        setTimeout(() => {
          setTransitionState('idle');
        }, 900); // fade-in duration
      }, 900); // fade-out duration
    }, 4200);
    return () => clearInterval(timer);
  }, [headlineIdx, headlines.length, transitionType]);

  const handleContactClick = () => {
    setShowContactForm(true);
  };

  const handleFormClose = () => {
    setShowContactForm(false);
  };

  return (
    <main id="home" className="scroll-mt-20">
      <div className="px-6 lg:px-8">
        <div className="mx-auto max-w-7xl pt-16 sm:pt-20 pb-20 banner-image">
          <div className="text-center">
            <h1 className="text-4xl font-semibold text-navyblue sm:text-5xl lg:text-7xl md:4px lh-96 scroll-mt-24 min-h-[3.5rem]" id="banner-heading">
              <span
                className={`block min-h-[3.5rem] transition-all duration-1000 ease-[cubic-bezier(0.77,0,0.175,1)] mx-6 sm:mx-12 lg:mx-20
                  ${transitionState === 'fadeout' && transitionType === 'horizontal' ? 'opacity-0 -translate-x-24' : ''}
                  ${transitionState === 'fadein' && transitionType === 'horizontal' ? 'opacity-100 translate-x-12' : ''}
                  ${transitionState === 'fadeout' && transitionType === 'vertical' ? 'opacity-0 -translate-y-16' : ''}
                  ${transitionState === 'fadein' && transitionType === 'vertical' ? 'opacity-100 translate-y-8' : ''}
                  ${transitionState === 'fadeout' && transitionType === 'scale' ? 'opacity-0 scale-75' : ''}
                  ${transitionState === 'scale' && transitionType === 'scale' ? 'opacity-100 scale-110' : ''}
                  ${transitionState === 'idle' ? 'opacity-100 translate-x-0 translate-y-0 scale-100' : ''}
                `}
                key={headlineIdx}
              >
                {headlines[headlineIdx]}
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-bluegray">
              Kashi Patent is your trusted partner for precise, compliant patent drawings. Our experienced team delivers high-quality utility, design, and trademark illustrations tailored to meet global patent office standards. Protect your ideas with clarity and confidence.
            </p>
          </div>

          <div className="text-center mt-5">
            <button
              type="button"
              onClick={handleContactClick}
              className="text-15px text-white font-medium bg-blue py-5 px-9 mt-2 leafbutton"
            >
              Contact Our Experts
            </button>
            <button
              type="button"
              onClick={() => window.location.href = '#quote'}
              className="text-15px text-white font-medium bg-blue py-5 px-9 mt-2 ml-4 leafbutton"
            >
              Request a Quote
            </button>
          </div>

          {/* Designing and Patent Section */}
          <div className="mt-12 p-8 bg-white rounded-lg shadow-lg text-center border border-bluegray">
            <h2 className="text-3xl font-bold text-navyblue mb-4">Designing & Patents: Fueling Innovation</h2>
            <p className="text-lg text-bluegray mb-6">
              Great design is the foundation of innovation, and patents protect those ideas for the future. From the first sketch to a finished product, thoughtful design and strong patent protection help turn creativity into real-world impact. Whether you’re an inventor, entrepreneur, or enthusiast, understanding the role of design and patents is key to shaping tomorrow’s solutions.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <div className="flex-1 bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue mb-2">Why Design Matters</h3>
                <p className="text-bluegray">Design transforms ideas into practical, beautiful, and functional realities.</p>
              </div>
              <div className="flex-1 bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue mb-2">The Power of Patents</h3>
                <p className="text-bluegray">Patents safeguard innovation, encouraging progress and creativity in every field.</p>
              </div>
            </div>
          </div>

        </div>

        {/* Contact Form Modal */}
        {showContactForm && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <ContactForm onClose={handleFormClose} />
          </div>
        )}
      </div>
    </main>
  );
};

export default Banner;
