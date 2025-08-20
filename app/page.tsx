import Banner from './components/Banner/Banner';
import TextCarousel from './components/TextCarousel';
import Companies from './components/Companies/Companies';
import Buyers from './components/Buyers/index';
import Provide from './components/Provide/index';
import Why from './components/Why/index';
import Network from './components/Network/index';
import Clientsay from './components/Clientsay/index';
import Newsletter from './components/Newsletter/Newsletter';
import HowItWorksFAQ from './how-it-works-faq';


export default function Home() {
  return (
    <main className="bg-gradient-to-br from-blue-50 via-white to-purple-50 min-h-screen w-full">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <section id="home" className="mb-12 scroll-mt-32">
          <Banner />
        </section>
        <section id="project" className="mb-12 scroll-mt-32">
          <TextCarousel />
          <Companies />
        </section>
        {<section id="buyers" className="mb-12 scroll-mt-32">
          <Buyers />
        </section>}
        <section id="services" className="mb-12 scroll-mt-32">
          <Provide />
        </section>
        <section id="why" className="mb-12 scroll-mt-32">
          <Why />
        </section>
        <section id="network" className="mb-12 scroll-mt-32">
          <Network />
        </section>
        <section id="clientsay" className="mb-12 scroll-mt-32">
          <Clientsay />
        </section>
        <section id="faq" className="mb-12 scroll-mt-32">
          <HowItWorksFAQ />
        </section>
        <section className="mb-12">
          <Newsletter />
        </section>
      </div>
    </main>
  )
}
