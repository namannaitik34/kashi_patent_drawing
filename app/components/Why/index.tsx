import Image from "next/image";

interface whydata {
    heading: string;
    subheading: string;
}

const whydata: whydata[] = [
    {
        heading: "Quality",
        subheading: "Expertly crafted patent drawings that meet the highest standards."
    },
    {
        heading: "Support",
        subheading: "Responsive communication and guidance throughout your project."
    },
    {
        heading: "Reliability",
        subheading: "Dependable service for inventors, attorneys, and businesses worldwide."
    }
]


const Why = () => {
    return (
        <section
            id="about"
            className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20 px-4 md:px-12 transition-all duration-700 hover:bg-gradient-to-tr hover:from-purple-100 hover:via-blue-50 hover:to-white relative overflow-hidden"
        >
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-12 items-center justify-center">
                    {/* Left: Image & Big Cards */}
                    <div className="flex-1 flex flex-col items-center justify-center">
                        <div className="bg-white rounded-3xl shadow-xl p-6 mb-10 w-full flex items-center justify-center">
                            <Image src="/assets/why/iPad.png" alt="iPad-image" width={4000} height={900} className="object-contain" />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-1 gap-8 w-full overflow-visible">
                            <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col gap-2 border-t-4 transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer overflow-visible" style={{borderTopColor: '#FDECD3'}}>
                                    <h5 className="font-semibold text-lg mb-1">Budget-friendly Prices or We Match</h5>
                                    <p className="text-bluegray text-base">Find lower prices for patent drawings? We'll match them to ensure the best value.</p>
                            </div>
                                <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col gap-2 border-t-4 transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer overflow-visible" style={{borderTopColor: '#FDECD3'}}>
                                    <h5 className="font-semibold text-lg mb-1">100% Satisfaction Guarantee</h5>
                                    <p className="text-bluegray text-base">Unlimited revisions at no extra cost. Complete satisfaction or you don’t pay.</p>
                            </div>
                                <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col gap-2 border-t-4 transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer overflow-visible" style={{borderTopColor: '#FDECD3'}}>
                                    <h5 className="font-semibold text-lg mb-1">Most Flexible Output Formats</h5>
                                    <p className="text-bluegray text-base">We deliver in PDF, DWG, Word, PPT, Visio, CorelDRAW, JPG, TIFF, PNG, and more.</p>
                            </div>
                                <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col gap-2 border-t-4 transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer overflow-visible" style={{borderTopColor: '#FDECD3'}}>
                                    <h5 className="font-semibold text-lg mb-1">Easy Ordering, Quick Delivery</h5>
                                    <p className="text-bluegray text-base">Order in minutes and receive high-quality outputs in just a few hours. Super-expedited options available.</p>
                            </div>
                        </div>
                    </div>
                    {/* Right: Why Us & Track Record */}
                    <div className="flex-1">
                        <h2 className="text-5xl font-extrabold text-blue-900 mb-6 text-center lg:text-left">Why Choose Us?</h2>
                        <p className="text-lg text-bluegray mb-10 text-center lg:text-left">We deliver patent drawings and services that exceed expectations, backed by experience and a proven track record.</p>
                        <div className="space-y-8 mb-12">
                            {whydata.map((items, i) => (
                                <div className="flex items-start gap-4" key={i}>
                                    <div className="rounded-full h-12 w-12 flex items-center justify-center bg-blue-100">
                                        <Image src="/assets/why/check.svg" alt="check-image" width={28} height={28} />
                                    </div>
                                    <div>
                                        <h4 className="text-2xl font-bold text-blue-900 mb-1">{items.heading}</h4>
                                        <h5 className="text-lg text-bluegray font-normal">{items.subheading}</h5>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="bg-white rounded-2xl shadow-lg p-8">
                            <h3 className="text-3xl font-extrabold text-blue-900 text-center mb-8 tracking-tight">Proven Track Record</h3>
                            <ul className="space-y-6 max-w-xl mx-auto">
                                <li className="flex items-center gap-4 transition-all duration-200 hover:bg-blue-50 hover:shadow-md rounded-lg px-2 py-2 cursor-pointer">
                                    <span className="inline-flex items-center justify-center w-8 h-8 rounded bg-blue-100">
                                        {/* Team/Group Icon */}
                                        <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><circle cx="6" cy="8" r="3" stroke="#2563eb" strokeWidth="2"/><circle cx="14" cy="8" r="3" stroke="#2563eb" strokeWidth="2"/><rect x="2" y="13" width="16" height="4" rx="2" stroke="#2563eb" strokeWidth="2"/></svg>
                                    </span>
                                    <span className="text-xl font-bold text-blue-900">60+</span>
                                    <span className="text-base text-bluegray">Skilled Patent Illustrators</span>
                                </li>
                                <li className="flex items-center gap-4 transition-all duration-200 hover:bg-green-50 hover:shadow-md rounded-lg px-2 py-2 cursor-pointer">
                                    <span className="inline-flex items-center justify-center w-8 h-8 rounded bg-green-100">
                                        {/* Clock Icon */}
                                        <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><circle cx="10" cy="10" r="8" stroke="#059669" strokeWidth="2"/><path d="M10 6v4l2 2" stroke="#059669" strokeWidth="2" strokeLinecap="round"/></svg>
                                    </span>
                                    <span className="text-xl font-bold text-green-700">17+</span>
                                    <span className="text-base text-bluegray">Years in Service</span>
                                </li>
                                <li className="flex items-center gap-4 transition-all duration-200 hover:bg-yellow-50 hover:shadow-md rounded-lg px-2 py-2 cursor-pointer">
                                    <span className="inline-flex items-center justify-center w-8 h-8 rounded bg-yellow-100">
                                        {/* Document Icon */}
                                        <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><rect x="4" y="3" width="12" height="14" rx="2" stroke="#ca8a04" strokeWidth="2"/><path d="M8 7h4" stroke="#ca8a04" strokeWidth="2" strokeLinecap="round"/><path d="M8 11h4" stroke="#ca8a04" strokeWidth="2" strokeLinecap="round"/></svg>
                                    </span>
                                    <span className="text-xl font-bold text-yellow-700">30K+</span>
                                    <span className="text-base text-bluegray">Patent Applications Handled</span>
                                </li>
                                <li className="flex items-center gap-4 transition-all duration-200 hover:bg-purple-50 hover:shadow-md rounded-lg px-2 py-2 cursor-pointer">
                                    <span className="inline-flex items-center justify-center w-8 h-8 rounded bg-purple-100">
                                        {/* User Icon */}
                                        <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><circle cx="10" cy="8" r="4" stroke="#7c3aed" strokeWidth="2"/><rect x="4" y="14" width="12" height="4" rx="2" stroke="#7c3aed" strokeWidth="2"/></svg>
                                    </span>
                                    <span className="text-xl font-bold text-purple-700">4K+</span>
                                    <span className="text-base text-bluegray">Clients Serviced</span>
                                </li>
                                <li className="flex items-center gap-4 transition-all duration-200 hover:bg-red-50 hover:shadow-md rounded-lg px-2 py-2 cursor-pointer">
                                    <span className="inline-flex items-center justify-center w-8 h-8 rounded bg-red-100">
                                        {/* Connecting/Network Icon */}
                                        <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><circle cx="5" cy="10" r="2" stroke="#dc2626" strokeWidth="2"/><circle cx="15" cy="5" r="2" stroke="#dc2626" strokeWidth="2"/><circle cx="15" cy="15" r="2" stroke="#dc2626" strokeWidth="2"/><path d="M7 10c2-4 6-4 8-5" stroke="#dc2626" strokeWidth="2"/><path d="M7 10c2 4 6 4 8 5" stroke="#dc2626" strokeWidth="2"/></svg>
                                    </span>
                                    <span className="text-xl font-bold text-red-700">50+</span>
                                    <span className="text-base text-bluegray">Customer Countries</span>
                                </li>
                            </ul>
                            <div className="text-center mt-8">
                                <span className="inline-block bg-blue-100 text-blue-900 font-semibold rounded-full px-6 py-2 shadow">Trusted by thousands of professionals worldwide</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Why;
