# GitHub Copilot Instructions

このプロジェクトは「定時後ビールタイム」という音楽サークルの公式サイトです。
90年代風のレトロなホームページデザインを意図的に採用しています。

## プロジェクト概要

- **ビルドツール**: Vite 8 + Vue 3
- **ルーティング**: vue-router v5（`vue-router/vite` によるファイルベースルーティング）
- **静的サイト生成**: vite-ssg（ページ毎に静的HTMLを出力）
- **言語**: TypeScript
- **パッケージマネージャー**: Yarn 4 (Berry)
- **Node.js**: 24.x (Active LTS)
- **テスト**: Vitest + Vue Test Utils
- **リンター**: ESLint 9 (Flat Config) + Stylelint + Prettier
- **Git メインブランチ**: `master`

## ディレクトリ構成

```
index.html           # head/OGPの定義とエントリポイント
src/
├── App.vue          # 共通レイアウト（メニュー/フッター/グローバルCSS）
├── main.ts          # ViteSSG のエントリ
├── components/
│   ├── atoms/       # 最小単位のコンポーネント (Tbt接頭辞)
│   └── organisms/   # 複合コンポーネント
├── pages/           # ページコンポーネント（ファイル名がそのままルート）
├── resources/       # 静的データ (discos, members)
└── assets/          # 画像等のアセット
```

## コンポーネント命名規則

- すべてのコンポーネントは `Tbt` (Teijigo Beer Time) 接頭辞を使用
- 例: `TbtH1.vue`, `TbtBlink.vue`, `TbtMarquee.vue`

## Vue コンポーネントの書き方

### 必須ルール

1. **Composition API + `<script setup>` を使用**
2. **ブロック順序**: `<script>` → `<template>` → `<style>`
3. **テンプレート内のコンポーネント名**: kebab-case (`<tbt-h1>`)
4. **スタイル**: `<style scoped>` を使用

### コンポーネント例

```vue
<script setup lang="ts">
// Props、Emits、ロジックをここに記述
</script>

<template>
  <div class="component-name">
    <slot></slot>
  </div>
</template>

<style scoped>
.component-name {
  /* スタイル */
}
</style>
```

## TypeScript

- `any` の使用は避ける（警告レベル）
- 未使用変数は `_` 接頭辞で明示
- 型推論を活用し、冗長な型注釈は避ける

## スタイル

- クラス名: kebab-case (`my-component`)
- カラー: 短縮16進数表記 (`#fff` not `#ffffff`)
- `!important` は禁止
- ベンダープレフィックスは手動で書かない（autoprefixerが処理）
- ネストは5階層まで

## コマンド

```bash
yarn dev        # 開発サーバー起動
yarn build      # 静的サイトを dist/ に生成
yarn preview    # 生成した静的サイトをローカル確認
yarn test       # テスト実行
yarn lint       # リント実行
yarn lint:fix   # リント自動修正
```

## テスト

- テストファイルは `test/unit/specs/` に配置
- Vue Test Utils + Vitest を使用
- コンポーネントテストでは `mount` または `shallowMount` を使用

## 注意事項

- このサイトは意図的にレトロなデザイン（`<blink>`, `<marquee>` 風効果など）を採用しています
- モダンなUIライブラリ（Vuetify、Tailwind等）は使用していません
- 素朴なCSS でスタイリングしています
- コンポーネントの自動インポートは使わず、`@/components/...` で明示的に import します
- ページ間リンクは `<RouterLink>` を使います
- 存在しないURLは `src/pages/[...path].vue` が受け、ビルド時に `dist/404.html` としても出力されます
- PWAは廃止済みです。`public/sw.js` は旧Service Workerを解除するためだけに存在します
