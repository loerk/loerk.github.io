import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src',
  base: './',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      external: ['htmx.org'], // Exclude HTMX from bundling
      input: {
        main: 'src/main.html',
        index: 'src/index.html',
        home: 'src/animation.html',
        footer: 'src/footer.html',
      },
    },
  },
  optimizeDeps: {
    exclude: ['htmx.org'], // Exclude HTMX from dependency optimization
  },
});
