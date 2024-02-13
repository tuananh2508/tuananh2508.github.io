import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/will-you-be-my-valentine",
  plugins: [react()],
  server: {
    host: "0.0.0.0",
    port: 8080
  }
});
