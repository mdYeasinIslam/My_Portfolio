import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import nextPlugin from "eslint-plugin-next";

export default tseslint.config(
  { ignores: ["dist"] },

  {
    // Next.js plugin + recommended rules
    plugins: {
      next: nextPlugin,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },

    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      nextPlugin.configs.recommended, // <-- REQUIRED
      nextPlugin.configs["core-web-vitals"], // <-- Optional but recommended
    ],

    files: ["**/*.{ts,tsx}"],

    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },

    rules: {
      ...reactHooks.configs.recommended.rules,

      "react-refresh/only-export-components": [
        "off",
        { allowConstantExport: true },
      ],
    },
  }
);
