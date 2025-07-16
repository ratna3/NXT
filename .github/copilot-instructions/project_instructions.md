# Project Instructions for GitHub Copilot

<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

## Project Overview

This is a React TypeScript application that showcases futuristic website designs and themes. The application allows users to select different theme options and see live previews of how those themes affect the UI components.

## Technical Stack

- **Frontend Framework**: React 18+ with TypeScript
- **Build System**: Webpack 5 with Babel for compilation
- **Styling**: Tailwind CSS with custom futuristic design tokens
- **Icons**: React Icons library
- **Performance**: Web Vitals integration for monitoring
- **Code Quality**: ESLint with TypeScript and React plugins
- **Development**: Webpack Dev Server with Hot Module Replacement

## Code Style Guidelines

### TypeScript
- Use strict TypeScript configuration
- Prefer type-only imports when importing types: `import type { TypeName } from 'module'`
- Define interfaces for all component props and complex data structures
- Use proper generic typing for reusable components

### React Components
- Use functional components with hooks
- Implement proper prop typing with TypeScript interfaces
- Use React.FC type annotation for component definitions
- Implement proper error boundaries where appropriate

### Styling
- Use Tailwind CSS utility classes primarily
- Custom CSS should be added to index.css using @layer directives
- Follow the futuristic design system with neon colors and cyberpunk aesthetics
- Use CSS custom properties for dynamic theming

### State Management
- Use React Context API for global theme state
- Implement custom hooks for complex logic (e.g., useWebVitals, useTheme)
- Keep component state local when possible

## Design System

### Color Palette
- **Neon Blue**: #00ffff - Primary accent color
- **Neon Green**: #00ff00 - Success and performance indicators
- **Neon Pink**: #ff00ff - Secondary accent
- **Neon Purple**: #8000ff - Tertiary accent
- **Dark Background**: #0a0a0a - Main background
- **Dark Card**: #1a1a1a - Component backgrounds

### Typography
- **Primary Font**: Orbitron (futuristic, geometric)
- **Monospace Font**: Share Tech Mono (code and technical content)

### Component Patterns
- All major UI components should use the `futuristic-card` class
- Implement hover effects with glow and scale transforms
- Use consistent spacing with Tailwind's spacing scale
- Apply subtle animations for enhanced user experience

## Performance Considerations

- Implement Web Vitals monitoring throughout the application
- Optimize bundle size with proper code splitting
- Use React.memo for expensive components when appropriate
- Implement proper loading states and error handling

## Theme System

The application uses a comprehensive theming system:
- Theme definitions are stored in `src/types/theme.ts`
- Theme context provides global state management
- Themes control colors, fonts, animations, and styling
- Live preview updates immediately when themes change

## Development Guidelines

### File Structure
```
src/
  components/     # Reusable UI components
  contexts/       # React contexts for state management
  hooks/          # Custom React hooks
  types/          # TypeScript type definitions
  utils/          # Utility functions
```

### Component Development
- Each component should be self-contained with its own TypeScript interface
- Implement proper accessibility attributes
- Use semantic HTML elements
- Test components with different theme configurations

### Performance Monitoring
- Integrate Web Vitals metrics into new features
- Monitor bundle size impact of new dependencies
- Ensure themes don't negatively impact performance

## Build System Notes

- Webpack configuration supports modern ES modules and TypeScript
- Babel handles cross-browser compatibility
- PostCSS processes Tailwind CSS directives
- ESLint enforces code quality standards

When working on this project, prioritize:
1. Type safety and proper TypeScript usage
2. Consistent design system implementation
3. Performance optimization
4. Accessibility and semantic HTML
5. Code quality and maintainability
