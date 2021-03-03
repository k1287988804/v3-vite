import { defineConfig } from 'vite';
import path from 'path';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx'
import { buildConfig } from './build/config/buildConfig';
export default defineConfig({
  server: {
    port: 7874,
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        // rewrite: path => path.replace(/^\/api/, '')
      }
    },
    hmr: {
      overlay: true,
    },
    open: false, // 如果程序跑不起来就关闭自动打开浏览器
  },
  ...buildConfig,
  resolve: {
    alias: {
      '/@': path.resolve(__dirname, '.', 'src')
    },
  },
  optimizeDeps: {
    include: [],
  },
  plugins: [vue(), vueJsx()],
})
