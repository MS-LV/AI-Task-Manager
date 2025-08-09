// @ts-check
const eslint = require('@eslint/js');
const tseslint = require('typescript-eslint');
const angular = require('angular-eslint');
const prettier = require('eslint-plugin-prettier');
const tsPlugin = require('@typescript-eslint/eslint-plugin'); // 👈 добавляем
const prettierConfig = require('./prettier.config.js');

module.exports = tseslint.config(
  // TypeScript files
  {
    files: ['**/*.ts'],
    ignores: [
      '**/temp.js',
      'config/*',
      './dist/*',
      'node_modules/*',
      '.vscode',
      '.code',
      'src/**/*.spec.ts',
      '.git',
      '**config.js',
      '.angular/**/*'
    ],
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.recommended,
      ...tseslint.configs.stylistic,
      ...angular.configs.tsRecommended,
    ],
    plugins: {
      prettier,
      // '@typescript-eslint': tsPlugin, // 👈 вот это важно
      '@typescript-eslint': require('@typescript-eslint/eslint-plugin'),
    },
    rules: {
      '@angular-eslint/directive-selector': [
        'error',
        { type: 'attribute', prefix: 'app', style: 'camelCase' },
      ],
      '@angular-eslint/component-selector': [
        'error',
        { type: 'element', prefix: 'app', style: 'kebab-case' },
      ],
      'prettier/prettier': ['error', { ...prettierConfig }],
    },
    processor: angular.processInlineTemplates,
  },

  // HTML files
  {
    files: ['**/*.html'],
    extends: [
      ...angular.configs.templateRecommended,
      ...angular.configs.templateAccessibility,
    ],
    plugins: {
      prettier,
    },
    rules: {
      'prettier/prettier': ['error', { parser: 'html', ...prettierConfig }],
    },
  },

  // SCSS files
  {
    files: ['**/*.scss'],
    plugins: {
      prettier,
    },
    rules: {
      'prettier/prettier': ['error', { parser: 'scss', ...prettierConfig }],
    },
  }
);
