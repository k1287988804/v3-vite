import { defineConfig } from 'vite';
import path from 'path';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx'
import { buildConfig } from './build/config/buildConfig';
export default defineConfig({
  server: {
    port: 7874,
    proxy: {
      // '/lsbdb': 'http://10.192.195.96:8087',
    },
    hmr: {
      overlay: true,
    },
    open: false, // 如果程序跑不起来就关闭自动打开浏览器
  },
  ...buildConfig,
  resolve: {
    alias: {
      '/@': path.resolve(__dirname, '.', 'src'),
    },
  },
  optimizeDeps: {
    include: [],
  },
  plugins: [vue(), vueJsx()],
})
