import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

// @ts-ignore
import DefineOptions from 'unplugin-vue-define-options/vite';
// @ts-ignore
import ElementPlus from 'unplugin-element-plus/vite';

import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
export default defineConfig({
  plugins: [
    vue(),
    DefineOptions(),
    ElementPlus(),
    createSvgIconsPlugin({
      iconDirs: [resolve(process.cwd(), 'src/assets/icons')],
      // svgoOptions: import.meta.env.PROD,
    }),
  ],
});
