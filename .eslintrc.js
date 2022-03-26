module.exports = {
  env: {
    es2021: true,
    commonjs: true,
    browser: true,
  },
  extends: "eslint:recommended",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "no-console": "off",
    semi: ["error", "always"],
    quotes: ["error", "single"],
  },
};
