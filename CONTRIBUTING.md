# 🤝 CONTRIBUTING.md – Manabo 開発ルール

このドキュメントは、Manabo プロジェクトに参加・貢献する開発者のための **命名規則・ディレクトリ構成・コードスタイルのガイドライン**です。
チーム全体で一貫性のあるコードを保ち、保守性・可読性を高めることを目的としています。

---

## 🧠 なぜこのルールを定めたか

このルールは、Manabo プロジェクトが拡張性・継続性のあるプロダクトになるために設けられています：

- ✅ チーム内での認識統一（迷いをなくす）
- ✅ 保守性・可読性の向上（後から読んでもわかりやすく）
- ✅ 大規模化への対応（役割分担しやすい構造へ）
- ✅ 自動補完やツール連携との相性強化（VSCode・TypeScript・ESLint など）
- ✅ 信頼性あるプロダクト文化の醸成（丁寧な設計を伝える）

---

## 📁 ディレクトリ構成ルール

### 基本構造

```
manabo/
├── src/
│   ├── app/                             # ページルーティング（Next.js App Router）
│   │   ├── (auth)/                     # 認証機能（グルーピング）
│   │   │   ├── login/                  # /login ログインページ
│   │   │   └── signup/                 # /signup サインアップページ
│   │   ├── (dashboard)/                # ダッシュボード機能
│   │   │   └── dashboard/              # /dashboard
│   │   ├── (user-profile)/             # ユーザープロフィール関連
│   │   │   ├── user-profile/           # /user-profile（表示・編集）
│   │   │   └── settings/               # /user-profile/settings（通知やアカウント設定）
│   │   ├── (learning-record)/          # 学習記録関連
│   │   │   ├── learning-record/        # /learning-record（記録一覧）
│   │   │   ├── history/                # /learning-record/history（タイムライン）
│   │   │   └── statistics/             # /learning-record/statistics（統計ビュー）
│   │   └── (api)/                      # APIルーティング
│   │       ├── auth/                   # /api/auth（ログイン、登録など）
│   │       ├── users/                  # /api/users（ユーザー情報取得・更新）
│   │       └── learning-record/        # /api/learning-record（学習記録CRUD）
│
│   ├── _components/                    # 再利用可能なUIコンポーネント
│   │   ├── ui/                         # 汎用UI（button, input 等）
│   │   ├── layout/                     # ヘッダー、サイドバー、ナビゲーション
│   │   ├── form/                       # 入力フォーム関連
│   │   └── icons/                      # SVG・アイコンセット
│
│   ├── _lib/                           # ロジック関連（hooks・API通信など）
│   │   ├── hooks/                      # カスタムフック
│   │   ├── api/                        # APIラッパー関数（fetcherなど）
│   │   └── utils/                      # 汎用ユーティリティ関数
│
│   ├── _types/                         # 型定義（Props、Zod、enumなど）
│   │   ├── zod/                        # バリデーション用スキーマ
│   │   └── dto/                        # API通信などのデータ構造定義
│
│   ├── _constants/                     # 定数管理（パス・ロール・表示文言など）
│   │   ├── paths.ts                    # ルートパス定義
│   │   ├── roles.ts                    # ロール・権限定義
│   │   └── messages.ts                 # 表示文言定義
│
│   └── styles/                         # グローバルおよびテーマスタイル
│       └── globals.css
│
├── docs/                               # 設計ドキュメント（Notionなどと連携可）
│   ├── er-diagram.png                  # ER図など
│   ├── naming-rules.md                 # 命名規則
│   └── api-guidelines.md              # API設計指針（REST・レスポンス形式など）
│
├── public/                             # 静的ファイル（画像、favicon 等）
│
├── .env.local                          # 環境変数ファイル（ローカル）
├── package.json
├── README.md
├── CONTRIBUTING.md                     # ✅ 開発ルール・命名規約・設計方針まとめ
└── tsconfig.json

```

## 📐 命名・設計・スタイルルール（ディレクトリ構造以外）

### 📛 命名規則（Naming Conventions）

| 対象                        | ルール                                 | 例                                       |
| --------------------------- | -------------------------------------- | ---------------------------------------- |
| ディレクトリ名 / ファイル名 | `kebab-case`                           | `learning-record.tsx`, `user-profile.ts` |
| コンポーネント名            | `PascalCase`                           | `LearningCard.tsx`, `Sidebar.tsx`        |
| 変数・関数名                | `camelCase`                            | `handleSubmit`, `fetchUserData`          |
| 型定義（interface / type）  | `PascalCase` + `Props` や `Type`       | `UserProfileProps`, `LearningRecordType` |
| 定数                        | `SCREAMING_SNAKE_CASE`（必要に応じて） | `DEFAULT_LIMIT`, `MAX_DURATION`          |

### 🧱 コンポーネント設計指針

- **UI は再利用性を意識して小さく保つ**
  - 例: `<Button />`, `<Input />`, `<Alert />` は `_components/ui/` に配置
- **ページ固有の UI は `app/` 配下の対応ルートに配置**
  - 例: `app/(learning-record)/learning-record/RecordCard.tsx`
- **状態を持つコンポーネントは `Container` を接尾辞にしても OK**
  - 例: `LearningRecordContainer.tsx`
- **Props 型は明示的に記述し、必要に応じて型ファイルで共通化**
- **ローディングやエラー UI はコンポーネントとして分離して再利用**

### ✨ コードスタイル

- **インデント**：スペース 2 つ
- **セミコロン**：使用しない
- **クォート**：シングルクォート（`'`）を使用
- **関数定義**：アロー関数式（`const foo = () => {}`）を基本とする
- **React コンポーネント**：

  - `FC`（`FunctionComponent`）は使わず、Props を明示的に型定義する
    例：

  ```tsx
  type Props = {
    title: string;
  };

  const Header = ({ title }: Props) => {
    return <h1>{title}</h1>;
  };
  ```

### 🚚 エクスポートルール

- **named export（名前付きエクスポート）を推奨**

  - 理由：リファクタやツールの自動補完に強く、明示的なインポートができるため保守性が高まる
  - ❌ `export default`
  - ✅ `export const`, `export function`, `export type`

  ```ts
  // ❌ default export（非推奨）
  export default Button;

  // ✅ named export（推奨）
  export const Button = () => {};
  ```

---

### 🧱 コンポーネント設計指針

- **Atomic Design を参考に粒度ごとに分離**

  - `ui/`: 汎用的な UI コンポーネント（ボタン、入力欄など）
    - 例: `<Button />`, `<Input />`, `<Alert />` は `_components/ui/` に配置
  - `layout/`: アプリ全体やセクションのレイアウトを構成するコンポーネント（ヘッダー、サイドバーなど）
  - `form/`: 入力フォームやバリデーションなど、フォーム周りのロジック・表示部品
  - `icons/`: SVG やカスタムアイコンコンポーネントを管理

- **命名規則**

  - ディレクトリ名・ファイル名：`kebab-case` を使用
    - 例: `input-field.tsx`, `side-bar.tsx`
  - コンポーネント名：`PascalCase`
    - 例: `InputField`, `SideBar`

- **責務を明確にする**

  - 単一責任の原則に従い、複雑なコンポーネントは責務ごとに分割
  - 共通化できるロジックはカスタムフックへ切り出す（例: `useForm`, `useTimer`）

- **スタイリング**

  - `Tailwind CSS` を使用
  - 複雑なスタイルはユーティリティクラスで構成、必要に応じてカスタムクラスへ分離

- **Props の型定義**
  - Props の型はすべて `interface` で明示し、別ファイルに切り出し可能にする（`_types/` など）

---

### 🧪 テスト方針（任意）

- 単体テストは `.test.tsx` ファイルとして記述
- `Jest` + `React Testing Library` を使用（例: コンポーネントのレンダリングやバリデーションの確認）
- ビジネスロジック部分は可能であればユニットテスト対象とする

---

### 📜 命名ルールサマリー

| 対象                     | 命名規則           | 例                                |
| ------------------------ | ------------------ | --------------------------------- |
| ディレクトリ・ファイル名 | `kebab-case`       | `user-profile.tsx`, `input-form/` |
| コンポーネント名         | `PascalCase`       | `UserProfile`, `LoginForm`        |
| 変数名                   | `camelCase`        | `userProfile`, `formData`         |
| 型定義                   | `PascalCase`       | `UserProfileProps`, `LoginData`   |
| 定数名                   | `UPPER_SNAKE_CASE` | `MAX_LEARNING_TIME`, `API_URL`    |
| enum 名                  | `PascalCase`       | `UserRole`, `FormStatus`          |
| 関数名                   | `camelCase`        | `handleSubmit`, `fetchUser`       |

---

### 🚚 エクスポートルール

- **named export（名前付きエクスポート）を推奨**

  - ✅ `export const`, `export function`, `export type`
  - ❌ `export default`（明示性が低いため）

  ```ts
  // ❌ 非推奨
  export default Button;

  // ✅ 推奨
  export const Button = () => { ... };
  ```

### ✨ コードスタイル

- **インデント**：スペース 2 つ
- **セミコロン**：使用しない
- **クォート**：**シングルクォート（'）**を使用
- **関数定義**：アロー関数式を基本とする（例: `const foo = () => {}`）
- **React コンポーネント**：`FC` は使用せず、`Props` を明示的に型定義する

```tsx
// ✅ Good Example
type Props = {
  title: string;
};

const MyComponent = ({ title }: Props) => {
  return <h1>{title}</h1>;
};

// ❌ Bad Example
const MyComponent: FC<{ title: string }> = ({ title }) => {
  return <h1>{title}</h1>;
};
```

---

## 🔄 Git 運用ルール

### ブランチ命名規則

| 種別         | 接頭辞      | 例                         |
| ------------ | ----------- | -------------------------- |
| 機能追加     | `feature/`  | `feature/login-ui`         |
| バグ修正     | `fix/`      | `fix/user-fetch-error`     |
| リファクタ   | `refactor/` | `refactor/form-validation` |
| ドキュメント | `docs/`     | `docs/contributing-guide`  |

### コミットメッセージ（Conventional Commits）

- feat: ログイン画面のバリデーションを追加
- fix: 学習記録の保存処理で null エラーを修正
- docs: CONTRIBUTING.md を更新

### プルリクエストルール

- タイトルは `[feature] ログイン画面の実装` のように目的を明確に記載
- 内容には以下を含めること：
  - 変更概要
  - 影響範囲
  - スクリーンショット（UI 変更がある場合）
  - 関連 Issue: `Closes #23` など

---

## 🛡️ セキュリティ・アクセシビリティポリシー

### 入力バリデーション

- クライアント：Zod による厳格なスキーマ定義
- サーバー/API：同様のロジックで再検証

### アクセシビリティ対応

- すべてのボタン・リンクには `aria-label` を付ける
- カスタム UI もキーボード操作やスクリーンリーダー対応を考慮
- ライト/ダークモード切替もアクセシブルに実装する

### セキュリティ留意点

- `.env` 内の情報や JWT トークンなどは `console.log` に絶対に出さない
- ユーザー入力は XSS 対策を考慮してエスケープ処理する

---

## 📦 環境変数・デプロイルール

- `.env.local` は `.gitignore` に含め、Git に含めない
- `NEXT_PUBLIC_` で始まる環境変数はフロントエンドに露出されることを理解する
- `.env.sample` をプロジェクトに含め、必要な変数を明示する
- Vercel の環境変数設定と連動し、同一命名規則で管理すること

---

## 🧹 Lint / フォーマット設定（Prettier + ESLint）

### Prettier 設定（`.prettierrc`）

```json
{
  "semi": false,
  "singleQuote": true,
  "printWidth": 80,
  "tabWidth": 2,
  "trailingComma": "es5"
}
```

### 🔧 ESLint 設定例（抜粋）

プロジェクトでは ESLint による静的解析を導入しています。以下は基本設定例です。

```js
// .eslintrc.js
module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "react", "import", "jsx-a11y"],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "next/core-web-vitals",
    "prettier",
  ],
  rules: {
    semi: ["error", "never"], // セミコロンなし
    quotes: ["error", "single"], // シングルクォート
    indent: ["error", 2], // インデント2スペース
    "react/react-in-jsx-scope": "off", // Next.jsでは不要
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }], // _付き引数は無視
    "no-console": process.env.NODE_ENV === "production" ? "error" : "warn", // 本番ログ制限
    "import/order": [
      "warn",
      {
        groups: [
          ["builtin", "external"],
          "internal",
          ["parent", "sibling", "index"],
        ],
        "newlines-between": "always",
        alphabetize: { order: "asc", caseInsensitive: true },
      },
    ],
    "sort-imports": [
      "warn",
      {
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
      },
    ],
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
```

補足：

- prettier と連携してフォーマットルールを統一
- eslint-config-next により Next.js のベストプラクティスも適用
