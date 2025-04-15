### 記事まとめ作成用プロンプト

- {year} {month} {link} は適宜置き換えてください
- Playwright MCP をセットアップしてください
- 記事のカテゴリ分類はあまりうまくいかないので、目視で入れ替えてください

--------
これは Frontend Monthly と呼ばれる、フロントエンドに関するトピックをまとめた記事です。
{year}年{month}月ぶんのトピックを {month}.md の Monthly Articles という配下にまとめてほしいです。

- トピックは内容に応じて `Framework, Library` `Services` `Browsers` `Languages` `Specifications` `Others` に分類されます
- 記事のフォーマットは src/content/posts/2024/ 配下や、src/content/posts/2025/ 配下に存在する既存の記事を参考にしてください
- トピックの情報源は、https://zenn.dev/p/cybozu_frontend で公開されている "Cybozu Frontend Weekly" というオンライン記事をまとめたものを利用します
- 例として、src/content/posts/2025/03.md で利用されたオンライン記事の一覧は次のとおりです。内容を参照して参考にしてください。
  - https://zenn.dev/cybozu_frontend/articles/frontend_weekly_20250218
  - https://zenn.dev/cybozu_frontend/articles/frontend_weekly_20250225
  - https://zenn.dev/cybozu_frontend/articles/frontend_weekly_20250304
  - https://zenn.dev/cybozu_frontend/articles/frontend_weekly_20250311
- 今回作成する記事は、次のオンライン記事で紹介されているトピックを参考にしてください
  - {link}
  - {link}
  - {link}
- オンライン記事で紹介されている記事の抜け漏れがないようにしてください
- オンライン記事の内容は Playwright MCP を使って内容を確認してください
- 概要を作成する際に、リンク先のコンテンツの情報が必要な場合も、Playwright MCP を使って内容を確認してください
- 記事内ではトピックごとに1行程度の短い概要が必要ですが、次のルールで作成してください。
  - オンライン記事内で説明文書がある場合は、それを要約してください。
  - オンライン記事内で説明文書がない場合は、トピックのリンク先を参照し、その内容をもとに1行程度に簡潔に要約してください。
- 記事作成を開始する前に、まずは情報を収集し、取り上げるトピックの一覧を作成し、ユーザーに確認をとってください。
--------
