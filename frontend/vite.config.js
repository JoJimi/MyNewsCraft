import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080',  // Spring Boot 백엔드 주소
        changeOrigin: true,
        secure: false,
      }
    }
  }
})
