import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { builtinModules } from 'module';

const nodeBuiltins = [
  ...builtinModules,
  ...builtinModules.map((mod) => `node:${mod}`),
  'module', 'fs', 'path', 'url', 'fsevents'
];

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://backend-service:3001',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '')
      }
    }
  },
  resolve: {
    alias: {
      'node:fs': '/src/shims/empty.js',
      'fs': '/src/shims/empty.js',
      'node:path': '/src/shims/empty.js',
      'path': '/src/shims/empty.js',
      'node:url': '/src/shims/empty.js',
      'url': '/src/shims/empty.js',
      'module': '/src/shims/empty.js'
    }
  },
  build: {
    rollupOptions: {
      external: nodeBuiltins
    }
  }
});
