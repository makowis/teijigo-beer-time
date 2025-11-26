import globals from 'globals'
import withNuxt from './.nuxt/eslint.config.mjs'
import eslintConfigPrettier from 'eslint-config-prettier'

export default withNuxt(eslintConfigPrettier, {
  files: ['*.js', '*.vue', '*.ts'],
  languageOptions: {
    globals: {
      ...globals.browser,
      ...globals.node,
    },
  },
  rules: {
    // Vue 3 Composition API推奨
    'vue/component-api-style': ['error', ['script-setup']],
    'vue/component-name-in-template-casing': ['error', 'kebab-case'],
    'vue/block-order': ['error', { order: ['script', 'template', 'style'] }],

    // コード品質
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'no-debugger': 'error',
    'prefer-const': 'error',
    'no-var': 'error',

    // TypeScript推奨
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
    ],

    // Vue固有
    'vue/multi-word-component-names': 'off', // Nuxt Pagesは単語1つでOK
    'vue/require-default-prop': 'off', // TypeScriptで型推論があるため
    'vue/html-self-closing': [
      'error',
      {
        html: { void: 'always', normal: 'never', component: 'always' },
      },
    ],
  },
})
