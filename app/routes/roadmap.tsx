import type { Route } from "./+types/roadmap";
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";
import { 
  ArrowLeft, 
  CheckCircle, 
  Clock, 
  Calendar,
  Smartphone,
  Monitor,
  Globe,
  Zap,
  Package,
  Code,
  Users,
  Heart
} from "lucide-react";

export default function Roadmap() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-3 text-gray-600 hover:text-gray-900">
              <ArrowLeft size={20} />
              <span className="hidden sm:inline">Back to Home</span>
            </Link>
            <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              DCFlight Roadmap
            </div>
            <div className="w-20"></div> {/* Spacer for centering */}
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              DCFlight Development Roadmap
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Our journey to build the future of cross-platform development. 
              Track our progress and see what's coming next.
            </p>
          </div>

          {/* Mobile-friendly Roadmap */}
          <div className="relative">
            {/* Main trunk - hidden on mobile, shown as animated gradient line on desktop */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-2 bg-gradient-to-b from-green-500 via-blue-500 via-blue-400 to-gray-300 h-full rounded-full shadow-lg"></div>

            {/* Mobile: Stack layout, Desktop: Tree layout */}
            <div className="space-y-12 lg:space-y-20">
              {/* Completed: Framework */}
              <RoadmapBranch
                status="completed"
                side="left"
                title="DCFlight Framework"
                subtitle="Core framework and architecture"
                icon={<CheckCircle className="w-8 h-8" />}
                color="green"
                items={[
                  "✅ Virtual DOM with efficient reconciliation",
                  "✅ React-like hooks system (useState, useStore, useEffect)",
                  "✅ Native view management and lifecycle",
                  "✅ Yoga layout engine integration",
                  "✅ Hot restart support for development",
                  "✅ Component protocol and architecture",
                  "✅ Event system with native bridge"
                ]}
              />

              {/* In Development: iOS */}
              <RoadmapBranch
                status="in-progress"
                side="right"
                title="DCFlight iOS"
                subtitle="Native iOS implementation"
                icon={<Clock className="w-8 h-8" />}
                color="blue"
                items={[
                  "✅ DCFView - Basic container component",
                  "✅ DCFText - Text rendering with styling",
                  "✅ DCFButton - Interactive button component",
                  "✅ DCFImage - Image display with caching",
                  "✅ DCFScrollView - Scrollable container",
                  "✅ DCFTouchableOpacity - Touch interactions",
                  "✅ DCFTextInput - Text input fields",
                  "✅ DCFSafeAreaView - Safe area handling",
                  "✅ DCFGestureDetector - Gesture recognition",
                  "✅ DCFAnimatedView - View animations",
                  "✅ DCFAnimatedText - Text animations",
                  "✅ DCFSVG - SVG image support",
                  "✅ DCFIcon - Icon system",
                  "✅ DCFDropdown - Dropdown menu",
                  "🚧 DCFFlatList - High-performance lists (in progress)",
                  "📅 Modal components",
                  "📅 Navigation components",
                  "📅 Advanced animations"
                ]}
              />

              {/* Planned: Android */}
              <RoadmapBranch
                status="planned"
                side="left"
                title="DCFlight Android"
                subtitle="Native Android implementation"
                icon={<Smartphone className="w-8 h-8" />}
                color="gray"
                items={[
                  "📅 Android component protocol design",
                  "📅 Kotlin/Java native component implementations",
                  "📅 Android-specific layout handling",
                  "📅 Material Design integration",
                  "📅 Android lifecycle management",
                  "📅 Platform-specific optimizations"
                ]}
              />

              {/* Planned: Web */}
              <RoadmapBranch
                status="planned"
                side="right"
                title="DCFlight Web"
                subtitle="Web platform support"
                icon={<Globe className="w-8 h-8" />}
                color="gray"
                items={[
                  "📅 DOM-based component rendering",
                  "📅 CSS-in-Dart styling system",
                  "📅 Web-specific event handling",
                  "📅 Progressive Web App support",
                  "📅 Browser compatibility layer",
                  "📅 Performance optimizations"
                ]}
              />

              {/* Future: Advanced Features */}
              <RoadmapBranch
                status="future"
                side="left"
                title="Advanced Features"
                subtitle="Enhanced developer experience"
                icon={<Zap className="w-8 h-8" />}
                color="gray"
                items={[
                  "🌟 DCFlight DevTools browser extension",
                  "🌟 Component inspector and debugger",
                  "🌟 Performance profiling tools",
                  "🌟 Accessibility testing suite",
                  "🌟 Code generation tools",
                  "🌟 Visual component editor"
                ]}
              />

              {/* Future: Ecosystem */}
              <RoadmapBranch
                status="future"
                side="right"
                title="Ecosystem & Tooling"
                subtitle="Community and developer tools"
                icon={<Package className="w-8 h-8" />}
                color="gray"
                items={[
                  "🌟 Component marketplace",
                  "🌟 Third-party plugin system",
                  "🌟 VSCode extension with IntelliSense",
                  "🌟 Project templates and starters",
                  "🌟 Testing framework integration",
                  "🌟 CI/CD pipeline tools"
                ]}
              />
            </div>
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-24"
          >
            <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl p-8 sm:p-12 text-white overflow-hidden">
              {/* Animated background elements */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-4 left-4 w-20 h-20 bg-white rounded-full animate-pulse"></div>
                <div className="absolute bottom-8 right-8 w-16 h-16 bg-white rounded-full animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/3 w-12 h-12 bg-white rounded-full animate-pulse delay-500"></div>
              </div>
              
              <div className="relative z-10 text-center">
                <div className="flex items-center justify-center space-x-3 mb-6">
                  <Users className="w-10 h-10" />
                  <h2 className="text-3xl sm:text-4xl font-bold">Join Our Journey!</h2>
                </div>
                <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
                  DCFlight is open-source and community-driven. Help us build the future of cross-platform development 
                  with React-like developer experience and native performance.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <motion.a 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://github.com/squirelboy360/dcflight" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 inline-flex items-center justify-center space-x-2 shadow-lg min-w-[200px]"
                  >
                    <Code size={20} />
                    <span>Contribute on GitHub</span>
                  </motion.a>
                  <motion.a 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://coff.ee/squirelboy360" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-200 inline-flex items-center justify-center space-x-2 min-w-[200px]"
                  >
                    <Heart size={20} />
                    <span>Support the Project</span>
                  </motion.a>
                </div>
                
                {/* Additional stats or info */}
                <div className="mt-8 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 text-blue-100">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-sm">Active Development</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <span className="text-sm">Community Driven</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                    <span className="text-sm">Open Source</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Timeline Legend */}
          <div className="mt-12 bg-white rounded-xl shadow-lg border border-gray-100 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Status Legend</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <StatusLegend
                icon={<CheckCircle className="w-5 h-5 text-green-600" />}
                label="Completed"
                description="Ready to use"
              />
              <StatusLegend
                icon={<Clock className="w-5 h-5 text-blue-600" />}
                label="In Progress"
                description="Currently being developed"
              />
              <StatusLegend
                icon={<Calendar className="w-5 h-5 text-gray-500" />}
                label="Planned"
                description="Next in the roadmap"
              />
              <StatusLegend
                icon={<Zap className="w-5 h-5 text-purple-600" />}
                label="Future"
                description="Long-term goals"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function RoadmapBranch({ 
  status, 
  side, 
  title, 
  subtitle, 
  icon, 
  color, 
  items 
}: {
  status: 'completed' | 'in-progress' | 'planned' | 'future';
  side: 'left' | 'right';
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  color: string;
  items: string[];
}) {
  const nodeColors = {
    completed: 'bg-green-500 border-green-600',
    'in-progress': 'bg-blue-500 border-blue-600',
    planned: 'bg-gray-400 border-gray-500',
    future: 'bg-purple-500 border-purple-600',
  };

  const cardColors = {
    completed: 'border-green-200 bg-green-50/50',
    'in-progress': 'border-blue-200 bg-blue-50/50',
    planned: 'border-gray-200 bg-gray-50/50',
    future: 'border-purple-200 bg-purple-50/50',
  };

  const statusIcons = {
    completed: '✓',
    'in-progress': '⚡',
    planned: '○',
    future: '★',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="relative"
    >
      {/* Desktop Branch line */}
      <div className={`hidden lg:block absolute top-8 w-8 md:w-16 h-0.5 bg-gradient-to-r ${
        side === 'left' 
          ? `${nodeColors[status].includes('green') ? 'from-green-300 to-gray-300' : 
             nodeColors[status].includes('blue') ? 'from-blue-300 to-gray-300' :
             nodeColors[status].includes('gray') ? 'from-gray-300 to-gray-300' :
             'from-purple-300 to-gray-300'} right-0` 
          : `${nodeColors[status].includes('green') ? 'from-gray-300 to-green-300' : 
             nodeColors[status].includes('blue') ? 'from-gray-300 to-blue-300' :
             nodeColors[status].includes('gray') ? 'from-gray-300 to-gray-300' :
             'from-gray-300 to-purple-300'} left-0`
      }`}></div>

      {/* Desktop Node */}
      <div className={`hidden lg:block absolute ${
        side === 'left' 
          ? 'right-[-25px] md:right-[-33px]' 
          : 'left-[-25px] md:left-[-33px]'
      } top-4 w-8 h-8 md:w-12 md:h-12 rounded-full border-4 ${nodeColors[status]} flex items-center justify-center shadow-lg`}>
        <div className="text-white text-lg md:text-xl font-bold">
          {statusIcons[status]}
        </div>
      </div>

      {/* Content - Mobile: Full width, Desktop: Positioned left/right */}
      <div className={`lg:${side === 'left' ? 'text-right pr-8 md:pr-16' : 'text-left pl-8 md:pl-16'}`}>
        <motion.div 
          whileHover={{ scale: 1.02, y: -4 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className={`bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border-2 ${cardColors[status]} p-6 max-w-full lg:max-w-md xl:max-w-lg relative overflow-hidden`}
        >
          {/* Decorative gradient overlay */}
          <div className={`absolute inset-0 opacity-5 ${
            status === 'completed' ? 'bg-gradient-to-br from-green-400 to-green-600' :
            status === 'in-progress' ? 'bg-gradient-to-br from-blue-400 to-blue-600' :
            status === 'planned' ? 'bg-gradient-to-br from-gray-400 to-gray-600' :
            'bg-gradient-to-br from-purple-400 to-purple-600'
          }`}></div>
          
          {/* Mobile status indicator */}
          <div className={`lg:hidden absolute top-4 right-4 w-10 h-10 rounded-full border-2 ${nodeColors[status]} flex items-center justify-center shadow-md z-10`}>
            <div className="text-white text-sm font-bold">
              {statusIcons[status]}
            </div>
          </div>

          <div className={`flex items-start space-x-3 mb-6 lg:${
            side === 'left' ? 'justify-end' : 'justify-start'
          } relative z-10`}>
            <div className={`${side === 'left' ? 'lg:order-2' : 'lg:order-1'} p-2 rounded-lg ${
              status === 'completed' ? 'bg-green-100 text-green-600' :
              status === 'in-progress' ? 'bg-blue-100 text-blue-600' :
              status === 'planned' ? 'bg-gray-100 text-gray-600' :
              'bg-purple-100 text-purple-600'
            }`}>
              {icon}
            </div>
            <div className={`${side === 'left' ? 'lg:order-1' : 'lg:order-2'} flex-1 lg:flex-none`}>
              <h3 className="text-xl font-bold text-gray-900 mb-1">{title}</h3>
              <p className="text-gray-600 text-sm">{subtitle}</p>
            </div>
          </div>

          <div className="space-y-3 relative z-10">
            {items.map((item, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, x: side === 'left' ? 20 : -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`flex items-start space-x-3 text-sm lg:${
                  side === 'left' ? 'justify-end text-right' : 'justify-start text-left'
                }`}
              >
                <div className={`${
                  item.startsWith('✅') ? 'text-green-600 bg-green-50' :
                  item.startsWith('🚧') ? 'text-blue-600 bg-blue-50' :
                  item.startsWith('📅') ? 'text-orange-600 bg-orange-50' :
                  'text-gray-700 bg-gray-50'
                } ${side === 'left' ? 'lg:order-2' : 'lg:order-1'} flex-1 lg:flex-none px-3 py-2 rounded-lg leading-relaxed`}>
                  {item}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

function StatusLegend({ 
  icon, 
  label, 
  description 
}: { 
  icon: React.ReactNode; 
  label: string; 
  description: string; 
}) {
  return (
    <div className="flex items-start space-x-3">
      {icon}
      <div>
        <div className="font-medium text-gray-900">{label}</div>
        <div className="text-sm text-gray-600">{description}</div>
      </div>
    </div>
  );
}
