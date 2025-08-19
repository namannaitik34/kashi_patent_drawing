import Image from "next/image";

const Clientsay = () => {
    return (
        <section className="mx-auto max-w-6xl py-16 px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
                <h3 className="text-navyblue text-4xl lg:text-5xl font-bold mb-2">What Our Clients Say</h3>
                <p className="text-lg text-darkgray">Real feedback from innovators, attorneys, and businesses who trust Kashi Patent.</p>
            </div>
            <Image src={'/assets/clientsay/avatars.png'} alt="avatars-image" width={600} height={180} className="mx-auto mb-6" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Testimonial 1 */}
                <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-center">
                    <Image src={'/assets/clientsay/user.png'} alt="user-image" width={96} height={96} className="rounded-full mb-4" />
                    <p className="text-base text-center text-darkgray mb-4">Kashi Patent delivered exceptional drawings for my patent application. The team was responsive, professional, and made the process seamless. Highly recommended!</p>
                    <h3 className="text-xl font-semibold text-navyblue">Jony Scotty</h3>
                    <span className="text-sm text-bluegray">Inventor</span>
                </div>
                {/* Testimonial 2 */}
                <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-center">
                    <Image src={'/assets/clientsay/user.png'} alt="user-image" width={96} height={96} className="rounded-full mb-4" />
                    <p className="text-base text-center text-darkgray mb-4">The accuracy and speed of Kashi Patent’s drawings exceeded my expectations. Their expertise made my patent process smooth and stress-free.</p>
                    <h3 className="text-xl font-semibold text-navyblue">Priya Mehta</h3>
                    <span className="text-sm text-bluegray">Patent Attorney</span>
                </div>
                {/* Testimonial 3 */}
                <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-center">
                    <Image src={'/assets/clientsay/user.png'} alt="user-image" width={96} height={96} className="rounded-full mb-4" />
                    <p className="text-base text-center text-darkgray mb-4">Professional, reliable, and creative! Kashi Patent is our go-to partner for all patent illustration needs.</p>
                    <h3 className="text-xl font-semibold text-navyblue">Michael Lee</h3>
                    <span className="text-sm text-bluegray">Business Owner</span>
                </div>
            </div>
        </section>
    )
}

export default Clientsay;
