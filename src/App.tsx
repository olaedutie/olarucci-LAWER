/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform } from "motion/react";
import { 
  Building2, 
  Scale, 
  Briefcase, 
  MapPin, 
  Phone, 
  Mail, 
  ChevronRight, 
  Gavel, 
  Library,
  ArrowRight,
  Menu,
  X
} from "lucide-react";
import { useState, useEffect } from "react";

const PRACTICE_AREAS = [
  {
    title: "Corporate Consultation",
    description: "Expert advice on company formation, governance, mergers, and commercial transactions.",
    icon: Briefcase,
  },
  {
    title: "Property & Real Estate",
    description: "Comprehensive property consultancy, including acquisition, title verification, and management.",
    icon: Building2,
  },
  {
    title: "Dispute Resolution",
    description: "Strategic litigation and alternative dispute resolution for complex civil and commercial matters.",
    icon: Gavel,
  },
  {
    title: "General Legal Practice",
    description: "Full-service legal representation across administrative, criminal, and personal law.",
    icon: Scale,
  },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Our Expertise", href: "#practice" },
    { name: "The Firm", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
        isScrolled ? "bg-primary/95 backdrop-blur-md border-border-subtle py-4" : "bg-transparent border-transparent py-10"
      }`}
    >
      <div className="max-w-7xl mx-auto px-12 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 border-2 border-accent flex items-center justify-center font-serif font-bold text-accent">
            KF
          </div>
          <div className="flex flex-col">
            <span className="tracking-[0.2em] font-light text-sm uppercase text-white">KOLA FALADE & CO.</span>
            <span className="text-[9px] uppercase tracking-[0.3em] text-accent font-mono opacity-80">Legal Practitioners</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-[11px] uppercase tracking-[0.2em] text-text-muted hover:text-accent transition-colors duration-300 font-medium"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="px-8 py-3 bg-accent text-black font-semibold text-xs uppercase tracking-widest hover:bg-white transition-all duration-500"
          >
            Consult Us
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-accent"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 bg-secondary border-t border-border-subtle p-8 flex flex-col gap-6 shadow-2xl md:hidden"
        >
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-serif italic text-white border-b border-border-subtle pb-4"
            >
              {link.name}
            </a>
          ))}
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 border-b border-border-subtle overflow-hidden">
      {/* Decorative Background Element */}
      <div className="absolute top-[-10%] right-[-5%] text-[600px] font-serif font-bold text-white/[0.03] select-none pointer-events-none -z-10 leading-none">
        K
      </div>
      
      <div className="max-w-7xl mx-auto px-0 w-full grid md:grid-cols-12 min-h-[600px]">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="md:col-span-12 lg:col-span-7 p-12 flex flex-col justify-center lg:border-r border-border-subtle"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-accent uppercase tracking-[0.3em] text-xs font-semibold mb-8 italic"
          >
            Established Excellence
          </motion.h2>
          <h1 className="text-5xl md:text-7xl font-serif leading-[1.1] mb-10 text-white max-w-2xl">
            Legal Practitioners, <br/>
            Corporate & Property <br/>
            <span className="text-accent italic">Consultants.</span>
          </h1>
          <p className="text-text-muted max-w-md text-base leading-relaxed mb-12 font-light">
            Providing sophisticated legal solutions with a commitment to integrity and precision. 
            Navigating the complex landscapes of Nigerian law for a discerning clientele.
          </p>
          <div className="flex flex-wrap gap-8">
            <button className="px-10 py-4 bg-accent text-black font-bold text-xs uppercase tracking-[0.2em] hover:bg-white transition-all duration-500">
              Consult Us
            </button>
            <button className="px-10 py-4 border border-white/20 text-white font-bold text-xs uppercase tracking-[0.2em] hover:bg-white/5 transition-all duration-500">
              Our People
            </button>
          </div>
        </motion.div>

        <div className="hidden lg:flex lg:col-span-5 flex-col bg-white/[0.02]">
           <div className="flex-1 p-16 flex flex-col justify-center border-b border-border-subtle hover:bg-white/[0.04] transition-colors duration-500">
             <h3 className="text-xs uppercase tracking-[0.3em] text-text-muted mb-10 font-mono">Principal Practices</h3>
             <ul className="space-y-8">
               {[
                 { id: "01", name: "Corporate Advisory" },
                 { id: "02", name: "Property Development" },
                 { id: "03", name: "Commercial Litigation" }
               ].map((item) => (
                 <li key={item.id} className="flex items-center gap-6 group cursor-pointer">
                    <span className="text-[11px] text-accent font-mono">{item.id}</span>
                    <span className="text-2xl font-serif text-white/80 group-hover:text-accent group-hover:translate-x-2 transition-all duration-500 border-b border-transparent group-hover:border-accent pb-1">
                      {item.name}
                    </span>
                 </li>
               ))}
             </ul>
           </div>
           
           <div className="p-16 bg-secondary/30 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Gavel size={120} />
              </div>
              <p className="text-sm font-serif italic text-accent mb-4 relative z-10">
                "Justice is the constant and perpetual will to allot to every man his due."
              </p>
              <div className="text-[10px] uppercase tracking-widest text-text-muted relative z-10">- Domitius Ulpianus</div>
           </div>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-32 bg-secondary/50 border-b border-border-subtle">
      <div className="max-w-7xl mx-auto px-12">
        <div className="grid lg:grid-cols-12 gap-20">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-[1px] bg-accent" />
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-accent font-mono">The Firm</span>
            </div>
            <h2 className="text-4xl md:text-6xl text-white font-serif leading-tight mb-12">
              A history of <span className="italic text-accent">meticulous</span> advocacy and strategic legal counsel.
            </h2>
            <div className="grid md:grid-cols-2 gap-12 text-text-muted text-lg font-light leading-relaxed">
              <p>
                Founded on the pillars of absolute integrity, Kola Falade & Co has become synonymous with professional precision in Nigeria's legal landscape. We serve a diverse portfolio of corporate entities and private individuals.
              </p>
              <p>
                Our expertise bridges the gap between conventional legal practice and modern corporate requirements, specializing in property management, title verification, and complex commercial consultation.
              </p>
            </div>
          </div>
          
          <div className="lg:col-span-4 flex flex-col justify-end">
            <div className="border border-border-subtle p-12 bg-primary/40 relative group">
              <div className="absolute -top-6 -right-6 w-12 h-12 border-t border-r border-accent group-hover:scale-110 transition-transform" />
              <div className="space-y-10">
                <div>
                  <div className="text-5xl font-serif text-white mb-2 italic">12+</div>
                  <div className="text-[10px] uppercase font-bold tracking-[0.2em] text-accent font-mono">Years Experience</div>
                </div>
                <div>
                  <div className="text-5xl font-serif text-white mb-2 italic">1k+</div>
                  <div className="text-[10px] uppercase font-bold tracking-[0.2em] text-accent font-mono">Case Successes</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const PracticeAreas = () => {
  return (
    <section id="practice" className="py-32 bg-primary">
      <div className="max-w-7xl mx-auto px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-5xl text-white font-serif mb-8 italic">Areas of Expertise</h2>
            <p className="text-text-muted font-light text-lg">
              Sophisticated legal architecture for corporate interests and high-value property portfolios.
            </p>
          </div>
          <div className="text-accent font-mono text-[11px] uppercase tracking-[0.4em] mb-4">
            Specialized Services
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-px bg-border-subtle border border-border-subtle">
          {PRACTICE_AREAS.map((area) => (
            <div
              key={area.title}
              className="bg-primary p-16 group hover:bg-secondary transition-all duration-700"
            >
              <div className="flex justify-between items-start mb-12">
                <div className="text-accent group-hover:scale-110 transition-transform duration-500">
                  <area.icon size={40} strokeWidth={1} />
                </div>
                <span className="text-[10px] font-mono text-white/20 group-hover:text-accent transition-colors">
                  CORE PRACTICE
                </span>
              </div>
              <h3 className="text-2xl text-white font-serif mb-6 group-hover:text-accent transition-colors italic">{area.title}</h3>
              <p className="text-text-muted text-base font-light leading-relaxed mb-10 max-w-sm">
                {area.description}
              </p>
              <a href="#contact" className="inline-flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.3em] text-accent border-b border-transparent hover:border-accent pb-2 transition-all">
                Learn Strategy <ChevronRight size={14} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-primary border-t border-border-subtle">
      <div className="max-w-7xl mx-auto px-12">
        <div className="grid lg:grid-cols-2 gap-32">
          <div className="flex flex-col justify-center">
            <div className="mb-16">
              <h2 className="text-5xl text-white font-serif mb-10 italic leading-tight">Connect with the <br/> Partners.</h2>
              <p className="text-text-muted font-light text-lg leading-relaxed max-w-md">
                Formal inquiries regarding corporate consultation, litigation, or property verification should be directed to our Ikeja headquarters.
              </p>
            </div>
            
            <div className="grid gap-12">
              {[
                { icon: MapPin, label: "The Chambers", value: "12, Adegbola Street (2nd Floor), Anifowoshe, Ikeja, Lagos" },
                { icon: Phone, label: "Switchboard", value: "0802 351 3201 | 0803 436 6262" },
                { icon: Mail, label: "Digital Registry", value: "mkjfaladeesq@gmail.com" }
              ].map((info) => (
                <div key={info.label} className="flex gap-8 group">
                  <div className="w-14 h-14 bg-secondary flex items-center justify-center border-subtle text-accent group-hover:bg-accent group-hover:text-black transition-all">
                    <info.icon size={24} strokeWidth={1.5} />
                  </div>
                  <div className="flex flex-col justify-center">
                    <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-accent mb-1 font-mono">{info.label}</span>
                    <span className="text-white/80 font-serif text-lg">{info.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-secondary p-16 border-subtle relative">
             <div className="absolute top-0 right-0 w-24 h-24 border-t border-r border-accent opacity-20" />
             <h3 className="text-2xl text-white font-serif mb-12 italic">Professional Referral</h3>
             <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-10">
                  <div className="group space-y-3">
                    <label className="text-[10px] uppercase font-bold tracking-[0.2em] text-accent/60 font-mono">Initiator Name</label>
                    <input type="text" className="w-full bg-transparent border-b border-border-subtle py-2 text-white focus:outline-none focus:border-accent transition-colors" />
                  </div>
                  <div className="group space-y-3">
                    <label className="text-[10px] uppercase font-bold tracking-[0.2em] text-accent/60 font-mono">Email Protocol</label>
                    <input type="email" className="w-full bg-transparent border-b border-border-subtle py-2 text-white focus:outline-none focus:border-accent transition-colors" />
                  </div>
                </div>
                <div className="group space-y-3">
                  <label className="text-[10px] uppercase font-bold tracking-[0.2em] text-accent/60 font-mono">Subject Classification</label>
                  <select className="w-full bg-transparent border-b border-border-subtle py-2 text-white/50 focus:outline-none focus:border-accent transition-colors appearance-none">
                    <option className="bg-primary text-white">Full Consultation</option>
                    <option className="bg-primary text-white">Property Verification</option>
                    <option className="bg-primary text-white">Corporate Retainer</option>
                  </select>
                </div>
                <div className="group space-y-3">
                  <label className="text-[10px] uppercase font-bold tracking-[0.2em] text-accent/60 font-mono">Matter Description</label>
                  <textarea rows={3} className="w-full bg-transparent border-b border-border-subtle py-2 text-white focus:outline-none focus:border-accent transition-colors resize-none" />
                </div>
                <button className="w-full bg-accent text-black font-bold uppercase tracking-[0.4em] py-5 hover:bg-white transition-all duration-500 shadow-2xl shadow-accent/10">
                  Execute Inquiry
                </button>
             </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12 border-t border-border-subtle">
      <div className="max-w-7xl mx-auto px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 border border-accent flex items-center justify-center font-serif text-accent text-xs">KF</div>
            <span className="text-[10px] uppercase tracking-[0.3em] font-medium text-text-muted">© {new Date().getFullYear()} Kola Falade & Co.</span>
          </div>
          
          <div className="flex gap-12 items-center">
            <a href="#" className="text-[10px] uppercase tracking-widest text-accent hover:text-white transition-colors font-mono">LinkedIn</a>
            <a href="#" className="text-[10px] uppercase tracking-widest text-accent hover:text-white transition-colors font-mono">Terms Registry</a>
            <a href="#" className="text-[10px] uppercase tracking-widest text-accent hover:text-white transition-colors font-mono">Privacy Protocol</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-grow">
        <Hero />
        <About />
        <PracticeAreas />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
