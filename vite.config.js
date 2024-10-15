import { defineConfig } from "vite";
import { plugin as markdownPlugin } from 'vite-plugin-markdown'

export default defineConfig({
  base: '/markdown-portfolio/',
  plugins: [
    markdownPlugin({
      mode: 'html'
    }),
  ],
});
