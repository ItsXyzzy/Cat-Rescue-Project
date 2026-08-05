import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://itsxyzzy.github.io',
  base: '/Cat-Rescue-Project',
  vite: {
    server: {
      allowedHosts: true
    }
  }
});
