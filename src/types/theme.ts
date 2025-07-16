export interface Theme {
  id: string;
  name: string;
  description: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    surface: string;
    text: string;
  };
  styles: {
    borderRadius: string;
    borderWidth: string;
    fontFamily: string;
    animation: string;
  };
}

export const themes: Theme[] = [
  {
    id: 'cyberpunk',
    name: 'Cyberpunk Neon',
    description: 'Bright neon colors with a dark cyberpunk aesthetic',
    colors: {
      primary: '#00ffff',
      secondary: '#ff00ff',
      accent: '#00ff00',
      background: '#0a0a0a',
      surface: '#1a1a1a',
      text: '#ffffff',
    },
    styles: {
      borderRadius: '0px',
      borderWidth: '2px',
      fontFamily: 'Share Tech Mono',
      animation: 'glow',
    },
  },
  {
    id: 'holographic',
    name: 'Holographic Interface',
    description: 'Translucent surfaces with holographic effects',
    colors: {
      primary: '#4f46e5',
      secondary: '#7c3aed',
      accent: '#06b6d4',
      background: '#050505',
      surface: 'rgba(30, 30, 30, 0.8)',
      text: '#e5e7eb',
    },
    styles: {
      borderRadius: '12px',
      borderWidth: '1px',
      fontFamily: 'Orbitron',
      animation: 'pulse-slow',
    },
  },
  {
    id: 'matrix',
    name: 'Matrix Code',
    description: 'Green code rain aesthetic with digital elements',
    colors: {
      primary: '#00ff00',
      secondary: '#00cc00',
      accent: '#00ff88',
      background: '#000000',
      surface: '#001100',
      text: '#00ff00',
    },
    styles: {
      borderRadius: '0px',
      borderWidth: '1px',
      fontFamily: 'Share Tech Mono',
      animation: 'slide-up',
    },
  },
  {
    id: 'synthwave',
    name: 'Synthwave Retro',
    description: 'Retro 80s inspired with pink and purple gradients',
    colors: {
      primary: '#ff00ff',
      secondary: '#8000ff',
      accent: '#ff0080',
      background: '#1a0033',
      surface: '#330066',
      text: '#ffffff',
    },
    styles: {
      borderRadius: '8px',
      borderWidth: '2px',
      fontFamily: 'Orbitron',
      animation: 'glow',
    },
  },
  {
    id: 'neural',
    name: 'Neural Network',
    description: 'Clean, scientific interface with neural connections',
    colors: {
      primary: '#00d4aa',
      secondary: '#0066cc',
      accent: '#ffffff',
      background: '#0d1117',
      surface: '#161b22',
      text: '#f0f6fc',
    },
    styles: {
      borderRadius: '6px',
      borderWidth: '1px',
      fontFamily: 'Orbitron',
      animation: 'pulse-slow',
    },
  },
];

export const getThemeById = (id: string): Theme | undefined => {
  return themes.find(theme => theme.id === id);
};
