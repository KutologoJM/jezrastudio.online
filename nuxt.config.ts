// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
    vite: {
        plugins: [tailwindcss()],
    },
    css: ["./app/tailwindcss.css"],
    modules: [
        '@nuxt/content',
        '@nuxt/eslint',
        '@nuxt/fonts',
        '@nuxt/hints',
        '@nuxt/icon',
        '@nuxt/image',
        '@nuxt/test-utils',
    ],
    devtools: {enabled: true},
    future: {
        compatibilityVersion: 4,
    },
    compatibilityDate: '2025-12-09',
    app: {
        head: {
            title: "Portfolio",
            meta: [
                {charset: "utf-8"},
            ],
            link: [
                {rel: 'apple-touch-icon', sizes: "180x180", type: 'image/png', href: '/apple-touch-icon.png'},
                {rel: 'icon', type: 'image/png', href: '/favicon-32x32.png'},
                {rel: 'icon', type: 'image/png', href: '/favicon-16x16.png'},
                {rel: 'manifest', href: '/site.webmanifest'},

            ],
            script: [
                {
                    src: 'https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js',
                    'data-name': 'BMC-Widget',
                    'data-cfasync': 'false',
                    'data-id': 'kutologoJM',
                    'data-description': 'Support me on Buy me a coffee!',
                    'data-color': '#5F7FFF',
                    'data-position': 'Right',
                    'data-x_margin': '18',
                    'data-y_margin': '18',
                    defer: true,
                },
            ],
        }
    },


});