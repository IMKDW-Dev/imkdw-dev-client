import type { Config } from "tailwindcss";
import { tailwindContentConfig } from "./src/configs/tailwind-content.config";

export default {
  content: tailwindContentConfig,
} satisfies Config;
