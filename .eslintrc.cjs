module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended", "plugin:react-hooks/recommended", "plugin:storybook/recommended"],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh"],
  rules: {
    "react-refresh/only-export-components": [
        "warn",
        { 
            allowConstantExport: true
        }
    ],
    "indent": ["error", 4],
        "quotes": ["error", "double"],
        "semi": ["error", "always"],
        "no-extra-semi": "off",
        "@typescript-eslint/no-extra-semi": "off",
        "eol-last": ["error", "always"],
        "no-multiple-empty-lines": ["error", { "max": 1, "maxEOF": 1 }],
  },
}
