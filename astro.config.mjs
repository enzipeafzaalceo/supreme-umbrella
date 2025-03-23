// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import react from '@astrojs/react';

import netlify from '@astrojs/netlify';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.invisibletext.me',
  integrations: [mdx(), sitemap(), react()],
  adapter: netlify(),

  vite: {
    plugins: [tailwindcss()],
  },
});