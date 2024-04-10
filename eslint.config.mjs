import globals from 'globals'
import withNuxt from './.nuxt/eslint.config.mjs'
import eslintConfigPrettier from 'eslint-config-prettier'

export default withNuxt(eslintConfigPrettier, {
  files: ['*.js', '*.vue'],
  languageOptions: {
    globals: {
      ...globals.browser,
      ...globals.node,
    },
  },
})
