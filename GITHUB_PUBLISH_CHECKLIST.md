# GitHub公開前チェックリスト

## 📋 必須項目

### 基本ファイル
- [x] `README.md` - プロジェクト概要と使用方法
- [x] `README_EN.md` - 英語版プロジェクト概要
- [x] `LICENSE.txt` - MITライセンス 
- [x] `CONTRIBUTING.md` - 貢献ガイドライン
- [x] `CODE_OF_CONDUCT.md` - 行動規範
- [x] `SECURITY.md` - セキュリティポリシー
- [x] `CHANGELOG.md` - 変更履歴
- [x] `CITATION.cff` - 学術引用情報

### データファイル
- [x] `ETL.json` - 日本語版教育理論データベース
- [x] `ETL_EN.json` - 英語版教育理論データベース

### GitHubテンプレート
- [x] `.github/ISSUE_TEMPLATE/bug_report.md` - バグレポートテンプレート
- [x] `.github/ISSUE_TEMPLATE/feature_request.md` - 機能リクエストテンプレート
- [x] `.github/ISSUE_TEMPLATE/data_contribution.md` - データ貢献テンプレート
- [x] `.github/pull_request_template.md` - プルリクエストテンプレート

### CI/CD
- [x] `.github/workflows/validate.yml` - JSON検証ワークフロー
- [x] `.github/workflows/release.yml` - リリースワークフロー
- [x] `.gitignore` - Git除外設定

### 使用例とドキュメント
- [x] `examples/README.md` - 使用例の概要
- [x] `examples/python_examples.py` - Python実装例
- [x] `examples/javascript_examples.js` - JavaScript実装例
- [x] `examples/ai_prompt_examples.md` - AI活用例

## 🔧 更新が必要な項目

### URLとリンクの更新
- [ ] `README.md` のバッジURLで `USERNAME` を実際のGitHubユーザー名に変更
- [ ] `README_EN.md` のバッジURLで `USERNAME` を実際のGitHubユーザー名に変更
- [ ] `CITATION.cff` の `repository-code` URLを実際のリポジトリURLに更新
- [ ] `SECURITY.md` の連絡先情報を実際の情報に更新

### DOIとZenodo
- [ ] 学術リポジトリ（Zenodo等）への登録
- [ ] DOI取得後、README ファイルのDOIバッジを更新
- [ ] `CITATION.cff` のDOI情報を更新

## 📊 公開前の最終確認

### データ品質
- [ ] JSON構文の検証実行
- [ ] データ構造の整合性確認
- [ ] 理論数（115個）の確認
- [ ] クロスリファレンスの整合性確認

### ドキュメント
- [ ] 全ドキュメントの日本語・英語版の内容一致確認
- [ ] リンク切れの確認
- [ ] 例示コードの動作確認

### リポジトリ設定
- [ ] リポジトリの説明文設定
- [ ] トピック/タグの設定
- [ ] About セクションの設定（URL、説明、トピック）
- [ ] Discussions 機能の有効化（オプション）
- [ ] Wiki 機能の設定（オプション）

### ライセンスと権利
- [ ] 全理論の引用情報の確認
- [ ] 著作権に関する問題がないことの確認
- [ ] 第三者のコンテンツ使用許可の確認

## 🚀 公開後の初期作業

### バージョンタグ
- [ ] 初期リリース v1.1.0 のGitタグ作成
- [ ] GitHub Releasesでの初回リリース作成

### コミュニティ構築
- [ ] 初期ユーザーへの共有
- [ ] 関連コミュニティでの紹介
- [ ] フィードバック収集の開始

### 継続的な改善
- [ ] Issues への対応プロセス確立
- [ ] 定期的なデータ品質チェック
- [ ] 新理論追加のワークフロー確立

---

**チェック完了日**: ____________
**担当者**: ____________
**確認者**: ____________
