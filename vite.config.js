import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

 //Tag 1 - Adding CSS Modules
  css: {
    modules: {
      localsConvention: "camelCase",
    },
  },
});
