# Typed Vite React Template

A modern, type-safe React template with Vite, TypeScript, and TailwindCSS.

## Quick Start

```bash
yarn        # Install dependencies
yarn dev    # Start development server
```

## Scripts

| Command          | Description              |
| ---------------- | ------------------------ |
| `yarn dev`       | Start development server |
| `yarn build`     | Build for production     |
| `yarn preview`   | Preview production build |
| `yarn lint`      | Run ESLint & Prettier    |
| `yarn test`      | Run tests in watch mode  |
| `yarn test-once` | Run tests once           |

## Dependencies

### Core

| Package    | Version |
| ---------- | ------- |
| react      | 19      |
| typescript | 5.6.2   |
| vite       | 5.4.10  |

### Styling & UI

| Package        | Version |
| -------------- | ------- |
| tailwindcss    | 4.0.9   |
| lucide-react   | 0.465.0 |
| clsx           | 2.1.1   |
| tailwind-merge | 2.5.5   |

### State & Data Fetching

| Package               | Version |
| --------------------- | ------- |
| jotai                 | 2.10.3  |
| @tanstack/react-query | 5.62.2  |
| ky                    | 1.7.2   |

### Forms & Validation

| Package             | Version |
| ------------------- | ------- |
| react-hook-form     | 7.54.2  |
| zod                 | 3.23.8  |
| @hookform/resolvers | 3.10.0  |

### Routing & i18n

| Package       | Version |
| ------------- | ------- |
| react-router  | 7.0.2   |
| i18next       | 24.0.5  |
| react-i18next | 15.1.3  |

### Utilities

| Package            | Version |
| ------------------ | ------- |
| dayjs              | 1.11.13 |
| react-hot-toast    | 2.5.2   |
| @uidotdev/usehooks | 2.4.1   |

### Dev Tools

| Package                | Version |
| ---------------------- | ------- |
| eslint                 | 9.13.0  |
| prettier               | 3.3.3   |
| vitest                 | 2.1.4   |
| @testing-library/react | 16.0.1  |
| msw                    | 2.6.6   |
| husky                  | 9.1.6   |
| commitlint             | 19.5.0  |
| lint-staged            | 15.2.10 |

## Project Structure

```
src/
├── assets/        # Images, fonts
├── components/    # Reusable components
├── consts/        # Constants
├── hooks/         # Custom hooks
├── locales/       # i18n files (en, ko)
├── pages/         # Page components
├── services/      # API services
├── stores/        # Jotai state
├── tests/         # Test files
├── types/         # TypeScript types
└── utils/         # Utilities
```

## Environment Variables

All client-side env vars must be prefixed with `VITE_`. Define them in `.env.development` / `.env.production` and add types in `src/types/env.d.ts`.

```ts
// src/types/env.d.ts
interface ImportMetaEnv {
    readonly VITE_API_BASE_URL: string;
}
```

> ⚠️ All `VITE_*` variables are exposed to the browser. Never store secrets here.

## License

MIT
