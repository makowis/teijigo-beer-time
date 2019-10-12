module.exports = {
  arrowParens: 'always',
  parser: 'typescript',
  singleQuote: true,
  trailingComma: 'all',
  overrides: [
    {
      files: '*.vue',
      options: {
        parser: 'vue'
      }
    }
  ]
};
