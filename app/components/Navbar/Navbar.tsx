import { Disclosure } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import Drawer from "./Drawer";
import Drawerdata from "./Drawerdata";
import ContactForm from "../Contact/ContactForm";
import Offer from "../Offer/Offer";

interface NavigationItem {
  name: string;
  href: string;
  current: boolean;
}

const navigation: NavigationItem[] = [
  { name: "Home", href: "/#home", current: true },
  { name: "Project", href: "/#project", current: false },
  { name: "Services", href: "#services", current: false },
  { name: "About", href: "/#why", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Drawer state
  const [isContactOpen, setIsContactOpen] = useState(false); // Contact form state
  const [activeNav, setActiveNav] = useState("Home");

  const handleNavClick = (name: string) => {
    setActiveNav(name);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-lg w-full">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/#home" className="flex items-center gap-2" onClick={() => handleNavClick("Home") }>
          <Image src="/assets/logo/logo.png" alt="Company Logo" width={196} height={56} className="h-14 mb-4" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-4">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => handleNavClick(item.name)}
              className={
                `text-lg font-small transition-colors px-2 py-1 relative ` +
                (activeNav === item.name
                  ? "text-blue after:absolute after:left-0 after:bottom-0 after:w-[60%] after:h-[2px] after:bg-blue after:content-['']"
                  : "text-black hover:text-blue")
              }
            >
              {item.name}
            </Link>
          ))}
          <button
            type="button"
            className="ml-6 px-5 py-2 bg-black text-white rounded-full font-semibold shadow hover:bg-blue hover:text-white transition-colors"
            onClick={() => setIsContactOpen(true)}
          >
            Get in Touch
          </button>
          <button
            type="button"
            className="ml-6 px-5 py-2 bg-black text-white rounded-full font-semibold shadow hover:bg-blue hover:text-white transition-colors"
            onClick={() => window.location.href = '#quote'}
          >
            Request a Quote
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
        <Drawerdata />
      </Drawer>

      {/* Contact Modal */}
      {isContactOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative">
            <ContactForm onClose={() => setIsContactOpen(false)} />
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

