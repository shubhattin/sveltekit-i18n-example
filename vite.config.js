import { sveltekit } from '@sveltejs/kit/vite';
import path from 'path';

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [sveltekit()],
  server: {
    strictPort: true
  },
  resolve: {
    alias: {
      '@langs': path.resolve('./src/langs'),
      '@tools': path.resolve('./src/tools'),
      '@components': path.resolve('./src/components'),
      '@state': path.resolve('./src/state')
    }
  }
};

export default config;
