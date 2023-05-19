// https://vitejs.dev/config/
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { resolve } from "path";

const projectRootDir = resolve(__dirname);

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": resolve(projectRootDir, "./src"),
      "@assets": resolve(projectRootDir, "./src/assets"),
      "@components": resolve(projectRootDir, "./src/components"),
      "@services": resolve(projectRootDir, "./src/services"),
      "@utils": resolve(projectRootDir, "./src/utils"),
      "@configs": resolve(projectRootDir, "./src/configs"),
    },
  },
  envPrefix: "MRT_",
});
