import path from "path";
import react from "@vitejs/plugin-react-swc";
import { componentTagger } from "lovable-tagger";

export default ({ mode }: { mode: string }) => ({
  base: "/",
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
