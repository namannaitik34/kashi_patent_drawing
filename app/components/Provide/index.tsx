import Image from "next/image";

const services = [
    {
        imgSrc: "/assets/provide/heaking.svg",
        title: "Utility Patent Drawings",
        desc: "Expertly crafted utility patent drawings for all major jurisdictions. We ensure clarity, compliance, and fast approval for your innovations.",
        price: "From $20 / figure",
    },
    {
        imgSrc: "/assets/provide/uidesign.svg",
        title: "Design Patent Drawings",
        desc: "Highlight your product’s unique design with high-quality, compliant illustrations. Perfect for global patent applications.",
        price: "From $25 / figure",
    },
    {
        imgSrc: "/assets/provide/marketing.svg",
        title: "Trademark Illustrations",
        desc: "Professional trademark drawings that meet international standards. Ensure your brand is protected and clearly represented.",
        price: "From $30 / figure",
    },
    {
        imgSrc: "/assets/provide/graphic.svg",
        title: "Technical Drawings",
        desc: "Accurate technical illustrations for engineering, manufacturing, and patent filings. Delivered with precision and speed.",
        price: "From $30 / figure",
    },
];

const Provide = () => {
    return (

        <section className="w-full py-20 px-2 md:px-8 bg-gradient-to-br from-blue-50 via-white to-purple-50">
            <div className="max-w-7xl mx-auto">
                {/* Hero Section */}
                <div className="mb-14 flex flex-col md:flex-row items-center gap-10 bg-white rounded-3xl shadow-xl p-10 border border-bluegray">
                    <div className="flex-1">
                        <h1 className="text-4xl lg:text-6xl font-bold text-navyblue mb-6">Patent Designing & Illustration</h1>
                        <p className="text-lg text-bluegray mb-4">Protect your ideas with world-class patent drawings and technical illustrations. Our team blends creativity and compliance for inventors, attorneys, and businesses globally.</p>
                        <ul className="list-disc ml-6 text-bluegray space-y-2">
                            <li>Utility, Design, and Trademark Drawings</li>
                            <li>Technical Illustrations for Engineering & Manufacturing</li>
                            <li>Fast Turnaround & Unlimited Revisions</li>
                            <li>100% Patent Office Compliance</li>
                        </ul>
                    </div>
                    <div className="flex-1 flex justify-center">
                        <Image src="/assets/provide/uidesign.svg" alt="Patent Design" width={220} height={220} className="rounded-2xl shadow-lg" />
                    </div>
                </div>

                {/* Features Stepper */}
                <div className="mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold text-center mb-10 text-navyblue">Why Choose Us?</h2>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                        {[
                            { label: "Flat Fee", desc: "No hidden costs, regardless of complexity." },
                            { label: "Unlimited Revisions", desc: "Iterate until you’re satisfied." },
                            { label: "100% Compliance", desc: "Meets all Patent Office regulations." },
                            { label: "Fast Delivery", desc: "Quick turnaround, simple ordering." }
                        ].map((step, idx) => (
                            <div key={idx} className="flex flex-col items-center group">
                                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-3 group-hover:bg-blue-500 transition-all duration-300 shadow-md">
                                    <span className="text-2xl font-bold text-blue-700 group-hover:text-white">{idx + 1}</span>
                                </div>
                                <span className="font-semibold text-lg text-navyblue mb-1">{step.label}</span>
                                <span className="text-bluegray text-base text-center max-w-xs">{step.desc}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">
                    {services.map((item, i) => (
                        <div
                            key={i}
                            className="relative flex flex-col items-center justify-center bg-gradient-to-br from-white via-blue-50 to-purple-50 rounded-3xl shadow-xl p-10 min-h-[340px] overflow-hidden group hover:scale-[1.03] hover:shadow-2xl transition-all duration-300"
                        >
                            <div className="w-24 h-24 flex items-center justify-center mb-6">
                                <Image src={item.imgSrc} alt={item.title} width={96} height={96} className="drop-shadow-lg" />
                            </div>
                            <h3 className="text-2xl font-bold text-navyblue mb-2 text-center group-hover:text-blue-600 transition-all duration-300">{item.title}</h3>
                            <p className="text-base text-bluegray text-center mb-6">{item.desc}</p>
                            <button className="bg-blue-500 text-white px-6 py-3 rounded-xl font-semibold shadow-lg transition-all duration-300 hover:bg-blue-600 hover:scale-105 hover:shadow-xl">{item.price}</button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Provide;
