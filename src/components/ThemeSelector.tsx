import React from 'react';
import { useTheme } from '../hooks/useTheme';
import { FaPalette } from 'react-icons/fa';

export const ThemeSelector: React.FC = () => {
  const { currentTheme, setTheme, availableThemes } = useTheme();

  return (
    <div className="futuristic-card">
      <div className="flex items-center mb-4">
        <FaPalette className="text-2xl mr-3" style={{ color: '#00ffff' }} />
        <h2 className="text-2xl font-bold">Select Theme</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {availableThemes.map((theme) => (
          <div
            key={theme.id}
            className={`
              p-4 rounded-lg border cursor-pointer transition-all duration-300
              ${currentTheme.id === theme.id 
                ? 'bg-blue-900/20' 
                : ''
              }
            `}
            onClick={() => setTheme(theme)}
            style={{
              borderColor: currentTheme.id === theme.id ? '#00ffff' : undefined,
              background: currentTheme.id === theme.id 
                ? `linear-gradient(135deg, ${theme.colors.primary}20, ${theme.colors.secondary}20)`
                : undefined
            }}
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-bold text-lg">{theme.name}</h3>
              <div className="flex space-x-1">
                <div 
                  className="w-4 h-4 rounded-full border"
                  style={{ backgroundColor: theme.colors.primary }}
                />
                <div 
                  className="w-4 h-4 rounded-full border"
                  style={{ backgroundColor: theme.colors.secondary }}
                />
                <div 
                  className="w-4 h-4 rounded-full border"
                  style={{ backgroundColor: theme.colors.accent }}
                />
              </div>
            </div>
            
            <p className="text-sm text-gray-300 mb-3">{theme.description}</p>
            
            <div className="text-xs text-gray-400">
              <span className="font-mono">{theme.styles.fontFamily}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
