import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ChatBot from '../components/ChatBot';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto text-center px-4">
          <h1 className="text-5xl font-bold mb-6">Transform Your Business with Tech</h1>
          <p className="text-xl mb-8">Innovative IT solutions for the digital age</p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold hover:bg-opacity-90">
            Get Started
          </button>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {['Web Development', 'AI Solutions', 'Cloud Services'].map((service) => (
              <div key={service} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="w-12 h-12 bg-blue-600 rounded-full mb-4" />
                <h3 className="text-xl font-bold mb-2">{service}</h3>
                <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <ChatBot />
    </div>
  );
                                                                       }
