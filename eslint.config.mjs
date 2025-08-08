import antfu from "@antfu/eslint-config";
// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format

export default antfu({
  type: "app",
  react: true,
  typescript: true,
  stylistic: {
    indent: 2,
    semi: true,
    quotes: "double",
  },
}, {
  rules: {
    "ts/no-redeclare": "off",
    "ts/consistent-type-definitions": ["error", "type"],
    "no-console": ["error"],
    "antfu/no-top-level-await": ["off"],
    "node/prefer-global/process": ["off"],
    "node/no-process-env": ["error"],
    "vitest/no-focused-tests": "error",
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/no-empty-function": "warn",
    "no-alert": "error",
    "no-magic-numbers": "warn",
    "prefer-const": "error",
    "@typescript-eslint/no-unused-vars": ["error", { args: "none", varsIgnorePattern: "^_" }],
    "perfectionist/sort-imports": ["error", {
      tsconfigRootDir: ".",
    }],
    "unicorn/filename-case": ["error", {
      cases: {
        kebabCase: true,
        snakeCase: true,
        pascalCase: true,
      },
    }],
  },
}, {
  ignores: ["**/*.md"],
});
