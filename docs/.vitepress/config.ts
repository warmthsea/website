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