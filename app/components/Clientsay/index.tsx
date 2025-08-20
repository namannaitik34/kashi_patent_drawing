"use client";
import Image from "next/image";
import { useRef, useEffect } from "react";

const testimonials = [
    {
        name: "Jony Scotty",
        role: "Inventor",
        text: "Kashi Patent delivered exceptional drawings for my patent application. The team was responsive, professional, and made the process seamless. Highly recommended!",
        img: "/assets/clientsay/user.png",
    },
    {
        name: "Priya Mehta",
        role: "Patent Attorney",
        text: "The accuracy and speed of Kashi Patent’s drawings exceeded my expectations. Their expertise made my patent process smooth and stress-free.",
        img: "/assets/clientsay/user.png",
    },
    {
        name: "Michael Lee",
        role: "Business Owner",
        text: "Professional, reliable, and creative! Kashi Patent is our go-to partner for all patent illustration needs.",
        img: "/assets/clientsay/user.png",
    },
    {
        name: "Sarah Kim",
        role: "Startup Founder",
        text: "Impressed by the attention to detail and quick turnaround. Will use again for future patents!",
        img: "/assets/clientsay/user.png",
    },
    {
        name: "David Chen",
        role: "Engineer",
        text: "The technical drawings were spot-on and helped our team file with confidence.",
        img: "/assets/clientsay/user.png",
    },
];


const Clientsay = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    // Auto-scroll effect
    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;
        let interval = setInterval(() => {
            el.scrollBy({ left: 340, behavior: 'smooth' });
            // If at end, scroll back to start
            if (el.scrollLeft + el.offsetWidth >= el.scrollWidth - 10) {
                el.scrollTo({ left: 0, behavior: 'smooth' });
            }
        }, 2500);
        return () => clearInterval(interval);
    }, []);
    return (
    <section className="mx-auto max-w-6xl py-10 px-2 sm:px-8 lg:px-32">
            <div className="text-center mb-10">
                <h3 className="text-navyblue text-4xl lg:text-5xl font-bold mb-2">What Our Clients Say</h3>
                <p className="text-lg text-darkgray">Real feedback from innovators, attorneys, and businesses who trust Kashi Patent.</p>
            </div>
            <Image src={'/assets/clientsay/avatars.png'} alt="avatars-image" width={1080} height={600} className="mx-auto mb-6" />

            {/* Arrow-scrollable testimonial row, no scrollbar visible */}
            <div className="relative">
                <button
                    className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 hover:bg-blue-500 hover:text-white text-blue-700 shadow-md transition-all duration-300"
                    onClick={() => {
                        const el = containerRef.current as HTMLDivElement | null;
                        if (el) {
                            el.scrollBy({ left: -340, behavior: 'smooth' });
                        }
                    }}
                    aria-label="Scroll left"
                >
                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </button>
                <div
                    ref={containerRef}
                    className="flex overflow-x-auto gap-8 pb-4 scrollbar-hide"
                    style={{scrollSnapType: 'x mandatory'}}
                >
                    {testimonials.map((t, idx) => (
                        <div key={idx} className="w-full min-w-[160px] max-w-[90vw] sm:min-w-[280px] sm:max-w-sm flex-shrink-0 bg-white rounded-2xl shadow-md p-4 flex flex-col items-center cursor-pointer hover:scale-105 transition-transform duration-300" style={{scrollSnapAlign: 'start'}}>
                            <Image src={t.img} alt="user-image" width={96} height={96} className="rounded-full mb-4" />
                            <p className="text-base text-center text-darkgray mb-4">{t.text}</p>
                            <h3 className="text-xl font-semibold text-navyblue">{t.name}</h3>
                            <span className="text-sm text-bluegray">{t.role}</span>
                        </div>
                    ))}
                </div>
                <button
                    className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 hover:bg-blue-500 hover:text-white text-blue-700 shadow-md transition-all duration-300"
                    onClick={() => {
                        const el = containerRef.current as HTMLDivElement | null;
                        if (el) {
                            el.scrollBy({ left: 340, behavior: 'smooth' });
                        }
                    }}
                    aria-label="Scroll right"
                >
                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </button>
            </div>
        </section>
    );
};




// Add this to your global CSS (e.g., globals.css) to hide scrollbars:
// .scrollbar-hide::-webkit-scrollbar { display: none; }
// .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }

export default Clientsay;
