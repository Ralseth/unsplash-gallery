import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  define: {
    // чтобы TS/Vite подхватил import.meta.env
    'process.env': {}
  }
});
