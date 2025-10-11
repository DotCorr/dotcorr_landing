import type { Route } from "./+types/docs";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router";
import { ArrowLeft, Book, Code, Box, Wrench, FileCode, Menu, X } from "lucide-react";

type DocSection = 'getting-started' | 'architecture' | 'components' | 'development' | 'examples';

export default function Docs() {
  const [activeSection, setActiveSection] = useState<DocSection>('getting-started');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleSectionChange = (section: DocSection) => {
    setActiveSection(section);
    setIsMobileMenuOpen(false); // Close mobile menu when section changes
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-lg border-b border-gray-200/50 z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">
              <ArrowLeft size={20} />
              <span className="text-sm font-medium">Back</span>
            </Link>
            <h1 className="text-xl font-bold text-gray-900">Documentation</h1>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-gray-600 hover:text-gray-900 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <div className="hidden lg:block w-20"></div>
          </div>
        </div>
      </nav>

      <div className="flex pt-16">
        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
          )}
        </AnimatePresence>

        {/* Sidebar - Mobile & Desktop */}
        <motion.aside
          initial={false}
          animate={{
            x: isMobileMenuOpen ? 0 : '-100%'
          }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="fixed lg:sticky top-16 left-0 w-64 border-r border-gray-200 h-[calc(100vh-4rem)] bg-white z-50 lg:translate-x-0 overflow-y-auto"
        >
          <nav className="p-6 space-y-1">
            <SidebarItem
              icon={<Book size={18} />}
              title="Getting Started"
              isActive={activeSection === 'getting-started'}
              onClick={() => handleSectionChange('getting-started')}
            />
            <SidebarItem
              icon={<Box size={18} />}
              title="Architecture"
              isActive={activeSection === 'architecture'}
              onClick={() => handleSectionChange('architecture')}
            />
            <SidebarItem
              icon={<Code size={18} />}
              title="Components"
              isActive={activeSection === 'components'}
              onClick={() => handleSectionChange('components')}
            />
            <SidebarItem
              icon={<Wrench size={18} />}
              title="Development"
              isActive={activeSection === 'development'}
              onClick={() => handleSectionChange('development')}
            />
            <SidebarItem
              icon={<FileCode size={18} />}
              title="Examples"
              isActive={activeSection === 'examples'}
              onClick={() => handleSectionChange('examples')}
            />
          </nav>
        </motion.aside>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto">
          <div className="max-w-4xl mx-auto px-6 lg:px-12 py-12">
            {activeSection === 'getting-started' && <GettingStarted />}
            {activeSection === 'architecture' && <Architecture />}
            {activeSection === 'components' && <Components />}
            {activeSection === 'development' && <Development />}
            {activeSection === 'examples' && <Examples />}
          </div>
        </main>
      </div>
    </div>
  );
}

function SidebarItem({ icon, title, isActive, onClick }: { 
  icon: React.ReactNode; 
  title: string; 
  isActive: boolean; 
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
        isActive 
          ? 'bg-gray-900 text-white' 
          : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
      }`}
    >
      {icon}
      <span>{title}</span>
    </button>
  );
}

function GettingStarted() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-4xl font-bold text-gray-900 mb-6">Getting Started</h2>
      <p className="text-lg text-gray-600 mb-12">
        Get up and running with DCFlight in minutes. Follow these steps to create your first cross-platform app.
      </p>

      <div className="space-y-12">
        <Section title="Installation">
          <p className="text-gray-600 mb-4">
            Install the DCFlight CLI globally using pub:
          </p>
          <CodeBlock code="dart pub global activate dcflight_cli" />
        </Section>

        <Section title="Create Your First App">
          <p className="text-gray-600 mb-4">
            Create a new DCFlight project:
          </p>
          <CodeBlock code="dcflight create my_app\ncd my_app" />
        </Section>

        <Section title="Run on iOS">
          <p className="text-gray-600 mb-4">
            Start the development server and run on iOS:
          </p>
          <CodeBlock code="dcflight run ios" />
        </Section>
      </div>
    </motion.div>
  );
}

function Architecture() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-4xl font-bold text-gray-900 mb-6">Architecture</h2>
      <p className="text-lg text-gray-600 mb-12">
        Understanding DCFlight's core architecture and design principles.
      </p>

      <div className="space-y-12">
        <Section title="Virtual DOM">
          <p className="text-gray-600 mb-4">
            DCFlight uses a virtual DOM system similar to React, enabling efficient UI updates and a declarative programming model.
          </p>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-start gap-2">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-400 flex-shrink-0"></span>
              <span>Efficient diffing algorithm for minimal native updates</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-400 flex-shrink-0"></span>
              <span>React-like reconciliation process</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-400 flex-shrink-0"></span>
              <span>Automatic batching of updates for performance</span>
            </li>
          </ul>
        </Section>

        <Section title="Component System">
          <p className="text-gray-600 mb-4">
            Components are the building blocks of DCFlight apps. Each component manages its own state and renders to native views.
          </p>
          <CodeBlock code={`class MyComponent extends DCFStatefulComponent {
  @override
  DCFComponentNode render() {
    return DCFView(
      children: [
        DCFText(
          content: 'Hello, DCFlight!',
          textProps: DCFTextProps(
            fontSize: 16,
          ),
        ),
      ],
    );
  }
  
  @override
  List<Object?> get props => [];
}`} />
        </Section>

        <Section title="Hot Restart">
          <p className="text-gray-600">
            DCFlight supports hot restart for rapid development. Changes to your code are reflected instantly without losing app state.
          </p>
        </Section>
      </div>
    </motion.div>
  );
}

function Components() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-4xl font-bold text-gray-900 mb-6">Components</h2>
      <p className="text-lg text-gray-600 mb-12">
        Explore DCFlight's built-in components and learn how to create your own.
      </p>

      <div className="space-y-12">
        <Section title="Core Components">
          <div className="grid md:grid-cols-2 gap-4">
            <ComponentCard name="DCFView" description="Container component for layout" />
            <ComponentCard name="DCFText" description="Display text with styling" />
            <ComponentCard name="DCFButton" description="Interactive button element" />
            <ComponentCard name="DCFImage" description="Display images with caching" />
            <ComponentCard name="DCFScrollView" description="Scrollable container" />
            <ComponentCard name="DCFTextInput" description="Text input field" />
          </div>
        </Section>

        <Section title="Layout System">
          <p className="text-gray-600 mb-4">
            DCFlight uses the Yoga layout engine, providing flexbox-like layout capabilities:
          </p>
          <CodeBlock code={`DCFView(
  layout: DCFLayout(
    flexDirection: YogaFlexDirection.row,
    justifyContent: YogaJustifyContent.spaceBetween,
    padding: 16,
  ),
  children: [
    DCFText(
      content: 'Left',
      textProps: DCFTextProps(fontSize: 16),
    ),
    DCFText(
      content: 'Right',
      textProps: DCFTextProps(fontSize: 16),
    ),
  ],
)`} />
        </Section>
      </div>
    </motion.div>
  );
}

function Development() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-4xl font-bold text-gray-900 mb-6">Development</h2>
      <p className="text-lg text-gray-600 mb-12">
        Best practices and guidelines for developing with DCFlight.
      </p>

      <div className="space-y-12">
        <Section title="Project Structure">
          <p className="text-gray-600 mb-4">
            A typical DCFlight project structure:
          </p>
          <CodeBlock code={`my_app/
  lib/
    main.dart
    components/
    screens/
  ios/
  android/
  pubspec.yaml`} />
        </Section>

        <Section title="State Management">
          <p className="text-gray-600 mb-4">
            Use hooks for local state management:
          </p>
          <CodeBlock code={`final count = useState(0);

DCFButton(
  buttonProps: DCFButtonProps(title: 'Increment'),
  onPress: (v) {
    count.setState(count.state + 1);
  },
)`} />
        </Section>
      </div>
    </motion.div>
  );
}

function Examples() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-4xl font-bold text-gray-900 mb-6">Examples</h2>
      <p className="text-lg text-gray-600 mb-12">
        Real-world examples to help you get started with DCFlight.
      </p>

      <div className="space-y-12">
        <Section title="Counter App">
          <p className="text-gray-600 mb-4">
            A simple counter app demonstrating state management:
          </p>
          <CodeBlock code={`class CounterApp extends DCFStatefulComponent {
  @override
  DCFComponentNode render() {
    final count = useState(0);
    
    return DCFView(
      layout: DCFLayout(
        flex: 1,
        padding: 20,
        justifyContent: YogaJustifyContent.center,
        alignItems: YogaAlign.center,
      ),
      children: [
        DCFText(
          content: 'Count: \${count.state}',
          textProps: DCFTextProps(
            fontSize: 24,
            fontWeight: DCFFontWeight.bold,
          ),
        ),
        DCFButton(
          buttonProps: DCFButtonProps(title: 'Increment'),
          onPress: (v) {
            count.setState(count.state + 1);
          },
        ),
      ],
    );
  }
  
  @override
  List<Object?> get props => [];
}`} />
        </Section>

        <Section title="Todo List">
          <p className="text-gray-600 mb-4">
            A todo list app with dynamic list rendering:
          </p>
          <CodeBlock code={`class TodoApp extends DCFStatefulComponent {
  @override
  DCFComponentNode render() {
    final todos = useState<List<String>>([]);
    final input = useState('');
    
    return DCFView(
      layout: DCFLayout(
        flex: 1,
        padding: 20,
        gap: 10,
      ),
      children: [
        DCFTextInput(
          value: input.state,
          onChange: (text) {
            input.setState(text);
          },
        ),
        DCFButton(
          buttonProps: DCFButtonProps(title: 'Add Todo'),
          onPress: (v) {
            if (input.state.isNotEmpty) {
              todos.setState([...todos.state, input.state]);
              input.setState('');
            }
          },
        ),
        ...todos.state.map((todo) => 
          DCFText(
            content: todo,
            textProps: DCFTextProps(fontSize: 16),
          )
        ),
      ],
    );
  }
  
  @override
  List<Object?> get props => [];
}`} />
        </Section>
      </div>
    </motion.div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
      {children}
    </section>
  );
}

function CodeBlock({ code }: { code: string }) {
  return (
    <div className="bg-gray-900 rounded-xl p-6 overflow-x-auto">
      <pre className="text-sm text-gray-100 font-mono">
        <code>{code}</code>
      </pre>
    </div>
  );
}

function ComponentCard({ name, description }: { name: string; description: string }) {
  return (
    <div className="border border-gray-200 rounded-xl p-4 hover:border-gray-300 transition-colors">
      <h4 className="font-semibold text-gray-900 mb-1">{name}</h4>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
}
