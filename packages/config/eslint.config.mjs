import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import typescript from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  {
    ignores: ["**/.next/**", "**/node_modules/**", "**/dist/**"],
  },
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      "@typescript-eslint": typescript,
    },
    rules: {
      "react/prop-types": 0,
      "no-empty-function": "off",
      "react/react-in-jsx-scope": "off",
      "react/no-unknown-property": ["error", { ignore: ["css"] }],
      "@typescript-eslint/no-empty-interface": 0,
      "@typescript-eslint/no-empty-function": 0,
      "@typescript-eslint/no-unused-vars": "off",
      "@next/next/no-assign-module-variable": "off",
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  ...compat.extends("next/core-web-vitals", "prettier"),
];

export default eslintConfig;
