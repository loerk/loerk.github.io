import { defineConfig } from 'vite';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  root: 'src',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      external: ['htmx.org'], // Exclude HTMX from bundling
      input: {
        index: resolve(__dirname, 'src/index.html'),
        main: resolve(__dirname, 'src/main.html'),
        home: resolve(__dirname, 'src/home.html'),
        footer: resolve(__dirname, 'src/footer.html'),
      },
    },
  },
  optimizeDeps: {
    exclude: ['htmx.org'], // Exclude HTMX from dependency optimization
  },
});
