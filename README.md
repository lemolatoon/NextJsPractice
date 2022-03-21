# NextJsPractice
https://lemolatoon.github.io/NextJsPractice/

## Next.js 環境構築

### Repositoryを初期化し、Next.jsをダウンロード

```bash
git init
npm init
npm install next
```

### 開発に必要なものをnpmからダウンロード

`prettier`: formatter\
`eslint`: linter\
`eslint-config-next`, `eslint-config-prettier`: linterの環境specificなconfig\
`typescript`: TypeScript\
`@types/react`, `@types/node`: React, Node.jsの型情報
```bash
npm install -D prettier typescript @types/react @types/node
npm install -D eslint eslint-config-next eslint-config-prettier
```
\
cf.\
`-D` は `package.json` でいうところの、`dependencies` ではなく、`devDependencies` のほうに依存関係を追加するようにするものであり、
formatterやtypescriptは開発の上でのみ使用するものであるから、こちらに追加されるようにする。



### `prettier`の設定
`.prettierignore`を追加\
\
`.prettierignore`
```
.next/
*md
```
`prettier`を実行したいときは以下で実行できる。このとき、`.prettierignore`で指定したファイル以外はすべてformatされる。
```bash
prettier --write .
```
\
cf.\
`package.json`内の`scripts`の項目を変更することで、様々なコマンドを`npm run {}`で実行できるようになる。例えば`npm run fmt`で`prettier`を走らせたいときは、以下のようにすればよい。\
\
`package.json`の一部
```json
"script": {
    "fmt": "prettier --write ."
}
```

### `eslint`の設定
`.eslintrc.*`を生成
```bash
eslint --init
```
`eslint`の設定ファイルのうち、Next.jsが担っているものが多くあるため、ほとんど削除できる。jsonで作成した場合は以下で十分である。
```json
{
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "next/core-web-vitals", "prettier"
    ]
}
```
`eslint`は以下のように実行できる。
```bash
npx eslint .
```
\
cf.\
`npx {}`と実行すると、`node_modules/.bin`以下のシンボリックリンク先のバイナリが実行される。

## 最初のページを作る
`pages/`以下のディレクトリ構造がそのまま、パスになる。ゆえに、`pages/index.tsx`で生成されるページがトップページになる。また、拡張子`tsx`, `jsx`は、ReactのHTML風の記述のための、拡張構文をつかうためのものである。\
詳しくはこのRepositoryを参照してね。

## 参考文献 && 先生
https://github.com/azarashi2931/next-js-practice

