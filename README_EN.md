# ETL.json Educational Theory Database Documentation

[![JSON Validation](https://github.com/nahisaho/EducationTheoryLibrary/workflows/Validate%20JSON%20Files/badge.svg)](https://github.com/nahisaho/EducationTheoryLibrary/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE.txt)
[![Theories Count](https://img.shields.io/badge/Theories-115-blue.svg)](#)
[![Languages](https://img.shields.io/badge/Languages-Japanese%20|%20English-green.svg)](#)
[![DOI](https://img.shields.io/badge/DOI-10.5281%2Fzenodo.XXXXXX-blue.svg)](https://doi.org/10.5281/zenodo.XXXXXX)

> **Note**: Please update the DOI number once obtained from repositories like Zenodo.

## Overview

ETL.json stands for **Educational Theory Library**, a systematically organized database of 115 educational theories. Each theory is recorded as detailed structured data, designed to be utilized by educational practitioners and AI systems.

## Data Structure

### Basic Information Fields

| Field | Description | Example |
|-------|-------------|---------|
| `id` | Unique identifier for the theory | 1, 2, 3... |
| `name_ja` | Japanese name | "構成主義学習理論" |
| `name_en` | English name | "Constructivism Learning Theory" |
| `category` | Theory category | "learning_theories" |
| `theorists` | Proponents/theorists | ["Jean Piaget", "Lev Vygotsky"] |
| `year_proposed` | Year/period proposed | "1896-1980s" |

### Theoretical Content Fields

| Field | Description |
|-------|-------------|
| `core_principles` | Core principles of the theory (array) |
| `key_concepts` | Important concepts and keywords (array) |
| `educational_applications` | Specific application examples in educational settings (array) |

### Practical Insights Fields

| Field | Description |
|-------|-------------|
| `veteran_teacher_insights` | Practical insights from veteran teachers |
| ├─ `practical_tips` | Practical tips and advice |
| ├─ `success_patterns` | Success patterns |
| └─ `common_pitfalls` | Common pitfalls |

### AI Utilization Fields

| Field | Description |
|-------|-------------|
| `ai_prompt_template` | Template for AI instructional program generation |

### Assessment & Application Fields

| Field | Description |
|-------|-------------|
| `effectiveness_indicators` | Effectiveness measurement indicators (short-term, medium-term, long-term) |
| `suitable_contexts` | Applicable educational contexts (array) |
| `grade_levels` | Target grade levels/stages (array) |
| `subjects` | Target subjects/fields (array) |
| `learning_objectives` | Learning objectives (array) |
| `implementation_strategies` | Implementation strategies (array) |
| `related_theories` | Related theory IDs (array) |

## Theory Category Classification

### 1. Learning Theories
- **Constructivism Learning Theory** (id: 1)
- **Social Constructivism Theory** (id: 2)
- **Discovery Learning Theory** (id: 11)
- **Experiential Learning Theory** (id: 6)
- **Behaviorism Learning Theory** (id: 7)

### 2. Cognitive Theories
- **Cognitive Load Theory** (id: 3)
- **Multiple Intelligence Theory** (id: 5)
- **Cognitivism Learning Theory** (id: 8)
- **Meaningful Learning Theory** (id: 12)
- **Information Processing Theory** (id: 14)

### 3. Motivation & Psychological Theories
- **Motivation Theory** (id: 16)
- **Self-Determination Theory** (id: 17)
- **Flow Theory** (id: 20)
- **Resilience Theory** (id: 66)
- **Positive Education Theory** (id: 67)

### 4. Developmental Theories
- **Piaget's Cognitive Development Theory** (id: 21)
- **Vygotsky's Zone of Proximal Development Theory** (id: 22)
- **Erikson's Psychosocial Development Theory** (id: 23)
- **Kohlberg's Moral Development Theory** (id: 24)

### 5. Social Learning Theories
- **Social Learning Theory** (id: 10)
- **Cooperative Learning Theory** (id: 26)
- **Social Emotional Learning Theory** (id: 65)

### 6. Instructional Theories
- **Problem-Based Learning Theory** (id: 27)
- **Project-Based Learning Theory** (id: 28)
- **Inquiry-Based Learning Theory** (id: 29)
- **Direct Instruction Theory** (id: 36)
- **Scaffolding Theory** (id: 37)

### 7. Technology & Digital Theories
- **TPACK Theory** (id: 45)
- **Blended Learning Theory** (id: 46)
- **E-Learning Theory** (id: 47)
- **Adaptive Learning Theory** (id: 48)

### 8. Assessment Theories
- **Formative Assessment Theory** (id: 31)
- **Authentic Assessment Theory** (id: 32)
- **Portfolio Assessment Theory** (id: 33)
- **Criterion-Referenced Assessment Theory** (id: 34)

### 9. Alternative Education Theories
- **Montessori Education Method** (id: 101)
- **Steiner/Waldorf Education Theory** (id: 102)
- **Reggio Emilia Approach** (id: 103)
- **Freinet Education Method** (id: 104)

### 10. International & Multicultural Theories
- **Multicultural Education Theory** (id: 42)
- **International Baccalaureate Education Theory** (id: 111)
- **Immersion Education Theory** (id: 52)

## Distinctive Features

### 1. Visualization of Interconnectedness
The `related_theories` field expresses the network structure between theories

### 2. Accumulation of Practical Insights
Systematizes field teachers' experiential knowledge as `veteran_teacher_insights`

### 3. Promotion of AI Utilization
`ai_prompt_template` supports the generation of educational programs based on each theory

### 4. Multi-layered Assessment System
Enables comprehensive evaluation through short-term, medium-term, and long-term effectiveness indicators

### 5. Flexible Application Design
Responds to diverse educational scenarios through combinations of grade levels, subjects, and contexts

## Potential Applications

### For Educational Practitioners
- Selection of theory-based teaching methods
- Reference to practical advice
- Design of assessment methods

### For Researchers
- Analysis of relationships between theories
- Exploration of new theoretical integrations
- Systematization of effective educational practices

### For AI & Educational Technology Developers
- Design of personalized learning systems
- Development of adaptive educational programs
- Theory-based educational material generation

## Data Reliability

- **Theoretical Foundation**: Each theory is based on established educational theories
- **Practical Validation**: Effectiveness in the field is ensured through veteran teachers' insights
- **Continuous Updates**: Maintains currency through the addition of new theories and practical knowledge

This database aims to contribute to 21st-century educational development as a comprehensive educational resource that bridges theory and practice.

## License

This project is licensed under the MIT License - see the [LICENSE.txt](LICENSE.txt) file for details.

## Contributing

We welcome contributions to expand and improve this educational theory database. Please feel free to submit issues or pull requests.

## Citation

When using this database in academic work, please consider citing both this resource and the original theorists and researchers whose work is represented in this collection.
