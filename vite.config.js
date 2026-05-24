import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
  optimizeDeps: {
    include: ['react-github-calendar', 'react-lazyload'],
  },
  build: {
    outDir: 'build',
    commonjsOptions: {
      transformMixedEsModules: true,
      esmExternals: true,
    },
  },
  server: {
    port: 3000,
    open: true,
  },
})
