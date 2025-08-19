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
        <section className="mb-12">
          <Banner />
        </section>
  <TextCarousel id="about" />
        <section className="mb-12">
          <Companies />
        </section>
        {/* <section className="mb-12">
          <Buyers />
        </section> */}
        <section className="mb-12">
          <Provide />
        </section>
        <section className="mb-12">
          <Why />
        </section>
        <section className="mb-12">
          <Network />
        </section>
        <section className="mb-12">
          <Clientsay />
        </section>
        <section className="mb-12">
          <HowItWorksFAQ />
        </section>
        <section className="mb-12">
          <Newsletter />
        </section>
      </div>
    </main>
  )
}
