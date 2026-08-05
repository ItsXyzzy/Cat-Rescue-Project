import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://itsxyzzy.github.io',
  base: '/pawswick-rescue',
  vite: {
    server: {
      allowedHosts: true
    }
  }
});
