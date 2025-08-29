// eslint.config.mjs
import js from '@eslint/js'
import tseslint from 'typescript-eslint'
import reactPlugin from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import nextPlugin from '@next/eslint-plugin-next'
import importPlugin from 'eslint-plugin-import'
import unusedImports from 'eslint-plugin-unused-imports'

export default [
  // Ignore build outputs
  { ignores: ['.next/**', 'node_modules/**', 'dist/**'] },

  // JS base
  js.configs.recommended,

  // TypeScript base (không cần type-check để chạy nhanh)
  ...tseslint.configs.recommended,

  {
    files: ['**/*.{ts,tsx,js,jsx}'],
    plugins: {
      react: reactPlugin,
      'react-hooks': reactHooks,
      '@next/next': nextPlugin,
      import: importPlugin,
      'unused-imports': unusedImports,
    },
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        // nếu muốn rule type-aware, đổi sang ...configs.recommendedTypeChecked và bật project:
        // project: ['./tsconfig.json'],
        // tsconfigRootDir: import.meta.dirname,
      },
    },
    settings: {
      react: { version: 'detect' },
      'import/resolver': { typescript: true, node: true },
    },
    rules: {
      // Next.js khuyến nghị
      ...nextPlugin.configs.recommended.rules,

      // React Hooks
      ...reactHooks.configs.recommended.rules,

      // Sắp xếp import
      'import/order': ['error', {
        groups: ['builtin', 'external', 'internal', ['parent', 'sibling', 'index']],
        alphabetize: { order: 'asc', caseInsensitive: true },
        'newlines-between': 'always',
      }],

      // Xoá import & biến không dùng
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': ['warn', {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      }],

      // Để plugin unused-imports xử lý
      '@typescript-eslint/no-unused-vars': 'off',
    },
  },
]
