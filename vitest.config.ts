/// <reference types="vitest" />
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
    coverage: {
      reporter: ["text", "json", "html"],
      lines: 80,
      functions: 80,
      branches: 80,
      statements: 80,
    },
  },
});
