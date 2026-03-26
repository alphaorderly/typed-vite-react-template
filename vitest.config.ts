import { defineConfig } from 'vite-plus';

export default defineConfig({
    test: {
        environment: 'jsdom',
        setupFiles: ['./vitest-setup.ts'], // 1
    },
});
