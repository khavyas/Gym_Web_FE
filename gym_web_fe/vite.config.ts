import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    global: 'globalThis',
    __DEV__: JSON.stringify(process.env.NODE_ENV === 'development'),
  },
  resolve: {
    alias: {
      'react-native': 'react-native-web',
      'react-native/Libraries/Components/View/ViewStylePropTypes': 'react-native-web/dist/exports/View/ViewStylePropTypes',
      'react-native/Libraries/EventEmitter/NativeEventEmitter': 'react-native-web/dist/exports/NativeEventEmitter',
    },
    extensions: [
      '.web.tsx',
      '.web.ts', 
      '.web.jsx', 
      '.web.js',
      '.tsx', 
      '.ts', 
      '.jsx', 
      '.js'
    ],
  },
  optimizeDeps: {
    include: ['react-native-web'],
  },
})