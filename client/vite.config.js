import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy:{
      "/api":{
        target: "http://localhost:8000",
      },
    },
    fs: {
      // Allow serving files from 'assets' directory
      allow: ['..']
    }
  },
  resolve: {
    alias: {
      // Setting up an alias for accessing assets easily in your code
      '@assets': path.resolve(new URL('.', import.meta.url).pathname, './assets')
    }
  }
})
