import {defineConfig} from 'vite'
import monkey from 'vite-plugin-monkey'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        monkey({
            entry: 'src/main.ts',
            userscript: {
                name: 'bilibili工具箱',
                author: 'marioplus',
                description: '一些自用的b站脚本',
                icon: 'https://i0.hdslb.com/bfs/static/jinkela/long/images/favicon.ico',
                namespace: 'https://github.com/marioplus/bilibili-toolkit',
                homepage: 'https://github.com/marioplus',
                license: 'MIT',
                match: [
                    'https://*.bilibili.com/',
                    'https://*.bilibili.com/*'
                ],
                'run-at': 'document-start',
            },
        }),
    ],
})
