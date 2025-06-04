# Contributing to Educational Theory Library (ETL.json)

Thank you for considering contributing to the ETL.json project! This guide explains how to contribute to the project.

## How to Contribute

### 1. Reporting Issues

Please report the following through GitHub Issues:
- Data errors or inconsistencies discovered
- Proposals for adding new educational theories
- Documentation improvement suggestions
- New feature ideas

### 2. Submitting Pull Requests

#### Preparation
1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature-name`)
3. Make your changes
4. Run tests and data validation
5. Use clear and descriptive commit messages

#### Guidelines for Data Addition/Modification

**Adding New Educational Theories:**
- Ensure the theory is academically recognized
- Check for no duplication with existing theories
- Fill in all required fields
- Add to both Japanese version (ETL.json) and English version (ETL_EN.json)

**Data Modifications:**
- Clearly explain the reason for modification
- Reference reliable academic sources
- Consider impact on related theories

### 3. Data Quality Standards

#### Required Elements
- `id`: Unique integer value
- `theory_name`/`name_ja`, `name_en`: Accurate theory names
- `theorist`: Main proponent(s)
- `key_principles`: 3-5 core principles
- `core_concepts`: 3-5 important concepts
- `educational_applications`: Practical application examples

#### Recommended Elements
- `veteran_teacher_insights`: Practical insights
- `ai_prompt_template`: AI utilization template
- `effectiveness_indicators`: Effectiveness measurement indicators
- `related_theories`: Related theory IDs

### 4. Code Standards

#### JSON Format
- Indentation: 2 spaces
- Character encoding: UTF-8
- No comma after the last element in arrays
- Object keys sorted alphabetically

#### Naming Conventions
- Field names: snake_case
- Theory names: Use official names
- Category names: Consistent naming pattern

### 5. Translation Guidelines

#### Japanese → English
- Prioritize academic accuracy
- Check existing English literature for established terminology
- Use consistent translation for technical terms

#### Quality Check
- Accuracy of meaning
- Grammatical correctness
- Consistency of technical terms

### 6. Review Process

1. **Automated Check**: JSON syntax and schema validation
2. **Content Review**: Academic accuracy and data quality
3. **Language Review**: Translation quality and appropriate expression
4. **Final Approval**: Final confirmation by maintainers

### 7. Code of Conduct

- Constructive and respectful communication
- Welcome diverse perspectives and opinions
- Maintain academic integrity
- Create an inclusive and collaborative environment

### 8. Questions & Support

If you have any questions, please feel free to contact us through:
- Questions in GitHub Discussions
- Technical issue reports in GitHub Issues

## License

Contributed content will be provided under the project's MIT License.

## Acknowledgments

The ETL.json project is supported by all researchers, practitioners, and contributors in the field of education. We sincerely appreciate your contributions.
