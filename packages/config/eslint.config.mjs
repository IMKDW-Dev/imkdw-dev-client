import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import tsPlugin from "@typescript-eslint/eslint-plugin";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  {
    files: ["**/*.{ts,tsx}"],
    rules: {
      "react/prop-types": 0,
      "no-empty-function": "off",
      "react/react-in-jsx-scope": "off",
      "react/no-unknown-property": ["error", { ignore: ["css"] }],
      "@typescript-eslint/no-empty-interface": 0,
      "@typescript-eslint/no-empty-function": 0,
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    ignores: [".next/**", "node_modules/**"],
  },
  ...compat.extends("next/core-web-vitals", "prettier"),
];

export default eslintConfig;
