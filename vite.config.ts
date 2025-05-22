
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/portfolio/', // Add this line for GitHub Pages deployment
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
