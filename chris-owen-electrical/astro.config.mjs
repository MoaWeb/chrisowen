// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: 'https://MoaWeb.github.io/chrisowen',
  base: '/chrisowen',
  build: {
    assets: '_assets'
  },
  trailingSlash: 'always',
  compressHTML: true,
});
