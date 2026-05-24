import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: 'build',
  },
})
