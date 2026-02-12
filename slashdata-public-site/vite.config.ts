import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    alias: {
      // Figma asset aliases
      'figma:asset/f581fa71757ac7bf761ced39a959b076f1f2d710.png': path.resolve(__dirname, './src/assets/f581fa71757ac7bf761ced39a959b076f1f2d710.png'),
      'figma:asset/e8e59357111056982228df59de7b7a0faac1692e.png': path.resolve(__dirname, './src/assets/e8e59357111056982228df59de7b7a0faac1692e.png'),
      'figma:asset/e788f7518eb655f4a005730b7276d443484734cf.png': path.resolve(__dirname, './src/assets/e788f7518eb655f4a005730b7276d443484734cf.png'),
      'figma:asset/e16737077b6af9a6c4b23bbf27d3a6a264e3859d.png': path.resolve(__dirname, './src/assets/e16737077b6af9a6c4b23bbf27d3a6a264e3859d.png'),
      'figma:asset/d18bb2c6d67dceccc97810738300de8e3454d065.png': path.resolve(__dirname, './src/assets/d18bb2c6d67dceccc97810738300de8e3454d065.png'),
      'figma:asset/c8e6b70914f752aa1a15c7e28d4542a079de5523.png': path.resolve(__dirname, './src/assets/c8e6b70914f752aa1a15c7e28d4542a079de5523.png'),
      'figma:asset/b97c801bd976d26ba0a81be742532ff4d535de32.png': path.resolve(__dirname, './src/assets/b97c801bd976d26ba0a81be742532ff4d535de32.png'),
      'figma:asset/b1274894e54ef93cb47a7d65fb8e799d48b2fcb4.png': path.resolve(__dirname, './src/assets/b1274894e54ef93cb47a7d65fb8e799d48b2fcb4.png'),
      'figma:asset/af20950ffa5434b6ff6180d4c02fd1fc789fb969.png': path.resolve(__dirname, './src/assets/af20950ffa5434b6ff6180d4c02fd1fc789fb969.png'),
      'figma:asset/a0ca8bebf60c27ea795f97f850b14768066f36f8.png': path.resolve(__dirname, './src/assets/a0ca8bebf60c27ea795f97f850b14768066f36f8.png'),
      'figma:asset/9ef3d977f0f2bc110e2947f4b8cec7e62386d600.png': path.resolve(__dirname, './src/assets/9ef3d977f0f2bc110e2947f4b8cec7e62386d600.png'),
      'figma:asset/9c57c3fe1e2802066e2a08373a337e84a4f2af5c.png': path.resolve(__dirname, './src/assets/9c57c3fe1e2802066e2a08373a337e84a4f2af5c.png'),
      'figma:asset/95593bd69be596ae11fd99a17f6e211dd4544c2c.png': path.resolve(__dirname, './src/assets/95593bd69be596ae11fd99a17f6e211dd4544c2c.png'),
      'figma:asset/7f54bba4dbbddb4d18ab5297dc49e8409b70bc2f.png': path.resolve(__dirname, './src/assets/7f54bba4dbbddb4d18ab5297dc49e8409b70bc2f.png'),
      'figma:asset/786686ac6ba0139ec64d1a9796d3c2d58619c02b.png': path.resolve(__dirname, './src/assets/786686ac6ba0139ec64d1a9796d3c2d58619c02b.png'),
      'figma:asset/71af8fcd537edae0f25a16837046d0dd0ab3b682.png': path.resolve(__dirname, './src/assets/71af8fcd537edae0f25a16837046d0dd0ab3b682.png'),
      'figma:asset/709e49cedd48fabeab7c80b562d3a1afb26f813d.png': path.resolve(__dirname, './src/assets/709e49cedd48fabeab7c80b562d3a1afb26f813d.png'),
      'figma:asset/6b5df21da8b2df30c8986db2c525b831d63b5481.png': path.resolve(__dirname, './src/assets/6b5df21da8b2df30c8986db2c525b831d63b5481.png'),
      'figma:asset/5a7d94ad9217bc90ee31d3a7715a9f79b43fa965.png': path.resolve(__dirname, './src/assets/5a7d94ad9217bc90ee31d3a7715a9f79b43fa965.png'),
      'figma:asset/54ae292a61905664f7aacdcd263faea8b2b77071.png': path.resolve(__dirname, './src/assets/54ae292a61905664f7aacdcd263faea8b2b77071.png'),
      'figma:asset/547e1b616f0a080936e58b83e82981e848a456a9.png': path.resolve(__dirname, './src/assets/547e1b616f0a080936e58b83e82981e848a456a9.png'),
      'figma:asset/40bcf5337697c295e9d9f127741dbf0d2e2726a2.png': path.resolve(__dirname, './src/assets/40bcf5337697c295e9d9f127741dbf0d2e2726a2.png'),
      'figma:asset/40b4063f3062f670947d5afa0fbb5a2767be5b51.png': path.resolve(__dirname, './src/assets/40b4063f3062f670947d5afa0fbb5a2767be5b51.png'),
      'figma:asset/28c841e2f00b2979499e3d2c278073cd2d4a5557.png': path.resolve(__dirname, './src/assets/28c841e2f00b2979499e3d2c278073cd2d4a5557.png'),
      'figma:asset/0fe969c02806430e0b6dee280854fbcfcc1f6e54.png': path.resolve(__dirname, './src/assets/0fe969c02806430e0b6dee280854fbcfcc1f6e54.png'),
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    target: 'esnext',
    outDir: 'build',
    sourcemap: false,
    minify: 'esbuild',
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Vendor chunk for React core
          if (id.includes('node_modules/react/') || id.includes('node_modules/react-dom/')) {
            return 'vendor-react';
          }
          // Router chunk
          if (id.includes('react-router')) {
            return 'vendor-router';
          }
          // Framer Motion - large library, separate chunk
          if (id.includes('framer-motion')) {
            return 'animations';
          }
          // Lucide icons
          if (id.includes('lucide-react')) {
            return 'icons';
          }
        },
      },
    },
  },
  server: {
    port: 3000,
    open: true,
  },
});