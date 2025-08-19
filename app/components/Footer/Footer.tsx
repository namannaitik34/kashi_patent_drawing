import Link from "next/link";
import Image from "next/image";

// MIDDLE LINKS DATA
interface ProductType {
  id: number;
  link: string[];
}

const products: ProductType[] = [
  {
    id: 1,
    link: [],
  },
  {
    id: 2,
    link: [],
  },
];

const footer = () => {
  return (
    <footer className="bg-darkblue text-white pt-16 pb-8 px-4 lg:px-0">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Logo & Tagline */}
        <div className="flex flex-col items-start">
          <Image src="/assets/logo/logo.png" alt="Company Logo" width={56} height={56} className="h-14 mb-4" />
          <span className="text-lg font-semibold mb-2">Let’s Make Magic Together ✨</span>
          <div className="flex gap-4 mt-2">
            <Link href="https://facebook.com" className="hover:scale-110 transition-transform">
              <Image src={'/assets/footer/facebook.svg'} alt="facebook" width={15} height={15} className="" />
            </Link>
            <Link href="https://twitter.com" className="hover:scale-110 transition-transform">
              <Image src={'/assets/footer/twitter.svg'} alt="twitter" width={32} height={32} className="" />
            </Link>
            <Link href="https://instagram.com" className="hover:scale-110 transition-transform">
              <Image src={'/assets/footer/instagram.svg'} alt="instagram" width={32} height={32} className="" />
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-3">
            <li><Link href="/" className="hover:underline">Home</Link></li>
            <li><Link href="/about" className="hover:underline">About</Link></li>
            <li><Link href="/services" className="hover:underline">Services</Link></li>
            <li><Link href="/contact" className="hover:underline">Contact</Link></li>
            <li><Link href="/portfolio" className="hover:underline">Portfolio</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-bold mb-4">Contact Us</h3>
          <div className="flex items-center gap-2 mb-3">
            <Image src={'/assets/footer/mask.svg'} alt="address" width={24} height={24} />
            <span>Levana Cyber Heights, Vibhuti Khand, Gomti Nagar, Lucknow, UP 226010</span>
          </div>
          <div className="flex items-center gap-2 mb-3">
            <Image src={'/assets/footer/telephone.svg'} alt="phone" width={24} height={24} />
            <span>+91-9140024107</span>
          </div>
          <div className="flex items-center gap-2">
            <Image src={'/assets/footer/email.svg'} alt="email" width={24} height={24} />
            <span>amy.patent.drawings@gmail.com</span>
          </div>
        </div>

        {/* Legal Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Legal</h3>
          <ul className="space-y-3">
            <li><Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:underline">Terms & Conditions</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between">
        <span className="text-sm">© 2025 Agency. All Rights Reserved by <Link href="https://kashipatientdesign.com" target="_blank" className="underline">kashipatientdesign.com</Link></span>
        <div className="flex gap-4 mt-4 md:mt-0">
          <Link href="/privacy-policy" className="text-sm hover:underline">Privacy Policy</Link>
          <span className="h-5 w-0.5 bg-gray-700"></span>
          <Link href="/terms" className="text-sm hover:underline">Terms & Conditions</Link>
        </div>
      </div>
    </footer>
  );
}

export default footer;
