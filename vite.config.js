import react from "@vitejs/plugin-react"
import {defineConfig} from "vite"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
  ],
  clearScreen: false,
  root: "./frontend",
  build: {
    outDir: "../dist/public",
  },
  server: {
    middlewareMode: true,
  },
})
