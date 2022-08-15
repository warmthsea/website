import { defineConfig } from 'vitepress';

export default defineConfig({
    title: 'WarmthSea',
    description: 'Just playing around.',
    base: '/vitepress-starter/',

    head: [
        ['link', { rel: 'icon', type: 'image/svg+xml', href: 'logo.svg' }],
    ],
    lastUpdated: true,
    themeConfig: {
        logo: '/logo.svg',
        nav: [
            { text: 'Life', link: '/life/' },
            { text: 'Learn', link: '/learn/computer' },
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
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2022-present WarmthSea'
        },

        sidebar: {
            
        }
    },
    vite: {
        server: {
            host: true,
            port: 302,
            open: true,
        },
    },
});