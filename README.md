# Redstone Circuit Dictionary

## 概要
Minecraftのレッドストーン回路用語を集めた場所です。回路勢なら知っておきたい単語が見つかるかも...？

こちらから各ページに飛べます。
- [用語集](https://kyouju-redstone.github.io/redstone-circuit-dictionary/)
- [Dictionary JSON作成](https://kyouju-redstone.github.io/redstone-circuit-dictionary/create_dictionary_json.html)

## 用語の追加方法
※用語の追加にはGithubのアカウントが必要になります。

### ブランチを切る
- `master`から`View all branches`をクリック
- 右上の`New branch`をクリック
- `New branch name`に`words/[任意の名前]`と入力
  - 例: `words/BlockUpdateDetector`
  - 任意の名前は英語で[UpperCamelCase](https://e-words.jp/w/%E3%82%AD%E3%83%A3%E3%83%A1%E3%83%AB%E3%82%B1%E3%83%BC%E3%82%B9.html)で命名
- `Create new branch`をクリック

### JSONの編集
- 自分で作ったブランチを選択
- Codeページから`json/dictionary.json`をクリック
- 右のペンマーク(Edit this file)をクリック
- JSONを編集する
  - [Dictionary JSON作成ページ](https://kyouju-redstone.github.io/redstone-circuit-dictionary/create_dictionary_json.html)からJSONを作成すると作業しやすいと思います。
- 編集後、`Commit changes...`をクリック
- `Commit message`に「用語の追加」を入力
- `Extended description`に追加した用語を入力
  - [Markdownのリスト形式](https://docs.github.com/ja/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#lists)で入力
- `Commit directly to the words/[任意の名前] branch`を選択（デフォルト）
- `Commit changes`をクリック
- 再度編集を行った場合は、上記内容も再度行う

### プルリクエストを出す
- `Pull requests`ページから`New pull request`をクリック
- `compare: master`を自分が作成したブランチに変更
- `Create pull request`をクリック
- `Add a title`に「用語の追加」を入力
- `Add a description`に追加した用語を入力
- `Create pull request`をクリック

以上となります。私がレビューを行ったあと、修正箇所があればコメントを残し、修正がなければそのまま私が登録をします。
