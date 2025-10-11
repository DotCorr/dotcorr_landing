import type { Route } from "./+types/home";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Github, ExternalLink, Coffee, FileText } from "lucide-react";
import { Link } from "react-router";

export default function Home() {
  const [activeSection, setActiveSection] = useState<'opensource' | 'agency'>('opensource');

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-lg border-b border-gray-200/50 z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-8">
              <button 
                onClick={() => setActiveSection('opensource')}
                className="text-xl font-bold text-gray-900 tracking-tight hover:opacity-80 transition-opacity"
              >
                DCFlight
              </button>
              <div className="hidden md:flex items-center gap-6">
                <Link to="/docs" className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors">Docs</Link>
                <Link to="/roadmap" className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors">Roadmap</Link>
                <button
                  onClick={() => setActiveSection('agency')}
                  className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors"
                >
                  Agency
                </button>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <a 
                href="https://github.com/dotcorr/dcflight" 
                className="text-gray-600 hover:text-gray-900 transition-colors" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Github size={20} />
              </a>
              <Link 
                to="/docs" 
                className="hidden sm:inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <AnimatePresence mode="wait">
        {activeSection === 'opensource' ? (
          <OpenSourceSection key="opensource" setActiveSection={setActiveSection} />
        ) : (
          <AgencySection key="agency" setActiveSection={setActiveSection} />
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-12 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">DCFlight</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Open source framework for building native mobile applications with Dart. 
                True native UI rendering with React-like development experience.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wider">Resources</h4>
              <div className="space-y-3">
                <Link to="/docs" className="block text-gray-600 hover:text-gray-900 text-sm transition-colors">Documentation</Link>
                <Link to="/roadmap" className="block text-gray-600 hover:text-gray-900 text-sm transition-colors">Roadmap</Link>
                <a href="https://github.com/dotcorr/dcflight" target="_blank" rel="noopener noreferrer" className="block text-gray-600 hover:text-gray-900 text-sm transition-colors">GitHub</a>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wider">Connect</h4>
              <div className="space-y-3">
                <a href="mailto:squirelwares@gmail.com" className="block text-gray-600 hover:text-gray-900 text-sm transition-colors">Email</a>
                <a href="https://x.com/squirelBoy360" target="_blank" rel="noopener noreferrer" className="block text-gray-600 hover:text-gray-900 text-sm transition-colors">Twitter</a>
                <a href="https://coff.ee/squirelboy360" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 text-sm transition-colors">
                  <Coffee size={16} />
                  Buy me a coffee
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-8 text-center">
            <p className="text-gray-500 text-sm">© 2025 Dotcorr. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function OpenSourceSection({ setActiveSection }: { setActiveSection: (section: 'opensource' | 'agency') => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="pt-16"
    >
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 lg:px-8 relative overflow-hidden">
        {/* Background Device Frames - Blended */}
        <div className="absolute inset-0 pointer-events-none">
          {/* iOS Frame - Left */}
          <motion.div
            initial={{ opacity: 0, x: -100, rotate: -15 }}
            animate={{ opacity: 0.08, x: 0, rotate: -12 }}
            transition={{ duration: 1.5, delay: 0.3 }}
            className="absolute left-[-10%] top-[15%] w-[280px] h-[560px]"
          >
            <div className="relative w-full h-full bg-gray-900 rounded-[50px] shadow-2xl p-3">
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[25px] bg-gray-900 rounded-b-3xl z-10" />
              {/* Screen */}
              <div className="w-full h-full bg-white rounded-[40px] overflow-hidden">
                <div className="h-full bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center">
                  <div className="text-gray-400 font-mono text-xs">iOS</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Android Frame - Right */}
          <motion.div
            initial={{ opacity: 0, x: 100, rotate: 15 }}
            animate={{ opacity: 0.08, x: 0, rotate: 12 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="absolute right-[-10%] top-[20%] w-[280px] h-[560px]"
          >
            <div className="relative w-full h-full bg-gray-800 rounded-[40px] shadow-2xl p-2">
              {/* Screen */}
              <div className="w-full h-full bg-white rounded-[32px] overflow-hidden">
                <div className="h-full bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center">
                  <div className="text-gray-400 font-mono text-xs">Android</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Web Browser Frame - Bottom Center */}
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            animate={{ opacity: 0.06, y: 0, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.7 }}
            className="absolute left-1/2 -translate-x-1/2 bottom-[5%] w-[600px] h-[400px]"
          >
            <div className="relative w-full h-full bg-gray-900 rounded-2xl shadow-2xl overflow-hidden">
              {/* Browser Chrome */}
              <div className="h-10 bg-gray-800 flex items-center px-4 gap-2">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/50" />
                </div>
                <div className="flex-1 bg-gray-700/50 h-6 rounded mx-4" />
              </div>
              {/* Screen */}
              <div className="h-[calc(100%-40px)] bg-white">
                <div className="h-full bg-gradient-to-br from-purple-50 to-pink-50 flex items-center justify-center">
                  <div className="text-gray-400 font-mono text-xs">Web</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Gradient Overlay for extra blending */}
          <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold text-gray-900 mb-8 tracking-tight leading-none">
              Build native apps
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                with Dart
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
              DCFlight is a revolutionary framework that renders true native UI components. 
              No platform views. No abstractions. Just pure native performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/docs"
                className="inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all hover:scale-105"
              >
                Get Started
                <ExternalLink size={20} />
              </Link>
              <a
                href="https://github.com/dotcorr/dcflight"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border-2 border-gray-300 hover:border-gray-400 text-gray-700 px-8 py-4 rounded-full text-lg font-semibold transition-all hover:scale-105"
              >
                <Github size={20} />
                View on GitHub
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-24 px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Why DCFlight?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Built for developers who demand native performance without compromising on developer experience.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureHighlight
              icon="🚀"
              title="Native Performance"
              description="Renders actual native UI components. No bridge overhead, no compromise on performance."
            />
            <FeatureHighlight
              icon="⚛️"
              title="Best of Flutter DX and React"
              description="Familiar development experience with hooks, state management, and component lifecycle."
            />
            <FeatureHighlight
              icon="🎨"
              title="No Abstractions"
              description="Direct access to native views. No platform views or unnecessary abstractions."
            />
          </div>
        </div>
      </section>

      {/* Available Components Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Rich Component Library</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Build with a comprehensive set of native components, from basic UI to advanced interactions.
            </p>
          </div>

          {/* Featured Components - Just show the most important ones */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <ComponentCard
              name="DCFView"
              description="Container component"
              example="DCFView(children: [...])"
            />
            <ComponentCard
              name="DCFButton"
              description="Interactive buttons"
              example="DCFButton(buttonProps: DCFButtonProps(title: 'Click'))"
            />
            <ComponentCard
              name="DCFModal"
              description="Native modals"
              example="DCFModal(isVisible: true)"
            />
            <ComponentCard
              name="DCFAlert"
              description="Alert dialogs"
              example="DCFAlert(title: 'Alert', message: 'Content')"
            />
          </div>

          {/* Quick overview of categories */}
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-600 mb-2">8+</div>
              <div className="text-sm text-gray-600">Basic Components</div>
              <div className="text-xs text-gray-500 mt-1">View, Text, Button, Image...</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-2xl font-bold text-green-600 mb-2">4+</div>
              <div className="text-sm text-gray-600">Input Components</div>
              <div className="text-xs text-gray-500 mt-1">TextInput, Toggle, Checkbox...</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-2xl font-bold text-purple-600 mb-2">5+</div>
              <div className="text-sm text-gray-600">Advanced Components</div>
              <div className="text-xs text-gray-500 mt-1">Modal, Alert, Slider...</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-2xl font-bold text-orange-600 mb-2">4+</div>
              <div className="text-sm text-gray-600">Interaction & Animation</div>
              <div className="text-xs text-gray-500 mt-1">Gestures, Animations...</div>
            </div>
          </div>

          <div className="text-center">
            <Link
              to="/docs"
              className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              <span>View All 21+ Components</span>
              <ExternalLink size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Code Example */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Simple, Powerful API</h2>
            <p className="text-gray-600">Build complex UIs with intuitive Dart syntax</p>
          </div>

          <div className="bg-gray-900 rounded-lg p-3 sm:p-4 lg:p-6 overflow-hidden">
            <div className="flex items-center justify-between mb-3 sm:mb-4">
              <div className="flex space-x-1">
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-red-400 rounded-full"></div>
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-400 rounded-full"></div>
              </div>
              <span className="text-gray-400 text-xs font-mono">main.dart</span>
            </div>
            <div className="overflow-x-auto">
              <pre className="text-green-400 text-xs sm:text-sm leading-relaxed font-mono whitespace-pre" style={{ minWidth: 'max-content' }}>
                {`void main() {
  DCFlight.start(app: MyApp());
}

class MyApp extends DCFStatefulComponent {
  @override
  DCFComponentNode render() {
    final counter = useState(0);
    
    return DCFView(
      layout: DCFLayout(
        flex: 1,
        justifyContent: YogaJustifyContent.center,
        alignItems: YogaAlign.center,
      ),
      children: [
        DCFText(
          content: "Count: \${counter.state}",
          textProps: DCFTextProps(fontSize: 24),
        ),
        DCFButton(
          buttonProps: DCFButtonProps(title: "Increment"),
          onPress: (v) => counter.setState(counter.state + 1),
        ),
      ],
    );
  }
  
  @override
  List<Object?> get props => [];
}`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Scroll-Triggered Typewriter CTA */}
      <ScrollTypewriterCTA setActiveSection={setActiveSection} />

      {/* Under Development Notice */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-yellow-800 mb-4">🚧 Under Active Development</h3>
            <p className="text-yellow-700 mb-4">
              DCFlight is currently in rapid development. Expect bugs and breaking changes as we work towards stability.
            </p>
            <p className="text-yellow-600">
              Contributions are welcomed! Help us build the future of cross-platform development.
            </p>
          </div>
        </div>
      </section>
    </motion.div>
  );
}

function AgencySection({ setActiveSection }: { setActiveSection: (section: 'opensource' | 'agency') => void }) {
  const [showContact, setShowContact] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="py-20"
    >
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto px-6 text-center mb-20">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
        >
          Dotcorr Agency
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
        >
          We build beautiful apps and websites that deliver exceptional user experiences.
          From concept to launch, we bring your ideas to life.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSeknB0l7UPIJRBoIm5ab8w9BdoUz8gWoMfgyPzdftvioJV2iw/viewform?usp=dialog"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-xl font-medium transition-colors shadow-lg hover:shadow-xl inline-flex items-center justify-center gap-2"
          >
            <span>Join Waitlist</span>
            <ExternalLink size={18} />
          </a>
          <a
            href="mailto:squirelwares@gmail.com"
            className="bg-white hover:bg-gray-50 text-gray-900 px-8 py-4 rounded-xl font-medium border border-gray-300 hover:border-gray-400 transition-colors inline-flex items-center justify-center"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>

      {/* Services Grid */}
      <div className="max-w-6xl mx-auto px-6 mb-20">
        <div className="grid md:grid-cols-3 gap-8">
          <ServiceCard
            icon="📱"
            title="Mobile Apps"
            description="Native iOS and Android apps built with modern frameworks for exceptional performance and user experience."
          />
          <ServiceCard
            icon="🌐"
            title="Web Development"
            description="Fast, responsive websites and web applications that scale with your business needs."
          />
          <ServiceCard
            icon="🎨"
            title="UI/UX Design"
            description="Beautiful, intuitive designs that put users first and drive measurable business results."
          />
        </div>
      </div>

      {/* Contact Information Section */}
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-12 text-white shadow-2xl">
          <h3 className="text-3xl font-bold mb-4 text-center">
            Ready to Start Your Project?
          </h3>
          <p className="text-gray-300 mb-8 text-center max-w-2xl mx-auto">
            Join our waitlist and be the first to get access to exclusive project slots and early bird pricing.
          </p>
          <div className="flex flex-col gap-4 max-w-md mx-auto mb-8">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSeknB0l7UPIJRBoIm5ab8w9BdoUz8gWoMfgyPzdftvioJV2iw/viewform?usp=dialog"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-4 rounded-xl font-semibold transition-all transform hover:scale-105 shadow-lg text-center inline-flex items-center justify-center gap-2"
            >
              <span>🎯 Join the Waitlist</span>
              <ExternalLink size={18} />
            </a>
            <a
              href="mailto:squirelwares@gmail.com"
              className="bg-transparent hover:bg-white/10 text-white border-2 border-white/30 hover:border-white/50 px-8 py-4 rounded-xl font-medium transition-colors text-center"
            >
              📧 Email Us Directly
            </a>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-6 border-t border-white/20">
            <a
              href="mailto:squirelwares@gmail.com"
              className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors justify-center"
            >
              <span className="text-2xl">📧</span>
              <div className="text-left">
                <div className="text-sm text-gray-400">Email</div>
                <div className="font-medium">squirelwares@gmail.com</div>
              </div>
            </a>
            <a
              href="https://x.com/squirelBoy360"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors justify-center"
            >
              <span className="text-2xl">𝕏</span>
              <div className="text-left">
                <div className="text-sm text-gray-400">Twitter/X</div>
                <div className="font-medium">@squirelBoy360</div>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Contact Toast */}
      <AnimatePresence>
        {showContact && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed top-20 right-4 bg-white border border-gray-200 rounded-xl shadow-2xl p-6 z-50 max-w-sm"
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Contact Information</h3>
              <button
                onClick={() => setShowContact(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors text-xl leading-none"
              >
                ×
              </button>
            </div>
            <div className="space-y-4">
              <a
                href="mailto:squirelwares@gmail.com"
                className="flex items-center gap-3 text-gray-600 hover:text-gray-900 transition-colors p-2 rounded-lg hover:bg-gray-50"
              >
                <span className="text-xl">📧</span>
                <div>
                  <div className="text-xs text-gray-500">Email</div>
                  <div className="text-sm font-medium">squirelwares@gmail.com</div>
                </div>
              </a>
              <a
                href="https://x.com/squirelBoy360"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-600 hover:text-gray-900 transition-colors p-2 rounded-lg hover:bg-gray-50"
              >
                <span className="text-xl">𝕏</span>
                <div>
                  <div className="text-xs text-gray-500">Twitter/X</div>
                  <div className="text-sm font-medium">@squirelBoy360</div>
                </div>
              </a>
            </div>
            <p className="text-xs text-gray-500 mt-4 pt-4 border-t border-gray-100">
              We typically respond within 24 hours
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function ScrollTypewriterCTA({ setActiveSection }: { setActiveSection: (section: 'opensource' | 'agency') => void }) {
  const [isVisible, setIsVisible] = useState(false);
  const [text, setText] = useState("");
  const [showButton, setShowButton] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hasTriggered, setHasTriggered] = useState(false);
  const fullText = "Need a website or app built for you?";

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const isScrollingUp = currentScrollY < lastScrollY;
      
      // Trigger when user scrolls UP after being past 50% of the page
      if (isScrollingUp && currentScrollY > windowHeight * 0.5 && !hasTriggered) {
        setIsVisible(true);
        setHasTriggered(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, hasTriggered]);

  useEffect(() => {
    if (isVisible && text.length < fullText.length) {
      const timeout = setTimeout(() => {
        setText(fullText.slice(0, text.length + 1));
      }, 50); // Typewriter speed
      return () => clearTimeout(timeout);
    } else if (isVisible && text.length === fullText.length && !showButton) {
      const timeout = setTimeout(() => setShowButton(true), 300);
      return () => clearTimeout(timeout);
    }
  }, [isVisible, text, fullText, showButton]);

  if (!isVisible) return null;

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="py-20 px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Soft gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 via-blue-50/30 to-pink-50/50 backdrop-blur-3xl" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center">
          {/* Typewriter text */}
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-800 mb-8 min-h-[120px] flex items-center justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-serif italic">
              {text}
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="inline-block w-1 h-12 bg-gray-800 ml-1 align-middle"
              />
            </span>
          </motion.h2>

          {/* Subtitle fades in */}
          <AnimatePresence>
            {text.length === fullText.length && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto font-light"
              >
                From design to deployment, let our team bring your ideas to life.
              </motion.p>
            )}
          </AnimatePresence>

          {/* Button appears with soft bounce */}
          <AnimatePresence>
            {showButton && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ 
                  type: "spring",
                  stiffness: 200,
                  damping: 15,
                  duration: 0.6 
                }}
              >
                <button
                  onClick={() => {
                    setActiveSection('agency');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-gray-900 to-gray-800 hover:from-gray-800 hover:to-gray-700 text-white px-10 py-5 rounded-full text-lg font-medium transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
                >
                  <span className="relative z-10">Yes, let's talk</span>
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="relative z-10"
                  >
                    →
                  </motion.span>
                  
                  {/* Soft glow effect */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-xl group-hover:blur-2xl transition-all duration-300" />
                </button>

                {/* Optional: "No thanks" link */}
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  onClick={() => setIsVisible(false)}
                  className="block mt-6 text-sm text-gray-500 hover:text-gray-700 transition-colors mx-auto underline decoration-dotted"
                >
                  No thanks, I'll explore the framework
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-purple-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-blue-200/30 rounded-full blur-3xl" />
    </motion.section>
  );
}

function ServiceCard({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </motion.div>
  );
}

function FeatureHighlight({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </motion.div>
  );
}

function CrossPlatformIllustration() {
  return (
    <div className="py-16 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/20">
      <div className="max-w-7xl mx-auto px-4">

        {/* Code Editor at Top */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex justify-center mb-16"
        >
          <div className="bg-gray-900 rounded-xl p-6 shadow-lg border border-gray-700 w-full max-w-2xl">
            <div className="flex items-center justify-between mb-4">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              </div>
              <span className="text-gray-400 text-sm font-mono">main.dart</span>
            </div>
            <pre className="text-green-400 text-sm leading-relaxed font-mono">
              {`DCFView(
  children: [
    DCFText(
      content: "Hello DCFlight!",
      textProps: DCFTextProps(fontSize: 16),
    ),
    DCFButton(
      buttonProps: DCFButtonProps(title: "Click me"),
      onPress: (v) {
        // Native action
      }
    )
  ]
)`}
            </pre>
          </div>
        </motion.div>

        {/* Three Platforms Horizontally at Bottom */}
        <div className="flex flex-col lg:flex-row justify-center items-center lg:items-end space-y-8 lg:space-y-0 lg:space-x-16">

          {/* iOS */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <div className="w-48 h-80 bg-gray-900 rounded-[20px] p-2 shadow-lg">
              <div className="w-full h-full bg-white rounded-[18px] relative overflow-hidden">
                {/* Notch */}
                <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-12 h-1.5 bg-gray-800 rounded-full"></div>
                {/* Status Bar */}
                <div className="pt-6 px-3 flex justify-between text-xs text-gray-800">
                  <span>9:41</span>
                  <span>100%</span>
                </div>
                {/* Content */}
                <div className="px-3 py-6 flex flex-col items-center justify-center space-y-3 h-full">
                  <div className="text-center">
                    <div className="text-base font-medium text-gray-800 mb-3">Hello DCFlight!</div>
                    <div className="w-20 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                      <span className="text-white text-sm font-medium">Click me</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 flex items-center space-x-2">
              <div className="w-6 h-6 bg-gray-100 rounded-lg flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-gray-600">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
              </div>
              <span className="font-medium text-gray-700">iOS</span>
            </div>
          </motion.div>

          {/* Android */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <div className="w-48 h-80 bg-gray-900 rounded-[20px] p-2 shadow-lg">
              <div className="w-full h-full bg-white rounded-[18px] relative overflow-hidden">
                {/* Camera hole */}
                <div className="absolute top-2.5 left-1/2 transform -translate-x-1/2 w-2.5 h-2.5 bg-gray-800 rounded-full"></div>
                {/* Status Bar */}
                <div className="pt-6 px-3 flex justify-between text-xs text-gray-800">
                  <span>9:41</span>
                  <span>100%</span>
                </div>
                {/* Content */}
                <div className="px-3 py-6 flex flex-col items-center justify-center space-y-3 h-full">
                  <div className="text-center">
                    <div className="text-base font-medium text-gray-800 mb-3">Hello DCFlight!</div>
                    <div className="w-20 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                      <span className="text-white text-sm font-medium">Click me</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 flex items-center space-x-2">
              <div className="w-6 h-6 bg-green-100 rounded-lg flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-green-600">
                  <path d="M17.6 9.48l1.84-3.18c.16-.31.04-.69-.26-.85a.637.637 0 0 0-.83.22l-1.88 3.24a11.43 11.43 0 0 0-8.94 0L5.65 5.67a.637.637 0 0 0-.83-.22c-.3.16-.42.54-.26.85L6.4 9.48C3.3 11.25 1.28 14.44 1 18h22c-.28-3.56-2.3-6.75-5.4-8.52zM7 15.25a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0zm7.5 0a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0z" />
                </svg>
              </div>
              <span className="font-medium text-gray-700">Android</span>
            </div>
          </motion.div>

          {/* Web Browser */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <div className="w-64 h-80 bg-gray-200 rounded-t-xl shadow-lg overflow-hidden">
              {/* Browser Chrome */}
              <div className="h-10 bg-gray-300 flex items-center px-3">
                <div className="flex space-x-1">
                  <div className="w-2.5 h-2.5 bg-red-400 rounded-full"></div>
                  <div className="w-2.5 h-2.5 bg-yellow-400 rounded-full"></div>
                  <div className="w-2.5 h-2.5 bg-green-400 rounded-full"></div>
                </div>
                <div className="flex-1 mx-3 h-5 bg-white rounded-md flex items-center px-2">
                  <span className="text-xs text-gray-500">localhost:3000</span>
                </div>
              </div>
              {/* Content Area */}
              <div className="h-full bg-white p-6 flex flex-col items-center justify-center">
                <div className="text-center">
                  <div className="text-lg font-medium text-gray-800 mb-4">Hello DCFlight!</div>
                  <div className="w-24 h-10 bg-purple-500 rounded-lg flex items-center justify-center">
                    <span className="text-white text-sm font-medium">Click me</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 flex items-center space-x-2">
              <div className="flex space-x-1">
                <div className="w-5 h-5 bg-gradient-to-br from-red-400 via-yellow-400 to-green-400 rounded-full relative">
                  <div className="absolute inset-0.5 bg-blue-500 rounded-full"></div>
                  <div className="absolute inset-1 bg-white rounded-full"></div>
                </div>
                <div className="w-5 h-5 bg-gradient-to-br from-orange-400 to-red-500 rounded-full"></div>
                <div className="w-5 h-5 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full"></div>
              </div>
              <span className="font-medium text-gray-700">Web</span>
            </div>
          </motion.div>
        </div>

        {/* Connectivity indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center space-x-3 bg-white rounded-full px-6 py-3 shadow-lg border border-gray-200">
            <span className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse"></span>
            <span className="text-gray-700 font-medium">One codebase, all platforms</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function DeviceCard({ icon, label, color }: { icon: React.ReactNode; label: string; color: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className={`${color} p-6 rounded-2xl shadow-lg flex flex-col items-center space-y-3 min-w-[120px]`}
    >
      {icon}
      <span className="font-medium text-gray-700">{label}</span>
    </motion.div>
  );
}

function ComponentCard({ 
  name, 
  description, 
  example 
}: { 
  name: string; 
  description: string; 
  example: string; 
}) {
  return (
    <motion.div
      whileHover={{ y: -2, scale: 1.02 }}
      className="bg-white p-4 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-all duration-200"
    >
      <div className="mb-3">
        <h3 className="text-lg font-semibold text-gray-900 mb-1">{name}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
      <div className="bg-gray-50 rounded p-2">
        <code className="text-xs text-gray-700 font-mono break-all">{example}</code>
      </div>
    </motion.div>
  );
}
