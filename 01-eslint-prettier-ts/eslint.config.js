import globals from 'globals';
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
// import typescriptEslint from 'typescript-eslint';
import eslintConfigPrettier from 'eslint-config-prettier';

export default [
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
      },
      parser: tseslint.parser,
      parserOptions: {
        ecmaFeatures: {
          // jsx: true,
        },
      },
    },
    ignores: ['**/*.config.js', 'node_modules/', '/**/*.d.ts', 'tsconfig.json'],
    // plugins: {
    //   typescriptEslint,
    // },
    // rules: {
    //   'no-unused-vars': 'error',
    //   'no-undef': 'error',
    // },
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  eslintConfigPrettier,
];
