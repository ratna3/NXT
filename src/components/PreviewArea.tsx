import React from 'react';
import { useTheme } from '../hooks/useTheme';
import { FaRocket, FaCode, FaDatabase, FaNetworkWired } from 'react-icons/fa';

export const PreviewArea: React.FC = () => {
  const { currentTheme } = useTheme();

  const sampleCards = [
    {
      icon: <FaRocket className="text-3xl mb-4" />,
      title: 'Launch Mission',
      description: 'Deploy your application to the digital frontier',
      stats: '99.9% Uptime'
    },
    {
      icon: <FaCode className="text-3xl mb-4" />,
      title: 'Code Analysis',
      description: 'Advanced AI-powered code optimization',
      stats: '1.2M Lines Processed'
    },
    {
      icon: <FaDatabase className="text-3xl mb-4" />,
      title: 'Data Matrix',
      description: 'Real-time data visualization and analytics',
      stats: '847 TB Stored'
    },
    {
      icon: <FaNetworkWired className="text-3xl mb-4" />,
      title: 'Neural Network',
      description: 'Connected systems across the digital realm',
      stats: '2.5K Nodes Active'
    }
  ];

  return (
    <div 
      className="futuristic-card"
      style={{
        background: `linear-gradient(135deg, ${currentTheme.colors.surface}CC, ${currentTheme.colors.background}99)`,
        borderColor: currentTheme.colors.primary,
        fontFamily: currentTheme.styles.fontFamily,
      }}
    >
      <div className="mb-6">
        <h2 
          className="text-3xl font-bold mb-2"
          style={{ 
            color: currentTheme.colors.primary,
            fontFamily: currentTheme.styles.fontFamily 
          }}
        >
          {currentTheme.name} Preview
        </h2>
        <p className="text-gray-300">Live preview of the selected theme</p>
      </div>

      {/* Sample Navigation */}
      <nav className="mb-8">
        <div 
          className="flex space-x-6 p-4 rounded-lg border"
          style={{
            backgroundColor: currentTheme.colors.surface,
            borderColor: currentTheme.colors.secondary,
            borderRadius: currentTheme.styles.borderRadius,
            borderWidth: currentTheme.styles.borderWidth,
          }}
        >
          <a 
            href="#" 
            className="hover:opacity-80 transition-opacity"
            style={{ color: currentTheme.colors.primary }}
          >
            Dashboard
          </a>
          <a 
            href="#" 
            className="hover:opacity-80 transition-opacity"
            style={{ color: currentTheme.colors.text }}
          >
            Analytics
          </a>
          <a 
            href="#" 
            className="hover:opacity-80 transition-opacity"
            style={{ color: currentTheme.colors.text }}
          >
            Settings
          </a>
        </div>
      </nav>

      {/* Sample Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {sampleCards.map((card, index) => (
          <div
            key={index}
            className="p-6 transition-all duration-300 hover:scale-105"
            style={{
              backgroundColor: currentTheme.colors.surface,
              border: `${currentTheme.styles.borderWidth} solid ${currentTheme.colors.accent}40`,
              borderRadius: currentTheme.styles.borderRadius,
              color: currentTheme.colors.text,
              fontFamily: currentTheme.styles.fontFamily,
            }}
          >
            <div style={{ color: currentTheme.colors.accent }}>
              {card.icon}
            </div>
            <h3 
              className="text-xl font-bold mb-2"
              style={{ color: currentTheme.colors.primary }}
            >
              {card.title}
            </h3>
            <p className="mb-4" style={{ color: currentTheme.colors.text }}>
              {card.description}
            </p>
            <div 
              className="text-sm font-mono"
              style={{ color: currentTheme.colors.secondary }}
            >
              {card.stats}
            </div>
          </div>
        ))}
      </div>

      {/* Sample Button */}
      <div className="mt-8 flex justify-center">
        <button
          className="px-8 py-3 font-bold transition-all duration-300 hover:scale-110 hover:shadow-lg"
          style={{
            backgroundColor: currentTheme.colors.primary,
            color: currentTheme.colors.background,
            border: `${currentTheme.styles.borderWidth} solid ${currentTheme.colors.primary}`,
            borderRadius: currentTheme.styles.borderRadius,
            fontFamily: currentTheme.styles.fontFamily,
            boxShadow: `0 0 20px ${currentTheme.colors.primary}40`,
          }}
        >
          Execute Command
        </button>
      </div>
    </div>
  );
};
