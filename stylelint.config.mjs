/** @type {import('stylelint').Config} */

export default {
  extends: ['stylelint-config-standard', 'stylelint-config-recommended-vue'],
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  rules: {
    // カラーの16進数表記を短縮形に統一
    'color-hex-length': 'short',
    // クラス名はケバブケースを推奨
    'selector-class-pattern': [
      '^[a-z][a-z0-9]*(-[a-z0-9]+)*$',
      {
        message:
          'Expected class selector to be kebab-case (lowercase with hyphens)',
      },
    ],
    // セレクタのネストを5階層までに制限
    'max-nesting-depth': 5,
    // ベンダープレフィックスは禁止(autoprefixerが自動追加)
    'property-no-vendor-prefix': true,
    'value-no-vendor-prefix': true,
    // !importantの使用を警告
    'declaration-no-important': true,
    // 単位のない0に単位を付けない
    'length-zero-no-unit': true,
  },
  // coverageディレクトリは自動生成ファイルなので無視
  ignoreFiles: ['coverage/**/*.css'],
}
