const path = require('path')
const glob = require('glob')
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

let input = {}

glob.sync('./src/**/*.html').map(file => {
  return [file.substring(`.${path.sep}src${path.sep}`.length), file]
}).forEach( f => {
    input[f[0]] = f[1]
})

console.log(input)
export default defineConfig({
  root: 'src',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input
    }
  },
  server: {
    port: 8080,
    open: true
  },
  plugins: [vue()]
})