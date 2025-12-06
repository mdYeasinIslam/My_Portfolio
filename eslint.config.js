import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import nextConfig from "eslint-config-next";

export default tseslint.config(
  { ignores: ["dist"] },

  {
    files: ["**/*.{ts,tsx,js,jsx}"],

    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      nextConfig, // <-- Next.js recommended config
      nextConfig["core-web-vitals"], // <-- Optional but recommended
    ],

    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },

    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
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
