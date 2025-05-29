import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import eslintPluginPrettier from "eslint-plugin-prettier";
import eslintConfigPrettier from "eslint-config-prettier";

export default tseslint.config(
  { ignores: ["dist"] },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    // Specific linting rules for TypeScript/React files (mostly in src/)
    files: ["src/**/*.{ts,tsx}"], // Adjusted to be more specific
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "@typescript-eslint/no-unused-vars": "off",
    },
  },
  {
    // Configuration for JS files (e.g. postcss.config.js, tailwind.config.js if it were JS)
    // Excludes TS-specific rules like @typescript-eslint/no-unused-expressions
    files: ["*.js", "vite.config.js"], // Adjusted to target specific JS config files
    extends: [js.configs.recommended],
    languageOptions: {
      globals: globals.node, // Config files usually run in Node.js
    },
    rules: {
      // Add any JS-specific rules or overrides here if needed
    }
  },
  {
    // Configuration for TS config files like tailwind.config.ts, vite.config.ts
    files: ["*.ts", "vite.config.ts"],
    rules: {
      "@typescript-eslint/no-unused-expressions": "off", // Allow expressions for config files
    }
  },
  // Configuration for eslint-plugin-prettier
  // Apply Prettier formatting check to JS, JSX, TS, TSX files. JSON formatting is best handled by Prettier CLI directly.
  {
    files: ["**/*.{ts,tsx,js,jsx}"], 
    plugins: {
      prettier: eslintPluginPrettier,
    },
    rules: {
      "prettier/prettier": "warn",
    },
  },
  eslintConfigPrettier // IMPORTANT: This must be the last configuration.
);
