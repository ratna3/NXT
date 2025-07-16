import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { ThemeSelector } from './components/ThemeSelector';
import { PreviewArea } from './components/PreviewArea';
import { PerformanceMonitor } from './components/PerformanceMonitor';
import { FaSpaceShuttle } from 'react-icons/fa';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen text-white matrix-bg" style={{ backgroundColor: '#0a0a0a' }}>
        {/* Animated Background Elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full pulse-animation"></div>
          <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-purple-400 rounded-full pulse-animation" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-green-400 rounded-full pulse-animation" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-pink-400 rounded-full pulse-animation" style={{ animationDelay: '0.5s' }}></div>
        </div>

        {/* Header */}
        <header className="relative z-10 p-6" style={{ borderBottom: '1px solid #374151', backdropFilter: 'blur(10px)' }}>
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <FaSpaceShuttle className="text-3xl float-animation" style={{ color: '#00ffff' }} />
              <h1 className="text-3xl font-bold" style={{ fontFamily: 'Orbitron, monospace' }}>
                <span className="text-transparent bg-clip-text" style={{
                  backgroundImage: 'linear-gradient(45deg, #00ffff, #8000ff, #ff0080)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text'
                }}>
                  Futuristic Design Studio
                </span>
              </h1>
            </div>
            <div className="text-sm pulse-animation" style={{ fontFamily: 'Share Tech Mono, monospace', color: '#00ffff' }}>
              ▶ Next Generation UI Themes
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="relative z-10 p-6">
          <div className="max-w-7xl mx-auto space-y-8">
            {/* Introduction */}
            <div className="text-center py-8">
              <h2 className="text-5xl font-bold mb-6 text-transparent bg-clip-text float-animation" 
                  style={{ 
                    backgroundImage: 'linear-gradient(135deg, #00ffff, #8000ff, #ff0080, #00ff80)',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    backgroundSize: '300% 300%',
                    animation: 'gradient-shift 3s ease infinite'
                  }}>
                ⚡ Experience the Future of Web Design ⚡
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                🚀 Select from our collection of <span className="text-cyan-400 font-bold">futuristic themes</span> and watch as your interface 
                transforms in <span className="text-purple-400 font-bold">real-time</span>. Each theme brings its own personality and visual identity 
                to create immersive digital experiences that push the boundaries of modern web design.
              </p>
              
              {/* Decorative Elements */}
              <div className="flex justify-center space-x-8 mt-8">
                <div className="text-cyan-400 text-2xl pulse-animation">◆</div>
                <div className="text-purple-400 text-2xl pulse-animation" style={{ animationDelay: '0.5s' }}>◇</div>
                <div className="text-pink-400 text-2xl pulse-animation" style={{ animationDelay: '1s' }}>◆</div>
                <div className="text-green-400 text-2xl pulse-animation" style={{ animationDelay: '1.5s' }}>◇</div>
              </div>
            </div>

            {/* Theme Selector */}
            <ThemeSelector />

            {/* Preview Area */}
            <PreviewArea />

            {/* Performance Monitor */}
            <PerformanceMonitor />
          </div>
        </main>

        {/* Footer */}
                <footer className="p-6 mt-12" style={{ borderTop: '1px solid #374151' }}>
          <div className="max-w-7xl mx-auto text-center text-gray-500">
            <p style={{ fontFamily: 'Share Tech Mono, monospace' }}>Built with React, TypeScript, Webpack, and Tailwind CSS</p>
            <p className="text-sm mt-2">Performance monitored with Web Vitals • Code quality ensured with ESLint</p>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;
