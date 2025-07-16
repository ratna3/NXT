import React from 'react';
import { useWebVitals } from '../hooks/useWebVitals';
import { FaChartLine, FaClock, FaEye, FaMousePointer, FaServer } from 'react-icons/fa';

export const PerformanceMonitor: React.FC = () => {
  const vitals = useWebVitals();

  const getScoreColor = (value: number | null, thresholds: { good: number; poor: number }) => {
    if (value === null) return 'text-gray-500';
    if (value <= thresholds.good) return 'text-green-400';
    if (value <= thresholds.poor) return 'text-yellow-400';
    return 'text-red-400';
  };

  const formatValue = (value: number | null, unit: string = 'ms') => {
    if (value === null) return 'Measuring...';
    return `${Math.round(value)}${unit}`;
  };

  const metrics = [
    {
      name: 'CLS',
      label: 'Cumulative Layout Shift',
      icon: <FaChartLine className="text-xl" />,
      value: vitals.cls,
      unit: '',
      thresholds: { good: 0.1, poor: 0.25 },
      description: 'Visual stability score'
    },
    {
      name: 'INP',
      label: 'Interaction to Next Paint',
      icon: <FaMousePointer className="text-xl" />,
      value: vitals.inp,
      unit: 'ms',
      thresholds: { good: 200, poor: 500 },
      description: 'Responsiveness metric'
    },
    {
      name: 'FCP',
      label: 'First Contentful Paint',
      icon: <FaEye className="text-xl" />,
      value: vitals.fcp,
      unit: 'ms',
      thresholds: { good: 1800, poor: 3000 },
      description: 'Loading performance'
    },
    {
      name: 'LCP',
      label: 'Largest Contentful Paint',
      icon: <FaClock className="text-xl" />,
      value: vitals.lcp,
      unit: 'ms',
      thresholds: { good: 2500, poor: 4000 },
      description: 'Loading performance'
    },
    {
      name: 'TTFB',
      label: 'Time to First Byte',
      icon: <FaServer className="text-xl" />,
      value: vitals.ttfb,
      unit: 'ms',
      thresholds: { good: 800, poor: 1800 },
      description: 'Server response time'
    }
  ];

  return (
    <div className="futuristic-card">
      <div className="flex items-center mb-6">
        <FaChartLine className="text-2xl mr-3" style={{ color: '#00ff00' }} />
        <h2 className="text-2xl font-bold">Performance Monitor</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {metrics.map((metric) => (
          <div
            key={metric.name}
            className="p-4 rounded-lg transition-all duration-300"
            style={{ 
              backgroundColor: '#1a1a1a',
              border: '1px solid #374151',
              borderColor: '#374151'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#00ff00';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#374151';
            }}
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <span className="mr-2" style={{ color: '#00ff00' }}>{metric.icon}</span>
                <span className="font-bold text-lg">{metric.name}</span>
              </div>
              <span 
                className={`text-2xl font-bold ${getScoreColor(metric.value, metric.thresholds)}`}
              >
                {formatValue(metric.value, metric.unit)}
              </span>
            </div>
            
            <div className="text-sm text-gray-300 mb-1">{metric.label}</div>
            <div className="text-xs text-gray-500">{metric.description}</div>
            
            {/* Score indicator */}
            <div className="mt-3 flex space-x-1">
              <div 
                className={`h-2 w-full rounded ${
                  metric.value !== null && metric.value <= metric.thresholds.good
                    ? 'bg-green-400'
                    : 'bg-gray-600'
                }`}
              />
              <div 
                className={`h-2 w-full rounded ${
                  metric.value !== null && 
                  metric.value > metric.thresholds.good && 
                  metric.value <= metric.thresholds.poor
                    ? 'bg-yellow-400'
                    : 'bg-gray-600'
                }`}
              />
              <div 
                className={`h-2 w-full rounded ${
                  metric.value !== null && metric.value > metric.thresholds.poor
                    ? 'bg-red-400'
                    : 'bg-gray-600'
                }`}
              />
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 p-4 rounded-lg" style={{ backgroundColor: '#111827', border: '1px solid #374151' }}>
        <div className="text-sm text-gray-300">
          <div className="flex items-center space-x-4 mb-2">
            <span className="flex items-center"><span className="w-3 h-3 bg-green-400 rounded mr-2"></span>Good</span>
            <span className="flex items-center"><span className="w-3 h-3 bg-yellow-400 rounded mr-2"></span>Needs Improvement</span>
            <span className="flex items-center"><span className="w-3 h-3 bg-red-400 rounded mr-2"></span>Poor</span>
          </div>
          <p className="text-xs">Core Web Vitals are measured in real-time as you interact with the application.</p>
        </div>
      </div>
    </div>
  );
};
