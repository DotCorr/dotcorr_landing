import type { Route } from "./+types/docs";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router";
import { 
  ArrowLeft, 
  Copy, 
  ExternalLink, 
  Terminal, 
  Package, 
  FileText,
  BookOpen,
  Layers,
  Cog,
  Code2,
  Zap,
  ChevronRight,
  Download,
  Play,
  Box,
  Settings,
  Smartphone,
  Monitor,
  Globe,
  Menu,
  X
} from "lucide-react";

type DocSection = 'getting-started' | 'architecture' | 'components' | 'development' | 'examples';

export default function Docs() {
  const [activeSection, setActiveSection] = useState<DocSection>('getting-started');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-border sticky top-0 z-50 shadow-sm">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center gap-3 text-gray-600 hover:text-blue-600 transition-colors"><ArrowLeft size={22} /><span className="hidden sm:inline">Back to Home</span></Link>
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent tracking-tight">DCFlight Docs</div>
            <button onClick={toggleMobileMenu} className="lg:hidden p-2 text-gray-600 hover:text-blue-600 transition-colors">{isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}</button>
            <div className="hidden lg:block w-20"></div>
          </div>
        </div>
      </nav>

      <div className="flex relative">
        {/* Mobile Sidebar Overlay */}
        {isMobileMenuOpen && (<div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden" onClick={closeMobileMenu} />)}
        {/* Sidebar */}
        <aside className={`${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 fixed lg:static top-16 left-0 w-72 bg-white/90 backdrop-blur-sm border-r border-border h-screen overflow-y-auto z-50 transition-transform duration-300 ease-in-out shadow-md`}> 
          <div className="p-6">
            <nav className="space-y-2">
              <SidebarSection
                title="Getting Started"
                icon={<Play size={18} />}
                isActive={activeSection === 'getting-started'}
                onClick={() => {
                  setActiveSection('getting-started');
                  closeMobileMenu();
                }}
                items={[
                  'Installation',
                  'CLI Commands',
                  'Your First App'
                ]}
              />
              <SidebarSection
                title="Architecture"
                icon={<Layers size={18} />}
                isActive={activeSection === 'architecture'}
                onClick={() => {
                  setActiveSection('architecture');
                  closeMobileMenu();
                }}
                items={[
                  'Framework Overview',
                  'Virtual DOM',
                  'Hot Restart'
                ]}
              />
              <SidebarSection
                title="Components"
                icon={<Box size={18} />}
                isActive={activeSection === 'components'}
                onClick={() => {
                  setActiveSection('components');
                  closeMobileMenu();
                }}
                items={[
                  'Built-in Components',
                  'Component Development',
                  'Styling & Layout',
                  'Portal System'
                ]}
              />
              <SidebarSection
                title="Development"
                icon={<Code2 size={18} />}
                isActive={activeSection === 'development'}
                onClick={() => {
                  setActiveSection('development');
                  closeMobileMenu();
                }}
                items={[
                  'Module Development Guidelines',
                  'Testing',
                  'Debugging'
                ]}
              />
              <SidebarSection
                title="Examples"
                icon={<FileText size={18} />}
                isActive={activeSection === 'examples'}
                onClick={() => {
                  setActiveSection('examples');
                  closeMobileMenu();
                }}
                items={[
                  'Counter App',
                  'Todo List',
                  'API Integration',
                  'Navigation'
                ]}
              />
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto lg:ml-0">
          <div className="max-w-3xl mx-auto px-6 py-10">
            <div className="card rounded soft-shadow">
              <AnimatePresence mode="wait">
                {activeSection === 'getting-started' && <GettingStartedSection key="getting-started" />}
                {activeSection === 'architecture' && <ArchitectureSection key="architecture" />}
                {activeSection === 'components' && <ComponentsSection key="components" />}
                {activeSection === 'development' && <DevelopmentSection key="development" />}
                {activeSection === 'examples' && <ExamplesSection key="examples" />}
              </AnimatePresence>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

function SidebarSection({ 
  title, 
  icon, 
  isActive, 
  onClick, 
  items 
}: { 
  title: string; 
  icon: React.ReactNode; 
  isActive: boolean; 
  onClick: () => void; 
  items: string[]; 
}) {
  const scrollToSection = (item: string) => {
    // Convert item name to ID format (lowercase, replace spaces with hyphens)
    const sectionId = item.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
    const element = document.getElementById(sectionId);
    if (element) {
      // Scroll to element with offset for sticky header
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="mb-4">
      <button
        onClick={onClick}
        className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
          isActive 
            ? 'bg-blue-100 text-blue-700 border border-blue-200' 
            : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
        }`}
      >
        {icon}
        <span className="font-medium">{title}</span>
        <ChevronRight 
          size={16} 
          className={`ml-auto transition-transform ${isActive ? 'rotate-90' : ''}`} 
        />
      </button>
      {isActive && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="mt-2 ml-8 space-y-1"
        >
          {items.map((item, index) => (
            <button
              key={index}
              onClick={() => scrollToSection(item)}
              className="block w-full text-left text-sm text-gray-600 py-2 px-2 rounded hover:text-blue-600 hover:bg-blue-50 cursor-pointer transition-colors"
            >
              {item}
            </button>
          ))}
        </motion.div>
      )}
    </div>
  );
}

function GettingStartedSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      {/* Header */}
      <div className="mb-8 sm:mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Getting Started with DCFlight
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl">
          Build native mobile apps with Dart. No platform views, no abstractions.
          Just pure native UI with React-like development experience.
        </p>
      </div>

      {/* Installation */}
      <section id="installation" className="mb-12">
        <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8">
          <div className="flex items-center space-x-3 mb-6">
            <Download className="w-6 h-6 text-blue-600" />
            <h2 className="text-2xl font-bold text-gray-900">Installation</h2>
          </div>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Prerequisites</h3>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
                <ul className="space-y-2 text-blue-800">
                  <li>• Flutter SDK (3.0 or higher)</li>
                  <li>• Dart SDK (2.17 or higher)</li>
                  <li>• Xcode (for iOS development)</li>
                  <li>• Android Studio (for Android development - coming soon)</li>
                </ul>
              </div>

              {/* Flutter Usage Clarification */}
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-4">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <div className="w-6 h-6 bg-amber-400 rounded-full flex items-center justify-center">
                      <span className="text-amber-800 text-sm font-bold">!</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-amber-800 mb-2">About Flutter Dependency</h4>
                    <div className="text-amber-700 text-sm space-y-2">
                      <p>
                        <strong>Current:</strong> DCFlight uses Flutter SDK (build tools, Flutter Engine, etc) - Flutter's UI abstractions are completely bypassed.
                      </p>
                      <p>
                        <strong>Future:</strong> We plan to ship with <span className="font-semibold">"Flutter Naked"</span> - 
                        a fork of the Flutter Engine without UI abstractions, making Flutter SDK dependency temporary.
                      </p>
                      <p>
                        <strong>Important:</strong> Flutter widgets and abstractions won't work in DCFlight 
                        unless you use specific bindings that interop from the DCFlight framework.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Install DCFlight CLI</h3>
              <CodeBlock
                code="dart pub global activate dcflight_cli"
                language="bash"
              />
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Create a new project</h3>
              <CodeBlock
                code={`dcf create my_app
cd my_app
dcf run`}
                language="bash"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CLI Commands */}
      <section id="cli-commands" className="mb-12">
        <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8">
          <div className="flex items-center space-x-3 mb-6">
            <Terminal className="w-6 h-6 text-blue-600" />
            <h2 className="text-2xl font-bold text-gray-900">CLI Commands</h2>
          </div>
          
          <div className="space-y-6">
            <CLICommand
              command="dcf create [project_name]"
              description="Create a new DCFlight project with all necessary boilerplate and native iOS setup"
            />
            <CLICommand
              command="dcf add [package_name]"
              description="Add Dart packages to your DCFlight project with proper dependency management"
            />
            <CLICommand
              command="dcf run"
              description="Build and run your DCFlight app with hot restart support (in development)"
            />
            <CLICommand
              command="dcf build ios"
              description="Build iOS app bundle for release or testing"
            />
          </div>
        </div>
      </section>

      {/* First App */}
      <section id="your-first-app" className="mb-12">
        <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8">
          <div className="flex items-center space-x-3 mb-6">
            <Zap className="w-6 h-6 text-blue-600" />
            <h2 className="text-2xl font-bold text-gray-900">Your First DCFlight App</h2>
          </div>
          
          <p className="text-gray-600 mb-6">
            Here's a complete example of a DCFlight app with state management and user interactions:
          </p>

          <CodeBlock
            code={`void main() {
  DCFlight.start(app: MyApp());
}

class MyApp extends StatefulComponent {
  @override
  DCFComponentNode render() {
    final counter = useState(0);
    final globalCounter = useStore(globalCounterState);
    
    return DCFSafeAreaView(
      layout: LayoutProps(flex: 1),
      children: [
        DCFScrollView(
          showsScrollIndicator: true,
          style: StyleSheet(backgroundColor: Colors.white),
          layout: LayoutProps(
            paddingHorizontal: 20,
            justifyContent: YogaJustifyContent.center,
            alignItems: YogaAlign.center,
            flex: 1,
          ),
          children: [
            DCFText(
              content: "Welcome to DCFlight!",
              textProps: DCFTextProps(
                fontSize: 28,
                fontWeight: "bold",
                color: Colors.black,
                textAlign: "center",
              ),
            ),
            DCFText(
              content: "Counter: \${counter.value}",
              textProps: DCFTextProps(
                fontSize: 24,
                color: Colors.blue,
                textAlign: "center",
              ),
            ),
            DCFButton(
              buttonProps: DCFButtonProps(
                title: "Increment",
                backgroundColor: Colors.blue,
                titleColor: Colors.white,
              ),
              onPress: () {
                counter.setValue(counter.value + 1);
                globalCounter.setState(globalCounter.state + 1);
              },
            ),
            DCFText(
              content: "Global Count: \${globalCounter.state}",
              textProps: DCFTextProps(
                fontSize: 16,
                color: Colors.gray,
                textAlign: "center",
              ),
            ),
          ],
        ),
      ],
    );
  }
}

// Global state management
final globalCounterState = Store<int>(0);`}
            language="dart"
          />
        </div>
      </section>
    </motion.div>
  );
}

function ArchitectureSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      {/* Header */}
      <div className="mb-8 sm:mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          DCFlight Architecture
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl">
          Understanding how DCFlight sits directly on the Flutter Engine, 
          bypassing Flutter's widget abstraction layer entirely.
        </p>
      </div>

      {/* Framework Overview */}
      <section id="framework-overview" className="mb-12">
        <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8">
          <div className="flex items-center space-x-3 mb-6">
            <Layers className="w-6 h-6 text-blue-600" />
            <h2 className="text-2xl font-bold text-gray-900">Framework Overview</h2>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Architectural Position</h3>
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Traditional Flutter Stack</h4>
                    <div className="space-y-2">
                      <div className="bg-red-100 border border-red-200 p-3 rounded text-red-800 text-sm">
                        Flutter Widgets (Abstraction Layer)
                      </div>
                      <div className="bg-orange-100 border border-orange-200 p-3 rounded text-orange-800 text-sm">
                        Flutter Framework
                      </div>
                      <div className="bg-green-100 border border-green-200 p-3 rounded text-green-800 text-sm">
                        Flutter Engine
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">DCFlight Stack</h4>
                    <div className="space-y-2">
                      <div className="bg-blue-100 border border-blue-200 p-3 rounded text-blue-800 text-sm">
                        Pure Native UI (UIKit, etc.)
                      </div>
                      <div className="bg-purple-100 border border-purple-200 p-3 rounded text-purple-800 text-sm">
                        DCFlight Framework
                      </div>
                      <div className="bg-green-100 border border-green-200 p-3 rounded text-green-800 text-sm">
                        Flutter Engine (Runtime Only)
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Key Differences</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-200 rounded-lg">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="border border-gray-200 p-3 text-left font-semibold">Aspect</th>
                      <th className="border border-gray-200 p-3 text-left font-semibold">Traditional Flutter</th>
                      <th className="border border-gray-200 p-3 text-left font-semibold">DCFlight</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-200 p-3 font-medium">UI Rendering</td>
                      <td className="border border-gray-200 p-3">Flutter Widget System</td>
                      <td className="border border-gray-200 p-3 text-blue-600">Pure Native Views</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 p-3 font-medium">Engine Usage</td>
                      <td className="border border-gray-200 p-3">Full Framework + Engine</td>
                      <td className="border border-gray-200 p-3 text-blue-600">Engine Runtime Only</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 p-3 font-medium">Performance</td>
                      <td className="border border-gray-200 p-3">Skia Rendering</td>
                      <td className="border border-gray-200 p-3 text-blue-600">Native Platform Rendering</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Virtual DOM */}
      <section id="virtual-dom" className="mb-12">
        <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8">
          <div className="flex items-center space-x-3 mb-6">
            <Box className="w-6 h-6 text-blue-600" />
            <h2 className="text-2xl font-bold text-gray-900">Virtual DOM System</h2>
          </div>

          <div className="space-y-6">
            <p className="text-gray-600">
              DCFlight implements a sophisticated Virtual DOM that efficiently manages the bridge 
              between Dart components and native platform UI elements.
            </p>

            <CodeBlock
              code={`class VDom {
  // Native bridge for UI operations
  final PlatformInterface _nativeBridge;
  
  // Component tracking
  final Map<String, DCFComponentNode> _nodesByViewId = {};
  final Map<String, StatefulComponent> _statefulComponents = {};
  
  // Reconciliation state
  final Map<String, DCFComponentNode> _previousRenderedNodes = {};
  final Set<String> _pendingUpdates = {};
  
  // Update scheduling
  void scheduleComponentUpdate(String componentId) {
    _pendingUpdates.add(componentId);
    scheduleMicrotask(() => processPendingUpdates());
  }
}`}
              language="dart"
            />

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Reconciliation Process</h3>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <ol className="space-y-2 text-blue-800">
                  <li>1. Component state changes trigger an update</li>
                  <li>2. Updates are batched and scheduled</li>
                  <li>3. Virtual DOM performs efficient prop diffing</li>
                  <li>4. Only changed properties are sent to native bridge</li>
                  <li>5. Native views are updated with minimal operations</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hot Restart System */}
      <section id="hot-restart" className="mb-12">
        <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8">
          <div className="flex items-center space-x-3 mb-6">
            <Zap className="w-6 h-6 text-blue-600" />
            <h2 className="text-2xl font-bold text-gray-900">Hot Restart System</h2>
          </div>

          <div className="space-y-6">
            <p className="text-gray-600">
              DCFlight implements a robust hot restart detection and recovery system that prevents 
              app crashes during Flutter hot restarts and ensures proper UI restoration.
            </p>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">How It Works</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h4 className="font-semibold text-green-800 mb-2">1. Detection</h4>
                  <p className="text-sm text-green-700">
                    Session tokens identify when a hot restart occurs
                  </p>
                </div>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-800 mb-2">2. Cleanup</h4>
                  <p className="text-sm text-blue-700">
                    Native views are cleaned while preserving root container
                  </p>
                </div>
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                  <h4 className="font-semibold text-purple-800 mb-2">3. Restoration</h4>
                  <p className="text-sm text-purple-700">
                    Component tree is rebuilt and rendered
                  </p>
                </div>
              </div>
            </div>

            <CodeBlock
              code={`// Hot restart detection
final sessionToken = 'dcf_session_\${DateTime.now().millisecondsSinceEpoch}';

// Cleanup phase - preserve root while cleaning children
if viewId != "root" {
    view.removeFromSuperview()
    views.removeValue(forKey: viewId)
}

// Restoration phase
vdom.createRoot(mainApp) // Recreate component hierarchy`}
              language="dart"
            />
          </div>
        </div>
      </section>
    </motion.div>
  );
}

function ComponentsSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      {/* Header */}
      <div className="mb-8 sm:mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          DCFlight Components
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl">
          Comprehensive guide to built-in components and creating custom ones.
        </p>
      </div>

      {/* Built-in Components */}
      <section id="built-in-components" className="mb-12">
        <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8">
          <div className="flex items-center space-x-3 mb-6">
            <Package className="w-6 h-6 text-blue-600" />
            <h2 className="text-2xl font-bold text-gray-900">Built-in Components</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Basic Components */}
            <ComponentCard
              name="DCFView"
              description="Basic container component for layout and styling"
              status="✅ Available"
              example="DCFView(children: [...])"
            />
            <ComponentCard
              name="DCFText"
              description="Text rendering with comprehensive styling options"
              status="✅ Available"
              example="DCFText(content: 'Hello World')"
            />
            <ComponentCard
              name="DCFButton"
              description="Interactive button with native platform styling"
              status="✅ Available"
              example="DCFButton(onPress: () => {})"
            />
            <ComponentCard
              name="DCFImage"
              description="Image display with caching and optimization"
              status="✅ Available"
              example="DCFImage(src: 'image.png')"
            />
            <ComponentCard
              name="DCFScrollView"
              description="Scrollable container with native scroll behavior"
              status="✅ Available"
              example="DCFScrollView(children: [...])"
            />
            <ComponentCard
              name="DCFFlatList"
              description="High-performance list component for large datasets"
              status="✅ Available"
              example="DCFFlatList(data: items)"
            />
            <ComponentCard
              name="DCFSvg"
              description="SVG image support with full styling"
              status="✅ Available"
              example="DCFSvg(path: 'icon.svg')"
            />
            <ComponentCard
              name="DCFIcon"
              description="Icon system with built-in icon sets"
              status="✅ Available"
              example="DCFIcon(name: 'home')"
            />
            
            {/* Interaction Components */}
            <ComponentCard
              name="DCFGestureDetector"
              description="Gesture recognition for tap, swipe, pinch, etc."
              status="✅ Available"
              example="DCFGestureDetector(onTap: ...)"
            />
            <ComponentCard
              name="DCFTouchableOpacity"
              description="Touch interactions with opacity feedback"
              status="✅ Available"
              example="DCFTouchableOpacity(onPress: ...)"
            />
            
            {/* Animation Components */}
            <ComponentCard
              name="DCFAnimatedView"
              description="View animations with native performance"
              status="✅ Available"
              example="DCFAnimatedView(duration: 300)"
            />
            <ComponentCard
              name="DCFAnimatedText"
              description="Text animations and transitions"
              status="✅ Available"
              example="DCFAnimatedText(content: 'Hello')"
            />
            
            {/* Input Components */}
            <ComponentCard
              name="DCFTextInput"
              description="Text input fields with native keyboard support"
              status="✅ Available"
              example="DCFTextInput(placeholder: 'Enter text')"
            />
            <ComponentCard
              name="DCFDropdown"
              description="Dropdown menu with native styling"
              status="✅ Available"
              example="DCFDropdown(options: [...])"
            />
            
            {/* Advanced Components */}
            <ComponentCard
              name="DCFModal"
              description="Native modal presentation with detents and gestures"
              status="✅ Available"
              example="DCFModal(visible: true, detents: [.medium])"
            />
            <ComponentCard
              name="DCFToggle"
              description="Switch/toggle component with native styling"
              status="✅ Available"
              example="DCFToggle(value: true, onValueChange: ...)"
            />
            <ComponentCard
              name="DCFCheckbox"
              description="Checkbox input with customizable styling"
              status="✅ Available"
              example="DCFCheckbox(checked: false, onValueChange: ...)"
            />
            <ComponentCard
              name="DCFAlert"
              description="Alert dialogs and action sheets with native presentation"
              status="✅ Available"
              example="DCFAlert(title: 'Alert', style: .alert)"
            />
            <ComponentCard
              name="DCFSwipeableView"
              description="Swipeable container with gesture support"
              status="✅ Available"
              example="DCFSwipeableView(onSwipe: ...)"
            />
            <ComponentCard
              name="DCFSlider"
              description="Range slider input with native styling"
              status="✅ Available"
              example="DCFSlider(value: 0.5, onValueChange: ...)"
            />
            <ComponentCard
              name="DCFSpinner"
              description="Loading spinner with different styles"
              status="✅ Available"
              example="DCFSpinner(animating: true, style: .medium)"
            />
          </div>
        </div>
      </section>

      {/* Component Development */}
      <section id="component-development" className="mb-12">
        <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8">
          <div className="flex items-center space-x-3 mb-6">
            <Code2 className="w-6 h-6 text-blue-600" />
            <h2 className="text-2xl font-bold text-gray-900">Custom Component Development</h2>
          </div>

          <div className="space-y-6">
            <p className="text-gray-600">
              Create custom components by implementing the DCFComponent protocol. 
              Here's the basic structure for iOS:
            </p>

            <CodeBlock
              code={`import UIKit
import dcflight

class CustomComponent: NSObject, DCFComponent {
    required override init() {
        super.init()
    }
    
    func createView(props: [String: Any]) -> UIView {
        let view = UIView()
        // Component creation logic
        updateView(view, withProps: props)
        return view
    }
    
    func updateView(_ view: UIView, withProps props: [String: Any]) -> Bool {
        // Update view properties based on props
        if let backgroundColor = props["backgroundColor"] as? String {
            view.backgroundColor = UIColor(hex: backgroundColor)
        }
        return true
    }
}

// Registration in main app
func application(_ application: UIApplication, 
                didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
    
    ComponentRegistry.shared.registerComponent("CustomComponent", CustomComponent.self)
    return true
}`}
              language="swift"
            />

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Component Protocol Requirements</h3>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <ul className="space-y-2 text-blue-800">
                  <li>• <strong>createView(props:)</strong> - Create the native view with initial properties</li>
                  <li>• <strong>updateView(_:withProps:)</strong> - Update view when properties change</li>
                  <li>• <strong>handleMethod(methodName:args:view:)</strong> - Handle custom component methods (optional)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Styling & Layout */}
      <section id="styling-layout" className="mb-12">
        <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8">
          <div className="flex items-center space-x-3 mb-6">
            <Settings className="w-6 h-6 text-blue-600" />
            <h2 className="text-2xl font-bold text-gray-900">Styling & Layout</h2>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Yoga Layout System</h3>
              <p className="text-gray-600 mb-4">
                DCFlight uses Facebook's Yoga layout engine for consistent flexbox-style layouts across platforms.
              </p>

              <CodeBlock
                code={`DCFView(
  layout: LayoutProps(
    flex: 1,
    flexDirection: YogaFlexDirection.column,
    justifyContent: YogaJustifyContent.center,
    alignItems: YogaAlign.center,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginTop: 15,
    width: 200,
    height: 100,
  ),
  style: StyleSheet(
    backgroundColor: Colors.blue,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.gray,
  ),
  children: [
    // Child components
  ],
)`}
                language="dart"
              />
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Available Style Properties</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Layout Properties</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• flex, flexDirection, flexWrap</li>
                    <li>• justifyContent, alignItems, alignSelf</li>
                    <li>• width, height, minWidth, maxHeight</li>
                    <li>• margin, padding (all directions)</li>
                    <li>• position (relative, absolute)</li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Visual Properties</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• backgroundColor, borderColor</li>
                    <li>• borderWidth, borderRadius</li>
                    <li>• opacity, visibility</li>
                    <li>• shadow properties</li>
                    <li>• transform properties</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portal System */}
      <section id="portal-system" className="mb-12">
        <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8">
          <div className="flex items-center space-x-3 mb-6">
            <Globe className="w-6 h-6 text-blue-600" />
            <h2 className="text-2xl font-bold text-gray-900">Portal System</h2>
          </div>

          <div className="space-y-6">
            <p className="text-gray-600">
              DCFlight's Portal System allows you to render content outside the normal component hierarchy. 
              Perfect for modals, overlays, tooltips, and floating elements.
            </p>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-green-800 mb-3">✅ Recommended: ExplicitPortalAPI</h3>
              <ul className="space-y-2 text-green-700 text-sm">
                <li>• Explicit add/remove/update methods</li>
                <li>• No state reconciliation issues</li>
                <li>• Guaranteed portal content isolation</li>
                <li>• Superior performance and predictability</li>
                <li>• Zero ghost content or duplicates</li>
                <li>• Production-ready and battle-tested</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Portal Use Cases</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">UI Components</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Modals and dialogs</li>
                    <li>• Toast notifications</li>
                    <li>• Tooltips and popovers</li>
                    <li>• Dropdown menus</li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Layout Solutions</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Floating elements</li>
                    <li>• Overlays above all content</li>
                    <li>• Break out of container constraints</li>
                    <li>• App-level components</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">ExplicitPortalAPI Example</h3>
              <CodeBlock
                code={`import 'package:dcflight/framework/renderer/vdom/portal/explicit_portal_api.dart';

// 1. Create portal target (usually at app root)
class MyApp extends StatelessComponent {
  @override
  DCFComponentNode render() {
    return DCFSafeAreaView(
      children: [
        // Your main app content
        MainContent(),
        
        // Portal target for modals
        DCFPortalTarget(targetId: "modal-target"),
      ],
    );
  }
}

// 2. Use ExplicitPortalAPI from anywhere
class MyComponent extends StatefulComponent {
  String? _activePortalId;

  @override
  DCFComponentNode render() {
    return DCFButton(
      buttonProps: DCFButtonProps(title: "Show Modal"),
      onPress: () => _showModal(),
    );
  }
  
  void _showModal() async {
    final portalId = await ExplicitPortalAPI.add(
      targetId: 'modal-target',
      content: [
        DCFView(
          style: StyleSheet(
            backgroundColor: Colors.black.withOpacity(0.5),
          ),
          children: [
            DCFView(
              style: StyleSheet(
                backgroundColor: Colors.white,
                borderRadius: 12,
                padding: 20,
              ),
              children: [
                DCFText(content: 'Modal Content'),
                DCFButton(
                  buttonProps: DCFButtonProps(title: "Close"),
                  onPress: () => _hideModal(),
                ),
              ],
            ),
          ],
        ),
      ],
    );
    
    setState(() => _activePortalId = portalId);
  }
  
  void _hideModal() async {
    if (_activePortalId != null) {
      await ExplicitPortalAPI.remove(_activePortalId!);
      setState(() => _activePortalId = null);
    }
  }
}`}
                language="dart"
              />
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
              <h4 className="font-semibold text-amber-800 mb-2">⚠️ Legacy DCFPortal Component</h4>
              <p className="text-amber-700 text-sm">
                The state-driven DCFPortal component is legacy and should be avoided in new code. 
                It can cause reconciliation issues and rendering inconsistencies. Always use ExplicitPortalAPI instead.
              </p>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}

function DevelopmentSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      {/* Header */}
      <div className="mb-8 sm:mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Development Guide
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl">
          Best practices, guidelines, and tools for DCFlight development.
        </p>
      </div>

      {/* Module Development Guidelines */}
      <section id="module-development-guidelines" className="mb-12">
        <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8">
          <div className="flex items-center space-x-3 mb-6">
            <Package className="w-6 h-6 text-blue-600" />
            <h2 className="text-2xl font-bold text-gray-900">Module Development Guidelines</h2>
          </div>

          <div className="space-y-6">
            <p className="text-gray-600">
              Comprehensive guide for developing custom components and modules for the DCFlight framework. 
              Following these guidelines ensures consistency, performance, and compatibility.
            </p>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Component Protocol Implementation</h3>
              <p className="text-gray-600 mb-4">
                Every DCFlight component must implement the <code className="bg-gray-100 px-2 py-1 rounded">DCFComponent</code> protocol:
              </p>

              <CodeBlock
                code={`import UIKit
import dcflight

class YourCustomComponent: NSObject, DCFComponent {
    required override init() {
        super.init()
    }
    
    func createView(props: [String: Any]) -> UIView {
        // Component creation logic
        let view = UIView()
        updateView(view, withProps: props)
        return view
    }
    
    func updateView(_ view: UIView, withProps props: [String: Any]) -> Bool {
        // Update view properties based on props
        if let backgroundColor = props["backgroundColor"] as? String {
            view.backgroundColor = UIColor(hex: backgroundColor)
        }
        
        if let borderRadius = props["borderRadius"] as? CGFloat {
            view.layer.cornerRadius = borderRadius
        }
        
        return true
    }
}

// Optional: For components with custom methods
extension YourCustomComponent: ComponentMethodHandler {
    func handleMethod(methodName: String, args: [String: Any], view: UIView) -> Bool {
        switch methodName {
        case "customMethod":
            // Handle custom component method
            return true
        default:
            return false
        }
    }
}`}
                language="swift"
              />
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Component Registration</h3>
              <p className="text-gray-600 mb-4">
                Create a module registration file to register all your custom components:
              </p>

              <CodeBlock
                code={`import UIKit
import Flutter
import dcflight

@objc public class YourModule: NSObject {
    @objc public static func registerWithRegistrar(_ registrar: FlutterPluginRegistrar) {
        registerComponents()
    }
    
    @objc public static func registerComponents() {
        // Register all your custom components
        DCFComponentRegistry.shared.registerComponent(
            "CustomButton", 
            componentClass: YourCustomButtonComponent.self
        )
        DCFComponentRegistry.shared.registerComponent(
            "CustomSlider", 
            componentClass: YourCustomSliderComponent.self
        )
        
        NSLog("✅ YourModule: All components registered successfully")
    }
}`}
                language="swift"
              />
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Event Handling</h3>
              <p className="text-gray-600 mb-4">
                Use DCFlight's universal event system for all component interactions:
              </p>

              <CodeBlock
                code={`class YourCustomComponent: NSObject, DCFComponent {
    func createView(props: [String: Any]) -> UIView {
        let button = UIButton()
        button.addTarget(self, action: #selector(handleButtonTap), for: .touchUpInside)
        return button
    }
    
    @objc func handleButtonTap(_ sender: UIButton) {
        // Use the universal event system
        propagateEvent(on: sender, eventName: "onPress", data: [
            "timestamp": Date().timeIntervalSince1970,
            "componentType": "CustomButton"
        ])
    }
    
    @objc func handleLongPress(_ sender: UILongPressGestureRecognizer) {
        guard sender.state == .began else { return }
        
        propagateEvent(on: sender.view!, eventName: "onLongPress", data: [
            "duration": sender.minimumPressDuration
        ])
    }
}`}
                language="swift"
              />
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Naming Conventions</h3>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <ul className="space-y-2 text-blue-800">
                  <li>• Use <strong>PascalCase</strong> for component type names</li>
                  <li>• Be descriptive and specific: <code>"CustomButton"</code> not <code>"Button"</code></li>
                  <li>• Avoid conflicts with built-in components</li>
                  <li>• Include your module prefix for uniqueness</li>
                  <li>• Follow convention: <code>DCF[ComponentName]</code> for built-ins</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Performance Best Practices</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h4 className="font-semibold text-green-800 mb-2">✅ Do</h4>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• Cache expensive calculations</li>
                    <li>• Use proper property diffing</li>
                    <li>• Implement efficient updates</li>
                    <li>• Clean up resources properly</li>
                    <li>• Use weak references for delegates</li>
                  </ul>
                </div>
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <h4 className="font-semibold text-red-800 mb-2">❌ Don't</h4>
                  <ul className="text-sm text-red-700 space-y-1">
                    <li>• Recreate views unnecessarily</li>
                    <li>• Ignore property changes</li>
                    <li>• Create memory leaks</li>
                    <li>• Block the main thread</li>
                    <li>• Use hardcoded values</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Development Guidelines */}
      <section id="development-guidelines" className="mb-12">
        <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8">
          <div className="flex items-center space-x-3 mb-6">
            <BookOpen className="w-6 h-6 text-blue-600" />
            <h2 className="text-2xl font-bold text-gray-900">Development Guidelines</h2>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Component Naming Conventions</h3>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <ul className="space-y-2 text-green-800">
                  <li>• Use <code className="bg-green-200 px-2 py-1 rounded">DCF</code> prefix for all components</li>
                  <li>• Follow PascalCase naming: <code className="bg-green-200 px-2 py-1 rounded">DCFCustomButton</code></li>
                  <li>• Use descriptive names that indicate component purpose</li>
                  <li>• Avoid abbreviations unless widely understood</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">State Management Best Practices</h3>
              <CodeBlock
                code={`// ✅ Good: Use useState for local component state
final counter = useState(0);

// ✅ Good: Use useStore for global state
final globalTheme = useStore(themeStore);

// ✅ Good: Use useEffect for side effects
useEffect(() {
  // Cleanup function
  return () => {
    // Cleanup logic
  };
}, [dependency]);

// ❌ Avoid: Direct state mutation
// counter.value++; // Don't do this

// ✅ Do: Use setValue method
counter.setValue(counter.value + 1);`}
                language="dart"
              />
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Performance Optimization</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-800 mb-2">Rendering Optimization</h4>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• Minimize component re-renders</li>
                    <li>• Use keys for list items</li>
                    <li>• Avoid inline function creation</li>
                    <li>• Implement shouldUpdate when needed</li>
                  </ul>
                </div>
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                  <h4 className="font-semibold text-purple-800 mb-2">Memory Management</h4>
                  <ul className="text-sm text-purple-700 space-y-1">
                    <li>• Properly dispose of resources</li>
                    <li>• Remove event listeners in cleanup</li>
                    <li>• Optimize image loading and caching</li>
                    <li>• Use lazy loading for large lists</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testing */}
      <section id="testing" className="mb-12">
        <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8">
          <div className="flex items-center space-x-3 mb-6">
            <Cog className="w-6 h-6 text-blue-600" />
            <h2 className="text-2xl font-bold text-gray-900">Testing DCFlight Apps</h2>
          </div>

          <div className="space-y-6">
            <p className="text-gray-600">
              Testing framework integration is in development. Currently, you can test your 
              Dart business logic separately from UI components.
            </p>

            <CodeBlock
              code={`// Example: Testing business logic
import 'package:test/test.dart';

void main() {
  group('Counter Logic Tests', () {
    test('counter increments correctly', () {
      final counter = Counter();
      counter.increment();
      expect(counter.value, equals(1));
    });
    
    test('counter resets to zero', () {
      final counter = Counter()..increment()..increment();
      counter.reset();
      expect(counter.value, equals(0));
    });
  });
}`}
              language="dart"
            />

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <h4 className="font-semibold text-yellow-800 mb-2">🚧 Coming Soon</h4>
              <ul className="text-sm text-yellow-700 space-y-1">
                <li>• DCFlight Test Framework</li>
                <li>• Component testing utilities</li>
                <li>• Integration testing support</li>
                <li>• Automated UI testing</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Debugging */}
      <section id="debugging" className="mb-12">
        <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8">
          <div className="flex items-center space-x-3 mb-6">
            <Terminal className="w-6 h-6 text-blue-600" />
            <h2 className="text-2xl font-bold text-gray-900">Debugging</h2>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Debug Output</h3>
              <p className="text-gray-600 mb-4">
                DCFlight provides comprehensive debug information during development:
              </p>

              <CodeBlock
                code={`// Enable debug mode
DCFlight.start(
  app: MyApp(),
  debugMode: true, // Shows detailed component lifecycle logs
);

// Debug output example:
// [DCF] Component 'DCFButton' created with viewId: btn_1234
// [DCF] Props update for viewId: btn_1234 - {title: "Click me"}
// [DCF] Event triggered: onPress for viewId: btn_1234`}
                language="dart"
              />
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Common Issues & Solutions</h3>
              <div className="space-y-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Layout Issues</h4>
                  <p className="text-sm text-gray-600 mb-2">
                    <strong>Problem:</strong> Components not displaying correctly
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Solution:</strong> Check flex properties and parent container constraints
                  </p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">State Updates Not Reflecting</h4>
                  <p className="text-sm text-gray-600 mb-2">
                    <strong>Problem:</strong> UI not updating when state changes
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Solution:</strong> Ensure you're using <code>setValue()</code> method, not direct assignment
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}

function ExamplesSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      {/* Header */}
      <div className="mb-8 sm:mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Examples & Tutorials
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl">
          Learn DCFlight through practical examples and step-by-step tutorials.
        </p>
      </div>

      {/* Examples Grid */}
      <section id="counter-app" className="mb-12">
        <div className="grid md:grid-cols-2 gap-8">
          <ExampleCard
            title="Counter App"
            description="Learn state management and user interactions"
            difficulty="Beginner"
            code={`class CounterApp extends StatefulComponent {
  @override
  DCFComponentNode render() {
    final counter = useState(0);
    
    return DCFView(
      layout: LayoutProps(
        flex: 1,
        justifyContent: YogaJustifyContent.center,
        alignItems: YogaAlign.center,
      ),
      children: [
        DCFText(
          content: "Count: \${counter.value}",
          textProps: DCFTextProps(fontSize: 24),
        ),
        DCFButton(
          buttonProps: DCFButtonProps(title: "Increment"),
          onPress: () => counter.setValue(counter.value + 1),
        ),
      ],
    );
  }
}`}
          />

          <ExampleCard
            title="Todo List"
            description="Dynamic lists and item management"
            difficulty="Intermediate"
            code={`class TodoApp extends StatefulComponent {
  @override
  DCFComponentNode render() {
    final todos = useState<List<String>>([]);
    final inputText = useState("");
    
    return DCFView(
      children: [
        DCFTextInput(
          textInputProps: DCFTextInputProps(
            placeholder: "Add todo...",
            value: inputText.value,
          ),
          onTextChange: (text) => inputText.setValue(text),
        ),
        DCFButton(
          buttonProps: DCFButtonProps(title: "Add"),
          onPress: () {
            if (inputText.value.isNotEmpty) {
              todos.setValue([...todos.value, inputText.value]);
              inputText.setValue("");
            }
          },
        ),
        ...todos.value.map((todo) => 
          DCFText(content: todo)
        ).toList(),
      ],
    );
  }
}`}
          />

          <ExampleCard
            title="API Integration"
            description="Fetching and displaying remote data"
            difficulty="Intermediate"
            code={`class ApiExample extends StatefulComponent {
  @override
  DCFComponentNode render() {
    final data = useState<Map<String, dynamic>?>(null);
    final loading = useState(false);
    
    useEffect(() {
      fetchData();
    }, []);
    
    void fetchData() async {
      loading.setValue(true);
      try {
        final response = await http.get(
          Uri.parse('https://api.example.com/data')
        );
        data.setValue(json.decode(response.body));
      } catch (e) {
        print('Error: $e');
      } finally {
        loading.setValue(false);
      }
    }
    
    return DCFView(
      children: [
        if (loading.value)
          DCFText(content: "Loading...")
        else if (data.value != null)
          DCFText(content: data.value!['title'])
        else
          DCFText(content: "No data"),
      ],
    );
  }
}`}
          />

          <ExampleCard
            title="Navigation"
            description="Multi-screen app navigation patterns"
            difficulty="Advanced"
            code={`class NavigationExample extends StatefulComponent {
  @override
  DCFComponentNode render() {
    final currentScreen = useState("home");
    
    return DCFView(
      children: [
        // Navigation Bar
        DCFView(
          layout: LayoutProps(
            flexDirection: YogaFlexDirection.row,
            justifyContent: YogaJustifyContent.spaceAround,
          ),
          children: [
            DCFButton(
              buttonProps: DCFButtonProps(title: "Home"),
              onPress: () => currentScreen.setValue("home"),
            ),
            DCFButton(
              buttonProps: DCFButtonProps(title: "Profile"),
              onPress: () => currentScreen.setValue("profile"),
            ),
          ],
        ),
        
        // Screen Content
        if (currentScreen.value == "home")
          HomeScreen()
        else if (currentScreen.value == "profile")
          ProfileScreen(),
      ],
    );
  }
}`}
          />
        </div>
      </section>

      {/* Platform Specific Examples */}
      <section className="mb-12">
        <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8">
          <div className="flex items-center space-x-3 mb-6">
            <Globe className="w-6 h-6 text-blue-600" />
            <h2 className="text-2xl font-bold text-gray-900">Platform-Specific Features</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center space-x-2 mb-4">
                <Smartphone className="w-5 h-5 text-blue-600" />
                <h3 className="font-semibold text-gray-900">iOS Features</h3>
              </div>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Native UIKit integration</li>
                <li>• iOS-specific animations</li>
                <li>• System alert dialogs</li>
                <li>• SafeArea handling</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center space-x-2 mb-4">
                <Monitor className="w-5 h-5 text-green-600" />
                <h3 className="font-semibold text-gray-900">Android Features</h3>
              </div>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Coming soon...</li>
                <li>• Native Android views</li>
                <li>• Material Design support</li>
                <li>• System integration</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center space-x-2 mb-4">
                <Globe className="w-5 h-5 text-purple-600" />
                <h3 className="font-semibold text-gray-900">Web Features</h3>
              </div>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Planned for future</li>
                <li>• DOM-based rendering</li>
                <li>• Web-specific events</li>
                <li>• PWA support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Real-world Example */}
      <div className="mt-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center space-x-2">
          <Zap className="w-5 h-5 text-blue-600" />
          <span>Real-world Example: Interactive App</span>
        </h3>
        <p className="text-gray-600 mb-4">
          Here's how you can combine multiple DCFlight components to create an interactive app with modals, toggles, and alerts:
        </p>          
          <CodeBlock
            language="dart"
            code={`import 'package:dcflight/dcflight.dart';

class InteractiveApp extends StatefulComponent {
  @override
  DCFComponentNode render() {
    final modalVisible = useState<bool>(false);
    final toggleValue = useState<bool>(false);
    final checkboxValue = useState<bool>(false);
    final alertVisible = useState<bool>(false);

    return DCFScrollView(
      layout: LayoutProps(flex: 1, padding: 16.0),
      children: [
        // Header
        DCFText(
          content: "🚀 DCFlight Components Demo",
          textProps: DCFTextProps(fontSize: 24, fontWeight: "bold"),
          layout: LayoutProps(marginBottom: 20.0, height: 30.0),
        ),

        // Toggle Section
        DCFView(
          layout: LayoutProps(
            flexDirection: YogaFlexDirection.row,
            alignItems: YogaAlign.center,
            height: 44,
            marginBottom: 12,
          ),
          children: [
            DCFToggle(
              layout: LayoutProps(width: 60, height: 32),
              value: toggleValue.state,
              onValueChange: (data) {
                toggleValue.setState(data['value'] as bool);
              },
              activeTrackColor: Colors.green,
              size: DCFToggleSize.medium,
            ),
            DCFText(
              content: "Enable notifications: \${toggleValue.state ? 'ON' : 'OFF'}",
              layout: LayoutProps(marginLeft: 12, flex: 1),
            ),
          ],
        ),

        // Checkbox Section
        DCFView(
          layout: LayoutProps(
            flexDirection: YogaFlexDirection.row,
            alignItems: YogaAlign.center,
            height: 44,
            marginBottom: 20,
          ),
          children: [
            DCFCheckbox(
              layout: LayoutProps(width: 24, height: 24),
              checked: checkboxValue.state,
              onValueChange: (data) {
                checkboxValue.setState(data['value'] as bool);
              },
              activeColor: Colors.blue,
              size: DCFCheckboxSize.medium,
            ),
            DCFText(
              content: "I agree to terms: \${checkboxValue.state ? 'Yes' : 'No'}",
              layout: LayoutProps(marginLeft: 12, flex: 1),
            ),
          ],
        ),

        // Action Buttons
        DCFButton(
          buttonProps: DCFButtonProps(title: "Show Modal"),
          layout: LayoutProps(marginBottom: 12.0, height: 44.0),
          styleSheet: StyleSheet(backgroundColor: Colors.blue, borderRadius: 8),
          onPress: (v) => modalVisible.setState(true),
        ),

        DCFButton(
          buttonProps: DCFButtonProps(title: "Show Alert"),
          layout: LayoutProps(marginBottom: 20, height: 44),
          styleSheet: StyleSheet(backgroundColor: Colors.orange, borderRadius: 8),
          onPress: (v) => alertVisible.setState(true),
        ),

        // Native Modal with multiple detents
        DCFModal(
          visible: modalVisible.state,
          title: "Settings",
          detents: [DCFModalDetents.medium, DCFModalDetents.large],
          showDragIndicator: true,
          onDismiss: (data) => modalVisible.setState(false),
          children: [
            DCFView(
              layout: LayoutProps(
                height: "100%",
                padding: 20.0,
                flexDirection: YogaFlexDirection.column,
              ),
              children: [
                DCFText(
                  content: "⚙️ App Settings",
                  textProps: DCFTextProps(fontSize: 20, fontWeight: "bold"),
                  layout: LayoutProps(marginBottom: 20),
                ),
                DCFSpinner(
                  animating: true,
                  color: Colors.blue,
                  style: DCFSpinnerStyle.medium,
                  layout: LayoutProps(height: 40, marginBottom: 20),
                ),
                DCFButton(
                  buttonProps: DCFButtonProps(title: "Close"),
                  layout: LayoutProps(height: 44),
                  styleSheet: StyleSheet(backgroundColor: Colors.red, borderRadius: 8),
                  onPress: (v) => modalVisible.setState(false),
                ),
              ],
            ),
          ],
        ),

        // Alert Dialog
        DCFAlert(
          visible: alertVisible.state,
          title: "Confirmation",
          message: "Are you sure you want to proceed?",
          style: DCFAlertStyle.alert,
          actions: [
            DCFAlertAction(
              title: 'Cancel',
              style: DCFAlertActionStyle.cancel,
              handler: 'cancel',
            ),
            DCFAlertAction(
              title: 'OK',
              style: DCFAlertActionStyle.defaultStyle,
              handler: 'confirm',
            ),
          ],
          onActionPress: (data) {
            alertVisible.setState(false);
            print("Alert action: \${data['handler']}");
          },
        ),
      ],
    );
  }
}`}
          />
      </div>
    </motion.div>
  );
}

function ComponentCard({ 
  name, 
  description, 
  status, 
  example 
}: { 
  name: string; 
  description: string; 
  status: string; 
  example: string; 
}) {
  return (
    <div className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors">
      <div className="flex items-start justify-between mb-2">
        <h3 className="font-semibold text-gray-900">{name}</h3>
        <span className={`text-xs px-2 py-1 rounded-full ${
          status.startsWith('✅') ? 'bg-green-100 text-green-800' :
          status.startsWith('🚧') ? 'bg-blue-100 text-blue-800' :
          'bg-gray-100 text-gray-600'
        }`}>
          {status}
        </span>
      </div>
      <p className="text-sm text-gray-600 mb-3">{description}</p>
      <code className="text-xs bg-gray-100 p-2 rounded block overflow-x-auto">
        {example}
      </code>
    </div>
  );
}

function ExampleCard({ 
  title, 
  description, 
  difficulty, 
  code 
}: { 
  title: string; 
  description: string; 
  difficulty: string; 
  code: string; 
}) {
  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
        <span className={`text-xs px-3 py-1 rounded-full font-medium ${
          difficulty === 'Beginner' ? 'bg-green-100 text-green-800' :
          difficulty === 'Intermediate' ? 'bg-blue-100 text-blue-800' :
          'bg-purple-100 text-purple-800'
        }`}>
          {difficulty}
        </span>
      </div>
      
      <CodeBlock code={code} language="dart" />
    </div>
  );
}

function CodeBlock({ code, language }: { code: string; language: string }) {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
  };

  return (
    <div className="relative">
      <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
        <button
          onClick={copyToClipboard}
          className="absolute top-2 right-2 p-2 text-gray-400 hover:text-white transition-colors"
        >
          <Copy size={16} />
        </button>
        <pre className="text-green-400 text-sm">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
}

function CLICommand({ command, description }: { command: string; description: string }) {
  return (
    <div className="border-l-4 border-blue-500 pl-4">
      <code className="text-blue-600 font-mono text-sm bg-blue-50 px-2 py-1 rounded">
        {command}
      </code>
      <p className="text-gray-600 mt-2">{description}</p>
    </div>
  );
}

function FeatureItem({ title, description }: { title: string; description: string }) {
  return (
    <div className="space-y-2">
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function ResourceLink({ 
  href, 
  title, 
  description, 
  internal = false 
}: { 
  href: string; 
  title: string; 
  description: string; 
  internal?: boolean; 
}) {
  const baseClasses = "block p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors";
  
  const content = (
    <>
      <div className="flex items-center space-x-2 text-blue-600 font-medium">
        <span>{title}</span>
        <ExternalLink size={16} />
      </div>
      <p className="text-gray-600 text-sm mt-1">{description}</p>
    </>
  );

  if (internal) {
    return (
      <Link to={href} className={baseClasses}>
        {content}
      </Link>
    );
  }

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={baseClasses}>
      {content}
    </a>
  );
}
