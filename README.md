# component-test-app

Next.js（App Router）をベースに構築されたフロントエンドテスト用のアプリケーションです。Tailwind CSSによるスタイリング、React Hook Formによるフォーム処理、microCMSとの連携、Cloudflare Pagesへのデプロイなど、最新のモダンフロントエンド構成を採用しています。

## 🔧 技術スタック

| 分類                   | 使用技術                                                             |
| ---------------------- | -------------------------------------------------------------------- |
| フレームワーク         | Next.js 14 (App Router)                                              |
| 言語                   | TypeScript                                                           |
| スタイリング           | Tailwind CSS / tailwindcss-animate / class-variance-authority / clsx |
| アニメーション         | Framer Motion                                                        |
| UIライブラリ           | Radix UI / Lucide React                                              |
| フォームバリデーション | React Hook Form / Zod / @hookform/resolvers                          |
| CMS連携                | microCMS JavaScript SDK                                              |
| デプロイ               | Cloudflare Pages（@cloudflare/next-on-pages）                        |
| Lint / フォーマット    | ESLint / Prettier                                                    |
| バージョン管理         | Volta（Node.js 22.13.1 / npm 10.9.2）                                |

## 📦 セットアップ

```bash
# リポジトリをクローン
git clone git@github.com:yourname/component-test-app.git
cd component-test-app

# 依存関係のインストール
npm install

# 開発サーバー起動
npm run dev
```
