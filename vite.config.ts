// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,    // ✅ Runs on http://localhost:3000
    open: true     // ✅ Auto opens browser
  }
});
