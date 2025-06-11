import { defineConfig } from 'vitest/config'

export default defineConfig({
  resolve: {
    conditions: ['module'],
  },
  test: {
    watch: false,
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setupTests.ts'],
    coverage: {
      provider: 'istanbul',
      include: ['src'],
      exclude: [
        './**/*.d.ts',
        './src/*.ts',
        './**/mocks/*.*',
        './**/{m,M}ock*.*',
        './**/*.test.tsx',
      ],
    },
  },
})
