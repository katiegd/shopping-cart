// vitest.config.js
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "jsdom", // Use jsdom for DOM-related testing
  },
});
