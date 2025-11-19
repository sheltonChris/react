import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    plugins: {
      js,
      "react-hooks": reactHooks,
    },

    extends: [
      "js/recommended",
      "plugin:prettier/recommended",
    ],

    languageOptions: {
      globals: globals.browser,
    },

    settings: {
      react: {
        version: "detect",
      },
    },

    rules: {
      // REACT HOOKS
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",

      // REACT (igual o professor)
      "react/prop-types": "off",
      "react/react-in-jsx-scope": "off",

      // TYPESCRIPT (igual o professor)
      "@typescript-eslint/explicit-module-boundary-types": "off",
    },
  },

  // TypeScript rules (recommended)
  tseslint.configs.recommended,

  // React recommended configs
  pluginReact.configs.flat.recommended,
]);
