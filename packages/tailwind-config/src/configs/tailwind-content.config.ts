import type { Config } from "tailwindcss";

export const tailwindContentConfig: Config["content"] = [
  "./src/app/**/*.{jsx,tsx}",
  "../../packages/ui/src/**/*.{jsx,tsx}",
];
