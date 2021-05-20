module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
    project: [
      './tsconfig.eslint.json'
    ]
  },
  extends: ['plugin:@typescript-eslint/recommended', 'prettier', 'plugin:prettier/recommended'],
  rules: {},
  ignorePatterns: ['/*.js', '/dist/**/*', '/node_modules/**/*'],
};
