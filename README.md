# Typed Vite React Template

A modern, type-safe React development template built with Vite, TypeScript, and TailwindCSS. This template provides a robust foundation for building scalable React applications with comprehensive tooling and best practices.

## 🚀 Quick Start

1. **create the project**:
   ```bash
   # If creating new project
   vite create typed-vite-react .
   ```

2. **Install dependencies**:
   ```bash
   yarn
   ```

3. **Start development server**:
   ```bash
   yarn dev
   ```

## 📋 Available Scripts

| Command | Description |
|---------|-------------|
| `yarn dev` | Start development server with auto-open and host access |
| `yarn build` | Build for production with TypeScript compilation |
| `yarn preview` | Preview production build locally |
| `yarn lint` | Run ESLint and Prettier with auto-fix |
| `yarn test` | Run tests in watch mode |
| `yarn test-once` | Run tests once |
| `yarn prepare` | Set up Husky git hooks |
| `yarn commitlint` | Validate commit messages |

## 🛠️ Tech Stack

### Core Framework
- **React 19** - Latest React with modern features
- **TypeScript 5.6.2** - Type-safe development
- **Vite 5.4.10** - Fast build tool and dev server

### Styling & UI
- **TailwindCSS 4.0.9** - Utility-first CSS framework
- **Lucide React 0.465.0** - Beautiful icon library
- **clsx 2.1.1** - Conditional className utility
- **tailwind-merge 2.5.5** - Tailwind class merging utility

### State Management & Data Fetching
- **Jotai 2.10.3** - Atomic state management
- **TanStack React Query 5.62.2** - Server state management
- **Ky 1.7.2** - HTTP client

### Forms & Validation
- **React Hook Form 7.54.2** - Performant forms
- **Zod 3.23.8** - TypeScript-first schema validation
- **@hookform/resolvers 3.10.0** - Form validation resolvers

### Routing & Internationalization
- **React Router 7.0.2** - Client-side routing
- **i18next 24.0.5** - Internationalization framework
- **react-i18next 15.1.3** - React bindings for i18next

### Utilities
- **Day.js 1.11.13** - Modern date manipulation library
- **React Hot Toast 2.5.2** - Lightweight toast notifications
- **@uidotdev/usehooks 2.4.1** - Collection of useful React hooks

## 🔧 Development Tools

### Code Quality
- **ESLint 9.13.0** - JavaScript/TypeScript linting
- **Prettier 3.3.3** - Code formatting
- **TypeScript ESLint 8.11.0** - TypeScript-specific linting rules
- **ESLint Plugins**:
  - `eslint-plugin-react 7.37.2` - React-specific rules
  - `eslint-plugin-react-hooks 5.0.0` - React Hooks rules
  - `eslint-plugin-react-refresh 0.4.14` - Fast refresh support

### Testing
- **Vitest 2.1.4** - Fast unit testing framework
- **Testing Library**:
  - `@testing-library/react 16.0.1` - React component testing
  - `@testing-library/dom 10.4.0` - DOM testing utilities
  - `@testing-library/user-event 14.5.2` - User interaction simulation
  - `@testing-library/jest-dom 6.6.3` - Custom DOM matchers
- **MSW 2.6.6** - API mocking for tests
- **jsdom 25.0.1** - DOM environment for testing

### Git Hooks & Commit Standards
- **Husky 9.1.6** - Git hooks management
- **Commitlint 19.5.0** - Commit message validation
- **lint-staged 15.2.10** - Run linters on staged files

### Build & Development
- **@vitejs/plugin-react-swc 3.5.0** - Fast React compilation
- **vite-tsconfig-paths 5.1.0** - TypeScript path resolution
- **PostCSS 8.4.47** - CSS processing
- **@tailwindcss/vite 4.0.9** - TailwindCSS Vite integration
- **@tailwindcss/postcss 4.0.9** - TailwindCSS PostCSS plugin

### Type Definitions
- **@types/react 19.0.0** - React TypeScript definitions
- **@types/react-dom 19.0.0** - React DOM TypeScript definitions
- **@types/node 22.13.5** - Node.js TypeScript definitions

## 📁 Project Structure

```
typed-vite-react-template/
├── public/                 # Static assets
├── src/
│   ├── assets/            # Images, fonts, etc.
│   ├── components/        # Reusable React components
│   ├── consts/           # Application constants
│   ├── hooks/            # Custom React hooks
│   ├── locales/          # Internationalization files
│   ├── pages/            # Page components
│   ├── services/         # API services
│   ├── stores/           # State management
│   ├── tests/            # Test files
│   ├── types/            # TypeScript type definitions
│   │   └── env.d.ts      # Environment variable types
│   ├── utils/            # Utility functions
│   ├── App.tsx           # Main App component
│   ├── main.tsx          # Application entry point
│   └── index.css         # Global styles
├── .env.development      # Development environment variables
├── .env.production       # Production environment variables
├── package.json          # Dependencies and scripts
├── tsconfig.json         # TypeScript configuration
├── vite.config.ts        # Vite configuration
├── vitest.config.ts      # Vitest configuration
└── README.md            # This file
```

## 🎯 Key Features

- **Type Safety**: Full TypeScript support with strict configuration
- **Modern React**: Latest React 19 features and patterns
- **Fast Development**: Vite for lightning-fast HMR and builds
- **Environment Configuration**: Secure environment variable management with TypeScript support
- **Comprehensive Testing**: Vitest + Testing Library setup
- **Code Quality**: ESLint + Prettier with pre-configured rules
- **Git Workflow**: Husky + Commitlint for consistent commits
- **Internationalization**: i18next setup for multi-language support
- **Form Handling**: React Hook Form with Zod validation
- **State Management**: Jotai for atomic state management
- **API Integration**: TanStack Query for server state
- **User Feedback**: React Hot Toast for notifications
- **Styling**: TailwindCSS with utility-first approach

## 🚀 Getting Started

1. **Environment Setup**:
   ```bash
   # Ensure you have Node.js 20+ and Yarn installed
   node --version
   yarn --version
   ```

2. **Install Dependencies**:
   ```bash
   yarn install
   ```

3. **Start Development**:
   ```bash
   yarn dev
   ```

4. **Run Tests**:
   ```bash
   yarn test
   ```

5. **Build for Production**:
   ```bash
   yarn build
   ```

## 🔐 Environment Variables

This project uses Vite's environment variable system for configuration management. Environment variables provide a secure way to handle configuration that varies between development and production environments.

### How Environment Variables Work

- **Vite Convention**: All environment variables must be prefixed with `VITE_` to be accessible in the client-side code
- **Type Safety**: Environment variables are fully typed with TypeScript definitions in `src/types/env.d.ts`
- **Build-time Injection**: Variables are embedded at build time, not runtime

### Environment Files

The project includes two environment-specific files:

- **`.env.development`** - Variables for development environment
- **`.env.production`** - Variables for production environment

These files are **empty by default** and should be configured based on your project needs.

### Adding Environment Variables

1. **Add to Environment Files**:
   ```bash
   # .env.development
   VITE_API_BASE_URL=http://localhost:3000/api
   VITE_DEBUG_MODE=true
   
   # .env.production
   VITE_API_BASE_URL=https://api.yourdomain.com
   VITE_DEBUG_MODE=false
   ```

2. **Update TypeScript Definitions**:
   ```typescript
   // src/types/env.d.ts
   interface ImportMetaEnv {
     readonly VITE_API_BASE_URL: string
     readonly VITE_DEBUG_MODE: string
   }
   ```

3. **Use in Your Code**:
   ```typescript
   const apiUrl = import.meta.env.VITE_API_BASE_URL
   const isDebugMode = import.meta.env.VITE_DEBUG_MODE === 'true'
   ```

### Common Environment Variables

| Variable | Purpose | Example |
|----------|---------|---------|
| `VITE_API_BASE_URL` | API endpoint base URL | `https://api.example.com` |
| `VITE_APP_TITLE` | Application title | `My React App` |
| `VITE_DEBUG_MODE` | Enable debug features | `true` or `false` |
| `VITE_SENTRY_DSN` | Sentry error tracking | `https://...` |
| `VITE_GOOGLE_ANALYTICS_ID` | Google Analytics ID | `G-XXXXXXXXXX` |

### Security Considerations

⚠️ **Important Security Notes**:

- **Never commit sensitive data**: Environment files are gitignored for security
- **Client-side exposure**: All `VITE_*` variables are visible in the browser
- **Server secrets**: Use server-side environment variables for sensitive data like API keys
- **Validation**: Always validate environment variables in your application

### Best Practices

- Use descriptive variable names with the `VITE_` prefix
- Provide default values for optional variables
- Document all environment variables in your team
- Use different values for development and production
- Validate required environment variables at startup

## 📝 Development Guidelines

### Code Style
- Use TypeScript for all new code
- Follow ESLint and Prettier configurations
- Use conventional commit messages
- Write tests for new features

### Component Structure
- Place reusable components in `src/components/`
- Use TypeScript interfaces for props
- Implement proper error boundaries
- Follow React best practices

### State Management
- Use Jotai for global state
- Use React Query for server state
- Keep component state local when possible

### Styling
- Use TailwindCSS utility classes
- Create custom components for repeated patterns
- Follow responsive design principles

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Run the test suite
6. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- [Vite](https://vitejs.dev/) for the fast build tool
- [React](https://react.dev/) for the UI library
- [TailwindCSS](https://tailwindcss.com/) for the styling framework
- [TanStack](https://tanstack.com/) for excellent React tools
- [Jotai](https://jotai.org/) for atomic state management
