import {defineConfig} from 'vite'
import monkey from 'vite-plugin-monkey'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        monkey({
            entry: 'src/main.ts',
            userscript: {
                name: 'bilibili toolkit',
                icon: 'https://i0.hdslb.com/bfs/static/jinkela/long/images/favicon.ico',
                namespace: 'npm/vite-plugin-monkey',
                match: [
                    'https://*.bilibili.com/',
                    'https://*.bilibili.com/*'
                ],
                'run-at': 'document-start',
            },
        }),
    ],
})
