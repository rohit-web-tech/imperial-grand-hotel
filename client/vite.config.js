import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server : {
    port : 2000 ,
    host : '0.0.0.0',
    open: true
  } ,
  plugins: [react()],
})