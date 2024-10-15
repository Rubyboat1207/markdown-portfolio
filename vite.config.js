import { defineConfig } from "vite";
import { plugin as markdownPlugin } from 'vite-plugin-markdown'

export default defineConfig({
  plugins: [
    markdownPlugin({
      mode: 'html'
    }),
  ],
});
