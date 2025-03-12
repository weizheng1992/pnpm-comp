/// <reference types="vitest" />

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';

import { resolve } from 'path';
// @ts-ignore
import DefineOptions from 'unplugin-vue-define-options/vite';
// @ts-ignore
import ElementPlus from 'unplugin-element-plus/vite';

import purgeIcons from 'vite-plugin-purge-icons';

export default defineConfig({
  build: {
    // target: "modules",
    // //压缩
    // minify: true,
    //css分离
    //cssCodeSplit: true,
    rollupOptions: {
      //忽略打包vue文件
      external: ['vue', /\.less/, '@a-ui/utils'],
      input: ['index.ts'],
      output: [
        {
          format: 'es',
          //不用打包成.es.js,这里我们想把它打包成.js
          entryFileNames: '[name].mjs',
          //让打包目录和我们目录对应
          preserveModules: true,
          exports: 'named',
          //配置打包根目录
          dir: '../a-ui/es',
        },
        {
          format: 'cjs',
          //不用打包成.cjs
          entryFileNames: '[name].js',
          //让打包目录和我们目录对应
          preserveModules: true,
          exports: 'named',
          //配置打包根目录
          dir: '../a-ui/lib',
        },
      ],
    },
    lib: {
      entry: './index.ts',
      name: 'a-ui',
    },
  },

  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    purgeIcons(),
    ElementPlus(),
    dts({
      entryRoot: 'src',
      outputDir: ['../a-ui/es/src', '../a-ui/lib/src'],
      //指定使用的tsconfig.json为我们整个项目根目录下掉,如果不配置,你也可以在components下新建tsconfig.json
      tsConfigFilePath: '../../tsconfig.json',
    }),
    DefineOptions(),
    {
      name: 'style',
      generateBundle(_, bundle) {
        //这里可以获取打包后的文件目录以及代码code
        const keys = Object.keys(bundle);

        for (const key of keys) {
          const bundler: any = bundle[key as any];
          //rollup内置方法,将所有输出文件code中的.less换成.css,因为我们当时没有打包less文件

          this.emitFile({
            type: 'asset',
            fileName: key, //文件名名不变
            source: bundler.code.replace(/\.less/g, '.css'),
          });
        }
      },
    },
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  test: {
    environment: 'happy-dom',
    globals: true,
    deps: {
      inline: ['element-plus'],
    },
  },
});
