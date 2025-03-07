// tailwind config is required for editor support

import type { Config } from "tailwindcss";
import sharedConfig from "@imkdw-dev-client/tailwind-config";

const config: Pick<Config, "content" | "presets"> = {
  content: ["./src/components/**/*.tsx"],
  presets: [sharedConfig],
};

export default config;
