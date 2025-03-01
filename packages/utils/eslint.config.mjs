import config from "@imkdw-dev-client/config/eslint.config.mjs";

const modifiedConfig = [...config];
if (modifiedConfig.length > 0) {
  const lastConfig = modifiedConfig[modifiedConfig.length - 1];
  if (lastConfig.rules) {
    lastConfig.rules = {
      ...lastConfig.rules,
      "@next/next/no-html-link-for-pages": "off",
    };
  }
}

export default modifiedConfig;
