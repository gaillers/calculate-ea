import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@types': path.resolve(__dirname, 'src/types'),
      '@ui': path.resolve(__dirname, 'src/components/ui'),
      '@api': path.resolve(__dirname, 'src/api'),
    },
  },
  server: {
    host: 'localhost', 
    port: 8000, 
  },
});
