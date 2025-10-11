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
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-lg border-b border-gray-200/50 z-50">
        <div className="max-w-7xl mx-auto">
          <div className="relative flex items-center justify-center h-16">
            <Link to="/" className="absolute left-4 flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">
              <ArrowLeft size={20} />
              <span className="text-sm font-medium">Back</span>
            </Link>
            <h1 className="text-xl font-bold text-gray-900">Documentation</h1>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden absolute right-4 p-2 text-gray-600 hover:text-gray-900 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      <div className="flex pt-16">
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

        {/* Desktop Sidebar - Always visible on large screens */}
        <aside className="hidden lg:block sticky top-16 left-0 w-64 border-r border-gray-200 h-[calc(100vh-4rem)] bg-white overflow-y-auto">
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
        </aside>

        {/* Mobile Sidebar - Slides in from left */}
        <motion.aside
          initial={false}
          animate={{
            x: isMobileMenuOpen ? 0 : '-100%'
          }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="lg:hidden fixed top-16 left-0 w-64 border-r border-gray-200 h-[calc(100vh-4rem)] bg-white z-50 overflow-y-auto"
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
        The DCFlight CLI is your primary tool for creating, running, and managing DCFlight projects. Here's how to get started:
      </p>

      <div className="space-y-12">
        <Section title="Install the DCFlight CLI">
          <p className="text-gray-600 mb-4">Install globally using Dart:</p>
          <CodeBlock code="dart pub global activate dcflight_cli"/>
          <p className="text-gray-600 mt-4">Verify installation:</p>
          <CodeBlock code="dcf --help"/>
        </Section>

        <Section title="Create a New Project">
          <p className="text-gray-600 mb-4">Create a new DCFlight app:</p>
          <CodeBlock code={"dcf create app my_app\ncd my_app"}/>
        </Section>

        <Section title="Run Your App">
          <p className="text-gray-600 mb-4">Start the development server with hot reload:</p>
          <CodeBlock code="dcf go"/>
          <p className="text-gray-600 mt-4">Other useful options:</p>
          <CodeBlock code={"dcf go --verbose      # Verbose output\ndcf go --no-hot-reload # Disable hot reload\ndcf go --dcf-args=\"--debug\" # Pass Flutter args"}/>
        </Section>

        <Section title="Add & Remove Packages">
          <p className="text-gray-600 mb-4">Add dependencies to your project:</p>
          <CodeBlock code={"dcf inject dio\n# Add as dev dependency\ndcf inject lints --dev"}/>
          <p className="text-gray-600 mt-4">Remove unused packages:</p>
          <CodeBlock code={"dcf eject dio\ndcf eject lints --dev"}/>
        </Section>

        <Section title="Help & Troubleshooting">
          <p className="text-gray-600 mb-4">Show all CLI commands and options:</p>
          <CodeBlock code={"dcf --help\ndcf go --help\ndcf inject --help\ndcf eject --help\ndcf create --help"}/>
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
          <CodeBlock code={"class MyComponent extends DCFStatefulComponent {\n  @override\n  DCFComponentNode render() {\n    return DCFView(\n      children: [\n        DCFText(\n          content: 'Hello, DCFlight!',\n          textProps: DCFTextProps(\n            fontSize: 16,\n          ),\n        ),\n      ],\n    );\n  }\n  \n  @override\n  List<Object?> get props => [];\n}"} />
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
          <CodeBlock code={"DCFView(\n  layout: DCFLayout(\n    flexDirection: YogaFlexDirection.row,\n    justifyContent: YogaJustifyContent.spaceBetween,\n    padding: 16,\n  ),\n  children: [\n    DCFText(\n      content: 'Left',\n      textProps: DCFTextProps(fontSize: 16),\n    ),\n    DCFText(\n      content: 'Right',\n      textProps: DCFTextProps(fontSize: 16),\n    ),\n  ],\n)"} />
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
          <CodeBlock code={"my_app/\n  lib/\n    main.dart\n    components/\n    screens/\n  ios/\n  android/\n  pubspec.yaml"} />
        </Section>

        <Section title="State Management">
          <p className="text-gray-600 mb-4">
            Use hooks for local state management:
          </p>
          <CodeBlock code={"final count = useState(0);\n\nDCFButton(\n  buttonProps: DCFButtonProps(title: 'Increment'),\n  onPress: (v) {\n    count.setState(count.state + 1);\n  },\n)"} />
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
          <CodeBlock code={"class CounterApp extends DCFStatefulComponent {\n  @override\n  DCFComponentNode render() {\n    final count = useState(0);\n    \n    return DCFView(\n      layout: DCFLayout(\n        flex: 1,\n        padding: 20,\n        justifyContent: YogaJustifyContent.center,\n        alignItems: YogaAlign.center,\n      ),\n      children: [\n        DCFText(\n          content: 'Count: \\${count.state}',\n          textProps: DCFTextProps(\n            fontSize: 24,\n            fontWeight: DCFFontWeight.bold,\n          ),\n        ),\n        DCFButton(\n          buttonProps: DCFButtonProps(title: 'Increment'),\n          onPress: (v) {\n            count.setState(count.state + 1);\n          },\n        ),\n      ],\n    );\n  }\n  \n  @override\n  List<Object?> get props => [];\n}"} />
        </Section>

        <Section title="Todo List">
          <p className="text-gray-600 mb-4">
            A todo list app with dynamic list rendering:
          </p>
          <CodeBlock code={"class TodoApp extends DCFStatefulComponent {\n  @override\n  DCFComponentNode render() {\n    final todos = useState<List<String>>([]);\n    final input = useState('');\n    \n    return DCFView(\n      layout: DCFLayout(\n        flex: 1,\n        padding: 20,\n        gap: 10,\n      ),\n      children: [\n        DCFTextInput(\n          value: input.state,\n          onChange: (text) {\n            input.setState(text);\n          },\n        ),\n        DCFButton(\n          buttonProps: DCFButtonProps(title: 'Add Todo'),\n          onPress: (v) {\n            if (input.state.isNotEmpty) {\n              todos.setState([...todos.state, input.state]);\n              input.setState('');\n            }\n          },\n        ),\n        ...todos.state.map((todo) => \n          DCFText(\n            content: todo,\n            textProps: DCFTextProps(fontSize: 16),\n          )\n        ),\n      ],\n    );\n  }\n  \n  @override\n  List<Object?> get props => [];\n}"} />
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
