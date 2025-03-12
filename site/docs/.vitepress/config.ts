import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'A-UI',
  description: 'A VitePress Site',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: '指南', link: '/guild/installation' },
      { text: '组件', link: '/components/installation' },
    ],

    sidebar: {
      '/components/': [
        {
          text: '组件',
          items: [{ text: 'Button', link: '/components/button' }],
        },
      ],
      '/guild/': [
        {
          text: '指南',
          items: [{ text: '安装', link: '/guild/installation' }],
        },
      ],
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }],
  },
});
