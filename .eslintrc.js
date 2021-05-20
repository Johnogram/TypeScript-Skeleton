module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: "module",
    project: [
      './tsconfig.eslint.json'
    ]
  },
  extends: [
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint", // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    "plugin:prettier/recommended"
  ],
  rules: {},
  ignorePatterns: [
    '/*.js',
    '/dist/**/*',
    '/node_modules/**/*'
  ],
};
