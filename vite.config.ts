import { fileURLToPath, URL } from "node:url";
import {
  createStyleImportPlugin,
  ElementPlusResolve //
} from "vite-plugin-style-import";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [ElementPlusResolver()]
    }),
    createStyleImportPlugin({
      resolves: [ElementPlusResolve()],
      libs: [
        {
          libraryName: "element-plus", // element-plus
          esModule: true,
          resolveStyle: (name) => {
            return `element-plus/theme-chalk/${name}.css`; // element-plus的相对应组件css的位置
          }
        }
      ]
    })
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url))
    }
  },
  server: {
    proxy: {
      "/api": {
        target: "http://codercba.com:5000",
        rewrite: (path) => path.replace(/^\/api/, "")
      }
    }
  }
});
