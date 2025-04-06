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
        home: 'src/header.html',
        footer: 'src/footer.html',
      },
      output: {
        assetFileNames: (assetInfo) => {
          // Keep all assets in their respective directories
          if (/\.(png|jpe?g)$/.test(assetInfo.name)) {
            return 'assets/images/[name].[hash][extname]';
          }
          if (/\.(otf)$/.test(assetInfo.name)) {
            return 'assets/fonts/[name].[hash][extname]';
          }
          return 'assets/[name].[hash][extname]';
        },
      },
    },
  },
  css: {
    devSourcemap: true,
    preprocessorOptions: {
      scss: {
        additionalData: '@use "src/scss/main.scss";',
      },
    },
  },
  optimizeDeps: {
    exclude: ['htmx.org'], // Exclude HTMX from dependency optimization
  },
});
