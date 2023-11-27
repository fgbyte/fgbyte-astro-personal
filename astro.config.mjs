import { defineConfig } from 'astro/config';
import million from 'million/compiler';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react"

// import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  site: 'https://fgbyte.com',
  integrations: [mdx(), sitemap(), tailwind(), react()],
  vite: {
    plugins: [million.vite({ mode: 'react', server: true, auto: true })]
  }
});