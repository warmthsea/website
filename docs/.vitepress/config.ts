import { defineConfig } from "vitepress";

export default defineConfig({
    title: "WarmthSea",
    description: "Just playing around.",
    base: "/website/",

    head: [["link", { rel: "icon", type: "image/svg+xml", href: "logo.svg" }]],
    lastUpdated: true,
    themeConfig: {
        logo: "/logo.svg",
        nav: [
            { text: "Life", link: "/life/" },
            {
                text: "Learn",
                items: [
                    {
                        text: "计算机系统机构",
                        link: "/computer/",
                        activeMatch: "/computer/",
                    },
                ],
            },
            // { text: 'About', link: '/about/' },
            {
                text: "Resources",
                items: [
                    { text: "Vue", link: "https://vuejs.org" },
                    { text: "Vite", link: "https://vitejs.dev" },
                    { text: "VitePress", link: "https://vitepress.vuejs.org" },
                    { text: "Nuxt3", link: "https://nuxtjs.org" },
                ],
            },
        ],
        socialLinks: [
            { icon: "twitter", link: "https://twitter.com/warmthsea" },
            { icon: "instagram", link: "https://www.instagram.com/warmthsea/" },
            { icon: "github", link: "https://github.com/warmthsea" },
        ],
        footer: {
            message: "Released under the MIT License.",
            copyright: "Copyright © 2022-present WarmthSea",
        },
        sidebar: {
            "/computer/": [
                {
                    text: "计算机系统结构",
                    items: [
                        {
                            text: "第一章 概论",
                            link: "/computer/one",
                        },
                        {
                            text: "第二章 数据表示、寻址方式与指令系统 ★",
                            link: "/computer/two",
                        },
                        {
                            text: "第三章 存储、中断、总线与I/O系统 ★",
                            link: "/computer/three",
                        },
                        {
                            text: "第四章 存储体系 ★",
                            link: "/computer/four",
                        },
                        {
                            text: "第五章 标量处理机 ★",
                            link: "/computer/five",
                        },
                        {
                            text: "第六章 向量处理机 ★",
                            link: "/computer/six",
                        },
                        {
                            test: "第七章 多处理机",
                            link: "/computer/seven",
                        },
                        {
                            test: "第八章 数据流计算机和规约机",
                            link: "/computer/eight",
                        },
                    ],
                },
            ],
        },
    },
    vite: {
        server: {
            host: true,
            port: 302,
            open: true,
        },
    },
});
