# CLAUDE.md

このファイルはClaude Code (claude.ai/code) がこのリポジトリで作業する際のガイダンスを提供します。

## プロジェクト概要

「定時後ビールタイム」は音楽サークルの公式サイトです。90年代風のレトロなホームページデザインを意図的に採用しています。

## 技術スタック

- **フレームワーク**: Nuxt 4 + Vue 3 (Composition API)
- **言語**: TypeScript
- **パッケージマネージャー**: Yarn 4 (Berry) - `corepack enable` で有効化
- **Node.js**: 24.x (Active LTS)
- **テスト**: Vitest + @vue/test-utils
- **リンター**: ESLint 9 (Flat Config), Stylelint, Prettier

## よく使うコマンド

```bash
# 開発
yarn dev              # 開発サーバー起動 (http://localhost:3000)

# ビルド
yarn build            # 本番ビルド
yarn generate         # 静的サイト生成

# テスト
yarn test             # Vitestでテスト実行
yarn coverage         # カバレッジ付きテスト

# リント
yarn lint             # ESLint + Stylelint + Prettier チェック
yarn lint:fix         # 自動修正
```

## アーキテクチャ

### ディレクトリ構成

```
app/
├── components/
│   ├── atoms/       # Atomic Design: 最小コンポーネント
│   └── organisms/   # Atomic Design: 複合コンポーネント
├── layouts/         # Nuxtレイアウト
├── pages/           # ファイルベースルーティング
├── resources/       # 静的データ定義
└── assets/          # 画像・静的ファイル
```

### コンポーネント命名

- 接頭辞 `Tbt` (Teijigo Beer Time) を必ず使用
- 例: `TbtH1.vue`, `TbtBlink.vue`, `TbtMarquee.vue`

## コーディング規約

### Vue コンポーネント

1. `<script setup lang="ts">` を必ず使用
2. ブロック順序: `<script>` → `<template>` → `<style>`
3. テンプレート内は kebab-case: `<tbt-h1>` not `<TbtH1>`
4. `<style scoped>` でスコープ付きスタイル

### TypeScript

- `any` は避ける
- 未使用変数は `_` 接頭辞

### CSS

- クラス名: kebab-case
- `!important` 禁止
- ベンダープレフィックス手書き禁止

## 重要な注意事項

1. **レトロデザインは意図的**: `<blink>`, `<marquee>` 風のエフェクトは仕様です
2. **UIライブラリ不使用**: Tailwind, Vuetify等は使っていません
3. **Yarn Berry**: `npm` や古い `yarn` ではなく Yarn 4 を使用
4. **静的サイト**: GitHub Pages にデプロイされる静的サイトです

## テスト

- 配置: `test/unit/specs/`
- Vue Test Utils + Vitest
- `mount()` または `shallowMount()` でコンポーネントテスト
