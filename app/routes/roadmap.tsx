import type { Route } from "./+types/roadmap";
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";
import { ArrowLeft, CheckCircle, Circle, Github, Heart } from "lucide-react";

type RoadmapItem = {
  title: string;
  status: 'completed' | 'in-progress' | 'planned';
  items: string[];
};

const roadmapData: RoadmapItem[] = [
  {
    title: "DCFlight Framework",
    status: "completed",
    items: [
      "Virtual DOM with efficient reconciliation",
      "React-like hooks system (useState, useStore, useEffect)",
      "Native view management and lifecycle",
      "Yoga layout engine integration",
      "Hot restart support for development",
      "Component protocol and architecture",
      "Event system with native bridge"
    ]
  },
  {
    title: "DCFlight iOS",
    status: "completed",
    items: [
      "DCFView - Basic container component",
      "DCFText - Text rendering with styling",
      "DCFButton - Interactive button component",
      "DCFImage - Image display with caching",
      "DCFScrollView - Scrollable container",
      "DCFTouchableOpacity - Touch interactions",
      "DCFTextInput - Text input fields",
      "DCFSafeAreaView - Safe area handling",
      "DCFGestureDetector - Gesture recognition",
      "DCFAnimatedView - View animations",
      "DCFAnimatedText - Text animations",
      "DCFSVG - SVG image support",
      "DCFIcon - Icon system",
      "DCFDropdown - Dropdown menu",
      "DCFFlatList - High-performance lists",
      "Modal components",
      "Navigation components",
      "Advanced animations"
    ]
  },
  {
    title: "DCFlight Android",
    status: "completed",
    items: [
      "DCFView - Basic container component",
      "DCFText - Text rendering with styling",
      "DCFButton - Interactive button component",
      "DCFImage - Image display with caching",
      "DCFScrollView - Scrollable container",
      "DCFTouchableOpacity - Touch interactions",
      "DCFTextInput - Text input fields",
      "DCFSafeAreaView - Safe area handling",
      "DCFGestureDetector - Gesture recognition",
      "DCFAnimatedView - View animations",
      "DCFAnimatedText - Text animations",
      "DCFSVG - SVG image support",
      "DCFIcon - Icon system",
      "DCFDropdown - Dropdown menu",
      "DCFFlatList - High-performance lists",
      "Modal components",
      "Navigation components",
      "Advanced animations"
    ]
  },
  {
    title: "DCFlight Web",
    status: "planned",
    items: [
      "DOM-based component rendering",
      "CSS-in-Dart styling system",
      "Web-specific event handling",
      "Progressive Web App support",
      "Browser compatibility layer",
      "Performance optimizations"
    ]
  },
  {
    title: "Advanced Features",
    status: "planned",
    items: [
      "DCFlight DevTools browser extension",
      "Component inspector and debugger",
      "Performance profiling tools",
      "Accessibility testing suite",
      "Code generation tools",
      "Visual component editor"
    ]
  },
  {
    title: "Ecosystem & Tooling",
    status: "in-progress",
    items: [
      "Component marketplace (pub.dev packages available)",
      "DCF Primitives - Core UI components",
      "DCF Animations - Animation utilities",
      "DCF Navigation - Routing and navigation",
      "Third-party plugin system",
      "VSCode extension with IntelliSense",
      "Project templates and starters",
      "Testing framework integration",
      "CI/CD pipeline tools"
    ]
  }
];

export default function Roadmap() {
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
            <h1 className="text-xl font-bold text-gray-900">Roadmap</h1>
            <div className="w-20"></div>
          </div>
        </div>
      </nav>

      <div className="pt-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 py-20">
          {/* Hero Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Development Roadmap
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Track our progress building the future of cross-platform development
            </p>
          </motion.div>

          {/* Roadmap Items */}
          <div className="space-y-8">
            {roadmapData.map((item, index) => (
              <RoadmapCard key={index} item={item} index={index} />
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-20 text-center"
          >
            <div className="bg-gray-50 rounded-2xl p-12 border border-gray-200">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Join Our Journey
              </h3>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                DCFlight is open-source and community-driven. Help us build the future of cross-platform development.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://github.com/squirelboy360/dcflight" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-xl font-medium hover:bg-gray-800 transition-colors"
                >
                  <Github size={20} />
                  <span>Contribute on GitHub</span>
                </a>
                <a 
                  href="https://coff.ee/squirelboy360" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-xl font-medium border border-gray-300 hover:border-gray-400 transition-colors"
                >
                  <Heart size={20} />
                  <span>Support the Project</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function RoadmapCard({ item, index }: { item: RoadmapItem; index: number }) {
  const statusConfig = {
    completed: {
      icon: CheckCircle,
      color: "text-green-600",
      bg: "bg-green-50",
      border: "border-green-200",
      label: "Completed"
    },
    "in-progress": {
      icon: Circle,
      color: "text-blue-600",
      bg: "bg-blue-50",
      border: "border-blue-200",
      label: "In Progress"
    },
    planned: {
      icon: Circle,
      color: "text-gray-400",
      bg: "bg-gray-50",
      border: "border-gray-200",
      label: "Planned"
    }
  };

  const config = statusConfig[item.status];
  const Icon = config.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow"
    >
      <div className="flex items-start gap-4 mb-6">
        <div className={`${config.bg} ${config.border} border rounded-lg p-3`}>
          <Icon className={`${config.color} w-6 h-6`} />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <h3 className="text-2xl font-bold text-gray-900">{item.title}</h3>
            <span className={`${config.bg} ${config.color} text-xs font-medium px-3 py-1 rounded-full`}>
              {config.label}
            </span>
          </div>
        </div>
      </div>
      
      <div className="space-y-2 ml-14">
        {item.items.map((subItem, subIndex) => (
          <div key={subIndex} className="flex items-start gap-3 text-gray-600">
            <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-400 flex-shrink-0"></div>
            <span className="text-sm leading-relaxed">{subItem}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
