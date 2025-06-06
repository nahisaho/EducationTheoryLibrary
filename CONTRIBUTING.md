# Contributing to Educational Theory Library (ETL.json)

ETL.jsonプロジェクトへの貢献をお考えいただき、ありがとうございます！このガイドでは、プロジェクトに貢献する方法について説明します。

## 貢献の方法

### 1. イシューの報告

以下の場合はGitHub Issuesで報告してください：
- データの誤りや不整合を発見した場合
- 新しい教育理論の追加提案
- ドキュメントの改善提案
- 新機能のアイデア

### 2. プルリクエストの提出

#### 事前準備
1. リポジトリをフォークしてください
2. 新しいブランチを作成してください（`git checkout -b feature/your-feature-name`）
3. 変更を行ってください
4. テストとデータ検証を実行してください
5. コミットメッセージは明確で説明的にしてください

#### データ追加・修正のガイドライン

**新しい教育理論の追加：**
- 学術的に認知された理論であることを確認
- 既存の理論との重複がないかチェック
- すべての必須フィールドを記入
- 日本語版（ETL.json）と英語版（ETL_EN_Complete.json）の両方に追加

**データの修正：**
- 修正理由を明確に説明
- 信頼できる学術資料を参照
- 関連する理論への影響を考慮

### 3. データ品質基準

#### 必須要素
- `id`: 一意の整数値
- `theory_name`/`name_ja`, `name_en`: 正確な理論名
- `theorist`: 主要な提唱者
- `key_principles`: 3-5個の核心原理
- `core_concepts`: 3-5個の重要概念
- `educational_applications`: 実践的応用例

#### 推奨要素
- `veteran_teacher_insights`: 実践的な洞察
- `ai_prompt_template`: AI活用テンプレート
- `effectiveness_indicators`: 効果測定指標
- `related_theories`: 関連理論のID

### 4. コード規約

#### JSONフォーマット
- インデント: 2スペース
- 文字エンコーディング: UTF-8
- 配列の最後の要素にカンマを付けない
- オブジェクトのキーはアルファベット順に並べる

#### 命名規則
- フィールド名: snake_case
- 理論名: 正式名称を使用
- カテゴリ名: 一貫した命名パターン

### 5. 翻訳ガイドライン

#### 日本語 → 英語
- 学術的正確性を優先
- 既存の英語文献での表記を確認
- 専門用語は一貫した翻訳を使用

#### 品質チェック
- 意味の正確性
- 文法的正しさ
- 専門用語の統一性

### 6. レビュープロセス

1. **自動チェック**: JSON構文とスキーマ検証
2. **内容レビュー**: 学術的正確性とデータ品質
3. **言語レビュー**: 翻訳品質と表現の適切性
4. **最終承認**: メンテナーによる最終確認

### 7. 行動規範

- 建設的で尊重の念を持ったコミュニケーション
- 多様な視点と意見を歓迎
- 学術的誠実性の維持
- 包摂的で協力的な環境作り

### 8. 質問・サポート

不明な点がございましたら、以下の方法でお気軽にお問い合わせください：
- GitHub Discussionsでの質問
- GitHub Issuesでの技術的な問題報告

## ライセンス

貢献いただいたコンテンツは、プロジェクトのMITライセンスの下で提供されます。

## 謝辞

ETL.jsonプロジェクトは、教育分野のすべての研究者、実践者、貢献者の支援により成り立っています。皆様の貢献に心より感謝いたします。
