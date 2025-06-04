# ETL.json 教育理論データベース説明書

[![JSON Validation](https://github.com/USERNAME/EducationTheoryLibrary/workflows/Validate%20JSON%20Files/badge.svg)](https://github.com/USERNAME/EducationTheoryLibrary/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE.txt)
[![Theories Count](https://img.shields.io/badge/Theories-115-blue.svg)](#)
[![Languages](https://img.shields.io/badge/Languages-Japanese%20|%20English-green.svg)](#)
[![DOI](https://img.shields.io/badge/DOI-10.5281%2Fzenodo.XXXXXX-blue.svg)](https://doi.org/10.5281/zenodo.XXXXXX)

> **注意**: 上記のUSERNAMEをあなたのGitHubユーザー名に、DOIの番号を実際のDOI（取得後）に置き換えてください。

## 概要

ETL.jsonは、**Educational Theory Library（教育理論ライブラリ）** の略称で、115の教育理論を体系的に整理したデータベースです。各理論は詳細な構造化データとして記録され、教育実践者やAIシステムが活用できる形で設計されています。

## データ構造

### 基本情報フィールド

| フィールド | 説明 | 例 |
|-----------|------|-----|
| `id` | 理論の一意識別子 | 1, 2, 3... |
| `name_ja` | 日本語名称 | "構成主義学習理論" |
| `name_en` | 英語名称 | "Constructivism Learning Theory" |
| `category` | 理論カテゴリ | "learning_theories" |
| `theorists` | 提唱者・理論家 | ["Jean Piaget", "Lev Vygotsky"] |
| `year_proposed` | 提唱年代 | "1896-1980s" |

### 理論的内容フィールド

| フィールド | 説明 |
|-----------|------|
| `core_principles` | 理論の核となる原理・原則（配列） |
| `key_concepts` | 重要な概念・キーワード（配列） |
| `educational_applications` | 教育現場での具体的応用例（配列） |

### 実践的洞察フィールド

| フィールド | 説明 |
|-----------|------|
| `veteran_teacher_insights` | ベテラン教師の実践的知見 |
| ├─ `practical_tips` | 実践的なコツ・アドバイス |
| ├─ `success_patterns` | 成功パターン |
| └─ `common_pitfalls` | よくある落とし穴 |

### AI活用フィールド

| フィールド | 説明 |
|-----------|------|
| `ai_prompt_template` | AI指導プログラム生成用テンプレート |

### 評価・適用フィールド

| フィールド | 説明 |
|-----------|------|
| `effectiveness_indicators` | 効果測定指標（短期・中期・長期） |
| `suitable_contexts` | 適用可能な教育文脈（配列） |
| `grade_levels` | 対象学年・段階（配列） |
| `subjects` | 対象教科・分野（配列） |
| `learning_objectives` | 学習目標（配列） |
| `implementation_strategies` | 実装戦略（配列） |
| `related_theories` | 関連理論のID（配列） |

## 理論カテゴリ分類

### 1. 学習理論系 (Learning Theories)
- **構成主義学習理論** (id: 1)
- **社会構成主義理論** (id: 2)
- **発見学習理論** (id: 11)
- **経験学習理論** (id: 6)
- **行動主義学習理論** (id: 7)

### 2. 認知理論系 (Cognitive Theories)
- **認知負荷理論** (id: 3)
- **多重知能理論** (id: 5)
- **認知主義学習理論** (id: 8)
- **有意味学習理論** (id: 12)
- **情報処理理論** (id: 14)

### 3. 動機・心理理論系 (Motivation & Psychological Theories)
- **動機理論** (id: 16)
- **自己決定理論** (id: 17)
- **フロー理論** (id: 20)
- **レジリエンス理論** (id: 66)
- **ポジティブ教育理論** (id: 67)

### 4. 発達理論系 (Developmental Theories)
- **ピアジェの認知発達理論** (id: 21)
- **ヴィゴツキーの最近接発達領域理論** (id: 22)
- **エリクソンの心理社会的発達理論** (id: 23)
- **コールバーグの道徳発達理論** (id: 24)

### 5. 社会学習理論系 (Social Learning Theories)
- **社会学習理論** (id: 10)
- **協同学習理論** (id: 26)
- **社会情動学習理論** (id: 65)

### 6. 指導理論系 (Instructional Theories)
- **問題解決学習理論** (id: 27)
- **プロジェクト学習理論** (id: 28)
- **探究学習理論** (id: 29)
- **直接指導法理論** (id: 36)
- **足場かけ理論** (id: 37)

### 7. 技術・デジタル理論系 (Technology Theories)
- **TPACK理論** (id: 45)
- **ブレンデッドラーニング理論** (id: 46)
- **eラーニング理論** (id: 47)
- **適応学習理論** (id: 48)

### 8. 評価理論系 (Assessment Theories)
- **フォーマティブ・アセスメント理論** (id: 31)
- **真正の評価理論** (id: 32)
- **ポートフォリオ評価理論** (id: 33)
- **基準参照評価理論** (id: 34)

### 9. 代替教育理論系 (Alternative Education Theories)
- **モンテッソーリ教育法** (id: 101)
- **シュタイナー教育理論** (id: 102)
- **レッジョ・エミリア・アプローチ** (id: 103)
- **フレネ教育法** (id: 104)

### 10. 国際・多文化理論系 (International & Multicultural Theories)
- **多文化教育理論** (id: 42)
- **国際バカロレア教育理論** (id: 111)
- **イマージョン教育理論** (id: 52)

## 特徴的な機能

### 1. 相互関連性の可視化
`related_theories`フィールドにより、理論間のネットワーク構造を表現

### 2. 実践的洞察の蓄積
現場教師の経験知を`veteran_teacher_insights`として体系化

### 3. AI活用の促進
`ai_prompt_template`により、各理論に基づいた教育プログラム生成を支援

### 4. 多層的評価システム
短期・中期・長期の効果指標により、包括的な評価を可能にする

### 5. 柔軟な適用設計
学年、教科、文脈の組み合わせにより、多様な教育場面に対応

## 活用可能性

### 教育実践者向け
- 理論に基づいた指導法の選択
- 実践的なアドバイスの参照
- 評価方法の設計

### 研究者向け
- 理論間の関係性分析
- 新しい理論統合の探索
- 効果的な教育実践の体系化

### AI・教育技術開発者向け
- 個別化学習システムの設計
- 適応的教育プログラムの開発
- 理論に基づいた教材生成

## データの信頼性

- **理論的基盤**: 各理論は確立された教育学理論に基づく
- **実践的検証**: ベテラン教師の知見により現場での有効性を担保
- **継続的更新**: 新しい理論や実践知の追加により常に最新性を保持

このデータベースは、理論と実践を橋渡しする包括的な教育リソースとして、21世紀の教育発展に貢献することを目的としています。