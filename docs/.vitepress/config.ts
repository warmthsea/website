import { defineConfig } from 'vitepress'

export default defineConfig({
    title: 'WarmthSea',
    description: 'Just playing around.',
    base: '/vitepress-starter/',
    vue: {
        reactivityTransform: true
    },
    themeConfig: {
        logo: '/logo.svg',
        nav: [
            { text: 'Life', link: '/life/' },
            { text: 'Learn', link: '/learn/' },
            { text: 'About', link: '/about/' },
            {
                text: 'Resources',
                items: [
                    { text: 'Vue', link: 'https://vuejs.org' },
                    { text: 'Vite', link: 'https://vitejs.dev' },
                    { text: 'VitePress', link: 'https://vitepress.vuejs.org' },
                    { text: 'Nuxt3', link: 'https://nuxtjs.org' },
                ]
            }
        ],
        socialLinks: [
            { icon: 'twitter', link: '' },
            { icon: 'instagram', link: 'https://www.instagram.com/warmthsea/' },
            { icon: 'github', link: 'https://github.com/warmthsea' },
        ],
    },
    vite: {
        server: {
            host: true,
            port: 302,
            open: true,
        },
    },
});