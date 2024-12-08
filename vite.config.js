import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/blitzschlag/"
  // server: {
  //   host: '192.168.137.1',
  //   port: 3000,  // Or any other available port
  // }
})
