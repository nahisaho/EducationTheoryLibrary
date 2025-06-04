# Educational Theory Library - Usage Examples

このディレクトリには、ETL.jsonデータベースの使用例とサンプルコードが含まれています。

## ファイル一覧

- `python_examples.py` - Python での基本的な使用例
- `javascript_examples.js` - JavaScript での使用例
- `ai_prompt_examples.md` - AI活用のプロンプト例
- `research_analysis.py` - 研究・分析用のサンプルコード
- `educational_app_integration.md` - 教育アプリケーションとの統合例

## 基本的な使用方法

### 1. データの読み込み

```python
import json

# 日本語版の読み込み
with open('ETL.json', 'r', encoding='utf-8') as f:
    theories_ja = json.load(f)

# 英語版の読み込み
with open('ETL_EN_Complete.json', 'r', encoding='utf-8') as f:
    theories_en = json.load(f)
```

### 2. 特定の理論の検索

```python
def find_theory_by_name(theories, name):
    for theory in theories['educational_theories']:
        if name.lower() in theory['theory_name'].lower():
            return theory
    return None

# 構成主義理論を検索
constructivism = find_theory_by_name(theories_en, "constructivism")
```

### 3. カテゴリ別の分析

```python
from collections import Counter

# カテゴリ別の理論数を集計
categories = [theory['category'] for theory in theories_en['educational_theories']]
category_counts = Counter(categories)
print(category_counts)
```

## 応用例

### AI教育アシスタント
- 特定の学習目標に適した理論の推薦
- 理論に基づいた学習計画の生成
- 教育方法の個別最適化

### 教育研究
- 理論間の関係性分析
- 年代別の教育理論の発展追跡
- 実践的応用の効果測定

### 教師研修
- 理論的基礎の学習支援
- 実践例の共有とディスカッション
- 授業設計のガイダンス

詳細な実装例については、各サンプルファイルをご参照ください。
